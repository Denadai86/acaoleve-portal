export { auth as proxy } from "@/lib/auth"

export const config = {
  matcher: ["/dashboard/:path*"], // Adicione as rotas que quer proteger
}
