import type { MetadataRoute } from "next";
import { siteConfig, defaultChangeFrequency } from "@/lib/seo";
import { projectCaseStudies } from "@/data/projects";

const baseUrl = siteConfig.url.replace(/\/$/, "");

const normalizePath = (path: string) =>
  path === "/" ? baseUrl : `${baseUrl}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const primaryEntries: MetadataRoute.Sitemap = siteConfig.primaryPages.map(
    (path) => ({
      url: normalizePath(path),
      changeFrequency: defaultChangeFrequency,
      priority: path === "/" ? 1 : 0.7,
      lastModified: now,
    })
  );

  const projectEntries: MetadataRoute.Sitemap = projectCaseStudies.map(
    (project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      changeFrequency: "yearly",
      priority: 0.6,
      lastModified: project.lastModified
        ? new Date(project.lastModified)
        : now,
    })
  );

  return [...primaryEntries, ...projectEntries];
}

