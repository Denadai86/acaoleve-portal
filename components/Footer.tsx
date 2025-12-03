import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-3">
          <Image
            src="/logo-acaoleve.png"
            width={32}
            height={32}
            alt="Logo Ação Leve"
            className="rounded-md"
          />
          <span className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Ação Leve — Micro SaaS Portal
          </span>
        </div>

        <div className="flex gap-6 text-sm text-gray-500 font-medium">
          <Link href="/politica-de-privacidade" className="hover:underline">
            Política de Privacidade
          </Link>
          <Link href="/termos-de-uso" className="hover:underline">
            Termos de Uso
          </Link>
          <Link href="/contato" className="hover:underline">
            Contato
          </Link>
        </div>

      </div>
    </footer>
  );
}
