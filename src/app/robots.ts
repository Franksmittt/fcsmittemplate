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
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: [`${baseUrl}/sitemap.xml`],
    host: baseUrl,
  };
}

