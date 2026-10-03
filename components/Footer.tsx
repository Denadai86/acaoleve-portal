// components/Footer.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const linkClass =
  'inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-brand';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-14">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-acaoleve.png"
                width={32}
                height={32}
                alt="Logo Ação Leve"
                className="rounded-xl"
              />
              <span className="font-display text-xl font-bold">Ação Leve</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Micro-SaaS que resolvem desafios reais do Brasil.
            </p>
          </div>

          <FooterColumn title="Explorar">
            <li><Link href="/#ferramentas" className={linkClass}>Todas as ferramentas</Link></li>
            <li><Link href="/servicos" className={linkClass}>Serviços</Link></li>
            <li><Link href="/sobre" className={linkClass}>Sobre</Link></li>
            <li>
              <Link href="https://x.com/AcaoLeve" target="_blank" rel="noopener" className={linkClass}>
                <FaXTwitter size={13} aria-hidden />
                Build in Public
              </Link>
            </li>
          </FooterColumn>

          <FooterColumn title="Legal">
            <li><Link href="/termos-de-uso" className={linkClass}>Termos de Uso</Link></li>
            <li><Link href="/politica-de-privacidade" className={linkClass}>Política de Privacidade</Link></li>
            <li><Link href="/politica-de-cookies" className={linkClass}>Política de Cookies</Link></li>
            <li>
              <button
                type="button"
                className={`${linkClass} text-left`}
                onClick={() => {
                  localStorage.removeItem('acaoleve_cookie_consent');
                  window.location.reload();
                }}
              >
                Preferências de Cookies
              </button>
            </li>
          </FooterColumn>

          <FooterColumn title="Suporte">
            <li><Link href="/contato" className={linkClass}>Central de Ajuda</Link></li>
            <li>
              <Link href="mailto:contato@acaoleve.com" className={linkClass}>
                <Mail size={13} aria-hidden />
                contato@acaoleve.com
              </Link>
            </li>
          </FooterColumn>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {currentYear} Ação Leve. Todos os direitos reservados.</p>
          <p>Feito no Brasil 🇧🇷</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold">{title}</h3>
      <ul className="space-y-3 text-sm">{children}</ul>
    </div>
  );
}