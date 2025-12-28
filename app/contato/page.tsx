import type { Metadata } from 'next';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'Contato e Suporte | Ação Leve',
  description: 'Fale com nossa equipe de suporte. Tire dúvidas sobre nossos Micro-SaaS.',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      
      {/* Cabeçalho de Contato */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-black text-gray-900 mb-4">Fale Conosco</h1>
        <p className="text-xl text-gray-600">
          Dúvidas, sugestões ou parcerias? Estamos a um clique de distância.
        </p>
      </section>

      {/* Grid: Formulário + Info */}
      <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Envie uma mensagem</h2>
          {/* Reutilizando seu componente existente */}
          <LeadCaptureForm />
        </div>

        <div className="space-y-8 border-l border-gray-100 pl-0 md:pl-12 pt-8 md:pt-0 border-t md:border-t-0">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">E-mail Direto</h3>
            <p className="text-orange-600 font-medium">contato@acaoleve.com</p>
            <p className="text-sm text-gray-500 mt-1">Respondemos em até 24h úteis.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Horário de Atendimento</h3>
            <p className="text-gray-600">Segunda a Sexta</p>
            <p className="text-gray-600">09:00 às 18:00 (Brasília)</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-xl text-blue-800 text-sm">
            <strong>Dica:</strong> Para suporte técnico sobre uma ferramenta específica, mencione o nome dela no assunto (ex: "Erro no PolicyGen").
          </div>
        </div>
      </div>

      {/* FAQ - O Segredo para o AdSense */}
      <section className="py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Perguntas Frequentes</h2>
        <div className="grid gap-4">
          <details className="group bg-white p-6 rounded-2xl border border-gray-100 cursor-pointer">
            <summary className="font-bold text-gray-800 list-none flex justify-between items-center">
              As ferramentas são gratuitas?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A maioria das nossas ferramentas possui uma versão gratuita generosa ("Freemium"). 
              Alguns recursos avançados podem exigir uma assinatura ou pagamento único para manter o servidor.
            </p>
          </details>

          <details className="group bg-white p-6 rounded-2xl border border-gray-100 cursor-pointer">
            <summary className="font-bold text-gray-800 list-none flex justify-between items-center">
              Como faço para cancelar minha conta?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Você pode gerenciar sua assinatura e dados diretamente no painel de usuário. 
              Se preferir, envie um e-mail para nossa equipe de suporte solicitando a exclusão completa dos dados.
            </p>
          </details>
          
          <details className="group bg-white p-6 rounded-2xl border border-gray-100 cursor-pointer">
            <summary className="font-bold text-gray-800 list-none flex justify-between items-center">
              Vocês desenvolvem ferramentas sob demanda?
              <span className="transition group-open:rotate-180">▼</span>
            </summary>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Estamos sempre abertos a sugestões! Se você tem uma ideia de Micro-SaaS que resolveria um problema real, 
              entre em contato. Avaliamos todas as propostas.
            </p>
          </details>
        </div>
      </section>

    </div>
  );
}