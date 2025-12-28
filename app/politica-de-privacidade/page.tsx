import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Ação Leve',
  description: 'Saiba como o Portal Ação Leve coleta, usa e protege seus dados pessoais de acordo com a LGPD.',
};

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
      <header className="mb-10 border-b border-gray-100 pb-8">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
          Política de Privacidade
        </h1>
        <p className="text-gray-500 font-medium">
          Última atualização: <span className="text-orange-600">28 de dezembro de 2025</span>
        </p>
      </header>

      <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
        <p>
          Esta Política de Privacidade descreve como o <strong>Portal Ação Leve</strong> ("nós", "nosso", "conosco"), operado por João Denadai, coleta, usa, armazena e protege as informações pessoais de seus usuários ("você", "seu", "sua"). Ao utilizar nossos serviços e acessar o Portal Ação Leve, você concorda com as práticas descritas nesta política.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informações que Coletamos</h2>
          <p className="mb-4">Coletamos as seguintes categorias de informações pessoais:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Informações de Identificação:</strong> Nome e e-mail.</li>
            <li><strong>Dados de Navegação e Uso:</strong> Endereço IP.</li>
          </ul>
          <p className="mt-4 text-sm bg-gray-50 p-4 rounded-lg border-l-4 border-orange-500">
            Não coletamos dados pessoais sensíveis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Como Usamos Suas Informações</h2>
          <p className="mb-4">Utilizamos as informações coletadas para as seguintes finalidades:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Nome/e-mail:</strong> Para controle de uso, monitoramento das ferramentas e consolidação de banco de dados.</li>
            <li><strong>Endereço IP:</strong> Para controle de uso em modelos free, freemium e pagos.</li>
          </ul>
          <p className="mt-4">Seus dados <strong>não são utilizados</strong> para rastreamento de anúncios.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Compartilhamento de Informações</h2>
          <p>O Portal Ação Leve não compartilha suas informações pessoais com terceiros.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies e Tecnologias Semelhantes</h2>
          <p>
            Nosso Portal utiliza cookies para melhorar a sua experiência. Para mais detalhes sobre o uso de cookies, consulte nossa{' '}
            <Link href="/politica-de-cookies" className="text-orange-600 hover:underline font-bold">
              Política de Cookies
            </Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Retenção de Dados</h2>
          <p>
            Manteremos suas informações pessoais por <strong>1 ano</strong>, em geral. No entanto, cada ferramenta utilizada pode ter suas próprias políticas de retenção de dados, as quais respeitamos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seus Direitos</h2>
          <p className="mb-4">De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Confirmação da existência de tratamento;</li>
            <li>Acesso aos dados;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Portabilidade dos dados a outro fornecedor;</li>
            <li>Eliminação dos dados pessoais tratados com o consentimento;</li>
            <li>Revogação do consentimento, a qualquer momento.</li>
          </ul>
          <p className="mt-4">
            Para exercer seus direitos, entre em contato conosco através do e-mail{' '}
            <a href="mailto:contato@acaoleve.com" className="text-orange-600 font-bold hover:underline">contato@acaoleve.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Consentimento</h2>
          <p>
            Ao utilizar o Portal Ação Leve, você consente com a coleta e uso de suas informações conforme descrito nesta Política de Privacidade. Caso não concorde com esta política, por favor, não utilize nossos serviços.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Alterações</h2>
          <p>
            Podemos atualizar nossa Política de Privacidade periodicamente. Publicaremos quaisquer alterações nesta página. Recomendamos que você revise esta política regularmente.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-2">9. Contato</h2>
          <p>Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:</p>
          <a href="mailto:contato@acaoleve.com" className="text-orange-600 font-bold hover:underline mt-2 inline-block">
            contato@acaoleve.com
          </a>
        </section>
      </div>
    </article>
  );
}