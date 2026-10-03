// app/politica-de-cookies/page.tsx
import type { Metadata } from 'next';
import { LegalLayout, LegalSection, legalLink, legalList } from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Entenda como utilizamos cookies para melhorar sua experiência no Portal Ação Leve.',
};

const categories = [
  {
    title: 'Cookies Essenciais',
    text: 'Necessários para recursos fundamentais, como áreas seguras. Sem eles, o site não funciona.',
  },
  {
    title: 'Cookies Funcionais',
    text: 'Lembram suas escolhas (nome de usuário, idioma) para melhorar a experiência.',
  },
  {
    title: 'Cookies de Desempenho',
    text: 'Coletam informações anônimas sobre como você usa o site (ex: páginas mais visitadas).',
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Política de Cookies" updated="28 de dezembro de 2025">
      <p>
        Esta Política de Cookies explica o que são cookies e como o <strong>Portal Ação Leve</strong> os utiliza. Ao continuar a navegar em nosso Portal, você concorda com o uso de cookies conforme descrito nesta política.
      </p>

      <LegalSection title="1. O Que São Cookies?">
        <p>
          Cookies são pequenos arquivos de texto armazenados em seu computador ou dispositivo móvel quando você visita um site. Eles são amplamente utilizados para fazer com que os sites funcionem com eficiência e fornecer informações aos proprietários.
        </p>
      </LegalSection>

      <LegalSection title="2. Como Usamos Cookies">
        <ul className={legalList}>
          <li>Garantir o funcionamento correto do Portal.</li>
          <li>Analisar como nosso Portal é utilizado.</li>
          <li>Personalizar sua experiência.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Categorias de Cookies">
        <div className="space-y-3">
          {categories.map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-4">
              <h3 className="font-semibold text-foreground">{c.title}</h3>
              <p className="mt-1 text-sm">{c.text}</p>
            </div>
          ))}
        </div>
      </LegalSection>

      <LegalSection title="4. Cookies de Terceiros">
        <p>
          Utilizamos serviços de terceiros que também podem definir cookies, como o <strong>Google Analytics</strong> e <strong>Google AdSense</strong>.
        </p>
        <p className="text-sm italic">
          Não controlamos esses cookies. Consulte as políticas de privacidade desses terceiros para mais informações.
        </p>
      </LegalSection>

      <LegalSection title="5. Gerenciamento de Cookies">
        <p>
          Você pode configurar seu navegador para recusar todos os cookies ou alertar quando um cookie for enviado. No entanto, algumas partes do Portal podem não funcionar corretamente sem eles.
        </p>
      </LegalSection>

      <LegalSection title="6. Retenção e Consentimento">
        <p>
          A retenção segue a política geral de <strong>1 ano</strong>. Solicitamos seu consentimento conforme a LGPD, exceto para cookies estritamente necessários.
        </p>
      </LegalSection>

      <LegalSection title="7. Contato">
        <p>Dúvidas sobre Cookies?</p>
        <a href="mailto:contato@acaoleve.com.br" className={legalLink}>contato@acaoleve.com.br</a>
      </LegalSection>
    </LegalLayout>
  );
}