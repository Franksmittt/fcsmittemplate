// src/app/specialized-coatings/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { FlaskConical, Layers, Shield, Building } from 'lucide-react'; // REMOVED: Rss, Phone

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Epoxy & Polyurethane Floor Coatings | Certified Specialized Applicators',
    description: 'Approved applicators for high-performance, industrial-grade floor and wall coatings. We provide guaranteed, chemical-resistant systems for food production, manufacturing, and commercial spaces.',
};

// --- TECHNICAL DATA FOR CONTENT MODULES ---
const CoatingSystems = [
    {
        title: "Epoxy & Polyurethane Floors",
        description: "Seamless, chemical-resistant systems for high-traffic industrial, commercial, and retail environments that require exceptional durability.",
        icon: FlaskConical,
        accentColor: "border-secondary",
    },
    {
        title: "Hygienic/Food-Grade Walls",
        description: "Application of specialized, smooth, and easily cleanable coatings required for food and beverage facilities to comply with health and safety regulations.",
        icon: Shield,
        accentColor: "border-tertiary",
    },
    {
        title: "Marmoran Decorative Finishes",
        description: "Certified application of Marmoran&apos;s architectural coatings, providing durable, specialized, and aesthetic wall finishes for high-end residential and commercial facades.",
        icon: Layers,
        accentColor: "border-secondary",
    },
    {
        title: "Industrial Corrosion Control",
        description: "Protective coating systems for steel structures, piping, and plant assets, designed to prevent rust and corrosion in harsh industrial and coastal environments.",
        icon: Building,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function SpecializedCoatingsPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: INDUSTRIAL HERO --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Technical Coatings Expertise
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        High-Performance Floor & Specialized Coating Systems.
                    </h1>
                    <p className="text-2xl font-light mt-6 max-w-4xl text-gray-400">
                        We are **certified applicators** for industrial-grade systems, providing a guaranteed protective shield against chemical wear, heavy traffic, and structural deterioration.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Request Coating Specification &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: SYSTEM BREAKDOWN (Technical Grid) --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Certified Systems We Apply
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Our team is factory-trained and approved for these specialized, industrial and architectural coating solutions.
                        </p>
                    </header>

                    {/* Coating Systems Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {CoatingSystems.map((system, index) => (
                            <div key={index} className={`p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 ${system.accentColor}`}>
                                <system.icon className="w-8 h-8 text-secondary mb-4" />
                                <h3 className="text-xl font-bold uppercase mb-2 text-white">
                                    {system.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {system.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-12 text-center">
                         <Button asChild
                            variant="link"
                            className="text-tertiary hover:text-white mt-4 pl-0 text-lg font-bold"
                        >
                            <Link href="/accreditations">
                                View All Approved Manufacturer Accreditations &rarr;
                            </Link>
                        </Button>
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