// src/app/painting/high-volume-commercial-painting/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Scale, Factory, Clock, Building } from 'lucide-react'; 

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Large-Scale Commercial Painting Contractors | High-Volume Industrial Facades',
    description: 'High-volume commercial painting services for large retail centres, office blocks, and industrial complexes. We specialize in projects requiring strict scheduling and multi-phase execution.',
};

// --- KEY FEATURES DATA ---
const VolumeFeatures = [
    {
        title: "Large-Scale Capacity",
        description: "Dedicated project management and labor resources to handle painting projects exceeding R1 million in value and complex commercial specifications.",
        icon: Scale,
        accentColor: "border-secondary",
    },
    {
        title: "Multi-Phase Scheduling",
        description: "Expertise in segmenting large sites into multi-phase execution plans to minimize operational disruption and maintain access control.",
        icon: Clock,
        accentColor: "border-tertiary",
    },
    {
        title: "Commercial Facade Restoration",
        description: "Specialized in preparation and coating systems tailored to protect modern commercial facades against weathering and environmental pollutants.",
        icon: Building,
        accentColor: "border-secondary",
    },
    {
        title: "Industrial Complex Painting",
        description: "High-level access and specialized anti-corrosion applications for painting large industrial sites, warehouses, and storage depots.",
        icon: Factory,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function HighVolumeCommercialPaintingPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: HIGH-VOLUME HERO --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Project Volume Expertise
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        High-Volume Commercial & Large-Scale Painting.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        We are the preferred contractors for large retail groups and property management firms, specializing in **high-volume, multi-phase commercial painting** and asset restoration.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Request Large Project Tender &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: PROJECT FEATURES GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Capacity Built for Scale & Scheduling
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Our resources and project planning are optimized to deliver large commercial tenders on time and within operational constraints.
                        </p>
                    </header>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {VolumeFeatures.map((feature, index) => (
                            <div key={index} className={`p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 ${feature.accentColor}`}>
                                <feature.icon className="w-8 h-8 text-secondary mb-4" />
                                <h3 className="text-xl font-bold uppercase mb-2 text-white">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MODULE 3: THE QA PROCESS (Reusing Trust Module) --- */}
            <QaProcessModule />

            {/* --- MODULE 4: ACCREDITATIONS (Visual Trust) --- */}
            <AccreditationsStrip />

            {/* --- MODULE 5: FINAL CTA STRIP (Conversion Funnel) --- */}
            <CtaFinalStrip />
        </div>
    );
}