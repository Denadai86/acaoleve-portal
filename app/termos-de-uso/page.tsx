import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso | Ação Leve',
  description: 'Regras e condições para utilização das ferramentas do Portal Ação Leve.',
};

export default function TermsPage() {
  return (
    <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
      <header className="mb-10 border-b border-gray-100 pb-8">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
          Termos de Uso
        </h1>
        <p className="text-gray-500 font-medium">
          Última atualização: <span className="text-orange-600">28 de dezembro de 2025</span>
        </p>
      </header>

      <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
        <p>
          Bem-vindo ao <strong>Portal Ação Leve</strong> ("nós", "nosso", "conosco"), operado por João Denadai. Estes Termos de Uso regem seu acesso e uso do Portal Ação Leve. Ao acessar ou usar o Portal, você concorda em estar vinculado por estes Termos.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
          <p>
            Ao usar o Portal Ação Leve, você confirma que leu, entendeu e concordou em estar vinculado a estes Termos de Uso. O uso continuado do Portal após quaisquer alterações constitui sua aceitação das novas condições.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Acesso e Uso do Portal</h2>
          <p>
            O Portal Ação Leve concede a você uma licença limitada, não exclusiva, não transferível e revogável para acessar e usar o Portal para seus propósitos pessoais e não comerciais, em conformidade com estes Termos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Responsabilidades do Usuário</h2>
          <p className="mb-4">Você concorda em <strong>não</strong>:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Usar o Portal para qualquer finalidade ilegal ou proibida por estes Termos.</li>
            <li>Violar quaisquer leis locais, estaduais, nacionais ou internacionais aplicáveis.</li>
            <li>Envolver-se em qualquer atividade que possa danificar, desativar ou sobrecarregar o Portal.</li>
            <li>Tentar obter acesso não autorizado a sistemas de computador ou redes conectadas ao Portal.</li>
            <li>Enviar ou transmitir vírus, worms ou códigos destrutivos.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente no Portal, incluindo textos, gráficos, logotipos e software, é propriedade de João Denadai ou de seus licenciadores e está protegido por leis de direitos autorais.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Links para Sites de Terceiros</h2>
          <p>
            O Portal pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo ou práticas de privacidade desses sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitação de Responsabilidade</h2>
          <p className="bg-orange-50 p-4 rounded-lg border border-orange-100 text-orange-900">
            Na máxima extensão permitida por lei, o Portal Ação Leve não será responsável por quaisquer danos indiretos, incidentais ou punitivos, resultantes do seu uso ou incapacidade de usar o Portal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Indenização</h2>
          <p>
            Você concorda em indenizar João Denadai e seus parceiros contra quaisquer reivindicações decorrentes do seu uso do Portal ou violação destes Termos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Legislação Aplicável</h2>
          <p>
            Estes Termos serão regidos pelas leis da República Federativa do Brasil. O foro eleito é o da Comarca de domicílio do usuário.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-2">9. Contato</h2>
          <p>Para dúvidas sobre estes Termos de Uso:</p>
          <a href="mailto:contato@acaoleve.com" className="text-orange-600 font-bold hover:underline mt-2 inline-block">
            contato@acaoleve.com
          </a>
        </section>
      </div>
    </article>
  );
}