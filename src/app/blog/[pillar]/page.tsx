import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import {
  getPillarBySlug,
  getPillarStaticParams,
  getPillarJsonLd,
} from "@/lib/pillars";

type PillarPageProps = {
  params: { pillar: string };
};

export function generateStaticParams() {
  return getPillarStaticParams();
}

export function generateMetadata({ params }: PillarPageProps): Metadata {
  const pillar = getPillarBySlug(params.pillar);
  if (!pillar) {
    return {};
  }
  return buildPageMetadata(pillar.metadata);
}

export default function PillarPage({ params }: PillarPageProps) {
  const pillar = getPillarBySlug(params.pillar);
  if (!pillar) {
    notFound();
  }

  const PillarComponent = pillar.component;

  const jsonLd = getPillarJsonLd(pillar.slug);

  return (
    <>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <PillarComponent />
    </>
  );
}

