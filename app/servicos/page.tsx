// app/servicos/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Globe, LayoutDashboard, Workflow, Mail } from 'lucide-react';
import { tools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Sites institucionais, micro-SaaS e automações sob medida, feitos por quem já tem produtos próprios no ar.',
};

const MAIL = 'contato@acaoleve.com.br';
const mailto = `mailto:${MAIL}?subject=${encodeURIComponent('Orçamento de projeto')}`;

const services = [
  {
    icon: Globe,
    title: 'Sites institucionais',
    text: 'Site rápido, responsivo e pronto para o Google, para empresas, profissionais e instituições.',
  },
  {
    icon: LayoutDashboard,
    title: 'Micro-SaaS e sistemas sob medida',
    text: 'Do painel interno ao produto com login e cobrança. Você descreve o problema, eu entrego o sistema.',
  },
  {
    icon: Workflow,
    title: 'Automações e integrações',
    text: 'WhatsApp, IA e ferramentas que você já usa trabalhando juntas, sem tarefa repetitiva.',
  },
];

const steps = [
  { title: 'Conversa', text: 'Entendo o problema, o público e o que precisa funcionar primeiro.' },
  { title: 'Proposta', text: 'Escopo, prazo e valor por escrito, antes de qualquer código.' },
  { title: 'Desenvolvimento', text: 'Entregas curtas, para você ver e opinar ao longo do caminho.' },
  { title: 'Entrega e suporte', text: 'Publicação no ar e acompanhamento depois da entrega.' },
];

// REVISAR: respostas abaixo são texto-base, ajuste à sua política real.
const faq = [
  {
    q: 'Quanto custa?',
    a: 'Depende do escopo. Descreva o projeto e eu envio uma proposta com valor e prazo.',
  },
  {
    q: 'Quanto tempo leva?',
    a: 'Sites simples costumam sair mais rápido que sistemas com login e pagamentos. O prazo vem na proposta.',
  },
  {
    q: 'O código fica comigo?',
    a: 'Isso fica definido na proposta, antes de começar.',
  },
  {
    q: 'Tem manutenção depois da entrega?',
    a: 'Sim, posso continuar cuidando do projeto. Isso também fica definido na proposta.',
  },
];

export default function ServicosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-16 pt-20 md:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-110 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.14),transparent_62%)]"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight md:text-6xl">
            Seu site ou sistema sob medida, feito por quem lança produtos próprios.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Sites institucionais, micro-SaaS e automações. Conversa direta, entregas curtas e
            projeto no ar.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={mailto}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover"
            >
              <Mail size={16} aria-hidden />
              Pedir orçamento
            </Link>
            <Link
              href="#portfolio"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-brand/50 hover:text-brand"
            >
              Ver o que já está no ar
            </Link>
          </div>
        </div>
      </section>

      {/* O QUE EU FAÇO */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-8 font-display text-2xl font-bold md:text-3xl">O que eu faço</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <Icon size={22} aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFÓLIO VIVO */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="font-display text-2xl font-bold md:text-3xl">Produtos que já estão no ar</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Cada ferramenta abaixo foi projetada, programada e publicada por mim. É o tipo de
          trabalho que posso fazer para você.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map(({ id, title, category, href, icon: Icon }) => (
            <Link
              key={id}
              href={href}
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition hover:border-brand/40"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                <Icon size={18} aria-hidden />
              </span>
              <span className="flex-1">
                <span className="block font-semibold">{title}</span>
                <span className="block text-xs text-muted-foreground">{category}</span>
              </span>
              <ArrowRight
                size={16}
                aria-hidden
                className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-brand"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-8 font-display text-2xl font-bold md:text-3xl">Como funciona</h2>
        <ol className="grid gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-sm font-bold text-brand">Etapa {i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="mb-6 font-display text-2xl font-bold md:text-3xl">Perguntas frequentes</h2>
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {faq.map(({ q, a }) => (
            <details key={q} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {q}
                <span
                  aria-hidden
                  className="text-brand transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-2xl border border-brand/40 bg-card p-8 text-center shadow-[0_0_70px_-35px] shadow-brand/60 md:p-12">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Conte o que você precisa
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Mande uma mensagem com a ideia, mesmo que ainda esteja confusa. Eu respondo com os
            próximos passos.
          </p>
          <Link
            href={mailto}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover"
          >
            <Mail size={16} aria-hidden />
            {MAIL}
          </Link>
        </div>
      </section>
    </>
  );
}