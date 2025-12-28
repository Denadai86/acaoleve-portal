'use client';

import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';

export function AutoLoginTrigger() {
  const { status } = useSession();

  useEffect(() => {
    // 1. Só rodamos se não estivermos autenticados e nem carregando
    if (status === 'loading' || status === 'authenticated') return;

    // 2. Verificamos se é a primeira vez (usando localStorage)
    const hasVisited = localStorage.getItem('acaoleve_has_visited');

    if (!hasVisited) {
      // 3. Marcamos que já visitou para não rodar na próxima vez (F5)
      localStorage.setItem('acaoleve_has_visited', 'true');

      // 4. Disparamos o login (Redirecionamento, pois popup automático seria bloqueado)
      // callbackUrl: '/' garante que ele volta para a home depois
      signIn('google', { callbackUrl: '/' }); 
    }
  }, [status]);

  // Este componente não renderiza nada visualmente
  return null;
}