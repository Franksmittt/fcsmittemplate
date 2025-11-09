// src/app/solutions/for-body-corporates/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { ClipboardCheck, MessageCircle, Scroll, Shield } from 'lucide-react'; // REMOVED: Users

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Painting & Waterproofing Solutions for Body Corporates & HOAs | Maverick',
    description: 'Specialized asset maintenance for Body Corporates and Homeowners&apos; Associations. We offer guaranteed compliance, minimal disturbance, and Independent QA for long-term asset security.',
};

// --- CORE PAIN POINTS DATA ---
const PainPoints = [
    {
        title: "Risk-Free Compliance",
        description: "Independent QA verifies film thickness and application quality, providing trustees with auditable proof of work for AGMs.",
        icon: ClipboardCheck,
        accentColor: "border-secondary",
    },
    {
        title: "Long-Term Security",
        description: "Our structural repairs and guaranteed waterproofing systems eliminate recurring defects, securing the long-term value of the entire block.",
        icon: Shield,
        accentColor: "border-tertiary",
    },
    {
        title: "Minimal Disturbance",
        description: "We use advanced high-access methods and strict project management protocols to ensure minimal disturbance and inconvenience to residents.",
        icon: MessageCircle,
        accentColor: "border-secondary",
    },
    {
        title: "Transparent Guarantees",
        description: "All guarantees are co-signed by the manufacturer, the contractor, and the independent inspector, providing unparalleled warranty transparency.",
        icon: Scroll,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function BodyCorporateSolutionsPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: AUDIENCE HERO (BODY CORPORATE) --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        For Trustees & Facility Managers
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Guaranteed Asset Security for Body Corporates.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        We specialize in large-scale residential asset maintenance, delivering **risk-free projects** with verifiable compliance and long-term structural security for every unit owner.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Request Compliance Quote &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: PAIN POINTS GRID (Solution Focus) --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Eliminating Trustee Risk
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Our unique process addresses the key vulnerabilities faced by trustees and building managers.
                        </p>
                    </header>

                    {/* Solutions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {PainPoints.map((point, index) => (
                            <div key={index} className={`p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 ${point.accentColor}`}>
                                <point.icon className="w-8 h-8 text-tertiary mb-4" />
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