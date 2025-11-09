// src/app/access-solutions/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { PersonStanding, Shield, TrendingUp, Truck } from 'lucide-react'; // REMOVED: Zap, Phone

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Rope Access & High-Access Painting Solutions | Cost-Effective & OHS Compliant',
    description: 'Expert rope access and high-access painting contractors. We use scaffolding, boom lifts, and certified rope access to provide cost-effective maintenance for high-rise facades and difficult-to-reach industrial areas.',
};

// --- TECHNICAL DATA FOR CONTENT MODULES ---
const AccessMethods = [
    {
        title: "Certified Rope Access",
        description: "IRATA/SAQA certified rope access teams provide flexible, fast, and cost-effective maintenance for high-rise and complex architectural structures.",
        icon: PersonStanding,
        accentColor: "border-secondary",
    },
    {
        title: "Scaffolding & Boom Lifts",
        description: "Utilizing professional, OHS-compliant scaffolding and mechanical access equipment (e.g., boom lifts) for extensive facade painting and repair projects.",
        icon: Truck,
        accentColor: "border-tertiary",
    },
    {
        title: "Full OHS Compliance",
        description: "Our safety file is comprehensive and audited. We eliminate all client liability by rigorously adhering to Occupational Health and Safety standards on site.",
        icon: Shield,
        accentColor: "border-secondary",
    },
    {
        title: "Cost & Time Efficiency",
        description: "Selecting the optimal access method—rope access for speed, scaffolding for stability—to maximize site efficiency and reduce total project cost.",
        icon: TrendingUp,
        accentColor: "border-tertiary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function AccessSolutionsPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: ACCESS HERO --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Difficult Access Expertise
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Rope Access & High-Access Painting Solutions.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        We provide safe, cost-effective solutions for all **difficult-to-reach facades and industrial structures**. Our certified teams eliminate the complexity and liability of working at height.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Inquire About Access Solutions &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: METHODS BREAKDOWN GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Access Methods Designed for Efficiency
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            We select the optimal method—rope access, scaffolding, or mechanical lifts—to maximize safety and minimize cost and time.
                        </p>
                    </header>

                    {/* Solutions Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {AccessMethods.map((method, index) => (
                            <div key={index} className={`p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 ${method.accentColor}`}>
                                <method.icon className="w-8 h-8 text-secondary mb-4" />
                                <h3 className="text-xl font-bold uppercase mb-2 text-white">
                                    {method.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {method.description}
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