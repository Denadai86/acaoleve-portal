// acaoleve-portal/app/api/sitemap/entries/route.ts
// ← essa rota vai ser chamada pelo sitemap dinâmico

const SUBDOMAINS = [
  'brinca-ai',
  'refeita-ai',
  'policygen',
  // ← quando lançar nova SaaS, só adiciona o prefixo aqui (1 linha!)
  // 'nota-ai',
  // 'fatura-ai',
  // 'curriculo-ai',
];

export async function GET() {
  const entries = SUBDOMAINS.map((sub) => ({
    url: `https://${sub}.acaoleve.com`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return Response.json(entries);
}