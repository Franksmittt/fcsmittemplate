// src/app/solutions/for-developers/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Building, ClipboardCheck, Scroll, Wrench } from 'lucide-react'; // REMOVED: Hammer, Layers
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'New Build & Developer Painting Solutions | Technical Compliance & Auditable QA',
    description: 'Verifiable painting and coating specifications for developers, engineers, and quantity surveyors. We guarantee compliance with SANS standards and ensure zero hand-over risk through Independent 3rd Party QA.',
    path: '/solutions/for-developers',
});

// --- CORE PAIN POINTS DATA ---
const DeveloperValueProps = [
    {
        title: "Technical Compliance",
        description: "Application strictly adheres to manufacturer specifications and SANS 10047/10051 for verifiable film thickness and quality.",
        icon: Scroll,
        accentColor: "border-secondary",
    },
    {
        title: "Auditable Quality",
        description: "Independent QA provides fortnightly reports, eliminating contractor bias and giving the QS or engineer verifiable quality assurance documentation.",
        icon: ClipboardCheck,
        accentColor: "border-tertiary",
    },
    {
        title: "Structural Hand-over",
        description: "Our capability includes fixing spalling, crack injection, and waterproofing, ensuring the structure is sound before final coatings.",
        icon: Wrench,
        accentColor: "border-secondary",
    },
    {
        title: "High-Volume Efficiency",
        description: "Experienced in large-scale residential and commercial complex painting, ensuring on-time delivery without compromising on final quality.",
        icon: Building,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function DeveloperSolutionsPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: AUDIENCE HERO (DEVELOPER FOCUS) --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        For Engineers & Quantity Surveyors
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Verifiable Quality. Zero Hand-over Risk.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        We deliver **contractual compliance** and **auditable proof** of application quality, ensuring your project passes final inspection and eliminates costly delays and future warranty claims.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Request Technical Specification &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: VALUE PROPS GRID (Solution Focus) --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            The Value We Bring to Your Site
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Our process is engineered to integrate seamlessly into your project timeline and quality control systems.
                        </p>
                    </header>

                    {/* Solutions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {DeveloperValueProps.map((point, index) => (
                            <div key={index} className={`p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 ${point.accentColor}`}>
                                <point.icon className="w-8 h-8 text-secondary mb-4" />
                                <h3 className="text-xl font-bold uppercase mb-2 text-white">
                                    {point.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {point.description}
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