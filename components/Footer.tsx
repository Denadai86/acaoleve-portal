//src/components/Footer.tsx

'use client';

import Link from "next/link";
import Image from "next/image";
import { Twitter, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* COLUNA 1: Marca e Missão */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo-acaoleve.png"
              width={32}
              height={32}
              alt="Logo Ação Leve"
              className="rounded-lg"
            />
            <span className="font-black text-xl text-gray-900">Ação Leve</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Estúdio de Micro-SaaS focado em simplicidade. Criamos ferramentas que respeitam seu tempo e seus dados.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <MapPin size={14} />
            <span>Brasil 🇧🇷</span>
          </div>
        </div>

        {/* COLUNA 2: Navegação */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Explorar</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-orange-600 transition-colors">
                Catálogo de Ferramentas
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-orange-600 transition-colors">
                Sobre a Equipe
              </Link>
            </li>
            <li>
              <Link href="https://x.com/AcaoLeve" target="_blank" className="hover:text-orange-600 transition-colors flex items-center gap-2">
                <Twitter size={14} />
                <span>Build in Public</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUNA 3: Legal (CRUCIAL PARA ADSENSE) */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Legal</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <Link href="/politica-de-privacidade" className="hover:text-orange-600 transition-colors">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos-de-uso" className="hover:text-orange-600 transition-colors">
                Termos de Uso
              </Link>
            </li>
            <li>
              <button className="hover:text-orange-600 transition-colors text-left" onClick={() => {
                // Lógica para reabrir banner de cookies se necessário (opcional)
                localStorage.removeItem('acaoleve_cookie_consent');
                window.location.reload();
              }}>
                Preferências de Cookies
              </button>
            </li>
          </ul>
        </div>

        {/* COLUNA 4: Contato */}
        <div>
          <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Suporte</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>
              <Link href="/contato" className="hover:text-orange-600 transition-colors">
                Central de Ajuda
              </Link>
            </li>
            <li>
              <Link href="mailto:contato@acaoleve.com" className="hover:text-orange-600 transition-colors flex items-center gap-2">
                <Mail size={14} />
                <span>contato@acaoleve.com</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* RODAPÉ DO RODAPÉ */}
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>© {currentYear} Ação Leve. Todos os direitos reservados.</p>
        <p>Desenvolvido com Next.js & Vercel</p>
      </div>
    </footer>
  );
}