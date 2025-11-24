// /app/page.tsx
// Este é um React Server Component (RSC)
import Link from 'next/link';

// Definição de ferramentas para o portal
const tools = [
  {
    title: 'Refeita-AI',
    description: 'IA que cria receitas deliciosas com o que você tem na geladeira!',
    href: 'https://refeita-ai.acaoleve.com',
    badge: 'LANÇAMENTO QUENTE',
    featured: true,
  },
  {
    title: 'PolicyGen',
    description: 'Gere políticas de privacidade e termos de uso rapidamente.',
    href: 'https://policygen.acaoleve.com',
  },
  {
    title: 'UTM Tracker',
    description: 'Gere e rastreie URLs UTM para suas campanhas de marketing.',
    href: '/utm-tracker',
    badge: 'Novo!',
  },
  {
    title: 'SchemaGen',
    description: 'Gere Schema JSON-LD para otimização SEO.',
    href: '/schemagen',
  },
]

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-10 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Ferramentas Digitais <span className="text-primary">Simples e Poderosas</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Coleção de micro-SaaS construídas para acelerar sua produtividade.
        </p>
      </section>

      <section>
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Nossas Ferramentas:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools
  .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)) // Refeita no topo
  .map((tool) => (
    <Link key={tool.title} href={tool.href} legacyBehavior>
      <a
        className={`block p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 ${
          tool.featured
            ? 'border-orange-400 ring-4 ring-orange-200 bg-gradient-to-br from-orange-50 to-white'
            : 'border-gray-100'
        }`}
      >
        <div className="flex justify-between items-start mb-4">
          <h4 className={`text-3xl font-bold ${tool.featured ? 'text-orange-600' : 'text-primary'}`}>
            {tool.title}
          </h4>
          {tool.badge && (
            <span
              className={`text-xs font-bold px-4 py-2 rounded-full ${
                tool.featured
                  ? 'bg-orange-500 text-white animate-pulse'
                  : 'bg-green-500 text-white'
              }`}
            >
              {tool.badge}
            </span>
          )}
        </div>
        <p className="text-gray-700 text-lg">{tool.description}</p>
      </a>
    </Link>
  ))}
        </div>
      </section>
    </div>
  )
}