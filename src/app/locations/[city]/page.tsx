import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaFinalStrip } from "@/components/cta-final-strip";
import { AccreditationsStrip } from "@/components/accreditations-strip";
import { MapPin, CheckSquare, Shield, Phone } from "lucide-react";
import { serviceLocations, getLocation } from "@/data/locations";
import { siteConfig } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

// 1. Static Params Generation
export function generateStaticParams() {
  return serviceLocations.map((location) => ({
    city: location.slug,
  }));
}

// 2. Dynamic SEO Metadata
export function generateMetadata({ params }: { params: { city: string } }) {
  const loc = getLocation(params.city);
  if (!loc) return {};

  return buildPageMetadata({
    title: loc.metaTitle,
    description: loc.metaDescription,
    path: `/locations/${loc.slug}`,
  });
}

// 3. The Local Landing Page Component
export default function LocationPage({ params }: { params: { city: string } }) {
  const loc = getLocation(params.city);
  if (!loc) notFound();

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Painting & Waterproofing in ${loc.name}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": loc.name,
        "addressRegion": "Gauteng",
        "addressCountry": "ZA"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": loc.name
    }
  };

  return (
    <div className="bg-primary pt-24 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* HERO SECTION */}
      <section className="relative py-24 px-4 bg-gray-900 border-b-4 border-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-tertiary mb-4">
            <MapPin className="w-5 h-5" />
            <span className="uppercase tracking-widest font-bold">{loc.name} Contractor</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl mb-6">
            Reliable Asset Maintenance in {loc.name}.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-8">
            We provide owner-supervised structural repairs, waterproofing, and painting services 
            specifically for commercial and body corporate assets near 
            <span className="text-white font-semibold"> {loc.landmarks.join(", ")}</span>.
          </p>
          <Button asChild className="bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 px-8">
            <Link href="/contact">Get a {loc.name} Quote &rarr;</Link>
          </Button>
        </div>
      </section>

      {/* LOCAL SERVICE GRID */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900 rounded-xl border-t-4 border-tertiary">
              <Shield className="w-10 h-10 text-tertiary mb-4" />
              <h3 className="text-2xl font-bold mb-2">{loc.name} Waterproofing</h3>
              <p className="text-gray-400">Guaranteed flat roof and balcony systems designed for the specific climate challenges of {loc.name}.</p>
            </div>
            <div className="p-8 bg-gray-900 rounded-xl border-t-4 border-secondary">
              <CheckSquare className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Independent QA</h3>
              <p className="text-gray-400">We bring independent inspectors to every site in {loc.name} to verify film thickness and adhesion.</p>
            </div>
            <div className="p-8 bg-gray-900 rounded-xl border-t-4 border-tertiary">
              <Phone className="w-10 h-10 text-tertiary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Fast Response</h3>
              <p className="text-gray-400">Our teams are active in {loc.landmarks[0]} and surrounding areas daily, ensuring rapid assessment times.</p>
            </div>
          </div>
        </div>
      </section>

      <AccreditationsStrip />
      <CtaFinalStrip />
    </div>
  );
}
