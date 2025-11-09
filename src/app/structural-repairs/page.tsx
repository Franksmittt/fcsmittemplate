// src/app/structural-repairs/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { Wrench, Shield, Layers, Users } from 'lucide-react';
import { CtaFinalStrip } from '@/components/cta-final-strip';

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Concrete Spalling, Structural Crack & Remedial Repair Specialists | Maverick',
    description: 'Expert structural repair contractors in Gauteng. We permanently fix concrete spalling, rising damp, and structural cracks before applying specialized protective coatings. Guaranteed quality assurance.',
};

// --- TECHNICAL DATA FOR CONTENT MODULES ---
const RepairProcessSteps = [
    {
        title: "Defect Diagnosis & Technical Specification",
        description: "Our assessment team uses moisture meters and hammer tests to diagnose the root cause (e.g., carbonation, chloride ingress) and prepares a substrate-specific, engineer-approved specification.",
        icon: Wrench,
    },
    {
        title: "Spalling & Concrete Cancer Remediation",
        description: "Removal of delaminated concrete, passivation of rebar to stop rust, and repair using polymer-modified structural mortar. This is the permanent fix, not a cosmetic patch.",
        icon: Shield,
    },
    {
        title: "Structural Crack Injection & Sealing",
        description: "Low-viscosity epoxy resin injection into dormant structural cracks to restore integrity. This stops water ingress and prevents crack propagation.",
        icon: Layers,
    },
    {
        title: "Protealing Application",
        description: "Application of specialized, manufacturer-approved breathable membranes and elastomeric coatings that resist UV, prevent water ingress, and accommodate movement.",
        icon: Users,
    },
];

// --- MAIN PAGE COMPONENT ---
export default function StructuralRepairsPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: TECHNICAL HERO --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Structural Integrity First
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-4xl">
                        Permanent Concrete Spalling & Structural Repair.
                    </h1>
                    <p className="text-2xl font-light mt-6 max-w-3xl text-gray-400">
                        We pivot from cosmetic paint to **Guaranteed Remedial Solutions**. Our process is designed by engineers to permanently de-risk your multi-million rand asset from structural failure.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Schedule Technical Assessment &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: THE PROCESS (Technical Grid) --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Our Four-Phase Remedial Approach
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            We follow a strict manufacturer and engineer-approved protocol to ensure the repair is structural, not cosmetic.
                        </p>
                    </header>

                    {/* Technical Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {RepairProcessSteps.map((step, index) => (
                            <div key={index} className="p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 border-tertiary">
                                <step.icon className="w-8 h-8 text-secondary mb-4" />
                                <h3 className="text-xl font-bold uppercase mb-2 text-white">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {step.description}
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