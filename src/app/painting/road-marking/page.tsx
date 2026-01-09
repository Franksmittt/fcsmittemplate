// src/app/painting/road-marking/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { MapPin, Shield, Layers, CheckSquare } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Road Marking & Warehouse Demarcation Contractors | Traffic Paint Specialists',
    description: 'Professional road marking and warehouse floor demarcation services. We apply durable traffic paint, epoxy lines, and safety markings for parking lots, warehouses, and industrial facilities.',
    path: '/painting/road-marking',
});

// --- KEY SERVICES DATA ---
const RoadMarkingServices = [
    {
        title: "Traffic Paint Application",
        description: "Durable road marking paint for parking lots, driveways, and access roads. We use high-visibility, weather-resistant paints that withstand constant vehicle traffic and weather exposure.",
        icon: MapPin,
        accentColor: "border-tertiary",
    },
    {
        title: "Warehouse Demarcation",
        description: "Professional floor marking for warehouses and distribution centers. Clear epoxy lines, safety zones, and directional markings that improve workflow and safety compliance.",
        icon: Layers,
        accentColor: "border-secondary",
    },
    {
        title: "Safety Zone Marking",
        description: "Fire lanes, loading zones, pedestrian crossings, and hazard areas. We use compliant colors and reflective materials where required for maximum visibility and safety.",
        icon: Shield,
        accentColor: "border-tertiary",
    },
    {
        title: "Parking Bay Marking",
        description: "Precise parking bay lines, directional arrows, and accessibility markings. We ensure compliance with SANS standards and provide clear, long-lasting demarcation.",
        icon: CheckSquare,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function RoadMarkingPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            
            {/* --- MODULE 1: ROAD MARKING HERO --- */}
            <section className="relative py-24 md:py-32 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Professional Demarcation Services
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Road Marking & Warehouse Demarcation
                    </h1>
                    <p className="text-2xl font-light mt-6 max-w-4xl text-gray-400">
                        Expert road marking and floor demarcation services for parking lots, warehouses, and industrial facilities. We use durable traffic paint and epoxy systems that last for years.
                    </p>
                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Get Road Marking Quote &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: ROAD MARKING SERVICES GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Complete Demarcation Solutions
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            From traffic paint to warehouse floor marking, we provide comprehensive demarcation services.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {RoadMarkingServices.map((service, index) => (
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

