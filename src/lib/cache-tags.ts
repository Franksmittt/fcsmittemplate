export const GLOBAL_SITEMAP_TAG = "sitemap:global";

export const pillarTag = (slug: string) => `pillar:${slug}`;

export const clusterTag = (pillarSlug: string, clusterSlug: string) =>
  `pillar:${pillarSlug}:cluster:${clusterSlug}`;

