// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

// 1. URL BASE DO SEU BLOB (Peguei do seu link enviado)
const BLOB_BASE_URL = "https://keuabft7jwxlysoy.public.blob.vercel-storage.com/screenshots";

// 2. CONFIGURAÇÃO CENTRALIZADA
// O "id" deve ser exatamente o mesmo que você colocou na sua rota de API
const tools = [
  {
    id: 'brinca-ai',
    title: 'Brinca-AI',
    description: 'IA que cria brincadeiras e atividades mágicas para crianças de todas as idades.',
    href: 'https://brinca-ai.acaoleve.com',
    badge: 'LANÇAMENTO',
    featured: true,
  },
  {
    id: 'refeita-ai',
    title: 'Refeita-AI',
    description: 'IA que cria receitas deliciosas com o que você tem na geladeira agora.',
    href: 'https://refeita-ai.acaoleve.com',
    badge: null,
    featured: false,
  },
  {
    id: 'policygen',
    title: 'PolicyGen',
    description: 'Gere Política de Privacidade + Termos de Uso com IA · LGPD/GDPR em 4 cliques.',
    href: 'https://policygen.acaoleve.com',
    badge: null,
    featured: false,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* HERO SECTION */}
      <section className="text-center py-20 md:py-28 px-4">
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
          Ação Leve
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Micro-SaaS brasileiros inteligentes.<br />
          <span className="text-orange-500 font-bold">Simples. Rápidos. Diretos ao ponto.</span>
        </p>
      </section>

      {/* GRID DE FERRAMENTAS */}
      <section className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tools
            .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
            .map((tool) => {
              // Monta a URL da imagem dinamicamente baseada no ID
              const screenshotUrl = `${BLOB_BASE_URL}/${tool.id}.jpg`;

              return (
                <Link 
                  key={tool.id} 
                  href={tool.href} 
                  target="_blank"
                  className="group flex flex-col h-full"
                >
                  <div
                    className={`relative flex flex-col h-full p-6 rounded-[2.5rem] border-2 transition-all duration-500 bg-white
                      ${tool.featured 
                        ? 'border-orange-400 ring-8 ring-orange-50 shadow-2xl' 
                        : 'border-gray-100 hover:border-orange-200 hover:shadow-xl'
                      }`}
                  >
                    {/* Badge */}
                    {tool.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span className="px-6 py-2 rounded-full text-white font-black text-xs uppercase tracking-widest bg-gradient-to-r from-orange-500 to-red-600 shadow-lg block">
                          {tool.badge}
                        </span>
                      </div>
                    )}

                    {/* Screenshot Automática do Vercel Blob */}
                    <div className="relative mt-2 mb-6 aspect-video rounded-2xl overflow-hidden border border-gray-100 shadow-inner bg-gray-50">
                      <Image
                        src={screenshotUrl}
                        alt={`Preview do ${tool.title}`}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        unoptimized // Força o Next.js a sempre pegar a versão mais recente do Blob
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-3xl font-black text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {tool.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-orange-600 font-bold text-sm uppercase tracking-wider">
                      Acessar ferramenta
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>

      {/* FOOTER SUBTIL */}
      <footer className="text-center py-12 border-t border-gray-100 bg-white">
        <p className="text-gray-400 font-medium">
          Explorando novas possibilidades toda semana · 🇧🇷
        </p>
      </footer>
    </div>
  );
}