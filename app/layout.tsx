// app/layout.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'

// Importação do componente de Telemetria (GTM)
import { GtmScript } from '@/components/telemetry/GtmScript'

// 🛑 CORREÇÃO SÊNIOR para VARIÁVEIS DE AMBIENTE (Server Side)

// 1. Leitura do AdSense ID (corrigida anteriormente com condicional no metadata)
const ADSENSE_PUB_ID = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID || ''; 

// 2. Leitura do GTM ID (Nova Leitura no Server Component, para ser passado como prop)
// Usamos ' || null ' para ter a tipagem correta no GtmScript.
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || null;

const inter = Inter({ subsets: ['latin'] })

// Reutilização de estilos do Tailwind CSS
const headerStyle = "bg-white shadow-md";
const linkStyle = "text-xl font-bold text-gray-800 hover:text-blue-700 transition duration-150";
const footerTextStyle = "text-sm text-gray-500 sm:text-center";
const footerLinkStyle = "me-4 hover:underline md:me-6";


// 🛑 METADADOS: Estrutura condicional (mantida para evitar quebra no Adsense ID vazio)
const baseMetadata: Metadata = {
  title: 'Ação Leve - Portal de Micro-SaaS',
  description: 'Coleção de ferramentas simples e leves para produtividade digital.',
  metadataBase: new URL('https://acaoleve.com'),
};

export const metadata: Metadata = {
  ...baseMetadata,
  ...(ADSENSE_PUB_ID && {
    other: {
      'google-adsense-account': ADSENSE_PUB_ID,
    },
  }),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      
      {/* 🏆 CORREÇÃO DE INJEÇÃO GTM: Passa o GTM_ID lido no Server Component como prop. 
          Isso garante que o Client Component (GtmScript) receba o valor e pare de falhar no build. */}
      <GtmScript gtmId={GTM_ID} />

      <body className={inter.className}>
        
        {/* HEADER */}
        <header className={headerStyle}>
          <div className="max-w-7xl mx-auto p-4">
              <Link href="/" className={linkStyle}>
                  Ação Leve Portal
              </Link>
          </div>
        </header>
        
        {/* MAIN CONTENT */}
        <main className="min-h-screen container mx-auto p-8">
            {children}
        </main>
        
        {/* FOOTER */}
        <footer className="w-full bg-gray-50 border-t">
            <div className="max-w-7xl mx-auto p-6 md:flex md:items-center md:justify-between">
              <span className={footerTextStyle}>
                  © {new Date().getFullYear()} Ação Leve. Todos os direitos reservados.
              </span>
              <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                  <Link href="/politica-de-privacidade" className={footerLinkStyle}>
                      Política de Privacidade
                  </Link>
                  <Link href="/termos-de-uso" className={footerLinkStyle}>
                      Termos de Uso
                  </Link>
                  <Link href="/contato" className="hover:underline">
                      Contato
                  </Link>
              </div>
            </div>
        </footer>
      </body>
    </html>
  )
}