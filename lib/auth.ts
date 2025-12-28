import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
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
  secret: process.env.AUTH_SECRET, // Note o nome novo (ou use process.env.NEXTAUTH_SECRET como fallback)
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.id = profile.sub
        token.name = profile.name
        token.email = profile.email
        token.picture = (profile as any).picture
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        // @ts-ignore
        session.user.id = (token.id as string) || (token.sub as string) || "";
        session.user.name = token.name || "";
        session.user.email = token.email || "";
        session.user.image = (token.picture as string) || "";
      }
      return session
    },
    authorized({ auth }) {
      return !!auth?.user // Middleware: Retorna true se logado
    },
  },
  pages: {
    signIn: '/api/auth/signin', // Opcional, o v5 tem páginas padrão bonitas
  },
})