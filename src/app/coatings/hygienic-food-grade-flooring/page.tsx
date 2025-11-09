// src/app/coatings/hygienic-food-grade-flooring/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { FlaskConical, Beaker, Utensils, Shield } from 'lucide-react'; 

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Food-Grade & Hygienic Epoxy Flooring Contractors | HACCP Compliance',
    description: 'Seamless, non-porous, and chemical-resistant epoxy and polyurethane floor systems for food and beverage plants, commercial kitchens, and healthcare facilities. Guaranteed HACCP compliance.',
};

// --- KEY FEATURES DATA ---
const HygienicFeatures = [
    {
        title: "Seamless & Non-Porous",
        description: "Creates a joint-free, non-absorbent surface that prevents bacteria growth and simplifies wash-down procedures, crucial for HACCP compliance.",
        icon: FlaskConical,
        accentColor: "border-tertiary",
    },
    {
        title: "Chemical & Thermal Shock",
        description: "Systems are designed to withstand aggressive cleaning agents and rapid temperature changes common in commercial kitchens and processing areas.",
        icon: Beaker,
        accentColor: "border-secondary",
    },
    {
        title: "Safety & Slip Resistance",
        description: "Customized aggregate finishes provide controlled slip resistance, improving staff safety in wet processing zones.",
        icon: Shield,
        accentColor: "border-tertiary",
    },
    {
        title: "Minimal Disruption Install",
        description: "Utilizing fast-curing resins to minimize downtime, allowing facilities to return to operation faster than traditional flooring methods.",
        icon: Utensils,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function HygienicFlooringPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: INDUSTRIAL FOCUS HERO --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Specialized Floor Systems
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Hygienic Food-Grade Epoxy & Floor Coatings.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        We deliver **HACCP-compliant, seamless resin floors** required for food and beverage processing, pharmaceutical, and cleanroom facilities where cleanliness is paramount.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Request Hygienic Floor Specification &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: PROJECT FEATURES GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Features of Compliant Flooring
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Our systems meet the most stringent regulatory requirements for seamlessness and cleanability.
                        </p>
                    </header>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {HygienicFeatures.map((feature, index) => (
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