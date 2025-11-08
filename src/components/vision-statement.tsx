// src/components/vision-statement.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// This is a Server Component, focusing on delivering visual and narrative impact.
export function VisionStatement() {
  return (
    <section 
      className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center p-4"
      style={{ 
        // --- Placeholder for Dramatic Background Image ---
        // REPLACE THIS WITH YOUR HIGH-RESOLUTION, LUXURY ARCHITECTURE IMAGE.
        // The image must be dark enough for the white text to contrast.
        backgroundImage: `url('/images/architectural-bg.jpg')`, 
      }}
    >
      {/* --- Overlay for Text Clarity and Mood --- */}
      {/* Dark semi-transparent overlay using Primary color */}
      <div className="absolute inset-0 bg-primary/70 backdrop-blur-[1px]"></div> 
      
      {/* --- Content (Focused and Centered) --- */}
      <div className="container mx-auto relative z-10 text-primary-foreground text-center max-w-4xl">
        
        {/* Subtitle / Quote (Storyteller's Heart) */}
        <p className="text-xl md:text-2xl font-light italic mb-4 opacity-90">
          &ldquo;Providing the highest quality painting and most professional services.&rdquo;
        </p>

        {/* Headline (Architect's Precision) */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight uppercase">
          Pinacle of Architectural Perfection.
        </h2>

        {/* CTA (Reiterating Expertise) */}
        <div className="mt-8">
            <Button asChild 
                className="text-lg font-bold h-12 bg-secondary hover:bg-tertiary text-primary shadow-lg">
                <Link href="/about-us" className="flex items-center">
                    Discover Our 50 Years of Combined Expertise
                    <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}