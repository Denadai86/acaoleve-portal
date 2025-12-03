// /app/contato/page.tsx
import { Mail, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contato | Ação Leve",
  description: "Fale com a equipe do Ação Leve Portal.",
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <div className="bg-white/70 backdrop-blur-sm p-10 rounded-xl shadow-xl border border-gray-200">
        
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-primary to-blue-600 text-transparent bg-clip-text mb-6">
          Fale Conosco
        </h1>

        <p className="text-gray-700 text-lg mb-8">
          Precisa de ajuda, quer sugerir uma ferramenta ou reportar um problema?
          Estamos aqui para conversar!
        </p>

        <div className="space-y-6">

          <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-lg border">
            <Mail className="w-8 h-8 text-primary" />
            <div>
              <h3 className="text-xl font-semibold">E-mail</h3>
              <p className="text-gray-600">contato@acaoleve.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-lg border">
            <MessageCircle className="w-8 h-8 text-primary" />
            <div>
              <h3 className="text-xl font-semibold">WhatsApp</h3>
              <p className="text-gray-600">Em breve</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
