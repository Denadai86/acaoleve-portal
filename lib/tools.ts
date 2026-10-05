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
  stats?: { value: string; label: string }[];
  problem: { title: string; text: string };
  stepsTitle?: string;
  steps?: { title: string; text: string }[];
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
  /** Exemplo visual do documento que o cliente final recebe (ilustrativo). */
  proposalDemo?: {
    eyebrow: string;
    title: string;
    titleAccent?: string;
    bullets: string[];
    company: string;
    docTitle: string;
    items: { name: string; price: string }[];
    total: string;
    validity: string;
    button: string;
    caption: string;
  };
  pricing?: {
    title: string;
    plans: { name: string; price: string; period?: string; items: string[]; highlight?: boolean }[];
    note?: string;
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
    sales: {
      eyebrow: 'Orçamentos e propostas',
      headline: 'Fale. Gere. Envie. Fechou.',
      headlineAccent: 'Fechou.',
      subheadline:
        'Crie orçamentos profissionais a partir de um áudio e envie uma proposta pronta para o cliente aprovar pelo WhatsApp.',
      primaryCta: {
        label: 'Criar conta grátis',
        href: 'https://fechou-ai.acaoleve.com.br/sign-up',
      },
      note: 'Plano grátis com 3 orçamentos por mês',
      stats: [
        { value: 'Voz ou texto', label: 'Duas formas de descrever o serviço' },
        { value: 'Sem conta', label: 'Para o cliente ver e aprovar' },
        { value: '15 dias', label: 'De validade em cada proposta' },
      ],
      problem: {
        title: 'Terminou o serviço de orçar, e o orçamento ainda nem começou.',
        text: 'Montar proposta no Word, no caderno ou na calculadora toma tempo justo quando o cliente está esperando. Quem envia primeiro e com cara de profissional larga na frente.',
      },
      stepsTitle: 'Como funciona',
      steps: [
        {
          title: 'Fale ou digite',
          text: 'Grave um áudio ou escreva o que precisa ser feito: serviço, quantidades e valores.',
        },
        {
          title: 'Revise',
          text: 'A IA organiza título, itens, quantidades e total. Ajuste o que quiser antes de enviar.',
        },
        {
          title: 'Envie o link',
          text: 'Cada orçamento ganha um link próprio, com logo e dados da empresa. O cliente abre sem criar conta.',
        },
        {
          title: 'Cliente aprova',
          text: 'Ele confere os itens, usa o PIX e aprova com um toque, seguindo para o WhatsApp.',
        },
      ],
      featuresTitle: 'O que você ganha',
      features: [
        {
          title: 'Orçamento por voz ou texto',
          text: 'Descreva o serviço do jeito que falaria com o cliente. A IA monta título, descrição, itens, quantidades e valores.',
        },
        {
          title: 'Proposta com a sua marca',
          text: 'Logo, nome da empresa e endereço do perfil aparecem na proposta que o cliente recebe.',
        },
        {
          title: 'PIX na própria proposta',
          text: 'Com a chave PIX cadastrada, a proposta mostra o código copia e cola e o QR Code.',
        },
        {
          title: 'Aprovação pelo WhatsApp',
          text: 'O cliente toca em aprovar, o status muda no seu painel e o WhatsApp abre com uma mensagem pronta.',
        },
        {
          title: 'Painel de acompanhamento',
          text: 'Veja o que está pendente, aprovado e pago, filtre por status e atualize cada orçamento.',
        },
        {
          title: 'Edite e imprima',
          text: 'Ajuste itens e valores a qualquer momento, com o total recalculado, e imprima quando precisar.',
        },
      ],
      proposalDemo: {
        eyebrow: 'O que o cliente recebe',
        title: 'Uma proposta clara, com tudo para decidir.',
        bullets: [
          'Itens, quantidades e valor total',
          'Código PIX e QR Code para pagar',
          'Botão para aprovar pelo WhatsApp',
          'Validade de 15 dias',
        ],
        company: 'Silva Reformas',
        docTitle: 'Orçamento: instalação elétrica',
        items: [
          { name: 'Instalação das tomadas', price: 'R$ 150,00' },
          { name: 'Material elétrico', price: 'R$ 90,00' },
        ],
        total: 'R$ 240,00',
        validity: 'Válido por 15 dias',
        button: 'Aprovar via WhatsApp',
        caption: 'Exemplo ilustrativo de proposta',
      },
      audience: ['Autônomos', 'Prestadores de serviço', 'Pequenos negócios'],
      pricing: {
        title: 'Comece grátis. Evolua quando precisar.',
        plans: [
          {
            name: 'Grátis',
            price: 'R$ 0',
            items: [
              '3 orçamentos por mês',
              'Orçamento por voz ou texto',
              'Link público, PIX e aprovação pelo WhatsApp',
              'Painel de acompanhamento',
            ],
          },
          {
            name: 'PRO',
            price: 'R$ 29,90',
            period: '/mês',
            highlight: true,
            items: ['Orçamentos ilimitados', 'Tudo do plano grátis'],
          },
        ],
        note: 'Assinatura mensal processada pelo Mercado Pago.',
      },
      faq: [
        {
          q: 'Funciona só com áudio?',
          a: 'Não. Você pode gravar um áudio ou digitar o pedido, o que for mais prático na hora.',
        },
        {
          q: 'Posso corrigir o que a IA montou?',
          a: 'Sim. Antes de enviar, você edita título, descrição, itens, quantidades e valores, e o total é recalculado.',
        },
        {
          q: 'Meu cliente precisa ter conta?',
          a: 'Não. Ele abre o link do orçamento, confere os detalhes, usa o PIX e aprova, tudo sem cadastro.',
        },
        {
          q: 'Como o cliente aprova?',
          a: 'Ele toca em aprovar na proposta. O status muda para aprovado no seu painel e o WhatsApp abre com uma mensagem pronta para ele enviar a você.',
        },
        {
          q: 'Quanto custa?',
          a: 'O plano grátis inclui 3 orçamentos por mês. O PRO custa R$ 29,90 por mês e não tem limite de orçamentos.',
        },
      ],
      cta: {
        title: 'Faça o seu primeiro orçamento agora.',
        text: 'Crie sua conta grátis e gere sua primeira proposta.',
      },
    },
  },
  {
    id: 'seu-evento',
    title: 'Seu Evento',
    description:
      'Gestão de bingos beneficentes: venda de cartelas, equipe de voluntários, sorteio em telão e fechamento financeiro.',
    href: 'https://seu-evento.acaoleve.com.br',
    category: 'Eventos',
    badge: null,
    featured: false,
    icon: CalendarHeart,
    sales: {
      eyebrow: 'Para igrejas, ONGs e associações',
      headline: 'Pare de correr atrás de cartela. Comece a organizar eventos.',
      headlineAccent: 'Comece a organizar eventos.',
      subheadline:
        'Venda cartelas, acompanhe voluntários, valide ganhadores, controle pagamentos e apresente o sorteio em um telão. Tudo no navegador, sem aplicativo.',
      primaryCta: {
        label: 'Quero contratar',
        href: 'mailto:contato@acaoleve.com.br?subject=Seu%20Evento%3A%20quero%20contratar',
      },
      secondaryCta: { label: 'Ver o sistema', href: 'https://seu-evento.acaoleve.com.br' },
      note: 'Sem mensalidade e sem taxa sobre as vendas',
      stats: [
        { value: '0%', label: 'De taxa sobre as vendas' },
        { value: 'Sem app', label: 'Roda no navegador' },
        { value: 'A4 ou A6', label: 'Impressão das cartelas' },
      ],
      problem: {
        title: 'Bingo beneficente não deveria depender de caderno e memória.',
        text: 'Quem vendeu cada cartela, quem já pagou, quanto cada voluntário precisa prestar de contas e, na hora do bingo, como conferir o ganhador sem discussão. Quando tudo isso fica em planilha e papel, o evento vira correria.',
      },
      stepsTitle: 'Como funciona',
      steps: [
        {
          title: 'Monte o evento',
          text: 'Defina nome, preço da cartela, chave Pix, prêmios (quina ou cartela cheia) e patrocinadores.',
        },
        {
          title: 'Cartelas e equipe',
          text: 'Gere as cartelas em lote e imprima em A4 ou A6. Cada voluntário recebe usuário e PIN, com permissão para vender, operar ou conferir.',
        },
        {
          title: 'Venda e sorteie',
          text: 'As vendas passam pelo caixa, no Pix ou no dinheiro. O sorteio roda na mesa do locutor e aparece no telão.',
        },
        {
          title: 'Confira e feche',
          text: 'O fiscal confere a cartela de quem gritou bingo. Ao encerrar, o relatório financeiro fica pronto.',
        },
      ],
      featuresTitle: 'O que o sistema faz',
      features: [
        {
          title: 'Controle por voluntário',
          text: 'Cada venda fica registrada no nome de quem vendeu, com separação entre Pix e dinheiro e um ranking de arrecadação.',
        },
        {
          title: 'Caixa com Pix',
          text: 'No caixa, a venda no Pix mostra o QR Code para o comprador pagar direto na chave da organização.',
        },
        {
          title: 'Telão em tempo real',
          text: 'O telão atualiza sozinho a cada número sorteado, exibe os patrocinadores e comemora o bingo com confete.',
        },
        {
          title: 'Fiscal anti-fraude',
          text: 'O fiscal escaneia a cartela e o servidor confere se ela existe no evento, se está paga e se os números sorteados formam o padrão do prêmio da vez.',
        },
        {
          title: 'Cartela digital',
          text: 'O jogador abre a cartela pelo navegador e marca os números sorteados, sem instalar nada.',
        },
        {
          title: 'Fechamento e relatório',
          text: 'Ao encerrar o evento, o relatório mostra o total por forma de pagamento e o resultado de cada voluntário, pronto para imprimir.',
        },
      ],
      audience: ['Igrejas e paróquias', 'ONGs', 'Associações e clubes'],
      pricing: {
        title: 'Pague só quando for usar.',
        plans: [
          {
            name: 'Evento Único',
            price: 'R$ 97',
            items: [
              '1 evento',
              'Sem limite de cartelas',
              'Acesso até 7 dias depois da data do evento',
            ],
          },
          {
            name: '3 Eventos',
            price: 'R$ 237',
            highlight: true,
            items: ['3 eventos', 'Sem limite de cartelas', 'Para quem faz bingo todo trimestre'],
          },
          {
            name: 'Anual',
            price: 'R$ 397',
            items: ['Eventos ilimitados', 'Equipe ilimitada', 'Acesso por 1 ano'],
          },
        ],
        note: 'Todos os recursos do sistema estão disponíveis em qualquer plano.',
      },
      faq: [
        {
          q: 'Os voluntários precisam instalar algum aplicativo?',
          a: 'Não. Tudo funciona no navegador. O voluntário abre o link no celular e entra com o usuário e o PIN que você gerou.',
        },
        {
          q: 'Existe taxa sobre as vendas do evento?',
          a: 'Não. O valor do plano é fixo, sem porcentagem sobre as cartelas, e o Pix cai direto na chave da organização.',
        },
        {
          q: 'Como o sistema ajuda a evitar fraude no ganhador?',
          a: 'Quando alguém grita bingo, o fiscal escaneia a cartela. O sistema confere no servidor se ela existe no evento, se está paga e se os números sorteados formam o padrão do prêmio da vez (quina ou cartela cheia).',
        },
        {
          q: 'Posso imprimir as cartelas?',
          a: 'Sim. O sistema gera as cartelas em lote, cada uma com código único, e você imprime em A4 (1, 2, 4 ou 6 por folha) ou em A6, para gráfica.',
        },
        {
          q: 'Como contrato?',
          a: 'Escreva para contato@acaoleve.com.br. Eu crio o ambiente da organização, com endereço próprio, e envio o acesso.',
        },
      ],
      cta: {
        title: 'Organize o próximo bingo sem planilha.',
        text: 'Escreva e eu crio o ambiente da sua organização.',
      },
    },
  },
  {
    id: 'refeita-ai',
    title: 'Refeita.AI',
    description:
      'Foto ou lista do que tem em casa, e a IA cria a receita em segundos. Contra o desperdício de comida.',
    href: 'https://refeita-ai.acaoleve.com.br',
    category: 'Culinária',
    badge: null,
    featured: false,
    icon: ChefHat,
    sales: {
      eyebrow: 'Contra o desperdício de comida',
      headline: 'O que tem na geladeira vira receita.',
      headlineAccent: 'vira receita.',
      subheadline:
        'Tire uma foto ou escreva o que tem sobrando, e a IA cria uma receita para você em segundos.',
      primaryCta: { label: 'Gerar minha receita', href: 'https://refeita-ai.acaoleve.com.br' },
      secondaryCta: {
        label: 'Ver a comunidade',
        href: 'https://refeita-ai.acaoleve.com.br/comunidade',
      },
      note: 'Gratuito, sem cadastro para começar',
      stats: [
        { value: 'Foto ou texto', label: 'Duas formas de mostrar os ingredientes' },
        { value: 'Até 3 fotos', label: 'Da geladeira ou da despensa' },
        { value: 'Grátis', label: 'Para gerar e compartilhar' },
      ],
      problem: {
        title: 'Geladeira cheia, e a pergunta continua: o que eu faço com isso?',
        text: 'Ingredientes avulsos e sobras viram desperdício quando falta ideia. Com tempo curto, a saída costuma ser pedir comida, e o que estava na geladeira estraga.',
      },
      stepsTitle: 'Como funciona',
      steps: [
        {
          title: 'Mostre o que tem',
          text: 'Fotografe a geladeira ou a despensa, ou escreva os ingredientes que sobraram.',
        },
        {
          title: 'Ajuste ao seu jeito',
          text: 'Escolha o tempo de preparo, informe restrições e, se quiser, um estilo de cozinha.',
        },
        {
          title: 'Cozinhe',
          text: 'Receba a receita completa, com ingredientes, passo a passo e dica do chef.',
        },
      ],
      featuresTitle: 'O que você recebe',
      features: [
        {
          title: 'Receita a partir de foto',
          text: 'Envie até 3 fotos. A IA identifica os alimentos visíveis e usa a lista para montar a receita.',
        },
        {
          title: 'Ou só escreva',
          text: 'Prefere digitar? Liste os ingredientes que tem em casa, do jeito que vier.',
        },
        {
          title: 'Tempo, restrições e estilo',
          text: 'Peça uma receita de até 15 ou 30 minutos, informe restrições como "sem glúten" ou "vegano" e escolha um estilo, como italiana, fit ou "de vó".',
        },
        {
          title: 'Receita completa',
          text: 'Ingredientes, passo a passo, tempo de preparo, nível de dificuldade, calorias aproximadas e uma dica do chef.',
        },
        {
          title: 'Compartilhe',
          text: 'Mande a receita pelo WhatsApp ou copie o texto para postar no Instagram.',
        },
        {
          title: 'Comunidade de receitas',
          text: 'Veja o que outras pessoas cozinharam a partir do que tinham em casa.',
        },
      ],
      faq: [
        {
          q: 'Quanto custa e preciso de conta?',
          a: 'O Refeita.AI é gratuito e exibe anúncios do Google AdSense. Visitantes geram 1 receita por dia. Entrando com a conta Google, esse limite diário deixa de valer e as receitas ficam salvas no seu histórico.',
        },
        {
          q: 'Posso usar foto da geladeira?',
          a: 'Sim, até 3 fotos. A IA identifica os alimentos visíveis e ignora embalagens e prateleiras. As fotos são analisadas para a receita e não ficam guardadas.',
        },
        {
          q: 'Posso confiar na receita?',
          a: 'A receita é uma sugestão de IA. Confira a validade dos alimentos, alergias e o ponto de cozimento, e trate as calorias como uma estimativa.',
        },
        {
          q: 'Minhas receitas ficam públicas?',
          a: 'Quando você está logado, a receita gerada é salva e aparece na comunidade, com o nome da sua conta Google. Não escreva informações pessoais nos ingredientes.',
        },
        {
          q: 'Dá para evitar algum ingrediente ou dieta?',
          a: 'Sim. Há um campo de restrições (por exemplo, sem glúten ou vegano) e outro de estilo de cozinha.',
        },
      ],
      cta: {
        title: 'Que receita sai da sua geladeira hoje?',
        text: 'Escreva os ingredientes ou mande uma foto e veja o resultado em segundos.',
      },
    },
  },
  {
    id: 'policygen',
    title: 'PolicyGen',
    description:
      'Rascunhos de Política de Privacidade, Termos de Uso e Política de Cookies em minutos, para LGPD, GDPR e outras leis.',
    href: 'https://policygen.acaoleve.com.br',
    category: 'Jurídico',
    badge: null,
    featured: false,
    icon: ShieldCheck,
    sales: {
      eyebrow: 'Para quem publica sites, apps e SaaS',
      headline: 'Termos de Uso e Política de Privacidade sem começar do zero.',
      headlineAccent: 'sem começar do zero.',
      subheadline:
        'Responda a um passo a passo curto e receba rascunhos de Política de Privacidade, Termos de Uso e Política de Cookies, no idioma e na legislação que você escolher.',
      primaryCta: {
        label: 'Gerar meus documentos',
        href: 'https://policygen.acaoleve.com.br',
      },
      note: 'Rascunhos gerados por IA. Não substituem a revisão de um advogado.',
      stats: [
        { value: '3', label: 'Documentos: privacidade, termos e cookies' },
        { value: '9', label: 'Legislações para escolher' },
        { value: '5', label: 'Idiomas disponíveis' },
      ],
      problem: {
        title: 'Todo site com cadastro precisa dessas páginas, e ninguém quer escrevê-las.',
        text: 'Escrever do zero toma tempo, e copiar o texto de outro site traz cláusulas que não combinam com o seu serviço. O resultado costuma ser um documento genérico, ou nenhum.',
      },
      stepsTitle: 'Como funciona',
      steps: [
        {
          title: 'Escolha os documentos',
          text: 'Selecione Política de Privacidade, Termos de Uso, Política de Cookies, ou os três.',
        },
        {
          title: 'Conte sobre o projeto',
          text: 'Informe o nome do projeto e da empresa, que dados pessoais coleta, por quê e para quais países eles são transferidos.',
        },
        {
          title: 'Defina escopo e cookies',
          text: 'Escolha a legislação e o idioma, diga se usa cookies, de que categorias, com quais ferramentas e por quanto tempo guarda os dados.',
        },
        {
          title: 'Gere e revise',
          text: 'A IA monta os documentos com as suas respostas. Leia, ajuste, copie ou baixe, e leve a um advogado antes de publicar.',
        },
      ],
      featuresTitle: 'O que você recebe',
      features: [
        {
          title: 'Passo a passo guiado',
          text: 'Um assistente em seis etapas, sem juridiquês. As respostas ficam guardadas até o fim do processo.',
        },
        {
          title: 'Escolha a legislação',
          text: 'LGPD (Brasil), GDPR (União Europeia), CCPA/CPRA (EUA), UK-GDPR, PIPEDA (Canadá), APP (Austrália), LFPDPPP (México), LPDP (Argentina) e DPDPA (Índia).',
        },
        {
          title: 'Cinco idiomas',
          text: 'Português do Brasil e de Portugal, inglês, espanhol e francês.',
        },
        {
          title: 'Cookies e retenção sob medida',
          text: 'Informe categorias, ferramentas de análise e o prazo de retenção, para o texto refletir o que o seu sistema realmente faz.',
        },
        {
          title: 'Markdown pronto para publicar',
          text: 'Copie o texto ou baixe os arquivos .md, ideais para versionar no Git, renderizar no React ou converter para HTML.',
        },
        {
          title: 'Projetos salvos',
          text: 'Entrando com a conta Google, você salva o projeto no painel e volta depois para atualizar uma versão.',
        },
      ],
      audience: ['Desenvolvedores e criadores de SaaS', 'Lojas virtuais e infoprodutos', 'Apps e sites com cadastro'],
      faq: [
        {
          q: 'Os documentos têm validade jurídica?',
          a: 'São rascunhos gerados por IA a partir das suas respostas, não aconselhamento jurídico. Revise o texto, de preferência com um advogado, antes de publicar. O uso dos documentos é de responsabilidade de quem os publica.',
        },
        {
          q: 'Quais documentos o PolicyGen gera?',
          a: 'Política de Privacidade, Termos de Uso e Política de Cookies.',
        },
        {
          q: 'Quanto custa?',
          a: 'Neste momento, gerar os documentos não tem cobrança. Salvar projetos no painel exige entrar com a conta Google.',
        },
        {
          q: 'Em que formato recebo os documentos?',
          a: 'Em Markdown (.md). Você pode copiar o texto na tela ou baixar um arquivo por documento.',
        },
        {
          q: 'As minhas respostas ficam guardadas?',
          a: 'Apenas se você entrar com a conta Google e salvar o projeto. Aí as respostas ficam na sua conta, no painel. Sem login, o assistente não guarda o projeto.',
        },
      ],
      cta: {
        title: 'Gere o primeiro rascunho agora.',
        text: 'Responda ao passo a passo, revise o resultado e leve a um advogado para validar.',
      },
    },
  },
  {
    id: 'brinca-ai',
    title: 'Brinca.AI',
    description:
      'Atividades lúdicas para a Educação Infantil, criadas por IA em segundos. Gratuito e sem cadastro.',
    href: 'https://brinca-ai.acaoleve.com.br',
    category: 'Educação',
    badge: null,
    featured: false,
    icon: Smile,
    sales: {
      eyebrow: 'Pensado para professores da Educação Infantil',
      headline: 'Planejar atividades criativas para sua turma não precisa ser cansativo.',
      headlineAccent: 'não precisa ser cansativo.',
      subheadline:
        'Crie atividades lúdicas e educativas para creches e primeiros anos em segundos, com a ajuda da inteligência artificial.',
      primaryCta: {
        label: 'Quero gerar minha atividade',
        href: 'https://brinca-ai.acaoleve.com.br/#gerador',
      },
      secondaryCta: { label: 'Ver a vitrine', href: 'https://brinca-ai.acaoleve.com.br/vitrine' },
      note: 'Gratuito e sem cadastro para gerar',
      stats: [
        { value: 'Grátis', label: 'Gerar não custa nada' },
        { value: 'Sem cadastro', label: 'Abra, informe e gere' },
        { value: '2 opções', label: 'A cada pedido' },
      ],
      problem: {
        title: 'Você ama ensinar. O difícil é tudo o que vem antes e depois da sala de aula.',
        text: 'Planejar atividades criativas exige horas que você não tem. Entre reuniões, registros, casa e vida pessoal, o planejamento acaba virando madrugada, sempre adaptando as mesmas ideias.',
      },
      stepsTitle: 'Como funciona',
      steps: [
        {
          title: 'Conte o básico',
          text: 'Informe a idade ou a série e o tema da aula. Nada de formulário longo.',
        },
        {
          title: 'A IA cria por você',
          text: 'Em segundos, você recebe duas opções de atividade, cada uma com materiais, objetivo pedagógico e passo a passo.',
        },
        {
          title: 'Aplique com confiança',
          text: 'Use do seu jeito, adapte o que quiser, baixe como imagem ou imprima.',
        },
      ],
      featuresTitle: 'O que você recebe',
      features: [
        {
          title: 'Duas opções por pedido',
          text: 'Cada geração traz duas variações do mesmo tema, para você escolher a que combina mais com a turma.',
        },
        {
          title: 'Atividade completa',
          text: 'Título criativo, frase motivacional, lista de materiais, objetivo pedagógico com base na BNCC e passo a passo numerado.',
        },
        {
          title: 'Por idade ou por série',
          text: 'Escreva "4 anos" ou "Maternal II". O pedido se ajusta à faixa que você informar.',
        },
        {
          title: 'Vitrine da comunidade',
          text: 'Veja atividades de outros professores, filtre por categoria e confira as mais curtidas.',
        },
        {
          title: 'Baixe e imprima',
          text: 'Salve a atividade como imagem, no formato de post para Instagram, ou imprima direto da página.',
        },
        {
          title: 'Compartilhe a sua',
          text: 'Entrando com a conta Google, você publica atividades na vitrine, com seu @ do Instagram, e acompanha tudo no seu painel.',
        },
      ],
      audience: ['Professores da Educação Infantil', 'Creches', 'Primeiros anos'],
      faq: [
        {
          q: 'É gratuito? Preciso criar conta?',
          a: 'Gerar atividades é gratuito e não exige cadastro. A conta Google só é necessária para compartilhar na vitrine e usar o painel.',
        },
        {
          q: 'A IA pode errar?',
          a: 'Pode. A atividade é uma sugestão: leia, adapte à sua turma e à realidade da sala antes de aplicar.',
        },
        {
          q: 'Existe limite de uso?',
          a: 'Sim. O limite é de 5 gerações por hora em cada conexão. Passado esse tempo, é só gerar de novo.',
        },
        {
          q: 'As atividades geradas ficam públicas?',
          a: 'Sim. As atividades geradas são publicadas na vitrine, sem nome e sem cadastro. Por isso, não escreva dados pessoais de crianças no tema.',
        },
        {
          q: 'Posso apoiar o projeto?',
          a: 'Pode. Dá para contribuir por Pix e receber o selo de apoiador no seu perfil.',
        },
      ],
      cta: {
        title: 'Gere a primeira atividade da sua turma.',
        text: 'Informe a idade e o tema e receba duas opções em segundos.',
      },
    },
  },
];
