// app/robots.ts → VERSÃO CORRETA E QUE COMPILA NO NEXT.JS 14+

import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.acaoleve.com';

// Versão ultra-limpa (minha preferida em produção)
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
      { userAgent: '*', disallow: '/dashboard' },
      { userAgent: '*', disallow: '/login' },
      { userAgent: '*', disallow: '/registro' },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}