// src/app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { TrustStripMobileCarousel } from "@/components/trust-strip-mobile-carousel"; 
import { ServiceExpertiseGrid } from "@/components/service-expertise-grid";
import { QaProcessModule } from "@/components/qa-process-module"; 

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* --- Trust Strip / Mobile Carousel --- */}
      <TrustStripMobileCarousel />

      {/* --- Service Expertise Grid --- */}
      <ServiceExpertiseGrid />
      
      {/* --- QA Process / De-Risking Engine --- */}
      <QaProcessModule />
      
      {/* --- Placeholder for Accreditations (Next Section) --- */}
      <section className="h-[50vh] flex items-center justify-center bg-primary">
        <p className="text-white">
          Accreditations / Logos Strip Placeholder
        </p>
      </section>
      
    </>
  );
}