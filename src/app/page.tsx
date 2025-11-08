// src/app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { TrustStripMobileCarousel } from "@/components/trust-strip-mobile-carousel"; 
import { ServiceExpertiseGrid } from "@/components/service-expertise-grid";
import { CtaStripModule } from "@/components/cta-strip-module"; 
import { ProjectShowcaseModule } from "@/components/project-showcase-module"; 
import { QaProcessModule } from "@/components/qa-process-module"; // Position Swapped
import { AccreditationsStrip } from "@/components/accreditations-strip"; 

export default function Home() {
  return (
    <>
      <HeroSection />
      
      {/* --- Trust Strip / Mobile Carousel --- */}
      <TrustStripMobileCarousel />

      {/* --- Service Expertise Grid --- */}
      <ServiceExpertiseGrid />
      
      {/* --- HIGH-VALUE CTA STRIP --- */}
      <CtaStripModule />
      
      {/* NEW ORDERING:
        1. Project Showcase (Visual Proof)
        2. QA Process Module (The Mechanism)
      */}
      
      {/* 1. PROJECT SHOWCASE MODULE (Visual Proof / Hyper-Local SEO) */}
      <ProjectShowcaseModule /> 

      {/* 2. QA Process / De-Risking Engine (The Mechanism) */}
      <QaProcessModule /> 
      
      {/* --- Accreditations / Logos Strip --- */}
      <AccreditationsStrip />
    </>
  );
}