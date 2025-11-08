import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroContactForm } from "@/components/hero-contact-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// This is a Server Component, optimized for speed and static marketing copy.
export function HeroSection() {
  const usps = [
    "Owner Supervised Daily on ALL Projects", 
    "Independent 3rd Party Quality Assurance", 
    "Manufacturer & Workmanship Guarantees Issued", 
    "Structural Repair & Waterproofing Expertise", 
  ];

  return (
    // Ensure consistent horizontal padding with px-4 and reduced vertical padding
    <section className="bg-primary/95 py-16 flex items-center px-4"> 
      <div className="container mx-auto"> 
        
        <div className="grid lg:grid-cols-2 gap-8 items-center"> 
          
          {/* Left Column: Heading and USP Messaging */}
          <div className="space-y-6 text-primary-foreground"> 
            
            {/* Primary Heading (Fixed: Don't -> Don&apos;t) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"> 
              Don&apos;t Just Paint It.{" "} {/* <--- FIXED APOSTROPHE */}
              <span className="text-secondary block mt-2">
                Solve It From The Structure Up.
              </span>
            </h1>
            
            {/* USP List */}
            <ul className="space-y-3 text-lg font-medium"> 
              {usps.map((usp, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 mr-3 text-tertiary mt-1 flex-shrink-0" /> 
                  {usp}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button asChild 
              className="mt-4 text-base font-bold h-10 bg-tertiary hover:bg-secondary text-primary">
              <Link href="/our-process-independent-qa" className="flex items-center"> 
                Verify Our 3rd Party QA Process
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
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