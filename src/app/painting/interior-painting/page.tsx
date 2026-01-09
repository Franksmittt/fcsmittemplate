// src/app/painting/interior-painting/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Home, Sparkles, Droplet, Shield } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Interior Painting Contractors | Dustless Sanding & Low-VOC Paints Gauteng',
    description: 'Professional interior painting services with dustless sanding, low-VOC paints, and minimal disruption. We paint ceilings, walls, kitchen cabinets, and complete home interiors. Starting from R60/m².',
    path: '/painting/interior-painting',
});

// --- KEY SERVICES DATA ---
const InteriorServices = [
    {
        title: "Dustless Sanding Technology",
        description: "Our advanced dustless sanding systems capture 99% of dust particles, protecting your furniture, electronics, and air quality. Perfect for occupied homes and commercial spaces.",
        icon: Sparkles,
        accentColor: "border-tertiary",
    },
    {
        title: "Low-VOC & Eco-Friendly Paints",
        description: "We use premium low-VOC (Volatile Organic Compound) paints that are safe for families, pets, and sensitive environments. No harsh chemical odors or health risks.",
        icon: Home,
        accentColor: "border-secondary",
    },
    {
        title: "Ceiling Painting Specialists",
        description: "Expert ceiling painting with proper preparation, crack repair, and smooth finishes. We handle popcorn ceilings, textured surfaces, and high ceilings with specialized equipment.",
        icon: Shield,
        accentColor: "border-tertiary",
    },
    {
        title: "Kitchen Cabinet Respray",
        description: "Transform your kitchen without replacement costs. We professionally respray kitchen cabinets with durable, washable finishes that look brand new. Includes hardware removal and reinstallation.",
        icon: Droplet,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function InteriorPaintingPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            
            {/* --- MODULE 1: INTERIOR PAINTING HERO --- */}
            <section className="relative py-24 md:py-32 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Premium Interior Finishes
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Professional Interior Painting Services
                    </h1>
                    <p className="text-2xl font-light mt-6 max-w-4xl text-gray-400">
                        Transform your interior spaces with dustless sanding, low-VOC paints, and expert application. We minimize disruption and deliver flawless finishes for homes, offices, and commercial spaces.
                    </p>
                    <div className="mt-8 p-6 bg-primary/50 rounded-xl border border-tertiary/30 max-w-2xl">
                        <p className="text-lg font-semibold text-tertiary mb-2">Transparent Pricing</p>
                        <p className="text-gray-300">Interior painting starting from <span className="text-white font-bold">R60/m²</span>. Premium finishes with extensive preparation from <span className="text-white font-bold">R100/m²</span>.</p>
                    </div>
                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Get Interior Painting Quote &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: INTERIOR SERVICES GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Complete Interior Painting Solutions
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            From dustless sanding to kitchen cabinet respray, we provide comprehensive interior painting services with minimal disruption.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {InteriorServices.map((service, index) => (
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

            {/* --- MODULE 3: INTERIOR AREAS WE PAINT --- */}
            <section className="py-24 px-4 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-extrabold uppercase mb-12 text-center">
                        Interior Areas We Specialize In
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-primary rounded-xl">
                            <h3 className="text-xl font-bold mb-3 text-tertiary">Living Areas</h3>
                            <p className="text-gray-400">Walls, ceilings, skirting boards, and architraves. We handle textured surfaces, feature walls, and high ceilings.</p>
                        </div>
                        <div className="p-6 bg-primary rounded-xl">
                            <h3 className="text-xl font-bold mb-3 text-tertiary">Kitchens</h3>
                            <p className="text-gray-400">Cabinet respray, wall painting, and ceiling work. We protect appliances and use food-safe finishes.</p>
                        </div>
                        <div className="p-6 bg-primary rounded-xl">
                            <h3 className="text-xl font-bold mb-3 text-tertiary">Bedrooms & Bathrooms</h3>
                            <p className="text-gray-400">Moisture-resistant paints for bathrooms, smooth finishes for bedrooms, and attention to detail throughout.</p>
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

