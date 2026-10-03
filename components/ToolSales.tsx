// components/ToolSales.tsx — página de venda genérica, alimentada por lib/tools.ts
import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import type { Sales, Tool } from '@/lib/tools';

function Accent({ text, accent }: { text: string; accent?: string }) {
  if (!accent || !text.includes(accent)) return <>{text}</>;
  const [before, after] = text.split(accent);
  return (
    <>
      {before}
      <span className="text-brand">{accent}</span>
      {after}
    </>
  );
}

function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-semibold">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

function Cta({
  href,
  variant = 'primary',
  children,
}: {
  href: string;
  variant?: 'primary' | 'outline';
  children: ReactNode;
}) {
  const external = href.startsWith('http');
  const cls =
    variant === 'primary'
      ? 'inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover hover:shadow-[0_0_35px_-8px] hover:shadow-brand'
      : 'inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-brand/50 hover:text-brand';
  return (
    <Link
      href={href}
      className={cls}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {children}
    </Link>
  );
}

export default function ToolSales({ tool, sales }: { tool: Tool; sales: Sales }) {
  const { demo } = sales;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-16 pt-20 text-center md:pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-130 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.16),transparent_62%)]"
        />
        <div className="relative mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            {sales.eyebrow}
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            <Accent text={sales.headline} accent={sales.headlineAccent} />
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            {sales.subheadline}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Cta href={sales.primaryCta.href}>
              {sales.primaryCta.label}
              <ArrowRight size={16} aria-hidden />
            </Cta>
            {sales.secondaryCta && (
              <Cta href={sales.secondaryCta.href} variant="outline">
                {sales.secondaryCta.label}
              </Cta>
            )}
          </div>
          {sales.note && <p className="mt-4 text-xs text-muted-foreground">{sales.note}</p>}
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <dl className="grid divide-y divide-border rounded-2xl border border-border bg-card sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {sales.stats.map((s) => (
            <div key={s.label} className="p-6 text-center">
              <dt className="font-display text-3xl font-extrabold text-brand">{s.value}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* PROBLEMA */}
      <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
        <h2 className="text-balance font-display text-2xl font-bold md:text-4xl">
          {sales.problem.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{sales.problem.text}</p>
      </section>

      {/* O QUE FAZ */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-8 font-display text-2xl font-bold md:text-3xl">{sales.featuresTitle}</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {sales.features.map((f, i) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-sm font-bold text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEMONSTRAÇÃO */}
      {demo && (
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold text-brand">{demo.eyebrow}</p>
              <h2 className="mt-3 text-balance font-display text-2xl font-bold md:text-4xl">
                <Accent text={demo.title} accent={demo.titleAccent} />
              </h2>
              <ul className="mt-6 space-y-3">
                {demo.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
                      <Check size={12} aria-hidden />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-[0_0_70px_-40px] shadow-brand/60"
              role="img"
              aria-label={`Exemplo de conversa com ${demo.botName}`}
            >
              <div className="flex items-center gap-3 border-b border-border p-4">
                <span className="grid size-9 place-items-center rounded-full bg-brand text-sm font-bold text-white">
                  NP
                </span>
                <div>
                  <p className="text-sm font-semibold">{demo.botName}</p>
                  <p className="text-xs text-muted-foreground">online agora</p>
                </div>
              </div>
              <div className="space-y-3 p-4">
                {demo.chat.map((m, i) => (
                  <div
                    key={i}
                    className={
                      m.from === 'user'
                        ? 'ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-elevated px-4 py-2.5 text-sm'
                        : 'w-fit max-w-[85%] rounded-2xl rounded-tl-sm border border-brand/20 bg-brand/10 px-4 py-2.5 text-sm'
                    }
                  >
                    <Rich text={m.text} />
                  </div>
                ))}
                <p className="pt-1 text-center text-xs text-muted-foreground">{demo.caption}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PARA QUEM É */}
      {sales.audience && (
        <section className="mx-auto max-w-3xl px-6 pb-20 text-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl">Para quem é</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {sales.audience.map((a) => (
              <span
                key={a}
                className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium"
              >
                {a}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <h2 className="mb-6 font-display text-2xl font-bold md:text-3xl">Perguntas frequentes</h2>
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {sales.faq.map(({ q, a }) => (
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
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-2xl border border-brand/40 bg-card p-8 text-center shadow-[0_0_70px_-35px] shadow-brand/60 md:p-12">
          <h2 className="font-display text-2xl font-bold md:text-3xl">{sales.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">{sales.cta.text}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Cta href={sales.primaryCta.href}>
              {sales.primaryCta.label}
              <ArrowRight size={16} aria-hidden />
            </Cta>
            <Cta href={tool.href} variant="outline">
              Abrir {tool.title}
            </Cta>
          </div>
        </div>
      </section>
    </>
  );
}