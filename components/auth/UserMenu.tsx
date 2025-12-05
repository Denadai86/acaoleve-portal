// components/auth/UserMenu.tsx
'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { LogIn, LogOut } from 'lucide-react'; // Ícones para o botão

// ⚡ 1. Definindo as propriedades (isScrolled)
interface UserMenuProps {
    isScrolled?: boolean; // Propriedade opcional por segurança
}

// ⚡ 2. Recebendo a propriedade
export function UserMenu({ isScrolled = false }: UserMenuProps) {
  const { data: session, status } = useSession();
  
  // Tamanhos: 40px (original) no normal, 28px no scroll (o mesmo usado no Header)
  const avatarSize = isScrolled ? 28 : 40; 

  if (status === "loading") {
    // Mantido o placeholder de carregamento
    return <span className="text-gray-500 text-sm">Carregando...</span>;
  }

  if (!session) {
    return (
      <button
        onClick={() =>
          signIn("google", {
            prompt: "select_account",
          })
        }
        className="
          flex items-center gap-2 
          px-4 py-2 
          bg-red-600
          hover:bg-red-700
          rounded-full 
          shadow-md 
          transition 
          text-white
          font-semibold
          text-sm
        "
      >
        <LogIn size={16} />
        <span>Entrar</span>
      </button>

      // ⚠️ Observação: Removi o SVG do Google para manter o componente limpo. 
      // Se você quer o ícone do Google, adicione-o separadamente ao lado do texto.
    );
  }

  return (
    <div className="flex items-center gap-3 transition-all duration-300">
      <Image
        src={session.user?.image || '/avatar-default.png'}
        alt={`Avatar de ${session.user?.name || 'usuário'}`}
        // ⚡ Aplicando o redimensionamento dinâmico
        width={avatarSize}
        height={avatarSize}
        className="rounded-full transition-all duration-300 ring-2 ring-red-500/50"
      />

      {/* Opcional: Esconder o nome no scroll para economizar espaço */}
      <span className={`
          text-gray-700 transition-opacity duration-300 
          ${isScrolled ? 'hidden sm:inline text-sm' : 'inline text-base'}
      `}>
        {session.user?.name}
      </span>

      <button
        onClick={() => signOut()}
        className="text-red-600 font-semibold text-sm hover:underline flex items-center gap-1"
      >
        <LogOut size={16} />
        Sair
      </button>
    </div>
  );
}