// app/robots.ts

import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.acaoleve.com';

/**
 * Função que gera as diretivas do arquivo robots.txt.
 * O retorno DEVE ser um objeto que atenda ao tipo MetadataRoute.Robots.
 */
export default function robots(): MetadataRoute.Robots {
  // Retornamos um OBJETO, não um array.
  return {
    // 1. A propriedade 'rules' é OBRIGATÓRIA e deve ser um ARRAY
    rules: [
      {
        // Regras para todos os rastreadores (*)
        userAgent: '*',
        
        // Rotas permitidas
        allow: ['/'],
        
        // Rotas explicitamente negadas
        disallow: [
          '/api/',
          '/dashboard',
          '/login',
          '/registro',
          '/internal/',
        ],
      },
      // Poderia haver outro bloco de regras aqui, por exemplo,
      // para um userAgent específico como 'Googlebot-Image'.
    ],
    
    // 2. A propriedade 'sitemap' é opcional, mas recomendada.
    // Ela deve estar FORA do array de 'rules'.
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}