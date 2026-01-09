import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import {
  getPillarBySlug,
  getPillarStaticParams,
  getPillarJsonLd,
} from "@/lib/pillars";

type PillarPageProps = {
  params: Promise<{ pillar: string }>;
};

export function generateStaticParams() {
  return getPillarStaticParams();
}

export async function generateMetadata({ params }: PillarPageProps): Promise<Metadata> {
  const { pillar: pillarSlug } = await params;
  const pillar = getPillarBySlug(pillarSlug);
  if (!pillar) {
    return {};
  }
  return buildPageMetadata(pillar.metadata);
}

export default async function PillarPage({ params }: PillarPageProps) {
  const { pillar: pillarSlug } = await params;
  const pillar = getPillarBySlug(pillarSlug);
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      ) : null}
      <PillarComponent />
    </>
  );
}

