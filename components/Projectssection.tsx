// components/ProjectsSection.tsx
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { projects, type Project } from '@/lib/projects';
import { cn } from '@/lib/utils';

const MAIL = 'contato@acaoleve.com.br';
const mailto = `mailto:${MAIL}?subject=${encodeURIComponent('Orçamento de projeto')}`;

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const live = project.status === 'No ar';

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
          <Icon size={22} aria-hidden />
        </span>
        <span
          className={cn(
            'rounded-full px-3 py-1 text-xs font-semibold',
            live ? 'bg-emerald-500/15 text-emerald-400' : 'bg-brand/15 text-brand',
          )}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {project.kind}
      </p>
      <h3 className="mt-1 font-display text-xl font-bold">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-5 flex-1 space-y-2.5">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand/15 text-brand">
              <Check size={12} aria-hidden />
            </span>
            {h}
          </li>
        ))}
      </ul>

      {project.href && (
        <Link
          href={project.href}
          target="_blank"
          rel="noopener"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
        >
          Visitar o site
          <ArrowUpRight size={16} aria-hidden />
        </Link>
      )}
    </article>
  );
}

export default function ProjectsSection({
  title,
  text,
  showCta = false,
}: {
  title: string;
  text: string;
  showCta?: boolean;
}) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <h2 className="font-display text-2xl font-bold md:text-3xl">{title}</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">{text}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      {showCta && (
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-hover"
          >
            Ver serviços
            <ArrowRight size={16} aria-hidden />
          </Link>
          <Link
            href={mailto}
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-brand/50 hover:text-brand"
          >
            Pedir orçamento
          </Link>
        </div>
      )}
    </section>
  );
}