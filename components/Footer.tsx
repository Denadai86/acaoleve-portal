"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Twitter, Mail } from "lucide-react";

export default function Footer() {
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
  const handle = () => {
    const total = document.documentElement.scrollHeight;
    const vh = window.innerHeight;

    if (total <= vh * 1.5) {
      setIsNearBottom(true);
      return;
    }

    const ratio = window.innerWidth < 768 ? 0.78 : 0.88;
    const threshold = total * (1 - ratio);

    const near = vh + window.scrollY >= total - threshold;
    setIsNearBottom(near);
  };

  handle();
  window.addEventListener("scroll", handle, { passive: true });
  window.addEventListener("resize", handle);

  return () => {
    window.removeEventListener("scroll", handle);
    window.removeEventListener("resize", handle);
  };
}, []);

  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 border-t bg-white/90 backdrop-blur-lg transition-all duration-500 ease-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Altura dinâmica por breakpoint */}
        <div
          className={`
            py-2
            ${isNearBottom ? "md:py-10 sm:py-6" : "md:py-2 sm:py-2"}
            transition-all duration-500
          `}
        >
          {/* CTA expansivo — só aparece no final */}
          {isNearBottom && (
            <div className="text-center mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                Pronto para a Ação Leve?
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 hidden sm:block">
                Siga a jornada #BuildInPublic e veja tudo sendo construído do zero
              </p>
              <div className="flex justify-center gap-6">
                <Link
                  href="https://x.com/AcaoLeve"
                  target="_blank"
                  className="text-gray-600 hover:text-red-500 transition"
                >
                  <Twitter size={22} className="sm:size-26" />
                </Link>
                <Link
                  href="mailto:contato@acaoleve.com"
                  className="text-gray-600 hover:text-red-500 transition"
                >
                  <Mail size={22} className="sm:size-26" />
                </Link>
              </div>
            </div>
          )}

          {/* Linha base sempre visível — super compacta */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <Image
                src="/logo-acaoleve.png"
                width={18}
                height={18}
                alt="Ação Leve"
                className="rounded"
              />
              <span>© {new Date().getFullYear()} Ação Leve</span>
            </div>

            <div className="flex gap-4">
              <Link href="/politica-de-privacidade" className="hover:text-gray-900 transition">
                Política
              </Link>
              <Link href="/termos-de-uso" className="hover:text-gray-900 transition">
                Termos
              </Link>
              <Link href="/contato" className="hover:text-gray-900 transition">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}