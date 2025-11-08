import { HeroSection } from "@/components/hero-section";

// This page remains a Server Component, importing the HeroSection Server Component
// which correctly encapsulates the Client Component form.
export default function Home() {
  return (
    <>
      <HeroSection />
      {/* Future sections will go here: Services, Projects, etc. */}
    </>
  );
}