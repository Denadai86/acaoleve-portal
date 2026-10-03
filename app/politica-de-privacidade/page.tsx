// app/politica-de-privacidade/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalLayout, LegalSection, LegalNote, legalLink, legalList } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Saiba como o Portal Ação Leve coleta, usa e protege seus dados pessoais de acordo com a LGPD.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Política de Privacidade" updated="28 de dezembro de 2025">
      <p>
        Esta Política de Privacidade descreve como o <strong>Portal Ação Leve</strong> ("nós", "nosso", "conosco"), operado por João Denadai, coleta, usa, armazena e protege as informações pessoais de seus usuários ("você", "seu", "sua"). Ao utilizar nossos serviços e acessar o Portal Ação Leve, você concorda com as práticas descritas nesta política.
      </p>

      <LegalSection title="1. Informações que Coletamos">
        <p>Coletamos as seguintes categorias de informações pessoais:</p>
        <ul className={legalList}>
          <li><strong>Informações de Identificação:</strong> Nome e e-mail.</li>
          <li><strong>Dados de Navegação e Uso:</strong> Endereço IP.</li>
        </ul>
        <LegalNote>Não coletamos dados pessoais sensíveis.</LegalNote>
      </LegalSection>

      <LegalSection title="2. Como Usamos Suas Informações">
        <p>Utilizamos as informações coletadas para as seguintes finalidades:</p>
        <ul className={legalList}>
          <li><strong>Nome/e-mail:</strong> Para controle de uso, monitoramento das ferramentas e consolidação de banco de dados.</li>
          <li><strong>Endereço IP:</strong> Para controle de uso em modelos free, freemium e pagos.</li>
        </ul>
        <p>Seus dados <strong>não são utilizados</strong> para rastreamento de anúncios.</p>
      </LegalSection>

      <LegalSection title="3. Compartilhamento de Informações">
        <p>O Portal Ação Leve não compartilha suas informações pessoais com terceiros.</p>
      </LegalSection>

      <LegalSection title="4. Cookies e Tecnologias Semelhantes">
        <p>
          Nosso Portal utiliza cookies para melhorar a sua experiência. Para mais detalhes sobre o uso de cookies, consulte nossa{' '}
          <Link href="/politica-de-cookies" className={legalLink}>Política de Cookies</Link>.
        </p>
      </LegalSection>

      <LegalSection title="5. Retenção de Dados">
        <p>
          Manteremos suas informações pessoais por <strong>1 ano</strong>, em geral. No entanto, cada ferramenta utilizada pode ter suas próprias políticas de retenção de dados, as quais respeitamos.
        </p>
      </LegalSection>

      <LegalSection title="6. Seus Direitos">
        <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
        <ul className={legalList}>
          <li>Confirmação da existência de tratamento;</li>
          <li>Acesso aos dados;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Portabilidade dos dados a outro fornecedor;</li>
          <li>Eliminação dos dados pessoais tratados com o consentimento;</li>
          <li>Revogação do consentimento, a qualquer momento.</li>
        </ul>
        <p>
          Para exercer seus direitos, entre em contato conosco através do e-mail{' '}
          <a href="mailto:contato@acaoleve.com.br" className={legalLink}>contato@acaoleve.com.br</a>.
        </p>
      </LegalSection>

      <LegalSection title="7. Consentimento">
        <p>
          Ao utilizar o Portal Ação Leve, você consente com a coleta e uso de suas informações conforme descrito nesta Política de Privacidade. Caso não concorde com esta política, por favor, não utilize nossos serviços.
        </p>
      </LegalSection>

      <LegalSection title="8. Alterações">
        <p>
          Podemos atualizar nossa Política de Privacidade periodicamente. Publicaremos quaisquer alterações nesta página. Recomendamos que você revise esta política regularmente.
        </p>
      </LegalSection>

      <LegalSection title="9. Contato">
        <p>Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:</p>
        <a href="mailto:contato@acaoleve.com.br" className={legalLink}>contato@acaoleve.com.br</a>
      </LegalSection>
    </LegalLayout>
  );
}