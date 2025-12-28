import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | Ação Leve',
  description: 'Entenda como utilizamos cookies para melhorar sua experiência no Portal Ação Leve.',
};

export default function CookiePolicyPage() {
  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
      <header className="mb-10 border-b border-gray-100 pb-8">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
          Política de Cookies
        </h1>
        <p className="text-gray-500 font-medium">
          Última atualização: <span className="text-orange-600">28 de dezembro de 2025</span>
        </p>
      </header>

      <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
        <p>
          Esta Política de Cookies explica o que são cookies e como o <strong>Portal Ação Leve</strong> os utiliza. Ao continuar a navegar em nosso Portal, você concorda com o uso de cookies conforme descrito nesta política.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. O Que São Cookies?</h2>
          <p>
            Cookies são pequenos arquivos de texto armazenados em seu computador ou dispositivo móvel quando você visita um site. Eles são amplamente utilizados para fazer com que os sites funcionem com eficiência e fornecer informações aos proprietários.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Como Usamos Cookies</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Garantir o funcionamento correto do Portal.</li>
            <li>Analisar como nosso Portal é utilizado.</li>
            <li>Personalizar sua experiência.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Categorias de Cookies</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-bold text-gray-900">Cookies Essenciais</h3>
              <p className="text-sm">Necessários para recursos fundamentais, como áreas seguras. Sem eles, o site não funciona.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-bold text-gray-900">Cookies Funcionais</h3>
              <p className="text-sm">Lembram suas escolhas (nome de usuário, idioma) para melhorar a experiência.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-bold text-gray-900">Cookies de Desempenho</h3>
              <p className="text-sm">Coletam informações anônimas sobre como você usa o site (ex: páginas mais visitadas).</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies de Terceiros</h2>
          <p className="mb-4">
            Utilizamos serviços de terceiros que também podem definir cookies, como o <strong>Google Analytics</strong> e <strong>Google AdSense</strong>.
          </p>
          <p className="text-sm italic">
            Não controlamos esses cookies. Consulte as políticas de privacidade desses terceiros para mais informações.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Gerenciamento de Cookies</h2>
          <p>
            Você pode configurar seu navegador para recusar todos os cookies ou alertar quando um cookie for enviado. No entanto, algumas partes do Portal podem não funcionar corretamente sem eles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Retenção e Consentimento</h2>
          <p className="mb-4">
            A retenção segue a política geral de <strong>1 ano</strong>. Solicitamos seu consentimento conforme a LGPD, exceto para cookies estritamente necessários.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-2">9. Contato</h2>
          <p>Dúvidas sobre Cookies?</p>
          <a href="mailto:contato@acaoleve.com" className="text-orange-600 font-bold hover:underline mt-2 inline-block">
            contato@acaoleve.com
          </a>
        </section>
      </div>
    </article>
  );
}