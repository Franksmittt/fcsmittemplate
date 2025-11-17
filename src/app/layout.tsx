import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google"; // <-- This is the font
import "@/app/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/seo";

// FIX: Add 'display: swap' and EXPLICITLY set 'preload: true' for non-blocking optimization.
const inter = Inter({ subsets: ["latin"], display: "swap", preload: true });

const baseUrl = siteConfig.url.replace(/\/$/, "");
const defaultOgImage = `${baseUrl}/images/munyaka-midrand.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.shortName,
  title: {
    default: `${siteConfig.name} | Gauteng Painting & Waterproofing Experts`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "construction",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: baseUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Gauteng Painting & Waterproofing Experts`,
    description: siteConfig.description,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 628,
        alt: "Maverick Painting Contractors - Structural repairs, coatings and waterproofing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@maverickpainting",
    title: `${siteConfig.name} | Gauteng Painting & Waterproofing Experts`,
    description: siteConfig.description,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? {
          "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION,
        }
      : undefined,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: baseUrl,
    legalName: siteConfig.legalName,
    slogan: siteConfig.slogan,
    email: siteConfig.email,
    telephone: siteConfig.phoneNumber,
    areaServed: siteConfig.serviceAreas,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: siteConfig.address.latitude
      ? {
          "@type": "GeoCoordinates",
          latitude: siteConfig.address.latitude,
          longitude: siteConfig.address.longitude,
        }
      : undefined,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneNumber,
        contactType: "sales",
        areaServed: "ZA",
        availableLanguage: ["English"],
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Owner Supervised Painting, Structural Repairs & Waterproofing",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: baseUrl,
    },
    areaServed: siteConfig.serviceAreas,
    serviceType: [
      "Commercial & Industrial Painting",
      "Body Corporate Asset Maintenance",
      "Structural & Concrete Repairs",
      "Waterproofing & Damp Proofing",
      "High-Access Rope Painting",
    ],
  };

  return (
    <html lang="en-ZA">
      <body className={inter.className}>
        {/* The entire application content lives within the body tags */}

        <Header />

        {/* Main content wrapper. flex-1 ensures it pushes the footer down if content is short. */}

        <main className="flex-grow">
          {children}
        </main>

        {/* The Footer is placed outside the main content area for site-wide consistency */}
        <Footer />
        <Script id="organization-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="service-schema" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(serviceJsonLd)}
        </Script>
      </body>
    </html>
  );
}