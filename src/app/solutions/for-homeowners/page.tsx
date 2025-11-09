// src/app/solutions/for-homeowners/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// import { QaProcessModule } from '@/components/qa-process-module'; // REMOVED: Unused - replaced by modular section below
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Users, CheckSquare, Shield, Clock } from 'lucide-react'; // REMOVED: Home, Paintbrush

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Owner Supervised Painting for High-End Homeowners | Guaranteed Quality',
    description: 'Premium exterior and interior painting services for homeowners. Benefit from daily owner supervision, guaranteed workmanship, and meticulous site cleanliness. Gauteng&apos;s trusted residential contractor.',
};

// --- CORE PAIN POINTS DATA ---
const HomeownerAssurances = [
    {
        title: "Daily Owner Supervision",
        description: "The quality of your home is too important to leave to chance. A director is on-site daily to manage the project and quality control.",
        icon: Users,
        accentColor: "border-tertiary",
    },
    {
        title: "Meticulous Cleanliness",
        description: "We treat your home with the utmost respect. Dust control, masking, and daily site cleanup are non-negotiable parts of our service.",
        icon: Clock,
        accentColor: "border-secondary",
    },
    {
        title: "Guaranteed Workmanship",
        description: "We stand by our work. All projects come with a guaranteed warranty, backed by manufacturer-approved application methods.",
        icon: CheckSquare,
        accentColor: "border-tertiary",
    },
    {
        title: "Complete Property Protection",
        description: "Before painting, we fix leaks, cracks, and damp, providing a full structural envelope that protects your investment long-term.",
        icon: Shield,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function HomeownerSolutionsPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: AUDIENCE HERO (HOMEOWNER FOCUS) --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        For High-End Residential Properties
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Owner Supervised Painting. Trusted. Meticulous. Guaranteed.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        We deliver a **premium service** focused on quality, detail, and protecting the integrity of your home&apos;s investment, from initial prep to the final coat.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Schedule Home Assessment &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: ASSURANCES GRID (Trust Focus) --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            The Assurances You Deserve
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Our process is built on integrity and a relentless pursuit of the perfect finish.
                        </p>
                    </header>

                    {/* Assurances Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {HomeownerAssurances.map((assurance, index) => (
                            <div key={index} className={`p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 ${assurance.accentColor}`}>
                                <assurance.icon className="w-8 h-8 text-secondary mb-4" />
                                <h3 className="text-xl font-bold uppercase mb-2 text-white">
                                    {assurance.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {assurance.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MODULE 3: THE QA PROCESS (Reusing Trust Module - Simplified) --- */}
            {/* The full QA module might be overkill for a homeowner, so we link to it. */}
             <section className="py-16 px-4 bg-gray-900">
                 <div className="max-w-7xl mx-auto text-center">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Our Commitment to Trust
                    </p>
                    <h2 className="text-4xl font-extrabold uppercase mb-3">
                        Quality Backed by Professional Audits
                    </h2>
                    <p className="text-lg text-gray-400 font-light max-w-3xl mx-auto">
                        Although typically reserved for our largest commercial projects, the same strict **Independent 3rd Party QA** principles are applied to your home. Quality is non-negotiable.
                    </p>
                    <Button asChild
                        className="mt-8 bg-tertiary hover:bg-[#9ED529] text-primary font-bold text-lg h-12 shadow-xl"
                    >
                         <Link href="/our-process-independent-qa">
                            See Our Full Auditing Process &rarr;
                        </Link>
                    </Button>
                 </div>
            </section>


            {/* --- MODULE 4: ACCREDITATIONS (Visual Trust) --- */}
            <AccreditationsStrip />

            {/* --- MODULE 5: FINAL CTA STRIP (Conversion Funnel) --- */}
            <CtaFinalStrip />
        </div>
    );
}