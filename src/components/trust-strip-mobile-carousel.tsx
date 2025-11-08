// src/components/trust-strip-mobile-carousel.tsx
import React from 'react';
import { MobileTrustCarousel } from '@/components/mobile-trust-carousel'; 
// Removed unused ClipboardCheck, Medal, Scroll, Stethoscope imports 

// --- Data: Trust Signals (Passing String Names only) ---
interface TrustSignal {
    id: number;
    text: string;
    icon: string; 
    tailwindColor: string;
}

const trustSignals: TrustSignal[] = [
    // Passing the component's name as a string:
    { id: 1, text: "Independent 3rd Party QA", icon: 'ClipboardCheck', tailwindColor: 'text-tertiary' }, // Use tertiary (green accent)
    { id: 2, text: "50+ Years Combined Experience", icon: 'Medal', tailwindColor: 'text-tertiary' }, 
    { id: 3, text: "Guarantees: 5/7/15 Year Available", icon: 'Scroll', tailwindColor: 'text-tertiary' },
    { id: 4, text: "Fully OHS Compliant", icon: 'Stethoscope', tailwindColor: 'text-tertiary' },
];

// This Server Component sets the container and passes data to the client logic.
export function TrustStripMobileCarousel() {
    return (
        <section className="bg-header-dark py-4 shadow-inner">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Desktop Grid: Always visible, grid layout */}
                <div className="hidden md:grid md:grid-cols-4 md:gap-4 text-white text-center text-sm font-medium">
                    {trustSignals.map((signal) => {
                        // Renders on the server using the string name for a simple data display
                        return (
                            <div key={signal.id} className="flex items-center justify-center space-x-2">
                                {/* Placeholder icon display for server-side view */}
                                <span className={`w-5 h-5 ${signal.tailwindColor}`}>★</span> 
                                <span className="whitespace-nowrap">{signal.text}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Container: Passes serializable string data to the Client Component */}
                <div className="md:hidden">
                    <MobileTrustCarousel signals={trustSignals} />
                </div>
                
            </div>
        </section>
    );
}