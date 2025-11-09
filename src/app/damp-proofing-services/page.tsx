// src/app/damp-proofing-services/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Droplet, Sprout, Building, MessageSquare } from 'lucide-react'; // REMOVED: AirVent

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Rising Damp & Damp Proofing Solutions | Chemical DPC & Moisture Control',
    description: 'Specialized rising damp treatment contractors offering guaranteed chemical DPC (Damp Proof Course) injection and full moisture control solutions for basements and ground-level walls.',
};

// --- KEY FEATURES DATA ---
const DampFeatures = [
    {
        title: "Chemical DPC Injection",
        description: "Permanent solution for rising damp via pressure injection of silicone-based cream to form a new, effective damp-proof barrier in the masonry.",
        icon: Droplet,
        accentColor: "border-secondary",
    },
    {
        title: "Basement Waterproofing",
        description: "Internal tanking and cementitious slurry systems applied to negative-side walls to stop moisture ingress in below-ground structures.",
        icon: Building,
        accentColor: "border-tertiary",
    },
    {
        title: "Mold Remediation Protocol",
        description: "Full cleaning and treatment protocol to remediate mold and mildew resulting from condensation or rising damp, ensuring a healthy indoor environment.",
        icon: Sprout,
        accentColor: "border-secondary",
    },
    {
        title: "Verifiable Diagnostics",
        description: "Utilizing professional moisture meters and thermal imaging to accurately diagnose the source of damp before specifying treatment.",
        icon: MessageSquare,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function DampProofingPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: DAMP PROOFING HERO --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Moisture Control & Remediation
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Guaranteed Rising Damp & Damp Proofing Solutions.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        We provide **permanent chemical damp proof course (DPC) injection** and full basement tanking systems to eliminate moisture ingress, protecting your structural assets from mold and decay.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Request Damp Assessment & Quote &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: PROJECT FEATURES GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Verifiable Damp Remediation Methods
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            We solve the root cause of the damp problem, ensuring a long-term guarantee against re-occurrence.
                        </p>
                    </header>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {DampFeatures.map((feature, index) => (
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