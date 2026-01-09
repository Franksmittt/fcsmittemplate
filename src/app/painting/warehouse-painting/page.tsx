// src/app/painting/warehouse-painting/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Factory, Shield, Layers, Clock } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Warehouse Painting & Industrial Floor Coating Contractors | High-Traffic Solutions',
    description: 'Professional warehouse painting and industrial floor coating services. We paint warehouses, distribution centers, and apply high-traffic epoxy floor systems with minimal operational disruption.',
    path: '/painting/warehouse-painting',
});

// --- KEY SERVICES DATA ---
const WarehouseServices = [
    {
        title: "High-Traffic Floor Coatings",
        description: "Durable epoxy and polyurethane floor systems designed for forklift traffic, heavy machinery, and constant foot traffic. Resistant to chemicals, oils, and abrasion.",
        icon: Factory,
        accentColor: "border-tertiary",
    },
    {
        title: "Low-Disruption Painting",
        description: "After-hours and phased painting services that allow your warehouse to remain operational. We work around your schedule to minimize downtime and revenue loss.",
        icon: Clock,
        accentColor: "border-secondary",
    },
    {
        title: "Structural Steel Coating",
        description: "Corrosion protection for warehouse structural steel, mezzanines, and racking systems. We use zinc-rich primers and durable topcoats for long-term protection.",
        icon: Shield,
        accentColor: "border-tertiary",
    },
    {
        title: "Wall & Ceiling Painting",
        description: "Complete interior painting of warehouse walls and high ceilings. We use industrial-grade paints that resist dust, moisture, and provide excellent light reflectivity.",
        icon: Layers,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function WarehousePaintingPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            
            {/* --- MODULE 1: WAREHOUSE PAINTING HERO --- */}
            <section className="relative py-24 md:py-32 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Industrial Coating Solutions
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Warehouse Painting & Industrial Floor Coating
                    </h1>
                    <p className="text-2xl font-light mt-6 max-w-4xl text-gray-400">
                        Professional warehouse painting and high-traffic floor coating services. We minimize operational disruption while delivering durable, long-lasting finishes for distribution centers and industrial facilities.
                    </p>
                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Get Warehouse Painting Quote &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: WAREHOUSE SERVICES GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Complete Warehouse Solutions
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            From high-traffic floor coatings to structural steel protection, we provide comprehensive warehouse painting services.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {WarehouseServices.map((service, index) => (
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

            {/* --- MODULE 3: THE PROCESS IN DEPTH --- */}
            <QaProcessModule />

            {/* --- MODULE 4: ACCREDITATIONS --- */}
            <AccreditationsStrip />

            {/* --- MODULE 5: FINAL CTA --- */}
            <CtaFinalStrip />
        </div>
    );
}

