// src/components/cta-final-strip.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

// This component centralizes the high-conversion, final Call-to-Action strip.
// It applies the mobile-specific text removal logic for better UX (using hidden md:inline).

export function CtaFinalStrip() {
    return (
        <section className="bg-header-dark py-12 px-4 border-t border-primary/50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-white mb-4">
                    Ready for Verifiable, Zero-Risk Quality?
                </h2>
                <p className="text-gray-400 text-lg mb-6">
                    Contact us today to schedule an on-site assessment and receive your substrate-specific specification.
                </p>
                 <Button asChild 
                    className="bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-xl h-14 shadow-2xl transform hover:scale-105"
                >
                    <a href="tel:0826277082" className="flex items-center space-x-2">
                         <Phone className="w-6 h-6" />
                         <span className="hidden md:inline">Call Lawrence Brooks:</span> 082 627 7082
                    </a>
                </Button>
            </div>
        </section>
    );
}
