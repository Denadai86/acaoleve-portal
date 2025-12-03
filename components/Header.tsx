"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { UserMenu } from "@/components/auth/UserMenu";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-40 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* ESQUERDA */}
        <div className="flex items-center gap-4">

          {!isHome && (
            <a
              href="https://www.acaoleve.com"
              className="flex items-center gap-1 text-primary hover:text-blue-700 text-sm font-medium transition"
            >
              <ArrowLeft size={16} />
              Voltar
            </a>
          )}

          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo-acaoleve.png"
              width={36}
              height={36}
              alt="Logo Ação Leve"
              className="rounded-xl object-contain group-hover:scale-105 transition"
            />

            <span className="text-xl font-semibold text-gray-800 group-hover:text-primary transition">
              Ação Leve Portal
            </span>
          </Link>
        </div>

        {/* DIREITA */}
        <UserMenu />
      </div>
    </header>
  );
}
