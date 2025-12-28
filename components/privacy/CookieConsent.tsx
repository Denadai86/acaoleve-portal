//src/components/privacy/CookieConsent.tsx

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Verifica se já aceitou
    const consent = localStorage.getItem('acaoleve_cookie_consent');
    if (!consent) {
      // Delay pequeno para não assustar o usuário assim que entra
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('acaoleve_cookie_consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-600 text-sm md:text-base text-center md:text-left">
          <p>
            Nós usamos cookies para melhorar sua experiência e analisar o tráfego. 
            Ao continuar navegando, você concorda com nossa{' '}
            <Link href="/politica-de-privacidade" className="text-orange-600 hover:underline font-medium">
              Política de Privacidade
            </Link>.
          </p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={acceptCookies}
            className="px-6 py-2 bg-gray-900 text-white rounded-full font-bold text-sm hover:bg-gray-800 transition shadow-lg"
          >
            Aceitar e Fechar
          </button>
        </div>
      </div>
    </div>
  );
}