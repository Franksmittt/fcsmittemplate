import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { getPillarBySlug } from "@/lib/pillars";

type PillarLayoutProps = {
  children: ReactNode;
  params: Promise<{ pillar: string }>;
};

export default async function PillarLayout({ children, params }: PillarLayoutProps) {
  const { pillar: pillarSlug } = await params;
  const pillar = getPillarBySlug(pillarSlug);

  if (!pillar) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-primary/5 text-primary">
      <div className="bg-gray-950 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-3 text-sm uppercase tracking-wide">
            <Link href="/blog" className="text-secondary font-semibold">
              ← All Guides
            </Link>
            <span className="text-gray-500">/</span>
            <span className="font-semibold">{pillar.title}</span>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            {pillar.clusters.map((cluster) => (
              <Link
                key={cluster.slug}
                href={`/blog/${pillar.slug}/${cluster.slug}`}
                className="px-3 py-1 rounded-full border border-white/20 hover:border-secondary hover:text-secondary transition-colors"
              >
                {cluster.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

