// src/components/trust-strip.tsx
import React from 'react';
// Image import removed
import { ShieldCheck, Zap, Factory } from 'lucide-react'; // Factory is fine here, assuming it's available

// Define content for the Static Proof Bar
const trustSignals = [
    { icon: ShieldCheck, text: "Independent 3rd Party QA", detail: "Quality Assured Process" },
    { icon: Zap, text: "Owner Supervised Daily", detail: "Hands-on Project Management" },
    { icon: Factory, text: "Manufacturer Guarantees", detail: "Approved Applicator Status" },
];

// Define content for the Animating Service Carousel
const serviceKeywords = [
    "Concrete Spalling Repair", "Epoxy Floor Coatings", "High-Rise Rope Access", 
    "Flat Roof Waterproofing", "Body Corporate Painting", "Structural Crack Repair"
];
const carouselContent = [...serviceKeywords, ...serviceKeywords];

// This is a Server Component, optimized for serving trust signals and static content.
export function TrustStrip() {
    return (
        <div className="w-full bg-white text-primary">
            
            {/* 1. STATIC PROOF BAR (Highest Trust Priority) */}
            <div className="container py-4 flex flex-col md:flex-row items-center justify-around border-b border-gray-200">
                {trustSignals.map((signal, index) => (
                    <div key={index} className="flex items-center space-x-3 my-2 md:my-0">
                        <signal.icon className="h-6 w-6 text-tertiary flex-shrink-0" />
                        <div className="text-sm">
                            <div className="font-bold">{signal.text}</div>
                            <div className="text-xs text-gray-500">{signal.detail}</div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* 2. ANIMATING SERVICE CAROUSEL */}
            <div className="relative overflow-hidden py-2 border-t border-gray-100">
                {/* We use an inline style to apply the custom animation */}
                <div 
                    className="flex whitespace-nowrap space-x-12"
                    style={{ 
                        animation: 'continuous-scroll 35s linear infinite', 
                        width: '200%', 
                    }}
                >
                    {carouselContent.map((keyword, index) => (
                        <span key={index} className="text-sm font-semibold text-gray-700 uppercase tracking-wider min-w-max">
                            <span className="text-secondary mr-2">•</span> {keyword}
                        </span>
                    ))}
                </div>
            </div>
            
        </div>
    );
}