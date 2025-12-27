import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 dias
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.id = profile.sub;
        token.name = profile.name;
        token.email = profile.email;
        token.picture = (profile as any).picture;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // Blindagem de Tipos: Garante string ou string vazia para evitar erro de build
        // @ts-ignore
        session.user.id = (token.id as string) || (token.sub as string) || "";
        session.user.name = token.name || "";
        session.user.email = token.email || "";
        session.user.image = (token.picture as string) || "";
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Permite redirecionamentos relativos
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Permite redirecionamentos para a mesma origem
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax", // Essencial para o login funcionar bem no Mobile
        path: "/",
        secure: true,
      },
    },
  },
  // REMOVIDO: trustHost (Não existe na tipagem do v4, usamos NEXTAUTH_URL no .env)
};