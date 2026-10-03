// lib/tools.ts — fonte única dos micro-SaaS (home, /servicos, /ferramentas/[slug], sitemap)
import {
  PawPrint,
  Mic,
  CalendarHeart,
  ChefHat,
  ShieldCheck,
  Smile,
  type LucideIcon,
} from 'lucide-react';

/** Conteúdo da página de venda. Se existir, o card leva para /ferramentas/<id>. */
export type Sales = {
  eyebrow: string;
  headline: string;
  headlineAccent?: string; // trecho do headline destacado em laranja
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  note?: string;
  stats: { value: string; label: string }[];
  problem: { title: string; text: string };
  featuresTitle: string;
  features: { title: string; text: string }[];
  demo?: {
    eyebrow: string;
    title: string;
    titleAccent?: string;
    bullets: string[];
    botName: string;
    chat: { from: 'user' | 'bot'; text: string }[]; // **negrito** permitido
    caption: string;
  };
  audience?: string[];
  faq: { q: string; a: string }[];
  cta: { title: string; text: string };
};

export type Tool = {
  id: string; // slug da página e nome do screenshot: screenshots/<id>.jpg
  title: string;
  description: string;
  href: string; // app no subdomínio
  category: string;
  badge: 'NOVO' | 'DESTAQUE' | null;
  featured: boolean;
  icon: LucideIcon;
  sales?: Sales;
};

/** Link do card: página de venda interna quando existir, senão o app. */
export function toolLink(tool: Tool) {
  return tool.sales
    ? { href: `/ferramentas/${tool.id}`, external: false }
    : { href: tool.href, external: true };
}

export const tools: Tool[] = [
  {
    id: 'nutripet-ai',
    title: 'NutriPet.AI',
    description:
      'IA para pet shops. Responde clientes no WhatsApp, lembra da saúde de cada pet, confere estoque em tempo real e transforma conversas em vendas, 24 horas por dia.',
    href: 'https://nutripet-ai.acaoleve.com.br',
    category: 'Vendas',
    badge: 'NOVO',
    featured: true,
    icon: PawPrint,
    sales: {
      eyebrow: 'Casa de ração · Vet · Agro',
      headline: 'Seu WhatsApp vende enquanto você dorme.',
      headlineAccent: 'enquanto você dorme.',
      subheadline:
        'Uma IA treinada para o varejo pet que responde clientes, consulta estoque e fecha pedidos, sem você precisar estar online.',
      primaryCta: {
        label: 'Entrar na loja de teste',
        href: 'https://nutripet-ai.acaoleve.com.br/loja',
      },
      secondaryCta: {
        label: 'Ver o painel admin',
        href: 'https://nutripet-ai.acaoleve.com.br/admin',
      },
      note: 'Sem cartão de crédito',
      stats: [
        { value: '24/7', label: 'Atendimento sem parar' },
        { value: '< 3s', label: 'Tempo médio de resposta' },
        { value: '0 código', label: 'Para configurar e usar' },
      ],
      problem: {
        title: 'Cliente de pet shop quer resposta na hora.',
        text: 'O cliente pergunta pelo WhatsApp quando lembra, muitas vezes fora do horário ou com a loja cheia. Quem demora a responder perde a venda para quem responde primeiro.',
      },
      featuresTitle: 'O que a IA faz por você',
      features: [
        {
          title: 'Consulta o estoque em tempo real',
          text: 'Nunca mais prometa um produto que acabou. A IA lê o inventário antes de confirmar qualquer pedido e dá baixa automática assim que a venda fecha.',
        },
        {
          title: 'Lembra quem é cada pet',
          text: 'A IA conhece o nome, a raça, o peso e as restrições de saúde de cada animal antes de recomendar qualquer ração ou remédio, direto pelo histórico do cliente.',
        },
        {
          title: 'Fecha pedidos e registra tudo',
          text: 'Do orçamento à confirmação, tudo aparece no painel em tempo real: faturamento, taxa de conversão e os temas mais perguntados pelos clientes.',
        },
      ],
      demo: {
        eyebrow: 'Uma conversa real no WhatsApp',
        title: 'Inteligência que o dono de pet shop sente na prática.',
        titleAccent: 'dono de pet shop',
        bullets: [
          'Reconhece o cliente pelo número',
          'Cruza histórico de saúde do pet',
          'Sugere produtos compatíveis',
          'Confirma pedidos sem intervenção humana',
        ],
        botName: 'NutriPet Assistente',
        chat: [
          { from: 'user', text: 'Oi! Tem ração Hills Prescription para gato com doença renal?' },
          {
            from: 'bot',
            text: 'Tenho sim — Hills k/d Felina 1,8kg está disponível (3 un.) por **R$ 98,90**. Posso reservar?',
          },
          { from: 'user', text: 'Perfeito, é para o Bolinha — insuficiência renal crônica' },
          {
            from: 'bot',
            text: 'Anotado na ficha do Bolinha 🐱 Registro uso contínuo da k/d. Aviso quando o estoque baixar?',
          },
        ],
        caption: 'Resposta automática · sem intervenção humana · 2,4s',
      },
      audience: ['Casa de ração', 'Vet', 'Agro'],
      faq: [
        {
          q: 'Preciso saber programar?',
          a: 'Não. Configurar e usar não exige código.',
        },
        {
          q: 'Preciso de cartão de crédito para testar?',
          a: 'Não. A loja de teste pode ser acessada sem cartão de crédito.',
        },
        {
          q: 'A IA sabe o que tenho em estoque?',
          a: 'Sim. Ela lê o inventário antes de confirmar qualquer pedido e dá baixa automática quando a venda fecha.',
        },
        {
          q: 'A IA fecha o pedido sozinha?',
          a: 'Sim. Ela confirma pedidos sem intervenção humana e registra tudo no painel, em tempo real: faturamento, taxa de conversão e os temas mais perguntados.',
        },
      ],
      cta: {
        title: 'Veja funcionando antes de decidir.',
        text: 'Entre na loja de teste e veja a IA atendendo, sem cartão de crédito.',
      },
    },
  },
  {
    id: 'fechou-ai',
    title: 'Fechou.AI',
    description: 'Transforme sua voz em orçamento profissional. Feche mais negócios.',
    href: 'https://fechou-ai.acaoleve.com.br',
    category: 'Vendas',
    badge: 'DESTAQUE',
    featured: true,
    icon: Mic,
  },
  {
    id: 'seu-evento',
    title: 'Seu Evento',
    description: 'Organize festas e eventos com simplicidade e alegria.',
    href: 'https://seu-evento.acaoleve.com.br',
    category: 'Eventos',
    badge: null,
    featured: false,
    icon: CalendarHeart,
  },
  {
    id: 'refeita-ai',
    title: 'Refeita.AI',
    description: 'O que tem na geladeira? A IA transforma em receitas incríveis.',
    href: 'https://refeita-ai.acaoleve.com.br',
    category: 'Culinária',
    badge: null,
    featured: false,
    icon: ChefHat,
  },
  {
    id: 'policygen',
    title: 'PolicyGen',
    description: 'Política de Privacidade e Termos de Uso em minutos (LGPD).',
    href: 'https://policygen.acaoleve.com.br',
    category: 'Jurídico',
    badge: null,
    featured: false,
    icon: ShieldCheck,
  },
  {
    id: 'brinca-ai',
    title: 'Brinca.AI',
    description: 'Brincadeiras e atividades mágicas criadas por IA para crianças.',
    href: 'https://brinca-ai.acaoleve.com.br',
    category: 'Crianças',
    badge: null,
    featured: false,
    icon: Smile,
  },
];