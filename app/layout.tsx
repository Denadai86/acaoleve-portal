// app/layout.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'

// Importação do componente de Telemetria (GTM)
import { GtmScript } from '@/components/telemetry/GtmScript'

// 🛑 CORREÇÃO SÊNIOR PARA BUILD/SSR: 
// Usamos ' || "" ' (string vazia) para garantir que a variável NUNCA seja undefined,
// prevenindo quebras de build. O valor real virá do Vercel.
const ADSENSE_PUB_ID = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID || ''; 

const inter = Inter({ subsets: ['latin'] })

// Reutilização de estilos do Tailwind CSS
const headerStyle = "bg-white shadow-md";
const linkStyle = "text-xl font-bold text-gray-800 hover:text-blue-700 transition duration-150";
const footerTextStyle = "text-sm text-gray-500 sm:text-center";
const footerLinkStyle = "me-4 hover:underline md:me-6";


// 🛑 CORREÇÃO DE METADADOS: Estrutura condicional para prevenir quebras de prerendering
const baseMetadata: Metadata = {
  title: 'Ação Leve - Portal de Micro-SaaS',
  description: 'Coleção de ferramentas simples e leves para produtividade digital.',
  metadataBase: new URL('https://acaoleve.com'),
};

export const metadata: Metadata = {
  ...baseMetadata,
  // Adiciona a propriedade 'other' SOMENTE se o ADSENSE_PUB_ID for uma string válida (não vazia).
  // Isso impede que o Next.js tente construir a chave 'google-adsense-account' com um valor vazio durante o build.
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
      
      {/* GTM Script Injetado: Ele lida com o carregamento do código JS/noscript no <head> e <body>. */}
      <GtmScript />

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