// src/app/painting-services/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Building, Factory, Wrench, Truck } from 'lucide-react'; // REMOVED: Paintbrush, Phone
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Commercial & High-Access Painting Contractors | Industrial & Body Corporate',
    description: 'Specialist large-scale painting services for industrial sites, factories, and commercial buildings. Expert high-access, rope access, and cost-effective solutions with Independent QA.',
    path: '/painting-services',
});

// --- TECHNICAL DATA FOR CONTENT MODULES ---
const CommercialPaintingServices = [
    {
        title: "Industrial & Factory Painting",
        description: "Application of specialized corrosion control and protective coatings for steel structures, silos, and internal factory assets in harsh environments.",
        icon: Factory,
        accentColor: "border-secondary",
    },
    {
        title: "Commercial & Retail Facades",
        description: "High-volume, complex exterior and interior coating solutions for shopping centres, office parks, and multi-story commercial properties.",
        icon: Building,
        accentColor: "border-tertiary",
    },
    {
        title: "Advanced Surface Preparation",
        description: "From structural crack repairs to abrasive blasting, preparation dictates longevity. We ensure the surface is scientifically ready for the new system.",
        icon: Wrench,
        accentColor: "border-secondary",
    },
    {
        title: "Expert Access Management",
        description: "Utilizing professional scaffolding, boom lifts, and certified rope access to manage costs and ensure safe, compliant high-rise work.",
        icon: Truck,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function PaintingServicesPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: PAINTING FOCUS HERO --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Large-Scale Coating Solutions
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        High-Access Industrial & Commercial Painting.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        We are specialized contractors focused exclusively on large-format, high-access projects for **industrial, commercial, and body corporate assets**, ensuring high compliance and zero risk.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Request Commercial Quote &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: SERVICES BREAKDOWN GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Specialist Coating Applications
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Our focus is on durability, corrosion control, and providing a final finish that lasts under intense environmental conditions.
                        </p>
                    </header>

                    {/* Solutions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {CommercialPaintingServices.map((service, index) => (
                            <div key={index} className={`p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 ${service.accentColor}`}>
                                <service.icon className="w-8 h-8 text-secondary mb-4" />
                                <h3 className="text-xl font-bold uppercase mb-2 text-white">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-12 text-center">
                        <Button asChild
                            variant="link"
                            className="text-tertiary hover:text-white mt-4 pl-0 text-lg font-bold"
                        >
                            <Link href="/painting/body-corporate-painting">
                                See Body Corporate Solutions &rarr;
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