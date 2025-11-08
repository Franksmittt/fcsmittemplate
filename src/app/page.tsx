// src/app/page.tsx
import { HeroSection } from "@/components/hero-section";
import { TrustStrip } from "@/components/trust-strip";
import { ServiceGrid } from "@/components/service-grid";
import { AccreditationsStrip } from "@/components/accreditations-strip"; // <-- NEW IMPORT

export default function Home() {
  return (
    <>
      {/* Separator Line */}
      <div 
        className="w-full"
        style={{
          height: '1px',
          backgroundColor: '#A9D834', // Tertiary color
        }}
      ></div>
      
      <HeroSection />
      <TrustStrip /> 
      <ServiceGrid /> 
      
      {/* --- ACCREDITATIONS & TRUST --- */}
      <AccreditationsStrip />
      
      {/* Future sections below */}
    </>
  );
}