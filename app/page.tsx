// /app/page.tsx
// Este é um React Server Component (RSC)
import Link from 'next/link';

// Definição de ferramentas para o portal
const tools = [
    { title: 'PolicyGen', description: 'Gere políticas de privacidade e termos de uso rapidamente.', href: 'https://policygen.acaoleve.com' },
    { title: 'UTM Tracker', description: 'Gere e rastreie URLs UTM para suas campanhas de marketing.', href: '/utm-tracker' },
    { title: 'SchemaGen', description: 'Gere Schema JSON-LD para otimização SEO.', href: '/schemagen' },
];

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
          {tools.map((tool) => (
            <Link key={tool.title} href={tool.href} legacyBehavior>
                <a className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <h4 className="text-2xl font-semibold text-primary mb-2">{tool.title}</h4>
                    <p className="text-gray-600">{tool.description}</p>
                    {tool.title === 'UTM Tracker' && (
                        <span className="mt-2 inline-block text-xs font-medium text-white bg-green-500 rounded-full px-3 py-1">
                            Novo!
                        </span>
                    )}
                </a>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}