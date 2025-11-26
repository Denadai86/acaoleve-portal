// components/telemetry/GtmScript.tsx

'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// O GTM_ID é lido aqui. Como a Vercel garante que ele exista, não precisamos de || null,
// mas para robustez, vamos mantê-lo.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || null;

/**
 * Interface que garante a tipagem correta do DataLayer (usando a declaração global em types/gtm.d.ts).
 */
interface GtmPushData {
  event: string;
  page: string;
  [key: string]: any; 
}

/**
 * Componente que injeta o script principal do GTM (DataLayer) no <head>
 */
function GtmInitialisation() {
  // Se o ID não existir, não renderiza o Script
  if (!GTM_ID) return null;

  // 🛑 CORREÇÃO DE INJEÇÃO: Usar um <Script> simples para injetar a tag do GTM.
  // Isso é mais limpo e confiável do que o dangerouslySetInnerHTML para a tag padrão.
  // A estratégia 'beforeInteractive' é correta.
  return (
    <Script
      id="googletagmanager"
      strategy="beforeInteractive" 
      src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
    />
  );
}

/**
 * Componente que lida com o rastreamento de rota
 */
const GtmPageviewTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Apenas dispara se o GTM_ID estiver presente e estivermos no navegador
    // O typeof window !== 'undefined' garante que este código só rode no lado do cliente.
    if (GTM_ID && typeof window !== 'undefined') {
      const url = pathname + searchParams.toString();
      
      // Checa se o dataLayer foi inicializado (deve ser true se GtmInitialisation rodou)
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'page_view',
          page: url,
        } as GtmPushData);
      }
    }
  }, [pathname, searchParams]);

  return null;
};

/**
 * Componente principal do GTM (para ser injetado no layout)
 */
export function GtmScript() {
  // Apenas carrega o script se o ID estiver definido
  if (!GTM_ID) {
    if (process.env.NODE_ENV === 'development') {
        console.warn('GTM_ID ausente. O rastreamento está desativado.');
    }
    // Retorna um fragmento vazio (sem <noscript>), para garantir que o componente
    // seja processado e não cause erros.
    return <></>; 
  }

  // Se o ID existir, renderizamos
  return (
    <>
      <GtmInitialisation />
      <GtmPageviewTracker />

      {/* NO-SCRIPT: Este iframe é o que precisa ser injetado *logo após* o <body> (que é o que acontece aqui) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}