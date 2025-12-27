import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Importa do arquivo que criamos acima

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };