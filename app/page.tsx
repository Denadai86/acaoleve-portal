// app/page.tsx
import Link from 'next/link';
import { Badge } from '@/components/ui/badge'; 
import Image from 'next/image';
const tools = [
  {
    title: 'Brinca-AI',
    description: 'IA que cria brincadeiras e atividades mágicas para crianças de todas as idades.',
    href: 'https://brinca-ai.acaoleve.com',
    badge: 'LANÇAMENTO',
    featured: true,
    screenshot: '/screenshots/brinca-ai.jpg'
  },
  {
    title: 'Refeita-AI',
    description: 'IA que cria receitas deliciosas com o que você tem na geladeira agora.',
    href: 'https://refeita-ai.acaoleve.com',
    badge: null,
    featured: false,
    screenshot: '/screenshots/refeita-ai.jpg'
  },
  {
    title: 'PolicyGen',
    description: 'Gere Política de Privacidade + Termos de Uso com IA · LGPD/GDPR em 4 cliques.',
    href: 'https://policygen.acaoleve.com',
    badge: null,
    featured: false,
    screenshot: '/screenshots/policygen.jpg'
  },
  // Adicione quantos quiser aqui em cima, só seguir o padrão
];

export default function HomePage() {
  return (
    <>
      {/* HERO MAIS FORTE E CLEAN */}
      <section className="text-center py-20 md:py-28">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
          Ação Leve
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Micro-SaaS brasileiros feitos por quem usa no dia a dia.<br />
          <span className="text-primary font-semibold">Simples. Rápidos. Preço justo.</span>
        </p>
      </section>

      {/* GRID DE FERRAMENTAS */}
      <section className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools
            .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
            .map((tool) => (
              <Link key={tool.title} href={tool.href} target={tool.href.startsWith('http') ? '_blank' : undefined}>
                <div
                  className={`group relative h-full p-8 rounded-3xl border-2 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl bg-white
                    ${tool.featured 
                      ? 'border-orange-400 ring-4 ring-orange-100 shadow-orange-200/30 shadow-xl' 
                      : 'border-gray-200 hover:border-gray-300'
                    }`}
                >
                  {/* Badge flutuante no canto */}
                  {tool.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span
                        className={`px-5 py-2 rounded-full text-white font-bold text-sm shadow-lg
                          ${tool.badge.includes('LANÇAMENTO') 
                            ? 'bg-gradient-to-r from-orange-500 to-red-500 animate-pulse' 
                            : 'bg-gradient-to-r from-slate-600 to-slate-800'
                          }`}
                      >
                        {tool.badge}
                      </span>
                    </div>
                  )}

                  <h3 className="text-3xl font-black text-gray-900 mb-4 mt-4 group-hover:text-primary transition">
                    {tool.title}
                    {tool.screenshot && (
                      <div className="mt-6 mb-8 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                        <Image
                          src={tool.screenshot}
                          alt={`Screenshot do ${tool.title}`}
                          width={1200}
                          height={800}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                          placeholder="blur"
                          blurDataURL="/placeholder-screenshot.png" // opcional: cria um placeholder baixo-res
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                      </div>
                    )}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="mt-8 text-primary font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Acessar agora
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* CTA FINAL SUBTILO */}
      <section className="text-center mt-24 mb-12">
        <p className="text-gray-500 text-lg">
          Mais ferramentas sendo construídas toda semana · Feito com ❤️ no Brasil
        </p>
      </section>
    </>
  );
}