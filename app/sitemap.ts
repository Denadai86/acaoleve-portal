// acaoleve-portal/app/sitemap.ts   ← agora é dinâmico!

import { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic'; // ← importantíssimo!

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Portal principal
  const staticEntry = {
    url: 'https://www.acaoleve.com',
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: 1,
  };

  // 2. Busca todos os subdomínios automaticamente
  const res = await fetch('https://www.acaoleve.com/api/sitemap/entries', {
    next: { revalidate: 3600 }, // recarrega a cada 1h (ou 0 pra sempre fresco)
  });
  const subdomains: Array<{ url: string; lastModified: string }> = await res.json();

  return [staticEntry, ...subdomains];
}