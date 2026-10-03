// components/Header.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { UserMenu } from '@/components/auth/UserMenu';
import { cn } from '@/lib/utils';

const NAV = [
  { href: '/#ferramentas', label: 'Ferramentas', highlight: false },
  { href: '/servicos', label: 'Serviços', highlight: true },
  { href: '/sobre', label: 'Sobre', highlight: false },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClass = (item: (typeof NAV)[number]) =>
    cn(
      'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
      item.highlight
        ? 'text-brand hover:text-brand-hover'
        : pathname === item.href
          ? 'text-foreground'
          : 'text-muted-foreground hover:text-foreground',
    );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        isScrolled || open
          ? 'border-border bg-background/90 py-2.5 backdrop-blur-xl'
          : 'border-transparent bg-transparent py-4',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span
            className={cn(
              'relative overflow-hidden rounded-xl transition-all duration-300',
              isScrolled ? 'size-7' : 'size-9',
            )}
          >
            <Image
              src="/logo-acaoleve.png"
              fill
              alt="Logo Ação Leve"
              sizes="36px"
              className="object-contain transition-transform duration-200 group-hover:scale-110"
            />
          </span>
          <span className="font-display text-lg font-bold">Ação Leve</span>
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <UserMenu isScrolled={isScrolled} />
          <button
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Principal (mobile)"
          className="mx-auto mt-3 flex max-w-7xl flex-col gap-1 px-6 pb-3 md:hidden"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(item)}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
