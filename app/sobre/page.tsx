import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sobre Nós | Ação Leve',
  description: 'Conheça a missão da Ação Leve em simplificar a produtividade digital com Micro-SaaS brasileiros.',
};

export default function AboutPage() {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Cabeçalho */}
      <div className="bg-gray-900 text-white py-16 px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
          Simplificando o Digital
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Nossa missão é criar ferramentas que resolvem problemas complexos com 
          soluções leves, rápidas e diretas ao ponto.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-16 space-y-16">
        
        {/* Nossa História */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quem Somos</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A <strong>Ação Leve</strong> nasceu da frustração com softwares inchados, caros e complexos. 
              Acreditamos que a tecnologia deve trabalhar para você, e não o contrário.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Somos um estúdio de <strong>Micro-SaaS</strong> focado em desenvolver pequenas ferramentas 
              poderosas que fazem uma única coisa, mas a fazem com excelência.
            </p>
          </div>
          <div className="relative h-64 bg-gradient-to-tr from-orange-100 to-purple-100 rounded-2xl flex items-center justify-center">
            <span className="text-6xl">🚀</span>
          </div>
        </section>

        {/* Nossos Valores */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nossos Pilares</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-orange-600 text-2xl mb-3">⚡</div>
              <h3 className="font-bold text-gray-900 mb-2">Velocidade</h3>
              <p className="text-sm text-gray-600">Nossas ferramentas carregam instantaneamente. Sem telas de loading infinitas.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-orange-600 text-2xl mb-3">🛡️</div>
              <h3 className="font-bold text-gray-900 mb-2">Privacidade</h3>
              <p className="text-sm text-gray-600">Seus dados são seus. Adotamos práticas de 'Privacy by Design' em tudo.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
              <div className="text-orange-600 text-2xl mb-3">🎯</div>
              <h3 className="font-bold text-gray-900 mb-2">Foco</h3>
              <p className="text-sm text-gray-600">Resolvemos um problema de cada vez. Sem funcionalidades inúteis.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pronto para acelerar?</h2>
          <p className="text-gray-600 mb-8">
            Explore nossas ferramentas gratuitas e premium.
          </p>
          <a href="/" className="inline-block px-8 py-3 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition">
            Ver Ferramentas
          </a>
        </section>
      </div>
    </div>
  );
}