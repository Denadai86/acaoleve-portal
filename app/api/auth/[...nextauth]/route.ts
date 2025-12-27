import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Configuração extraída para permitir tipagem e organização
export const authOptions: AuthOptions = {
  // 1. Providers
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

  // 2. Segurança e Sessão
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 dias
  },
  secret: process.env.NEXTAUTH_SECRET, // Obrigatório em produção
  
  // CRÍTICO PARA VERCEL: Confia no host, pois estamos atrás de um proxy
  trustHost: true, 

  // 3. Callbacks Reforçados
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
        // @ts-ignore - Cast seguro para passar ID
        session.user.id = token.id as string;
        session.user.name = token.name as string | null;
        session.user.email = token.email as string | null;
        session.user.image = token.picture as string | null;
      }
      return session;
    },

    // 4. A Correção do Redirecionamento (O Pulo do Gato)
    // Garante que o usuário sempre volte para a URL base correta, evitando erros em mobile
    async redirect({ url, baseUrl }) {
      // Permite redirecionamentos relativos (ex: /dashboard)
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Permite redirecionamentos para o mesmo domínio
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },

  // 5. Configuração de Cookies para iOS/Safari e Mobile
  // Isso resolve o problema de "loga mas não mantém logado" no iPhone
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax", // 'lax' é melhor que 'strict' para login social
        path: "/",
        secure: true, // Força HTTPS
      },
    },
  },

  // Debug apenas em desenvolvimento
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };