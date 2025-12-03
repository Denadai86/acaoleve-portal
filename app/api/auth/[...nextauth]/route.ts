import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],

  session: {
    strategy: "jwt", // sem banco = sessão JWT
  },

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
      const t = token as any; // <- CAST SEGURO E LOCAL

      if (session.user) {
        session.user.id = t.id || t.sub || "";
        session.user.name = t.name || "";
        session.user.email = t.email || "";
        session.user.image = t.picture || null;
      }

      return session;
    }

  }
})

export { handler as GET, handler as POST }
