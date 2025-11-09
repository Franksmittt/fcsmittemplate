// src/app/accreditations/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
// FIX: Added Paintbrush to resolve TypeScript error.
import { Shield, Layers, Users, Factory, Award, Scroll, ClipboardCheck, Paintbrush } from 'lucide-react';

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Approved Manufacturer Applicators & Certified Contractors | Maverick',
    description: 'View our official accreditations, manufacturer applicator status (Sika, Plascon, Marmoran), and compliance certificates (OHS, MBA, NAMA). Your guarantee of verifiable quality.',
};

// --- DATA: MANUFACTURER PARTNERSHIPS ---
const ManufacturerPartners = [
    {
        name: "Sika Approved Contractor",
        expertise: "Waterproofing & Structural Repairs",
        icon: Layers,
        accentColor: "border-secondary",
    },
    {
        name: "Plascon Preferred Applicator",
        expertise: "Commercial & Industrial Coatings",
        icon: Factory,
        accentColor: "border-tertiary",
    },
    {
        name: "Dulux Accredited Painter",
        expertise: "High-Volume Residential & Facades",
        icon: Award,
        accentColor: "border-secondary",
    },
    {
        name: "Marmoran Master Applicator",
        expertise: "Specialized Decorative Finishes",
        icon: Paintbrush, 
        accentColor: "border-tertiary",
    },
];

// --- DATA: COMPLIANCE & SAFETY ---
const ComplianceChecklist = [
    {
        title: "MBA & NAMA Registered",
        description: "Official registration with Master Builders Association and National Association of Managing Agents.",
        icon: Users,
    },
    {
        title: "Full OHS Compliance",
        description: "Rigorously audited safety file, site management, and liability coverage for all high-access work.",
        icon: Shield,
    },
    {
        title: "Independent QA Process",
        description: "Commitment to using third-party inspectors for auditable proof of film thickness and application quality.",
        icon: ClipboardCheck,
    },
    {
        title: "Manufacturer Guarantees",
        description: "Ability to issue 5, 7, and 15-year guarantees co-signed by the material manufacturer.",
        icon: Scroll,
    },
];

// --- MAIN PAGE COMPONENT ---
export default function AccreditationsPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: ACCREDITATION HERO --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Verifiable Authority
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Certified Applicators. Guaranteed Quality.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        We hold official **applicator status** with the world&apos;s leading coating manufacturers, ensuring every product warranty is valid and backed by expert application.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Verify Our Credentials & Get a Quote &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: MANUFACTURER PARTNERSHIPS GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Official Manufacturer Applicator Status
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Manufacturer guarantees rely on the applicator. We are certified by these partners:
                        </p>
                    </header>

                    {/* Partnerships Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ManufacturerPartners.map((partner, index) => (
                            <div key={index} className={`p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 ${partner.accentColor}`}>
                                <partner.icon className="w-8 h-8 text-secondary mb-4" />
                                <h3 className="text-xl font-bold uppercase mb-2 text-white">
                                    {partner.name}
                                </h3>
                                <p className="text-tertiary text-sm font-semibold">
                                    {partner.expertise}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MODULE 3: COMPLIANCE CHECKLIST --- */}
            <section className="py-24 px-4 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3 text-white">
                            Industry & Safety Compliance Checklist
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            All necessary registrations and safety protocols are in place to eliminate client liability.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {ComplianceChecklist.map((item, index) => (
                            <div key={index} className="flex items-start space-x-4 p-6 bg-primary rounded-xl shadow-xl">
                                <ClipboardCheck className="w-6 h-6 text-tertiary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-xl font-bold uppercase mb-1 text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-base">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MODULE 4: ACCREDITATIONS STRIP (Reused Trust) --- */}
            <AccreditationsStrip />

            {/* --- MODULE 5: FINAL CTA STRIP (Conversion Funnel) --- */}
            <CtaFinalStrip />
        </div>
    );
}