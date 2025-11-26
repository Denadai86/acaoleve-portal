// components/telemetry/GtmScript.tsx

'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// O ID do GTM deve vir das variáveis de ambiente
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Tipagem básica para garantir o GTM ID
if (!GTM_ID) {
  // eslint-disable-next-line no-console
  console.error('NEXT_PUBLIC_GTM_ID não está definido. O rastreamento está desativado.');
}

/**
 * Função para inicializar o GTM (DataLayer)
 * Esta função é importante para garantir que o GTM funcione corretamente.
 */
function GtmInitialisation() {
  return (
    <Script
      id="gtm-initialisation"
      strategy="beforeInteractive" // Prioridade alta, antes do React carregar
      dangerouslySetInnerHTML={{
        __html: `
        if (window.dataLayer) {
          console.log('dataLayer já existe, evitando sobrescrita.');
        } else {
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
        }
        `,
      }}
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
    if (GTM_ID && process.env.NODE_ENV === 'production') {
      const url = pathname + searchParams.toString();
      // Dispara um evento de pageview para o GTM em cada mudança de rota no lado do cliente
      window.dataLayer.push({
        event: 'page_view',
        page: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
};

/**
 * Componente principal do GTM (para ser injetado no layout)
 * Inclui o script de head e o iframe (noscript) para conformidade.
 */
export function GtmScript() {
  // Apenas carrega o script em produção E se o ID estiver definido
  if (process.env.NODE_ENV !== 'production' || !GTM_ID) {
    return null;
  }

  return (
    <>
      <GtmInitialisation />
      <GtmPageviewTracker />

      {/* NO-SCRIPT: Este é o iframe que deve vir logo após o <body>.
          No Next.js, a forma mais limpa é injetá-lo no layout principal. */}
      {/* ATENÇÃO: Se usar o Next.js 14+ com App Router, o GTM não deve
          estar dentro do seu root <Body> componente. Ele é injetado
          diretamente no layout. */}
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