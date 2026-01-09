// src/app/painting/parking-garage-painting/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Car, Shield, Layers, CheckSquare } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Parking Garage Painting & Floor Marking Contractors | After-Hours Services',
    description: 'Professional parking garage painting and floor marking services. We paint stairwells, parking lots, and apply durable epoxy floor coatings with minimal disruption. After-hours painting available.',
    path: '/painting/parking-garage-painting',
});

// --- KEY SERVICES DATA ---
const ParkingGarageServices = [
    {
        title: "After-Hours Painting",
        description: "Minimize disruption with our after-hours and weekend painting services. We work around your business schedule to ensure parking facilities remain operational during peak hours.",
        icon: Car,
        accentColor: "border-tertiary",
    },
    {
        title: "Durable Epoxy Floor Coatings",
        description: "High-traffic epoxy floor systems designed for parking garages. Resistant to oil, chemicals, and constant vehicle traffic. Available in multiple colors with clear demarcation lines.",
        icon: Shield,
        accentColor: "border-secondary",
    },
    {
        title: "Stairwell & Wall Painting",
        description: "Complete painting of parking garage stairwells, walls, and structural elements. We use moisture-resistant paints and anti-graffiti coatings for long-lasting protection.",
        icon: Layers,
        accentColor: "border-tertiary",
    },
    {
        title: "Floor Marking & Demarcation",
        description: "Professional floor marking for parking bays, directional arrows, and safety zones. We use durable traffic paint and clear epoxy lines that last for years.",
        icon: CheckSquare,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function ParkingGaragePaintingPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            
            {/* --- MODULE 1: PARKING GARAGE HERO --- */}
            <section className="relative py-24 md:py-32 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Commercial Parking Solutions
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Parking Garage Painting & Floor Marking
                    </h1>
                    <p className="text-2xl font-light mt-6 max-w-4xl text-gray-400">
                        Professional parking garage painting with after-hours services, durable epoxy floor coatings, and complete floor marking. We minimize disruption while delivering long-lasting results.
                    </p>
                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Get Parking Garage Quote &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: PARKING GARAGE SERVICES GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Complete Parking Facility Solutions
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            From epoxy floor coatings to after-hours painting, we provide comprehensive parking garage maintenance services.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {ParkingGarageServices.map((service, index) => (
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

