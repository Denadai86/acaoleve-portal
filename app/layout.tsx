// app/layout.tsx

// 1. Importações do Next.js e Estilos
import type { Metadata, Viewport } from 'next';
import { Inter } from "next/font/google";
import "./globals.css";

// 2. Componentes Internos
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProviderWrapper } from "@/components/auth/SessionProviderWrapper";
import { AutoLoginTrigger } from "@/components/auth/AutoLoginTrigger"; // <--- NOVO
import { GtmScript } from "@/components/telemetry/GtmScript";

// 3. Configurações
const inter = Inter({ subsets: ["latin"] });
const ADSENSE_PUB_ID = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID ?? "";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? null;

// 4. Definição da Viewport (Separada do Metadata no Next.js 14+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
};

// 5. Metadados da Aplicação
export const metadata: Metadata = {
  title: {
    default: "Ação Leve - Portal de Micro-SaaS",
    template: "%s • Ação Leve",
  },
  description: "Ferramentas leves e inteligentes para produtividade digital. Micro-SaaS brasileiros sem frescura.",
  metadataBase: new URL("https://www.acaoleve.com"),
  
  // Configuração condicional do AdSense
  ...(ADSENSE_PUB_ID && {
    other: {
      "google-adsense-account": ADSENSE_PUB_ID,
    },
  }),

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
      <body
        className={`
          ${inter.className} 
          antialiased 
          bg-gradient-to-br from-purple-900 to-cyan-200 bg-fixed 
          flex flex-col min-h-screen
        `}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (Carregamento prioritário) */}
        {GTM_ID && <GtmScript gtmId={GTM_ID} />}

        <SessionProviderWrapper>
          
          {/* AUTO LOGIN: Verifica se é o primeiro acesso e redireciona.
            Precisa estar dentro do SessionProviderWrapper.
          */}
          <AutoLoginTrigger />

          <Header />

          {/* MAIN: O 'flex-grow' garante que o conteúdo empurre o footer 
            para baixo se a página tiver pouco conteúdo.
          */}
          <main className="w-full max-w-7xl mx-auto px-6 py-10 md:px-8 md:py-16 flex-grow pb-20 sm:pb-24">
            {children}
          </main>

          <Footer />
          
        </SessionProviderWrapper>
      </body>
    </html>
  );
}