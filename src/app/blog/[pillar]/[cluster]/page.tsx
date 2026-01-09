import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/metadata";
import {
  getClusterBySlugs,
  getClusterStaticParams,
  getPillarBySlug,
  getClusterJsonLd,
} from "@/lib/pillars";

type ClusterPageProps = {
  params: Promise<{ pillar: string; cluster: string }>;
};

export function generateStaticParams() {
  return getClusterStaticParams();
}

export async function generateMetadata({ params }: ClusterPageProps): Promise<Metadata> {
  const { pillar: pillarSlug, cluster: clusterSlug } = await params;
  const cluster = getClusterBySlugs(pillarSlug, clusterSlug);
  if (!cluster) {
    return {};
  }
  return buildPageMetadata(cluster.metadata);
}

export default async function ClusterPage({ params }: ClusterPageProps) {
  const { pillar: pillarSlug, cluster: clusterSlug } = await params;
  const cluster = getClusterBySlugs(pillarSlug, clusterSlug);
  const pillar = getPillarBySlug(pillarSlug);

  if (!cluster || !pillar) {
    notFound();
  }

  const ClusterComponent = cluster.component;
  const jsonLd = getClusterJsonLd(pillar.slug, cluster.slug);

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      ) : null}
      <ClusterComponent />
    </>
  );
}

