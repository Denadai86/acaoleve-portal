/** @type {import('next').NextConfig} */
const nextConfig = {
  // ⏳ SOLUÇÃO DO ERRO DE BUILD:
  // Aumenta o tempo limite de geração estática para 3 minutos (180s).
  // Isso resolve o erro "Static page generation timeout" ao baixar imagens do Blob.
  staticPageGenerationTimeout: 180,

  // 🔍 Ajuda a detectar problemas silenciosos no React
  reactStrictMode: true,

  // 🛡️ SEGURANÇA: Remove o cabeçalho "X-Powered-By: Next.js"
  // Dificulta que hackers saibam qual tecnologia você usa.
  poweredByHeader: false,

  // 📦 Otimização de produção
  productionBrowserSourceMaps: false, // Desabilita source maps (menor bundle, código fonte oculto)

  // 📸 Configuração de Imagens (Otimizada)
  images: {
    // Formatos modernos (Google ama isso para SEO)
    formats: ['image/avif', 'image/webp'],
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google User
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // GitHub User
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com', // X/Twitter
      },
      {
        protocol: 'https',
        hostname: '**.gravatar.com', // Gravatar
      },
      {
        protocol: 'https',
        hostname: 'keuabft7jwxlysoy.public.blob.vercel-storage.com', // SEU VERCEL BLOB (Crucial)
      },
    ],
  },

  // 🔒 Cabeçalhos de Segurança HTTP (Ótimo para aprovação AdSense)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN' // Evita que outros sites coloquem o seu em um iframe
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;