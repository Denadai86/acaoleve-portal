// src/components/LeadCaptureForm.tsx

'use client';

import { useState } from 'react';
import { Send, Sparkles } from 'lucide-react'; // Ícones para dar vida ao componente

// Simulação de uma Server Action para capturar o Lead (você a implementará depois)
async function handleSubscribe(formData: FormData) {
  // Lógica aqui: salvar e-mail no banco de dados, enviar para Mailchimp, etc.
  const email = formData.get('email');
  console.log(`E-mail capturado: ${email}`);
  
  // Simula o sucesso após um pequeno delay
  await new Promise(resolve => setTimeout(resolve, 1500)); 
  return { success: true };
}

export default function LeadCaptureForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const isPending = status === 'loading';

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isPending) return;

    setStatus('loading');
    const formData = new FormData(event.currentTarget);
    const result = await handleSubscribe(formData); 
    
    if (result.success) {
      setStatus('success');
      setEmail(''); // Limpa o campo
    } else {
      setStatus('error');
    }
  }

  // Se o e-mail foi enviado com sucesso, mostra uma mensagem de agradecimento
  if (status === 'success') {
    return (
      <div className="max-w-xl mx-auto p-10 bg-white rounded-xl shadow-2xl border border-green-200 text-center transition-all duration-500">
        <Sparkles className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-800">Inscrição Confirmada!</h3>
        <p className="mt-2 text-gray-600">Obrigado por se juntar à comunidade Ação Leve. Você receberá atualizações sobre novos Micro SaaS e a jornada #BuildInPublic.</p>
      </div>
    );
  }

  // Formulário padrão
  return (
    <div className="max-w-xl mx-auto">
      {/* ⚡ APLICAÇÃO DO ESTILO "FLUTUANTE" */}
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 hover:shadow-red-300/50">
        
        {/* Título e Descrição */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
            Desbloqueie o Próximo Micro SaaS
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Receba a estratégia e os bastidores de como lançamos produtos digitais lucrativos com a filosofia **Ação Leve**.
          </p>
        </div>

        {/* Formulário de Inscrição */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            name="email"
            placeholder="Seu melhor e-mail para não perder nada..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isPending}
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-gray-800 transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isPending || email.length === 0}
            className="flex items-center justify-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <span className="animate-spin mr-2">⚙️</span>
            ) : (
              <Send className="w-5 h-5 mr-2" />
            )}
            {isPending ? 'Enviando...' : 'Quero Acompanhar'}
          </button>
        </form>

        {status === 'error' && (
          <p className="mt-4 text-sm text-red-600 text-center">
            Erro ao assinar. Tente novamente mais tarde.
          </p>
        )}
      </div>
    </div>
  );
}