// src/app/painting/commercial-painting/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Stethoscope, ClipboardCheck, MessageCircle, Building } from 'lucide-react'; 
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Commercial & Healthcare Painting Contractors | Low-VOC & Sensitive Environment Coatings',
    description: 'Specialist low-VOC and anti-microbial coating application for commercial offices, healthcare facilities, and retail spaces. We ensure minimal disruption and high air quality compliance.',
    path: '/painting/commercial-painting',
});

// --- KEY FEATURES DATA ---
const CommercialFeatures = [
    {
        title: "Low-VOC / Zero-VOC Coatings",
        description: "Application of specialized paints that maintain high air quality and minimize disruption, essential for occupied offices, schools, and hospitals.",
        icon: MessageCircle,
        accentColor: "border-tertiary",
    },
    {
        title: "Healthcare Grade Finishes",
        description: "Anti-microbial and fungicidal coatings for facilities where hygiene is critical, applied following strict healthcare application protocols.",
        icon: Stethoscope,
        accentColor: "border-secondary",
    },
    {
        title: "Managed Disruption",
        description: "Projects are tightly managed, often executed after hours or in phased sections to ensure commercial operations continue seamlessly.",
        icon: Building,
        accentColor: "border-tertiary",
    },
    {
        title: "Compliance Documentation",
        description: "Full documentation provided for all products and application methods, ensuring compliance for property managers and facilities.",
        icon: ClipboardCheck,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function CommercialPaintingPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: COMMERCIAL FOCUS HERO --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Sensitive Environment Coatings
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Low-VOC Commercial & Healthcare Painting.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        We specialize in **sensitive environment coatings** for offices and medical facilities, guaranteeing high air quality, minimal disruption, and certified hygiene finishes.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Request Commercial Site Assessment &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: PROJECT FEATURES GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Solutions for Occupied & Sensitive Spaces
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Our application methods are designed around maintaining site operations and air quality.
                        </p>
                    </header>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {CommercialFeatures.map((feature, index) => (
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