// /app/politica-de-privacidade/page.tsx
import { ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | Ação Leve",
  description: "Detalhes sobre como seus dados são coletados, processados e protegidos.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="bg-white/70 backdrop-blur-sm p-10 rounded-xl shadow-lg border border-gray-200">
        
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text">
            Política de Privacidade
          </h1>
        </div>

        <p className="text-gray-700 text-lg mb-6">
          Esta Política descreve como o <strong>Ação Leve Portal</strong> coleta, usa e protege suas informações ao utilizar nossas ferramentas.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">1. Coleta de Dados</h2>
          <p className="text-gray-700 leading-relaxed">
            Coletamos informações técnicas necessárias para o funcionamento das ferramentas, como logs de navegação,
            dados de uso, endereço IP (anonimizado) e dados analíticos via Google Analytics.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">2. Cookies e Publicidade</h2>
          <p className="text-gray-700 leading-relaxed">
            Utilizamos cookies essenciais para funcionamento do portal e cookies de terceiros para análise e publicidade,
            incluindo Google AdSense.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">3. Segurança</h2>
          <p className="text-gray-700 leading-relaxed">
            Adotamos medidas adequadas de proteção para garantir a segurança dos seus dados, incluindo criptografia
            durante a transmissão e proteção contra acessos não autorizados.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-primary mb-3">4. Seus Direitos</h2>
          <p className="text-gray-700 leading-relaxed">
            Você pode solicitar a exclusão de dados, correção ou esclarecimentos sobre o tratamento das informações
            coletadas. Basta entrar em contato conosco.
          </p>
        </section>

        <p className="mt-10 text-sm text-gray-500">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>
      </div>
    </div>
  );
}
