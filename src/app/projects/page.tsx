// src/app/projects/page.tsx
// import Link from 'next/link'; // REMOVED: Unused
// import { Button } from '@/components/ui/button'; // REMOVED: Unused
import { ProjectShowcaseModule } from '@/components/project-showcase-module';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Layers, MapPin, CheckSquare } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Gauteng Painting & Structural Repair Project Portfolio | Maverick',
    description: 'View our portfolio of high-value commercial, body corporate, and industrial projects across Gauteng, including Midrand, Pretoria East, and North Riding. Verifiable quality assurance on every job.',
    path: '/projects',
});

// --- CORE FEATURE DATA (Proof Points) ---
const ProofPoints = [
    { text: "Hyper-Local Focus: Midrand, Pretoria, Benoni", icon: MapPin },
    { text: "Structural Complexity Handled", icon: Layers },
    { text: "Independent QA Verified Quality", icon: CheckSquare },
];

// --- MAIN PAGE COMPONENT ---
export default function ProjectsPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: PORTFOLIO HERO --- */}
            <section className="relative py-24 md:py-32 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Verifiable Track Record
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-4xl">
                        Proof in Paint. Our Commercial Portfolio.
                    </h1>
                    <div className="flex flex-wrap space-x-6 mt-6">
                        {ProofPoints.map((point, index) => (
                             <div key={index} className="flex items-center space-x-2 text-lg font-medium text-gray-400">
                                 <point.icon className="w-5 h-5 text-secondary" />
                                 <span>{point.text}</span>
                             </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MODULE 2: PROJECT SHOWCASE (The Engine) --- */}
            {/* This re-uses the list component from the homepage, but its purpose is 
                now purely to serve local SEO links to dynamic project pages. */}
            <ProjectShowcaseModule />

            {/* --- MODULE 3: FINAL CTA STRIP (Conversion Funnel) --- */}
            <CtaFinalStrip />
        </div>
    );
}