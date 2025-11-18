import type { MetadataRoute } from "next";
import { siteConfig, defaultChangeFrequency } from "@/lib/seo";
import { projectCaseStudies } from "@/data/projects";
import { getPillars } from "@/lib/pillars";

const baseUrl = siteConfig.url.replace(/\/$/, "");

const normalizePath = (path: string) =>
  path === "/" ? baseUrl : `${baseUrl}${path}`;

const getPrimaryEntries = (now: Date): MetadataRoute.Sitemap =>
  siteConfig.primaryPages.map((path) => ({
    url: normalizePath(path),
    changeFrequency: defaultChangeFrequency,
    priority: path === "/" ? 1 : 0.7,
    lastModified: now,
  }));

const getProjectEntries = async (now: Date): Promise<MetadataRoute.Sitemap> =>
  projectCaseStudies.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
    lastModified: project.lastModified ? new Date(project.lastModified) : now,
  }));

const getPillarEntries = (now: Date): MetadataRoute.Sitemap => {
  const pillars = getPillars();

  return pillars.flatMap((pillar) => [
    {
      url: normalizePath(pillar.metadata.path),
      changeFrequency: "weekly" as const,
      priority: 0.75,
      lastModified: now,
    },
    ...pillar.clusters.map((cluster) => ({
      url: normalizePath(cluster.metadata.path),
      changeFrequency: "weekly" as const,
      priority: 0.65,
      lastModified: now,
    })),
  ]);
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const [projectEntries] = await Promise.all([getProjectEntries(now)]);

  return [
    ...getPrimaryEntries(now),
    ...getPillarEntries(now),
    ...projectEntries,
  ];
}

