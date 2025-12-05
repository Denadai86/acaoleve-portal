// components/Header.tsx (REFATORADO COM EFEITO RETRÁTIL)

"use client";

import { useState, useEffect } from 'react'; // ⚡ Importação de estado e efeito
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { UserMenu } from "@/components/auth/UserMenu";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  // ⚡ Estado para monitorar a rolagem
  const [isScrolled, setIsScrolled] = useState(false);

  // ⚡ Efeito para monitorar o scroll
  useEffect(() => {
    const handleScroll = () => {
      // Define isScrolled como true se o scrollY for maior que 30px (threshold baixo para ser responsivo)
      const scrolled = window.scrollY > 30;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  // ⚡ 1. Classes Dinâmicas do Header Wrapper
  // py-3 (original) vs py-0.5 (encolhido)
  const headerClasses = `
    bg-white/90 backdrop-blur sticky top-0 z-40 border-b border-gray-100 
    transition-all duration-300 ease-in-out
    ${isScrolled ? 'py-0.5 shadow-lg' : 'py-3 shadow-sm'} 
  `;
  
  // ⚡ 2. Tamanho Dinâmico do Logo (36px vs 30px)
  const logoSize = isScrolled ? 22 : 36; 

  return (
    <header className={headerClasses}> {/* Aplica as classes dinâmicas */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
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
              // ⚡ Tamanho dinâmico
              width={logoSize}
              height={logoSize}
              alt="Logo Ação Leve"
              loading="lazy"
              decoding="async"
              // ⚡ Adiciona transição para o efeito de encolhimento
              className="rounded-xl object-contain transition-all duration-300 ease-in-out group-hover:scale-105"
              sizes="(max-width: 768px) 30px, 36px"
            />

            <span className={`
                text-xl font-semibold text-gray-800 group-hover:text-primary transition-all duration-300 ease-in-out 
                hidden sm:inline
                ${isScrolled ? 'text-base' : 'text-xl'} {/* ⚡ Diminui a fonte */}
            `}>
              Ação Leve
            </span>
          </Link>
        </div>

        {/* DIREITA */}
        {/* ⚡ AJUSTE AQUI: Passando o estado isScrolled para o UserMenu */}
        <UserMenu isScrolled={isScrolled} />
      </div>
    </header>
  );
}