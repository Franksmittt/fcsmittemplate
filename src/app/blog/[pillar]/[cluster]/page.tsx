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
  params: { pillar: string; cluster: string };
};

export function generateStaticParams() {
  return getClusterStaticParams();
}

export function generateMetadata({ params }: ClusterPageProps): Metadata {
  const cluster = getClusterBySlugs(params.pillar, params.cluster);
  if (!cluster) {
    return {};
  }
  return buildPageMetadata(cluster.metadata);
}

export default function ClusterPage({ params }: ClusterPageProps) {
  const cluster = getClusterBySlugs(params.pillar, params.cluster);
  const pillar = getPillarBySlug(params.pillar);

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <ClusterComponent />
    </>
  );
}

