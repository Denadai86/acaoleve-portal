// app/termos-de-uso/page.tsx
import type { Metadata } from 'next';
import { LegalLayout, LegalSection, LegalNote, legalLink, legalList } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Regras e condições para utilização das ferramentas do Portal Ação Leve.',
};

export default function TermsPage() {
  return (
    <LegalLayout title="Termos de Uso" updated="28 de dezembro de 2025">
      <p>
        Bem-vindo ao <strong>Portal Ação Leve</strong> ("nós", "nosso", "conosco"), operado por João Denadai. Estes Termos de Uso regem seu acesso e uso do Portal Ação Leve. Ao acessar ou usar o Portal, você concorda em estar vinculado por estes Termos.
      </p>

      <LegalSection title="1. Aceitação dos Termos">
        <p>
          Ao usar o Portal Ação Leve, você confirma que leu, entendeu e concordou em estar vinculado a estes Termos de Uso. O uso continuado do Portal após quaisquer alterações constitui sua aceitação das novas condições.
        </p>
      </LegalSection>

      <LegalSection title="2. Acesso e Uso do Portal">
        <p>
          O Portal Ação Leve concede a você uma licença limitada, não exclusiva, não transferível e revogável para acessar e usar o Portal para seus propósitos pessoais e não comerciais, em conformidade com estes Termos.
        </p>
      </LegalSection>

      <LegalSection title="3. Responsabilidades do Usuário">
        <p>Você concorda em <strong>não</strong>:</p>
        <ul className={legalList}>
          <li>Usar o Portal para qualquer finalidade ilegal ou proibida por estes Termos.</li>
          <li>Violar quaisquer leis locais, estaduais, nacionais ou internacionais aplicáveis.</li>
          <li>Envolver-se em qualquer atividade que possa danificar, desativar ou sobrecarregar o Portal.</li>
          <li>Tentar obter acesso não autorizado a sistemas de computador ou redes conectadas ao Portal.</li>
          <li>Enviar ou transmitir vírus, worms ou códigos destrutivos.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Propriedade Intelectual">
        <p>
          Todo o conteúdo presente no Portal, incluindo textos, gráficos, logotipos e software, é propriedade de João Denadai ou de seus licenciadores e está protegido por leis de direitos autorais.
        </p>
      </LegalSection>

      <LegalSection title="5. Links para Sites de Terceiros">
        <p>
          O Portal pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo ou práticas de privacidade desses sites.
        </p>
      </LegalSection>

      <LegalSection title="6. Limitação de Responsabilidade">
        <LegalNote>
          Na máxima extensão permitida por lei, o Portal Ação Leve não será responsável por quaisquer danos indiretos, incidentais ou punitivos, resultantes do seu uso ou incapacidade de usar o Portal.
        </LegalNote>
      </LegalSection>

      <LegalSection title="7. Indenização">
        <p>
          Você concorda em indenizar João Denadai e seus parceiros contra quaisquer reivindicações decorrentes do seu uso do Portal ou violação destes Termos.
        </p>
      </LegalSection>

      <LegalSection title="8. Legislação Aplicável">
        <p>
          Estes Termos serão regidos pelas leis da República Federativa do Brasil. O foro eleito é o da Comarca de domicílio do usuário.
        </p>
      </LegalSection>

      <LegalSection title="9. Contato">
        <p>Para dúvidas sobre estes Termos de Uso:</p>
        <a href="mailto:contato@acaoleve.com.br" className={legalLink}>contato@acaoleve.com.br</a>
      </LegalSection>
    </LegalLayout>
  );
}