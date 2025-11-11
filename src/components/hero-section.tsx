// src/components/hero-section.tsx
import Link from "next/link";
import { HeroContactForm } from "@/components/hero-contact-form";
// This is a Server Component, optimized for initial load speed.
export function HeroSection() {
  
  // Removed unused 'usps' array.
  return (
    // The pt-20 ensures the content starts below the fixed header
    <section className="relative pt-32 pb-12 overflow-hidden bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:items-start lg:pt-8">
            
            {/* --- LEFT COLUMN: Marketing Headline & CTA (Server-Side Content) --- */}
            <div className="text-center md:text-left p-4">
       
 
                 <h1 className="text-4xl sm:text-5xl font-extrabold text-primary leading-tight mb-3 drop-shadow-sm uppercase tracking-tight">
                    Your High-Access Asset Maintenance Partner.
                </h1>
                <p className="text-lg sm:text-xl text-primary max-w-xl mx-auto md:mx-0 mb-3 font-semibold">
          
 
                     The proven specialist, Professional Paint Contractors for structural repair and complex high-rise coating projects.
                </p>
                <p className="text-base text-gray-700 max-w-xl mx-auto md:mx-0 mb-6 font-medium">
                    We eliminate 
risk on multi-million rand assets 
with Independent, 3rd Party Quality Assurance (QA) on every project.
                </p>
                
                {/* Non-interactive CTA Button (using basic HTML/Tailwind classes to match the design) 
                   For a link that doesn't need to be a shadcn Button/Client Component */}
                <Link href="/our-process-independent-qa" // <-- FIX APPLIED HERE
  
       
                     className="inline-block bg-primary hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 text-lg focus:outline-none focus:ring-4 focus:ring-secondary/50"
                >
                    View Our Process
    
               
  </Link>
            </div>

  
           {/* --- RIGHT COLUMN: Contact Form (Client Component) --- */}
            <div className="mx-auto w-full max-w-sm pt-4 md:pt-0"> 
                <HeroContactForm />
            </div>
        
</div>
    </section>
  );
}