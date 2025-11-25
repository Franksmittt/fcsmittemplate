import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const getEnvironment = () =>
  process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? "development";

export default function robots(): MetadataRoute.Robots {
  const env = getEnvironment();
  const isProduction = env === "production";
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  if (!isProduction) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/_next/static/"], // Allow all pages and Next.js static resources (critical for rendering)
        disallow: ["/api/"], // Block API routes to prevent crawl budget waste
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`],
    host: baseUrl,
  };
}

