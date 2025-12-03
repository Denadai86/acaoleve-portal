// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProviderWrapper } from "@/components/auth/SessionProviderWrapper";
import { GtmScript } from "@/components/telemetry/GtmScript";

const inter = Inter({ subsets: ["latin"] });

// Env vars
const ADSENSE_PUB_ID = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID ?? "";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? null;

// Metadata moderno e otimizado (resolve favicon em produção)
export const metadata: Metadata = {
  title: {
    default: "Ação Leve - Portal de Micro-SaaS",
    template: "%s • Ação Leve", // Para páginas dinâmicas: "Título da Página • Ação Leve"
  },
  description: "Ferramentas leves e inteligentes para produtividade digital. Micro-SaaS brasileiros sem frescura.",
  metadataBase: new URL("https://www.acaoleve.com"), // Ajusta se não usar www
  viewport: "width=device-width, initial-scale=1", // Bom pra mobile/SEO

  // Adsense (mantido, mas limpo)
  ...(ADSENSE_PUB_ID && {
    other: {
      "google-adsense-account": ADSENSE_PUB_ID,
    },
  }),

  // Icons otimizados (formato array moderno - resolve 404 em produção)
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
    <html lang="pt-BR" suppressHydrationWarning> {/* Evita warnings de hydration com GTM */}
      <body className={`${inter.className} antialiased`} suppressHydrationWarning> {/* Antialiased pra texto mais limpo */}
        
        {/* GTM antes de qualquer coisa (pra tracking imediato) */}
        {GTM_ID && <GtmScript gtmId={GTM_ID} />}

        <SessionProviderWrapper>
          <Header />

          {/* Main otimizado: sem min-h-screen pra não quebrar páginas longas */}
          <main className="max-w-7xl mx-auto p-6 md:p-8">
            {children}
          </main>

          <Footer />
        </SessionProviderWrapper>

      </body>
    </html>
  );
}