'use client';

import { useEffect, useRef, useState } from 'react';

type AdUnitProps = {
  slotId: string; // O ID do bloco de anúncio que você cria no painel do AdSense
  format?: 'auto' | 'fluid' | 'rectangle';
  layoutKey?: string; // Para In-feed ads
  className?: string;
};

export function AdUnit({ slotId, format = 'auto', layoutKey, className = '' }: AdUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    try {
      // Verifica se o script do AdSense já carregou no layout
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        (window as any).adsbygoogle.push({});
        setAdLoaded(true);
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  // Em desenvolvimento, mostramos um placeholder para você ver onde o anúncio ficaria
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className={`bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 font-mono text-xs p-4 rounded-lg my-6 ${className}`} style={{ minHeight: '280px' }}>
        Anúncio AdSense (Slot: {slotId})
      </div>
    );
  }

  return (
    <div className={`overflow-hidden my-8 flex justify-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_PUB_ID}
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
        {...(layoutKey && { 'data-ad-layout-key': layoutKey })}
      />
    </div>
  );
}