// app/layout.tsx

// Importações Padrão
import type { Metadata, Viewport } from 'next'; // Importante: Viewport importado
import { Inter } from "next/font/google";
import "./globals.css";

// Componentes
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProviderWrapper } from "@/components/auth/SessionProviderWrapper";
import { GtmScript } from "@/components/telemetry/GtmScript";

const inter = Inter({ subsets: ["latin"] });

// Variáveis de Ambiente
const ADSENSE_PUB_ID = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID ?? "";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? null;


// 1. Definição da Viewport (Nova e Correta)
// Movemos a propriedade 'viewport' para este objeto exportado.
// Isso resolve o warning e segue a melhor prática do Next.js 14.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1, // Recomendado para manter consistência em dispositivos móveis
  // Outras propriedades como 'themeColor' podem ser adicionadas aqui
};


// 2. Definição do Metadata (Limpa e Otimizada)
export const metadata: Metadata = {
  title: {
    default: "Ação Leve - Portal de Micro-SaaS",
    template: "%s • Ação Leve",
  },
  description: "Ferramentas leves e inteligentes para produtividade digital. Micro-SaaS brasileiros sem frescura.",
  metadataBase: new URL("https://www.acaoleve.com"),

  // AVISO: A propriedade 'viewport' FOI REMOVIDA DAQUI
  
  // AdSense: Uso de spread syntax para inclusão condicional, excelente prática!
  ...(ADSENSE_PUB_ID && {
    other: {
      "google-adsense-account": ADSENSE_PUB_ID,
    },
  }),

  // Icons otimizados
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
  ],
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning> 
      
      {/* ⚡ MUDANÇA CRÍTICA: Adicionar flex-col e min-h-screen no body */}
      <body 
        className={`${inter.className} antialiased 
          bg-gradient-to-br from-purple-900 to-cyan-200 bg-fixed 
          flex flex-col min-h-screen`} // ⚡ ADICIONADO: Flexbox para gerenciar altura
        suppressHydrationWarning
      >
        
        {/* GTM antes de qualquer coisa (Mantido) */}
        {GTM_ID && <GtmScript gtmId={GTM_ID} />}

        <SessionProviderWrapper>
          
          <Header />

          {/* MUDANÇA CRÍTICA: Removido o div wrapper 'min-h-screen' desnecessário
             e aplicamos 'flex-grow' ao main para preencher o espaço restante. */}
          
          {/* Container Principal: Usa flex-grow para consumir todo o espaço vertical disponível, empurrando o Footer para baixo. */}
          <main className="max-w-7xl mx-auto px-6 py-10 md:px-8 md:py-16 w-full flex-grow pb-20 sm:pb-24">
            {children}
          </main>

          <Footer />
        </SessionProviderWrapper>

      </body>
    </html>
  );
}