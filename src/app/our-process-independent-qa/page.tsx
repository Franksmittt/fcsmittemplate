// src/app/our-process-independent-qa/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import { QaProcessModule } from '@/components/qa-process-module'; // REMOVED: Replaced by custom module below
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Scroll, CheckSquare, FileText, BarChart } from 'lucide-react';

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Independent 3rd Party QA Process & Guarantee | Maverick Painting',
    description: 'Learn how our Independent 3rd Party Quality Assurance (QA) process eliminates project risk. Receive bi-weekly reports on film thickness and application quality, guaranteed.',
};

// --- TECHNICAL DATA FOR THE PROCESS MODULE ---
const FullQAProcess = [
    {
        step: 1,
        title: "Pre-Project Substrate Assessment",
        description: "An independent coatings inspector conducts the initial hammer tests, moisture readings, and adhesion tests. We use this data to finalize a **non-negotiable technical specification** that includes material type, minimum film thickness, and preparation method.",
        icon: Scroll,
    },
    {
        step: 2,
        title: "Mandatory Surface Preparation Checks",
        description: "The inspector verifies that surface preparation (e.g., crack cleaning, spalling repair, washing) meets SANS and manufacturer standards *before* primer is applied. This ensures maximum adhesion and product lifespan.",
        icon: CheckSquare,
    },
    {
        step: 3,
        title: "Film Thickness Measurement & Verification",
        // FIX: Replaced single quote ' with &apos; to escape the character
        description: "The inspector monitors the **Wet Film Thickness (WFT)** and **Dry Film Thickness (DFT)** of every coat. This is critical: if minimum thickness is not met, the manufacturer guarantee is void. We ensure it&apos;s verified.",
        icon: BarChart,
    },
    {
        step: 4,
        title: "Bi-Weekly Progress & Technical Reporting",
        description: "You receive a comprehensive report every two weeks detailing all tests, compliance checks, and a visual project overview. This provides **total, verifiable transparency** for trustees or building owners.",
        icon: FileText,
    },
];

// --- MAIN PAGE COMPONENT ---
export default function IndependentQAPage() {
    return (
        <div className="bg-gray-50 pt-24">

            {/* --- MODULE 1: TRUST HERO (Server Component) --- */}
            <section className="relative py-24 md:py-40 px-4 bg-primary text-white border-b-4 border-tertiary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-secondary mb-3">
                        Our Unbeatable De-Risking Strategy
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-4xl">
                        Independent QA. The Only Real Guarantee.
                    </h1>
                    <p className="text-2xl font-light mt-6 max-w-3xl text-gray-400">
                        We do not rely on self-inspection. We pay a trusted, **independent 3rd party** to verify every critical phase of your high-value project, giving you auditable, bi-weekly proof of quality.
                    </p>

                    <Button asChild
                        className="mt-10 bg-tertiary hover:bg-[#9ED529] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Eliminate Risk & Get a Quote &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: FULL PROCESS BREAKDOWN (Custom Module for Depth) --- */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase text-primary mb-3">
                            The Four Steps to Auditable Quality
                        </h2>
                        <p className="text-lg text-gray-700 font-light">
                            Our process is co-signed by the manufacturer, the contractor (Maverick), and the independent inspection body.
                        </p>
                    </header>

                    {/* Timeline/Steps Grid */}
                    <div className="space-y-12">
                        {FullQAProcess.map((item) => (
                            <div key={item.step} className="flex flex-col md:flex-row space-x-0 md:space-x-12 items-start group">
                                <div className="flex-shrink-0 mb-4 md:mb-0 w-full md:w-48">
                                    <div className="text-5xl font-extrabold text-secondary group-hover:text-tertiary transition-colors">
                                        {`0${item.step}`}
                                    </div>
                                    <h3 className="text-2xl font-bold uppercase text-primary mt-1">
                                        {`Step ${item.step}`}
                                    </h3>
                                </div>
                                <div className="flex-1 border-l-4 border-gray-300 pl-6 py-2 rounded-r-lg group-hover:border-secondary transition-colors duration-300">
                                    <div className="flex items-center space-x-4 mb-3">
                                        <item.icon className="w-8 h-8 text-secondary group-hover:text-tertiary transition-colors" />
                                        <h4 className="text-2xl font-bold text-primary">{item.title}</h4>
                                    </div>
                                    <p className="text-lg text-gray-700">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-xl font-semibold text-primary">Ready for a guarantee that holds up to scrutiny?</p>
                        <Button asChild
                            className="mt-4 bg-primary hover:bg-gray-800 text-white font-bold text-lg h-12 shadow-xl"
                        >
                            <Link href="/contact">
                                Request Auditable Quote &rarr;
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* --- MODULE 3: ACCREDITATIONS (Visual Trust) --- */}
            <AccreditationsStrip />

            {/* --- MODULE 4: FINAL CTA STRIP (Conversion Funnel) --- */}
            <CtaFinalStrip />
        </div>
    );
}