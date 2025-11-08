// src/components/hero-section.tsx
import { CheckCircle2 } from "lucide-react"; // Only CheckCircle2 remains
import { HeroContactForm } from "@/components/hero-contact-form"; 
// Link and Button imports removed

// This is a Server Component.
export function HeroSection() {
  const usps = [
    "Owner Supervised Daily on ALL Projects", 
    "Independent 3rd Party Quality Assurance", 
    "Manufacturer & Workmanship Guarantees Issued", 
    "Structural Repair & Waterproofing Expertise", 
  ];

  return (
    // Background is Primary/Dark. Padding is compacted.
    <section className="bg-primary/95 py-16 flex items-center px-4"> 
      <div className="container mx-auto">
        
        {/* Layout: Single Row, Two Columns (Text Left, Form Right) */}
        <div className="grid lg:grid-cols-2 gap-12 items-center"> 
          
          {/* Left Column: Heading and USP Messaging */}
          <div className="space-y-6 text-primary-foreground"> 
            
            {/* Primary Heading: CONCISE MESSAGE */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug"> 
              Solve It From The Structure Up. 
            </h1>
            
            <p className="text-xl max-w-xl">
              As asset maintenance partners, we eliminate core defects like spalling and damp,
              providing verifiable quality assurance and long-term guarantees.
            </p>

            {/* USP List */}
            <ul className="space-y-3 pt-2 text-base font-medium"> 
              {usps.map((usp, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-secondary mt-1 flex-shrink-0" /> 
                  {usp}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Contact Form (Client Component) */}
          <div className="w-full max-w-lg mx-auto">
            <HeroContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}