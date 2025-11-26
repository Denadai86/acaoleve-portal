// app/layout.tsx

import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'

// Importação do componente de Telemetria (GTM)
import { GtmScript } from '@/components/telemetry/GtmScript'

// Variável de ambiente deve ser a fonte única para dados de editora
// O ADSENSE_PUB_ID deve estar no .env.local como NEXT_PUBLIC_ADSENSE_PUB_ID
// No entanto, para fins de metatag, vamos manter uma constante aqui
// (Melhor seria usar um Server Component para ler o .env e passar para Metadata, mas o Next.js lida com isso se a constante for definida)
const ADSENSE_PUB_ID = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID || 'ca-pub-SEU_ID_PADRAO';

const inter = Inter({ subsets: ['latin'] })

// Reutilização de estilos do Tailwind CSS
const headerStyle = "bg-white shadow-md";
const linkStyle = "text-xl font-bold text-gray-800 hover:text-blue-700 transition duration-150";
const footerTextStyle = "text-sm text-gray-500 sm:text-center";
const footerLinkStyle = "me-4 hover:underline md:me-6";


export const metadata: Metadata = {
  title: 'Ação Leve - Portal de Micro-SaaS',
  description: 'Coleção de ferramentas simples e leves para produtividade digital.',
  
  // Metatag de Verificação AdSense Integrada
  // ATENÇÃO: A chave 'google-adsense-account' é depreciada. 
  // O AdSense agora prefere o arquivo ads.txt ou a verificação via metatag de propriedade do site.
  // Mantenha para fins de verificação, mas o AdSense é carregado pelo GTM.
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
      
      {/* 🛑 CORREÇÃO SÊNIOR: GTM deve ser injetado fora do <body> 
        para que o script <noscript> (parte do GTM) possa ser renderizado corretamente 
        como o primeiro elemento filho do <body> (conforme GTM recomenda).
        A lógica de onde renderizar o JS e o iframe está dentro do GtmScript.
      */}
      <GtmScript />

      <body className={inter.className}>
        
        {/* REMOÇÃO DO SCRIPT ADSENSE DIRETO: O GTM (GtmScript) irá gerenciar o AdSense.
            Isso elimina a duplicação e permite controle via painel do GTM.
            
            // Script de AdSense Removido:
            // <Script ... src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB_ID}`} ... />
        */}

        {/* HEADER */}
        <header className={headerStyle}>
          <div className="max-w-7xl mx-auto p-4">
              {/* CORREÇÃO: Usando Link com o padrão Next.js 13+ (sem legacyBehavior e <a>) */}
              <Link href="/" className={linkStyle}>
                  Ação Leve Portal
              </Link>
          </div>
        </header>
        
        {/* MAIN CONTENT */}
        <main className="min-h-screen container mx-auto p-8">
            {children}
        </main>
        
        {/* FOOTER: Mantenha a atenção nos links de compliance (AdSense exige) */}
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

// TIPAGEM SÊNIOR: Para garantir que o GtmScript e o AdSense usem o ID correto,
// você deve adicionar esta variável no seu .env.local:
// NEXT_PUBLIC_ADSENSE_PUB_ID=ca-pub-SEU_ID_DE_EDITOR