// app/page.tsx
import { ServiceCard } from '@/components/ServiceCard';
import { Metadata } from 'next';

/**
 * @name metadata
 * @description Definições de Meta-dados para SEO do Portal.
 * @best_practice Usar o objeto Metadata no App Router (RSC) para SEO nativo.
 */
export const metadata: Metadata = {
  title: 'Ação Leve | Micro-SaaS para Desenvolvedores e SEO',
  description: 'Uma coleção de ferramentas de alta performance (Micro-SaaS) focadas em produtividade, desenvolvimento web e otimização para SEO.',
};

const microSaaSList = [
  {
    title: 'PolicyGen',
    description: 'Gerador de Políticas de Privacidade e Termos de Uso. Essencial para conformidade legal do seu SaaS.',
    href: 'https://policygen.acaoleve.com',
  },
  {
    title: 'SchemaGen',
    description: 'Crie marcações de Schema JSON-LD validadas (FAQ, Produto, Artigo) para impulsionar seus Rich Snippets no Google.',
    href: 'https://schemagen.acaoleve.com',
    isNew: true,
  },
  {
    title: 'PNG Optimizer',
    description: 'Otimize e comprima imagens PNG e SVG sem perda de qualidade. Melhore o tempo de carregamento do seu site.',
    href: 'https://imagecomp.acaoleve.com',
    isNew: true,
  },
  {
    title: 'CSS Clip Path',
    description: 'Ferramenta visual para gerar códigos CSS Clip Path para criar formas complexas e modernas em elementos web.',
    href: 'https://clipper.acaoleve.com',
  },
  {
    title: 'UTM Tracker',
    description: 'Crie links UTM estruturados e monitore os cliques para entender a performance das suas campanhas de marketing.',
    href: 'https://utmtrack.acaoleve.com',
  },
];

/**
 * @name HomePage
 * @description Página principal (Portal) renderizada no lado do servidor (RSC).
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Ação Leve
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Acelerando sua produtividade com Micro-SaaS focados.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Nossas Ferramentas</h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {microSaaSList.map((service) => (
            <ServiceCard 
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
              isNew={service.isNew}
            />
          ))}
        </div>
        
        {/* Futuro Bloco de Anúncio AdSense (opcional, se quiser monetizar o portal) */}
        {/* <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">Publicidade</p>
            <AdSenseAd dataAdSlot="SEU_SLOT_ID_PORTAL" />
        </div> */}

      </main>

      <footer className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 border-t mt-10">
        <p>
          &copy; {new Date().getFullYear()} Ação Leve. Feito com Next.js e paixão pela performance.
        </p>
        <div className="mt-2 space-x-4">
            <Link href="https://policygen.acaoleve.com/privacy" className="hover:text-gray-700 transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-gray-700 transition-colors">Contato</Link>
        </div>
      </footer>
    </div>
  );
}