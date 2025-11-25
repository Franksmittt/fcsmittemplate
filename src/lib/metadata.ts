import type { Metadata } from "next";

import { siteConfig } from "@/lib/seo";

export type BuildMetadataParams = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

const baseUrl = siteConfig.url.replace(/\/$/, "");

const toAbsoluteUrl = (value?: string) => {
  if (!value) {
    return `${baseUrl}${siteConfig.defaultOgImage}`;
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `${baseUrl}${value.startsWith("/") ? value : `/${value}`}`;
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
  image,
}: BuildMetadataParams): Metadata {
  // Ensure canonical URLs have no trailing slash (matching next.config.mjs trailingSlash: false)
  const normalizedPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  const canonical = `${baseUrl}${normalizedPath}`;
  const ogImage = toAbsoluteUrl(image);

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: siteConfig.twitterHandle,
      images: [ogImage],
    },
  };
}

