// src/app/painting/industrial-painting/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Factory, Shield, Wrench, Sprout } from 'lucide-react'; 
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Industrial Painting & Corrosion Control Contractors | Plant & Steel Structures',
    description: 'Specialist industrial painting services including corrosion control, surface preparation (abrasive blasting), and protective coatings for factories, plants, and steel structures.',
    path: '/painting/industrial-painting',
});

// --- KEY FEATURES DATA ---
const IndustrialFeatures = [
    {
        title: "Corrosion Control Systems",
        description: "Application of specialized zinc-rich primers, epoxies, and polyurethanes designed to prevent rust and corrosion in extreme industrial environments.",
        icon: Shield,
        accentColor: "border-secondary",
    },
    {
        title: "Abrasive Blasting Prep",
        description: "Mandatory surface preparation via abrasive blasting or hydro-blasting to achieve the necessary profile (e.g., SA 2.5) for optimal coating adhesion and longevity.",
        icon: Wrench,
        accentColor: "border-tertiary",
    },
    {
        title: "High-Volume Execution",
        description: "Expertise in managing large-scale, complex industrial sites, minimizing plant downtime and adhering to strict safety shutdown schedules.",
        icon: Factory,
        accentColor: "border-secondary",
    },
    {
        title: "OHS & Site Compliance",
        description: "Full compliance with all Occupational Health and Safety regulations, including comprehensive safety files for industrial sites.",
        icon: Sprout,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function IndustrialPaintingPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: INDUSTRIAL FOCUS HERO --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Plant Asset Protection
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Industrial Painting & Corrosion Control Services.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        We specialize in the **protective coating of industrial assets**, steel structures, and plant machinery, ensuring long-term defense against chemical wear and atmospheric corrosion.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Request Plant Assessment & Quote &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: PROJECT FEATURES GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Specialized Industrial Solutions
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Our process focuses on the longevity of the coating system, starting with superior surface preparation.
                        </p>
                    </header>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {IndustrialFeatures.map((feature, index) => (
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