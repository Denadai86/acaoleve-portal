// components/auth/UserMenu.tsx
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { LogOut } from 'lucide-react';

interface UserMenuProps {
  isScrolled?: boolean;
}

export function UserMenu({ isScrolled = false }: UserMenuProps) {
  const { data: session, status } = useSession();
  const avatarSize = isScrolled ? 28 : 36;

  if (status === 'loading') {
    // placeholder neutro, sem texto "Carregando..."
    return <span aria-hidden className="h-9 w-20 animate-pulse rounded-full bg-elevated" />;
  }

  if (!session) {
    return (
      <button
        type="button"
        onClick={() => signIn('google', { prompt: 'select_account', callbackUrl: '/' })}
        className="rounded-full border border-border px-4 py-1.5 text-sm font-semibold transition hover:border-brand/50 hover:text-brand"
      >
        Entrar
      </button>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Image
        src={session.user?.image || '/avatar-default.png'}
        alt={`Avatar de ${session.user?.name || 'usuário'}`}
        width={avatarSize}
        height={avatarSize}
        className="rounded-full ring-2 ring-brand/40 transition-all duration-300"
      />
      <span className="hidden max-w-32 truncate text-sm text-muted-foreground lg:inline">
        {session.user?.name}
      </span>
      <button
        type="button"
        onClick={() => signOut({ callbackUrl: '/' })}
        aria-label="Sair"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
      >
        <LogOut size={16} aria-hidden />
        <span className="hidden sm:inline">Sair</span>
      </button>
    </div>
  );
}