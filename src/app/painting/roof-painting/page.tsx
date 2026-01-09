// src/app/painting/roof-painting/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Home, Sun, Droplet, Shield } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Roof Painting & Tile Restoration Contractors | Heat-Reflective Coatings Gauteng',
    description: 'Expert roof painting and tile restoration services. We use heat-reflective roof paint, airless roof spray systems, and weatherproof coatings for tile, IBR, and flat concrete roofs. Starting from R60/m².',
    path: '/painting/roof-painting',
});

// --- KEY SERVICES DATA ---
const RoofServices = [
    {
        title: "Tile Roof Restoration",
        description: "Complete tile roof painting and restoration using breathable, UV-stable coatings. We repair cracked tiles, replace damaged sections, and apply weatherproof finishes that last 10+ years.",
        icon: Home,
        accentColor: "border-tertiary",
    },
    {
        title: "Heat-Reflective Roof Paint",
        description: "Reduce interior temperatures by up to 8°C with our specialized heat-reflective roof coatings. Ideal for Gauteng's hot summers, these coatings extend roof life and lower cooling costs.",
        icon: Sun,
        accentColor: "border-secondary",
    },
    {
        title: "Airless Roof Spray",
        description: "Fast, efficient roof painting using professional airless spray systems. We cover large areas quickly while maintaining consistent film thickness and complete coverage on complex roof geometries.",
        icon: Droplet,
        accentColor: "border-tertiary",
    },
    {
        title: "IBR & Corrugated Roof Coating",
        description: "Specialized coatings for IBR and corrugated metal roofs. We treat rust, apply zinc-rich primers, and finish with durable topcoats that prevent corrosion and extend roof lifespan.",
        icon: Shield,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function RoofPaintingPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            
            {/* --- MODULE 1: ROOF PAINTING HERO --- */}
            <section className="relative py-24 md:py-32 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Roof Protection & Restoration
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Professional Roof Painting & Tile Restoration
                    </h1>
                    <p className="text-2xl font-light mt-6 max-w-4xl text-gray-400">
                        Protect your roof from UV damage, water ingress, and thermal expansion. We use heat-reflective coatings, airless spray systems, and weatherproof finishes that extend roof life by 10+ years.
                    </p>
                    <div className="mt-8 p-6 bg-primary/50 rounded-xl border border-tertiary/30 max-w-2xl">
                        <p className="text-lg font-semibold text-tertiary mb-2">Transparent Pricing</p>
                        <p className="text-gray-300">Starting from <span className="text-white font-bold">R60/m²</span> for standard tile roof painting. Premium heat-reflective systems from <span className="text-white font-bold">R100/m²</span>.</p>
                    </div>
                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Get Roof Painting Quote &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: ROOF SERVICES GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Comprehensive Roof Protection Solutions
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            From tile restoration to heat-reflective coatings, we provide complete roof protection for residential, commercial, and industrial properties.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {RoofServices.map((service, index) => (
                            <div key={index} className={`p-8 bg-gray-900 rounded-xl shadow-xl border-t-4 ${service.accentColor}`}>
                                <service.icon className="w-10 h-10 text-secondary mb-4" />
                                <h3 className="text-2xl font-bold uppercase mb-3 text-white">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MODULE 3: ROOF TYPES & PROCESS --- */}
            <section className="py-24 px-4 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-extrabold uppercase mb-12 text-center">
                        Roof Types We Service
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-primary rounded-xl">
                            <h3 className="text-xl font-bold mb-3 text-tertiary">Tile Roofs</h3>
                            <p className="text-gray-400">Concrete and clay tile restoration with breathable, flexible coatings that prevent cracking and water penetration.</p>
                        </div>
                        <div className="p-6 bg-primary rounded-xl">
                            <h3 className="text-xl font-bold mb-3 text-tertiary">IBR & Metal</h3>
                            <p className="text-gray-400">Rust treatment, zinc-rich priming, and durable topcoats for corrugated and IBR metal roofs.</p>
                        </div>
                        <div className="p-6 bg-primary rounded-xl">
                            <h3 className="text-xl font-bold mb-3 text-tertiary">Flat Concrete</h3>
                            <p className="text-gray-400">Waterproofing membranes and elastomeric coatings for flat concrete roofs and podium decks.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MODULE 4: THE PROCESS IN DEPTH --- */}
            <QaProcessModule />

            {/* --- MODULE 5: ACCREDITATIONS --- */}
            <AccreditationsStrip />

            {/* --- MODULE 6: FINAL CTA --- */}
            <CtaFinalStrip />
        </div>
    );
}

