// src/components/trust-strip.tsx
import React from 'react';
// Note: In a real Next.js application, these should be Image components from 'next/image'
import { ShieldCheck, Zap, Factory } from 'lucide-react'; 

// --- Data for the Strip ---
const trustSignals = [
    { icon: ShieldCheck, text: "Independent 3rd Party QA", detail: "Quality Assured Process" },
    { icon: Zap, text: "Owner Supervised Daily", detail: "Hands-on Project Management" },
    { icon: Factory, text: "Manufacturer Guarantees", detail: "Approved Applicator Status" },
];

// Define content for the Animating Service Carousel
const serviceKeywords = [
    "Structural & Spalling Repair", 
    "Epoxy Floor Coatings", 
    "High-Rise Rope Access", 
    "Flat Roof Waterproofing", 
    "Body Corporate Painting", 
    "Corrosion Protection Systems"
];
const carouselContent = [...serviceKeywords, ...serviceKeywords]; // Double the content for continuous loop

// --- Component: Trust and Authority Strip ---
export function TrustStrip() {
    return (
        <div className="w-full bg-white text-primary">
            
            {/* 1. ARCHITECTURAL TRUST BAR (High-Impact Accreditations) 
                * Purpose: Visually de-risk the project for developers/body corporates instantly. 
                * Design: Clean white background, minimalist grayscale logos.
            */}
            <div className="container py-6 border-b border-gray-100">
                <div className="text-center mb-6">
                    <h3 className="text-sm font-semibold tracking-widest uppercase text-primary/70">
                        The Only Name Developers Trust for Verifiable Quality
                    </h3>
                </div>
                
                {/* Placeholder Logo Grid: Grayscale effect conveys sophistication (Architect's Precision) */}
                <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 max-w-5xl mx-auto">
                    {/* These placeholders simulate Sika, Plascon, Marmoran, a.b.e. */}
                    <span className="text-sm font-bold text-gray-400 grayscale">SIKA CERTIFIED</span>
                    <span className="text-sm font-bold text-gray-400 grayscale">PLASCON APPROVED</span>
                    <span className="text-sm font-bold text-gray-400 grayscale">DULUX ACCREDITED</span>
                    <span className="text-sm font-bold text-gray-400 grayscale">MARMORAN MASTER</span>
                    <span className="text-sm font-bold text-gray-400 grayscale">A.B.E. APPLICATOR</span>
                </div>
            </div>

            {/* 2. STATIC PROOF POINTS (Below Logos, Primary Trust Signal) */}
            <div className="container py-4 flex flex-col md:flex-row items-center justify-around bg-gray-50 border-b border-gray-200">
                {trustSignals.map((signal, index) => (
                    <div key={index} className="flex items-center space-x-3 my-2 md:my-0">
                        <signal.icon className="h-6 w-6 text-tertiary flex-shrink-0" />
                        <div className="text-sm text-left">
                            <div className="font-bold text-primary">{signal.text}</div>
                            <div className="text-xs text-gray-500">{signal.detail}</div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* 3. ANIMATING SERVICE CAROUSEL (Flow & Nurturing) */}
            <div className="relative overflow-hidden py-2 bg-gray-100">
                {/* The animation style applies the CSS keyframe defined in globals.css */}
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