// app/contato/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contato e suporte',
  description: 'Fale comigo: tire dúvidas sobre os Micro-SaaS, peça suporte ou proponha uma parceria.',
};

const MAIL = 'contato@acaoleve.com.br';
const mailto = `mailto:${MAIL}?subject=${encodeURIComponent('Contato pelo site')}`;

const faq = [
  {
    q: 'As ferramentas são gratuitas?',
    a: 'A maioria das ferramentas possui uma versão gratuita generosa ("Freemium"). Alguns recursos avançados podem exigir uma assinatura ou pagamento único para manter o servidor.',
  },
  {
    q: 'Como faço para cancelar minha conta?',
    a: 'Você pode gerenciar sua assinatura e dados diretamente no painel de usuário. Se preferir, envie um e-mail solicitando a exclusão completa dos dados.',
  },
  {
    q: 'Você desenvolve ferramentas sob demanda?',
    a: 'Estou sempre aberto a sugestões! Se você tem uma ideia de Micro-SaaS que resolveria um problema real, entre em contato. Avalio todas as propostas.',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-12 pt-20 text-center md:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-110 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.14),transparent_62%)]"
        />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            Fale <span className="text-brand">comigo</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Dúvidas, sugestões ou parcerias? Escreva, que eu respondo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
              <Mail size={22} aria-hidden />
            </span>
            <h2 className="mt-5 font-display text-lg font-bold">E-mail direto</h2>
            <p className="mt-1 font-medium text-brand">{MAIL}</p>
            <p className="mt-1 text-sm text-muted-foreground">Respondo em até 24h úteis.</p>
            <Link
              href={mailto}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover"
            >
              Enviar mensagem
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
              <Clock size={22} aria-hidden />
            </span>
            <h2 className="mt-5 font-display text-lg font-bold">Horário de atendimento</h2>
            <p className="mt-1 text-muted-foreground">Segunda a sexta</p>
            <p className="text-muted-foreground">09:00 às 18:00 (Brasília)</p>
          </div>
        </div>

        <p className="mt-5 rounded-2xl border border-brand/30 bg-brand/5 p-5 text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Dica:</strong> para suporte técnico sobre uma
          ferramenta específica, mencione o nome dela no assunto (ex.: “Erro no PolicyGen”).
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <h2 className="mb-6 font-display text-2xl font-bold md:text-3xl">Perguntas frequentes</h2>
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {faq.map(({ q, a }) => (
            <details key={q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {q}
                <span aria-hidden className="text-brand transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Quer algo sob medida?{' '}
          <Link href="/servicos" className="font-semibold text-brand hover:underline">
            Veja a página de serviços
          </Link>
          .
        </p>
      </section>
    </>
  );
}