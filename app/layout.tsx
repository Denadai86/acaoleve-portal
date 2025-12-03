import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProviderWrapper } from "@/components/auth/SessionProviderWrapper";
import { GtmScript } from "@/components/telemetry/GtmScript";

const inter = Inter({ subsets: ["latin"] });

// Env
const ADSENSE_PUB_ID = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID ?? "";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? null;

export const metadata: Metadata = {
  title: "Ação Leve - Portal de Micro-SaaS",
  description: "Ferramentas leves e inteligentes para produtividade digital.",
  metadataBase: new URL("https://acaoleve.com"),
  ...(ADSENSE_PUB_ID && {
    other: { "google-adsense-account": ADSENSE_PUB_ID },
  }),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/android-chrome-192x192.png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        
        {GTM_ID && <GtmScript gtmId={GTM_ID} />}

        <SessionProviderWrapper>
          <Header />

          <main className="min-h-screen container mx-auto p-6 md:p-8">
            {children}
          </main>

          <Footer />
        </SessionProviderWrapper>

      </body>
    </html>
  );
}
