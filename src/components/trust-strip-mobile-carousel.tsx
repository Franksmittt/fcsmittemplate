// src/components/trust-strip-mobile-carousel.tsx
import React from 'react';
// FIX: Dynamically import the Client Component to remove it from the main bundle
import dynamic from 'next/dynamic';

// Dynamic import with SSR disabled to ensure it only loads on the client/when needed
const MobileTrustCarousel = dynamic(() => import('./mobile-trust-carousel').then(mod => mod.MobileTrustCarousel), {
    ssr: false, // Do not render on the server, which prevents unnecessary script evaluation on the main thread
    loading: () => <div className="h-[30px] text-white text-center text-sm font-medium">Loading Trust Signals...</div>,
});


// --- Data: Trust Signals (Passing String Names only) ---
interface TrustSignal {
    id: number;
    text: string;
    icon: string; 
    tailwindColor: string;
}

const trustSignals: TrustSignal[] = [
    // FIX: Changed tailwindColor from 'text-tertiary' to 'text-white' for contrast compliance
    { id: 1, text: "Independent 3rd Party QA", icon: 'ClipboardCheck', tailwindColor: 'text-white' }, 
    { id: 2, text: "50+ Years Combined Experience", icon: 'Medal', tailwindColor: 'text-white' }, 
    { id: 3, text: "Guarantees: 5/7/15 Year Available", icon: 'Scroll', tailwindColor: 'text-white' },
    { id: 4, text: "Fully OHS Compliant", icon: 'Stethoscope', tailwindColor: 'text-white' },
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
                    {/* Dynamic import is used here */}
                    <MobileTrustCarousel signals={trustSignals} />
                </div>
  
               
            </div>
        </section>
    );
}