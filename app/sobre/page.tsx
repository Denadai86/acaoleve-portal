// app/sobre/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, ShieldCheck, Zap } from 'lucide-react';
import { tools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça a missão da Ação Leve em simplificar a produtividade digital com Micro-SaaS brasileiros.',
};

const pillars = [
  {
    icon: Zap,
    title: 'Velocidade',
    text: 'As ferramentas carregam instantaneamente. Sem telas de loading infinitas.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacidade',
    text: "Seus dados são seus. Adoto práticas de 'Privacy by Design' em tudo.",
  },
  {
    icon: Target,
    title: 'Foco',
    text: 'Resolvo um problema de cada vez. Sem funcionalidades inúteis.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-16 pt-20 text-center md:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-110 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.14),transparent_62%)]"
        />
        <div className="relative mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            Sobre a Ação Leve
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            Simplificando o <span className="text-brand">digital</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A missão é criar ferramentas que resolvem problemas complexos com soluções leves,
            rápidas e diretas ao ponto.
          </p>
        </div>
      </section>

      {/* QUEM SOU */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">Quem sou</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A <strong className="text-foreground">Ação Leve</strong> nasceu da frustração com
              softwares inchados, caros e complexos. Acredito que a tecnologia deve trabalhar para
              você, e não o contrário.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Desenvolvo <strong className="text-foreground">Micro-SaaS</strong>: pequenas
              ferramentas poderosas que fazem uma única coisa, mas a fazem com excelência.
            </p>
          </div>

          {/* Painel com as ferramentas do portfólio */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_0_70px_-40px] shadow-brand/60 md:p-8">
            <p className="font-display text-lg font-bold">
              {tools.length} micro-SaaS, cada um com um propósito
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {tools.map(({ id, title, icon: Icon }) => (
                <div key={id} className="flex flex-col items-center gap-2 text-center">
                  <span className="grid aspect-square w-full place-items-center rounded-xl border border-border bg-elevated text-brand">
                    <Icon size={26} aria-hidden />
                  </span>
                  <span className="text-xs text-muted-foreground">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-8 font-display text-2xl font-bold md:text-3xl">Pilares</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-2xl border border-brand/40 bg-card p-8 text-center shadow-[0_0_70px_-35px] shadow-brand/60 md:p-12">
          <h2 className="font-display text-2xl font-bold md:text-3xl">Pronto para acelerar?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Explore as ferramentas gratuitas e premium.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#ferramentas"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover"
            >
              Ver ferramentas
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="/servicos"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-brand/50 hover:text-brand"
            >
              Precisa de algo sob medida?
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}