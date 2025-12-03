// /app/termos-de-uso/page.tsx
import { FileCheck } from "lucide-react";

export const metadata = {
  title: "Termos de Uso | Ação Leve",
  description: "Condições e regras para uso do Ação Leve Portal e suas ferramentas.",
};

export default function TermsOfUsePage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="bg-white/70 backdrop-blur-sm p-10 rounded-xl shadow-lg border border-gray-200">
        
        <div className="flex items-center gap-3 mb-6">
          <FileCheck className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
            Termos de Uso
          </h1>
        </div>

        <p className="text-gray-700 text-lg mb-6">
          Ao acessar o <strong>Ação Leve Portal</strong>, você concorda com estes Termos de Uso. Leia com atenção.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">1. Uso das Ferramentas</h2>
          <p className="text-gray-700 leading-relaxed">
            O portal oferece ferramentas assistivas, como Brinca-AI, Refeita-AI e PolicyGen. O uso é de responsabilidade
            do usuário e não garantimos resultados livres de erros.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">2. Conduta do Usuário</h2>
          <p className="text-gray-700 leading-relaxed">
            É proibido usar o portal para fins ilegais, fazer engenharia reversa, tentar invadir sistemas ou causar danos
            à infraestrutura.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">3. Limitação de Responsabilidade</h2>
          <p className="text-gray-700 leading-relaxed">
            Não nos responsabilizamos por danos diretos ou indiretos decorrentes do uso das ferramentas, incluindo decisões tomadas
            com base em respostas de IA.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">4. Alterações nos Termos</h2>
          <p className="text-gray-700 leading-relaxed">
            Os Termos podem ser atualizados a qualquer momento. Ao continuar utilizando o portal, você aceita as novas condições.
          </p>
        </section>

        <p className="mt-10 text-sm text-gray-500">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
      </div>
    </div>
  );
}
