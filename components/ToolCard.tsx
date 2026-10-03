// components/ToolCard.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toolLink, type Tool } from '@/lib/tools';
import ToolShot from '@/components/ToolShot';

export default function ToolCard({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  const { href, external } = toolLink(tool);

  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2',
        tool.featured
          ? 'border-brand/50 shadow-[0_0_60px_-30px] shadow-brand/60 hover:border-brand hover:shadow-brand/70 lg:col-span-2'
          : 'border-border hover:border-brand/40 hover:shadow-[0_0_50px_-25px] hover:shadow-brand/50',
      )}
    >
      {tool.badge && (
        <span className="absolute left-4 top-4 z-10 rounded-md bg-brand px-2.5 py-1 text-[11px] font-bold tracking-wide text-white">
          {tool.badge}
        </span>
      )}

      <div
        className={cn(
          'relative overflow-hidden border-b border-border bg-elevated',
          tool.featured ? 'aspect-video' : 'aspect-16/8',
        )}
      >
        <ToolShot id={tool.id} title={tool.title} />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
            <Icon size={20} aria-hidden />
          </span>
          <h3 className="font-display text-lg font-bold">{tool.title}</h3>
          <span className="ml-auto rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
            {tool.category}
          </span>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {tool.description}
        </p>

        <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-all group-hover:gap-3">
          {external ? 'Acessar' : 'Saiba mais'}
          <ArrowRight size={16} aria-hidden />
        </span>
      </div>
    </Link>
  );
}
