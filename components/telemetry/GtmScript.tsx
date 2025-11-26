// components/telemetry/GtmScript.tsx

'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
// 🛑 IMPORTAÇÃO NECESSÁRIA: Importamos Suspense para evitar o erro de prerendering
import { useEffect, Suspense } from 'react'; 

// O GTM_ID é lido aqui. Se não estiver na variável de ambiente, será null.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || null;

/**
 * Interface que garante a tipagem correta do DataLayer.
 */
interface GtmPushData {
  event: string;
  page: string;
  [key: string]: any; 
}

// --- Componentes Internos ---

/**
 * 1. Função para inicializar o GTM (Injeta a tag <script> no <head> com prioridade alta)
 */
function GtmInitialisation() {
  if (!GTM_ID) return null;

  // Usa o componente Script do Next.js, que gerencia o carregamento de terceiros
  return (
    <Script
      id="googletagmanager"
      strategy="beforeInteractive" // Garante que o script carregue antes da interação
      src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
    />
  );
}

/**
 * 2. Componente que lida com o rastreamento de rota (Usa APIs Client-Side)
 */
const GtmPageviewTracker = () => {
  // Chamadas Client-Side que disparam o erro de Suspense se não forem isoladas
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 🛑 EXECUÇÃO SÊNIOR: Verifica se está no cliente e se o ID existe
    if (GTM_ID && typeof window !== 'undefined') {
      const url = pathname + searchParams.toString();
      
      // Checa se o dataLayer foi inicializado pelo script principal
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

// --- Componente Principal ---

/**
 * Componente principal do GTM (para ser injetado no layout)
 */
export function GtmScript() {
  // Desativa tudo se o ID estiver faltando (previne log de erro em produção)
  if (!GTM_ID) {
    if (process.env.NODE_ENV === 'development') {
        console.warn('GTM_ID ausente. O rastreamento está desativado.');
    }
    return <></>; 
  }

  // Se o ID existir, renderizamos
  return (
    <>
      <GtmInitialisation />
      
      {/* 🏆 CORREÇÃO DE SUSPENSE: Envolvemos o Pageview Tracker.
          Isso resolve o erro de prerendering, pois o Next.js agora espera 
          o cliente renderizar o componente que usa useSearchParams(). */}
      <Suspense fallback={null}> 
        <GtmPageviewTracker />
      </Suspense>

      {/* NO-SCRIPT: Iframe para usuários sem JS. */}
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