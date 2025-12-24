/** @type {import('next').NextConfig} */
const nextConfig = {

  // 🔍 Ajuda a detectar problemas silenciosos
  reactStrictMode: true,

  // 📸 Permite imagens externas (Google, GitHub, etc.)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Google OAuth image
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // GitHub OAuth image
      },
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com', // Facebook image (caso use no futuro)
      },
      {
        protocol: 'https',
        hostname: 'pbs.twimg.com', // Twitter / X images
      },
      {
        protocol: 'https',
        hostname: '**.gravatar.com', // Gravatar
      },
      {
        protocol: 'https',
        hostname: 'keuabft7jwxlysoy.public.blob.vercel-storage.com', // O SEU HOSTNAME DO BLOB
        port: '',
        pathname: '/**',
      }
    ],
  },

  // 🚀 Melhor desempenho para aplicações SaaS hospedadas na Vercel
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // 🔁 Rewrites (caso queira API Proxy no futuro)
  async rewrites() {
    return [
      // Exemplo: redirecionar /api/external → API externa (ainda vazio)
      // {
      //   source: "/api/external/:path*",
      //   destination: "https://api.exemplo.com/:path*",
      // },
    ];
  },

  // 📦 Desabilita sourcemaps de produção (segurança extra)
  productionBrowserSourceMaps: false,

  // 📌 Permite usar env vars públicas corretamente
  env: {
    NEXT_PUBLIC_APP_NAME: "Ação Leve Portal",
  },
};

module.exports = nextConfig;
