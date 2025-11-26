// components/telemetry/GtmScript.tsx

'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react'; 

// 🛑 REMOVER A LEITURA DO PROCESS.ENV AQUI
// const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || null;

/**
 * Interface que garante a tipagem correta do DataLayer.
 */
interface GtmPushData {
  event: string;
  page: string;
  [key: string]: any; 
}

// --- Componentes Internos (Adaptados para receber GTM_ID) ---

// 1. GtmInitialisation agora recebe o ID
function GtmInitialisation({ gtmId }: { gtmId: string }) {
  // Não precisamos mais do check de null, pois o componente principal fará isso.
  return (
    <Script
      id="googletagmanager"
      strategy="beforeInteractive" 
      src={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`} // Usar gtmId
    />
  );
}

// 2. GtmPageviewTracker agora recebe o ID
const GtmPageviewTracker = ({ gtmId }: { gtmId: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 🛑 EXECUÇÃO SÊNIOR: Verifica se está no cliente
    if (typeof window !== 'undefined') {
      const url = pathname + searchParams.toString();
      
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

// --- Componente Principal (Adaptado para receber GTM_ID) ---

// GtmScript agora recebe o ID como prop
export function GtmScript({ gtmId }: { gtmId: string | null }) {
  // Desativa tudo se o ID estiver faltando
  if (!gtmId) {
    if (process.env.NODE_ENV === 'development') {
        console.warn('GTM_ID ausente. O rastreamento está desativado.');
    }
    return <></>; 
  }

  // Se o ID existir, renderizamos
  return (
    <>
      <GtmInitialisation gtmId={gtmId} />
      
      <Suspense fallback={null}> 
        <GtmPageviewTracker gtmId={gtmId} />
      </Suspense>

      {/* NO-SCRIPT: Iframe para usuários sem JS. */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} // Usar gtmId
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}