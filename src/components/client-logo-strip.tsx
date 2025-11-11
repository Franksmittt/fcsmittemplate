// src/components/client-logo-strip.tsx
import React from 'react';
import { cn } from '@/lib/utils';
// The layout is a Server Component for performance.

// --- Data: Dealership Clients (Authority Signals) ---
const clientLogos = [
    { name: "Volkswagen" }, 
    { name: "Audi" },
    { name: "BMW" },
    { name: "Renault" },
    { name: "Hyundai" },
    // Removed specific brand colors for unified, monochromatic look
];

export function ClientLogoStrip() {
    // We duplicate the list to ensure a seamless, infinite scroll loop
    const doubledLogos = [...clientLogos, ...clientLogos];

    return (
        // Changed bg-primary to bg-gray-900 for subtle shade difference and added strong borders
        <section className="bg-gray-900 py-12 px-4 border-t-8 border-secondary border-b-2 border-primary/50"> 
            <div className="max-w-7xl mx-auto overflow-hidden">
                
                {/* Authority Headline (Wording Corrected) */}
                <header className="text-center mb-10">
                    <p className="text-lg font-bold tracking-wider uppercase text-tertiary">
                        Verifiable Project Experience
                    </p>
                    {/* FIXED WORDING: Emphasize 'Work Completed For' instead of 'Official Contractors' */}
                    <h3 className="text-3xl font-extrabold mt-1 text-white">
                        Work Completed For Leading Dealerships
                    </h3>
                </header>

                {/* Infinite Scrolling Container (Perspective Marquee) */}
                <div 
                    // cn utility applies the custom animation defined in tailwind.config.ts
                    className={cn(
                        "flex w-[250%] md:w-[150%] items-center", // Increased width for better scroll length
                        "animate-infinite-scroll",
                    )}
                >
                    {doubledLogos.map((client, index) => (
                        // Each logo item has a fixed width, heavy padding, and a vertical divider
                        <div 
                            key={index} 
                            className="flex-shrink-0 w-1/5 md:w-1/6 lg:w-1/10 p-4 
                                       flex items-center justify-center 
                                       border-r border-gray-700/50 last:border-r-0"
                        >
                            {/* Logo Text: Larger, Monochromatic, with a subtle 3D text-shadow effect */}
                            <span 
                                className={cn(
                                    "text-4xl font-black uppercase tracking-wider transition-colors duration-300",
                                    "text-white/20 hover:text-secondary", // Fixed: light grey to secondary on hover
                                    "shadow-lg text-shadow-sm" // Aesthetic effect
                                )}
                                // Added subtle animation delay based on index for a cascading effect
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {client.name}
                            </span>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
}