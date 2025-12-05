import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.acaoleve.com';

/**
 * Função que gera as diretivas do arquivo robots.txt.
 * Usa o utilitário do Next.js 'MetadataRoute' para tipagem correta.
 */
export default function robots(): MetadataRoute.Robots {
  return [
    {
      // Regras para todos os rastreadores (*)
      userAgent: '*',
      
      // Rotas permitidas (permitir tudo por padrão)
      allow: ['/'],
      
      // Rotas explicitamente negadas (impedir acesso/indexação)
      // Exemplo: rotas de API, painéis internos, ou páginas de login/registro se não houver conteúdo SEO relevante.
      disallow: [
        '/api/',       // Impedir acesso a qualquer endpoint de API
        '/dashboard',  // Impedir acesso ao painel de usuário
        '/login',      // Embora seja uma página, muitas vezes queremos mantê-la fora da busca
        '/registro',
        '/internal/',  // Rotas internas ou de admin
      ],
    },
    
    // Indica a localização do seu Sitemap (essencial para SEO)
    {
      sitemap: `${BASE_URL}/sitemap.xml`,
    },
  ];
}