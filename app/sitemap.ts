// app/sitemap.ts — dinâmico: páginas do portal + subdomínios dos micro-SaaS
import type { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';

const BASE = 'https://www.acaoleve.com.br';

type Entry = MetadataRoute.Sitemap[number];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  // 1. Páginas do portal
  const pages: Array<[string, number, Entry['changeFrequency']]> = [
    ['', 1, 'weekly'],
    ['/servicos', 0.8, 'monthly'],
    ['/sobre', 0.6, 'monthly'],
    ['/contato', 0.5, 'monthly'],
    ['/termos-de-uso', 0.3, 'yearly'],
    ['/politica-de-privacidade', 0.3, 'yearly'],
    ['/politica-de-cookies', 0.3, 'yearly'],
  ];

  const staticEntries: MetadataRoute.Sitemap = pages.map(([path, priority, changeFrequency]) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // 2. Subdomínios (se a API falhar, o sitemap continua válido só com o portal)
  let subdomains: Array<{ url: string; lastModified: string }> = [];
  try {
    const res = await fetch(`${BASE}/api/sitemap/entries`, { next: { revalidate: 3600 } });
    if (res.ok) subdomains = await res.json();
    else console.error('[sitemap] /api/sitemap/entries respondeu', res.status);
  } catch (err) {
    console.error('[sitemap] falha ao buscar subdomínios:', err);
  }

  return [...staticEntries, ...subdomains];
}