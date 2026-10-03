// app/ferramentas/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ToolSales from '@/components/ToolSales';
import { tools } from '@/lib/tools';

export const dynamicParams = false;

export function generateStaticParams() {
  return tools.filter((t) => t.sales).map((t) => ({ slug: t.id }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find((t) => t.id === slug);
  if (!tool?.sales) return {};
  return {
    title: `${tool.title}: ${tool.sales.headline}`,
    description: tool.sales.subheadline,
    alternates: { canonical: `/ferramentas/${tool.id}` },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = tools.find((t) => t.id === slug);
  const sales = tool?.sales;
  if (!tool || !sales) notFound();
  return <ToolSales tool={tool} sales={sales} />;
}