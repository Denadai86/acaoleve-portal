// /app/page.tsx
// React Server Component (RSC)
import Link from 'next/link'

// Ferramentas ativas
const tools = [
  {
    title: 'Brinca-AI',
    description: 'IA que cria brincadeiras e atividades para crianças de todas as idades.',
    href: 'https://brinca-ai.acaoleve.com',
    badge: 'LANÇAMENTO 🚀',
    featured: true,
  },
  {
    title: 'Refeita-AI',
    description: 'IA que cria receitas deliciosas com os ingredientes que você já tem em casa.',
    href: 'https://refeita-ai.acaoleve.com',
    featured: false,
  },
  {
    title: 'PolicyGen',
    description: 'Gere políticas de privacidade e termos de uso rapidamente.',
    href: 'https://policygen.acaoleve.com',
    featured: false,
  },
]

export default function HomePage() {
  return (
    <div className="space-y-12">
      
      {/* HERO */}
      <section className="text-center py-14 bg-white rounded-2xl shadow-lg">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Ferramentas Digitais <span className="text-primary">Simples e Poderosas</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Coleção de micro-SaaS criadas para acelerar sua produtividade.
        </p>
      </section>

      {/* LISTA DE FERRAMENTAS */}
      <section>
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Nossas Ferramentas</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools
            .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
            .map((tool) => (
              <Link key={tool.title} href={tool.href} legacyBehavior>
                <a
                  className={`group block p-8 rounded-2xl shadow-lg border-2 transition-all duration-300 bg-white hover:shadow-2xl hover:-translate-y-2
                    ${tool.featured 
                      ? 'border-orange-300 ring-2 ring-orange-200 bg-gradient-to-br from-orange-50 to-white'
                      : 'border-gray-200'
                    }`}
                >
                  {/* TÍTULO + BADGE */}
                  <div className="flex justify-between items-start mb-4">
                    <h4
                      className={`text-3xl font-bold transition-all 
                        ${tool.featured ? 'text-orange-700' : 'text-primary group-hover:text-blue-700'}
                      `}
                    >
                      {tool.title}
                    </h4>

                    {tool.badge && (
                      <span
                        className="
                          bg-gradient-to-r from-orange-500 to-orange-600 
                          text-white text-xs font-bold px-4 py-1.5 rounded-full 
                          shadow-md shadow-orange-300/30
                          animate-pulse
                        "
                      >
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  {/* DESCRIÇÃO */}
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {tool.description}
                  </p>
                </a>
              </Link>
            ))
          }
        </div>
      </section>
    </div>
  )
}
