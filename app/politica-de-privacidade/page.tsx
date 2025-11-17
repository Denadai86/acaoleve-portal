// /app/politica-de-privacidade/page.tsx
export const metadata = {
  title: 'Política de Privacidade | Ação Leve',
  description: 'Saiba como seus dados são coletados e utilizados no Ação Leve Portal.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-primary">Política de Privacidade</h1>
      
      <p className="mb-4 text-gray-700">
        Esta Política de Privacidade descreve como o Ação Leve Portal coleta, usa e protege suas informações.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Coleta de Dados</h2>
      <p className="mb-4 text-gray-700">
        Coletamos informações estritamente necessárias para o funcionamento de nossas ferramentas e para fins analíticos, como dados de cliques (para o UTM Tracker), endereço IP e dados de uso via Google Analytics. Não armazenamos informações de identificação pessoal (PII) sensíveis.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Cookies e AdSense</h2>
      <p className="mb-4 text-gray-700">
        Utilizamos cookies essenciais para o funcionamento do site e cookies de terceiros para publicidade (Google AdSense) e análise (Google Analytics). Ao continuar a usar o site, você concorda com o uso de cookies.
      </p>

      {/* Adicione mais seções (Ex: Links de Terceiros, Segurança, Seus Direitos) */}

      <p className="mt-8 text-sm text-gray-500">
        Última atualização: {new Date().toLocaleDateString('pt-BR')}
      </p>
    </div>
  );
}