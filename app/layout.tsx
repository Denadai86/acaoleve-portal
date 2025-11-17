// /app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

// Seu ID de Publicador AdSense
const ADSENSE_PUB_ID = 'ca-pub-9532990788495378'; 

export const metadata: Metadata = {
  title: 'Ação Leve - Portal de Micro-SaaS',
  description: 'Coleção de ferramentas simples e leves para produtividade digital.',
  
  // ----------------------------------------------------
  // 🔑 Metatag de Verificação AdSense Integrada aqui
  // ----------------------------------------------------
  metadataBase: new URL('https://acaoleve.com'),
  other: {
    'google-adsense-account': ADSENSE_PUB_ID,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        
        {/* ------------------------------------------------------------------ */}
        {/* 🧠 Google AdSense Script (Carregamento Otimizado)                  */}
        {/* ------------------------------------------------------------------ */}
        {/* O script carrega após a interação inicial, otimizando a performance. */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB_ID}`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-xl font-bold text-primary">Ação Leve Portal</h1>
            </div>
        </header>
        
        <main className="min-h-screen container mx-auto p-8">
            {children}
        </main>
        
        

        <footer className="w-full bg-gray-50 border-t">
            <div className="max-w-7xl mx-auto p-6 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">
                    © {new Date().getFullYear()} Ação Leve. Todos os direitos reservados.
                </span>
                <div className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
                    {/* Links para as páginas legais */}
                    <a href="/politica-de-privacidade" className="me-4 hover:underline md:me-6">Política de Privacidade</a>
                    <a href="/termos-de-uso" className="me-4 hover:underline md:me-6">Termos de Uso</a>
                    <a href="/contato" className="hover:underline">Contato</a>
                </div>
            </div>
        </footer>
      </body>
    </html>
  )
}