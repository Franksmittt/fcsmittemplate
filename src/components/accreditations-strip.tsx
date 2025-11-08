// src/components/accreditations-strip.tsx
import React from 'react';
import { Shield, Users } from 'lucide-react'; // 'Truck' removed

// Define the two most powerful proof points
const proofPoints = [
    { text: "MBA & NAMA Registered", icon: Users },
    { text: "Fully OHS Compliant", icon: Shield },
];

// This is a Server Component.
export function AccreditationsStrip() {
    // ... (rest of the component logic remains the same)
    const accreditationLogos = [
        { name: "Sika Approved Contractor", key: "sika" },
        { name: "Plascon Preferred Applicator", key: "plascon" },
        { name: "Dulux Accredited Painter", key: "dulux" },
        { name: "a.b.e. Approved Contractor", key: "abe" },
        { name: "Marmoran Master Applicator", key: "marmoran" },
    ];
    
    return (
        <section className="bg-primary text-primary-foreground py-10 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-8">
                    <h3 className="text-sm font-semibold tracking-widest uppercase text-tertiary">
                        Verifiable Proof of Quality
                    </h3>
                    <p className="text-3xl font-light mt-1">
                        Certified Applicators & Industry Compliant
                    </p>
                </div>

                {/* --- 1. Main Logo Grid --- */}
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-5xl mx-auto">
                    {accreditationLogos.map((logo) => (
                        <div key={logo.key} className="h-10 w-32 relative flex items-center justify-center grayscale opacity-80 hover:opacity-100 transition-opacity duration-300">
                            {/* Placeholder for Manufacturer Logo */}
                            <span className="text-xs font-semibold uppercase text-primary-foreground/70">
                                {logo.name.split(' ')[0]} Logo
                            </span>
                        </div>
                    ))}
                </div>

                {/* --- 2. Secondary Trust Bar --- */}
                <div className="mt-10 pt-6 border-t border-secondary/50 flex justify-center space-x-12">
                    {proofPoints.map((point, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <point.icon className="h-5 w-5 text-secondary flex-shrink-0" />
                            <span className="text-base font-semibold">{point.text}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}