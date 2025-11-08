// src/app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { TrustStripMobileCarousel } from "@/components/trust-strip-mobile-carousel"; 
import { ServiceExpertiseGrid } from "@/components/service-expertise-grid";
import { QaProcessModule } from "@/components/qa-process-module";
import { AccreditationsStrip } from "@/components/accreditations-strip"; 

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
      
      {/* --- Accreditations / Logos Strip --- */}
      <AccreditationsStrip />
    </>
  );
}