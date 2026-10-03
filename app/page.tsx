// app/page.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ToolCard from '@/components/ToolCard';
import { tools } from '@/lib/tools';
import { FaXTwitter } from 'react-icons/fa6';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-16 pt-20 text-center md:pb-20 md:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-130 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.16),transparent_62%)]"
        />
        <div className="relative mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            Micro-SaaS brasileiros
          </span>

          <h1 className="mt-6 text-balance font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            Ferramentas leves para <span className="text-brand">problemas reais</span> do dia a
            dia.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Simples. Úteis. Feitas por quem entende do Brasil.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#ferramentas"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover hover:shadow-[0_0_35px_-8px] hover:shadow-brand"
            >
              Explorar ferramentas
            </Link>
            <Link
              href="https://x.com/AcaoLeve"
              target="_blank"
              rel="noopener"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-brand/50 hover:text-brand"
            >
            <FaXTwitter size={20} aria-hidden />
              Build in Public
            </Link>
          </div>
        </div>
      </section>

      {/* CATÁLOGO */}
      <section id="ferramentas" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* CTA SERVIÇOS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 md:flex-row md:items-center md:p-10">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              Precisa de um site ou sistema sob medida?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Desenvolvo sites institucionais, micro-SaaS e automações sob encomenda.
            </p>
          </div>
          <Link
            href="/servicos"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover"
          >
            Ver serviços
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
