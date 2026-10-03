// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Syne, Figtree } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SessionProviderWrapper } from '@/components/auth/SessionProviderWrapper';
import { AutoLoginTrigger } from '@/components/auth/AutoLoginTrigger';
import { CookieConsent } from '@/components/privacy/CookieConsent';
import { GtmScript } from '@/components/telemetry/GtmScript';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const ADSENSE_PUB_ID = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID ?? '';
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? null;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#09090B',
};

export const metadata: Metadata = {
  title: {
    default: 'Ação Leve — Micro-SaaS Brasileiros',
    template: '%s · Ação Leve',
  },
  description:
    'Ferramentas leves e inteligentes para produtividade digital. Micro-SaaS brasileiros sem frescura.',
  metadataBase: new URL('https://www.acaoleve.com.br'),
  ...(ADSENSE_PUB_ID && {
    other: { 'google-adsense-account': ADSENSE_PUB_ID },
  }),
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
  ],
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${syne.variable} ${figtree.variable}`}>
      <body
        className="flex min-h-screen flex-col bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        {GTM_ID && <GtmScript gtmId={GTM_ID} />}

        {ADSENSE_PUB_ID && (
          <Script
            id="adsense-init"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB_ID}`}
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
        )}

        <SessionProviderWrapper>
          <AutoLoginTrigger />
          <Header />
          <main className="grow">{children}</main>
          <Footer />
          <CookieConsent />
        </SessionProviderWrapper>
      </body>
    </html>
  );
}