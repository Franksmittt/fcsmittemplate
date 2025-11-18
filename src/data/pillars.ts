import pillarsJson from "@/content/pillars.json";
import type { LucideIcon } from "lucide-react";
import { Layers, Droplet, Shield, Factory, ShieldCheck, Wrench } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Droplet,
  Shield,
  Factory,
  ShieldCheck,
  Wrench,
};

export type PillarContent = typeof pillarsJson["pillars"][number];
export type ClusterContent = PillarContent["clusters"][number];

export function getPillarsData() {
  return pillarsJson.pillars.map((pillar) => ({
    ...pillar,
    icon: iconMap[pillar.icon] ?? Layers,
    clusters: pillar.clusters.map((cluster) => ({
      ...cluster,
      icon: iconMap[cluster.icon] ?? Layers,
    })),
  }));
}

export function getPillarContent(slug: string) {
  return getPillarsData().find((pillar) => pillar.slug === slug);
}

export function getClusterContent(pillarSlug: string, clusterSlug: string) {
  const pillar = getPillarContent(pillarSlug);
  if (!pillar) return undefined;
  return pillar.clusters.find((cluster) => cluster.slug === clusterSlug);
}

export function getPillarStaticParams() {
  return getPillarsData().map((pillar) => ({ pillar: pillar.slug }));
}

export function getClusterStaticParams() {
  return getPillarsData().flatMap((pillar) =>
    pillar.clusters.map((cluster) => ({
      pillar: pillar.slug,
      cluster: cluster.slug,
    }))
  );
}

