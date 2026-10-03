// components/LegalLayout.tsx — moldura única para páginas legais (privacidade, cookies, termos)
import type { ReactNode } from 'react';

export const legalLink = 'font-semibold text-brand hover:underline';

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-16 md:pt-24">
      <header className="mb-10 border-b border-border pb-8">
        <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-5xl">{title}</h1>
        {updated && (
          <p className="mt-4 text-sm text-muted-foreground">
            Última atualização: <span className="text-brand">{updated}</span>
          </p>
        )}
      </header>
      <div className="space-y-10 leading-relaxed text-muted-foreground [&_strong]:text-foreground">
        {children}
      </div>
    </article>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 font-display text-xl font-bold text-foreground md:text-2xl">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function LegalNote({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-lg border-l-4 border-brand bg-card p-4 text-sm">{children}</p>
  );
}

export const legalList = 'list-disc space-y-2 pl-6 marker:text-brand';