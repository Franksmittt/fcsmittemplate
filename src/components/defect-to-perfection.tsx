// src/components/defect-to-perfection.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

// This section tells a story of competence and luxury.
export function DefectToPerfection() {
  return (
    <section className="bg-white py-20 md:py-28 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT COLUMN: Narrative & Call to Action --- */}
          <div className="space-y-6">
            <p className="text-sm font-semibold tracking-widest uppercase text-tertiary">
              The Maverick Standard
            </p>
            
            {/* Headline: Uses a large, spaced-out font typical of luxury ads (Typographic Rhythm) */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-wide leading-tight">
              From Structural Defect to Architectural Asset.
            </h2>
            
            <p className="text-xl text-gray-700 max-w-xl">
              We specialize in the complex, high-stakes remediation that general painters avoid. 
              Our work begins with solving concrete spalling and waterproofing failures, securing your asset before the first coat of luxury paint is applied.
            </p>
            
            {/* Unique USP Highlight */}
            <div className="flex items-center space-x-3 pt-4">
              <FileCheck className="w-8 h-8 text-secondary" />
              <p className="text-lg font-semibold text-primary">
                Every project backed by **Independent 3rd Party QA** and Manufacturer Guarantees.
              </p>
            </div>

            {/* Final CTA to the high-value Structural Repair Page */}
            <Button asChild 
              className="mt-6 text-base font-bold h-10 bg-secondary hover:bg-tertiary text-primary shadow-md">
              <Link href="/services/structural-repairs" className="flex items-center">
                View Specialized Repair Portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* --- RIGHT COLUMN: Dramatic Image Showcase --- */}
          <div className="relative overflow-hidden rounded-lg shadow-2xl h-96 md:h-full min-h-[400px]">
            {/* Placeholder for Dramatic Before/After Image */}
            <div className="absolute inset-0 bg-gray-200">
                <span className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg font-semibold">
                    [Structural Repair Before/After Image Placeholder]
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}