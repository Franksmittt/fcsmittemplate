// src/app/painting/body-corporate-painting/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Paintbrush, Truck, Users, Clock } from 'lucide-react'; // REMOVED: Building
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Large-Scale Body Corporate Painting Contractors Gauteng | Auditable Quality',
    description: 'Expert residential complex and Body Corporate painting services. We ensure minimal resident disturbance, full site compliance, and transparent Independent QA on all common property painting projects.',
    path: '/painting/body-corporate-painting',
});

// --- KEY FEATURES DATA ---
const ProjectFeatures = [
    {
        title: "Owner Supervision",
        description: "Every project is overseen daily by a director or senior manager, ensuring quality standards are maintained.",
        icon: Users,
        accentColor: "border-tertiary",
    },
    {
        title: "Advanced Access",
        description: "We utilize our own scaffolding and high-access methods to manage costs and ensure safe, compliant painting of high-rise structures.",
        icon: Truck,
        accentColor: "border-secondary",
    },
    {
        title: "Minimal Disruption",
        description: "Strict scheduling and site cleanup protocols minimize noise and inconvenience for residents and unit owners.",
        icon: Clock,
        accentColor: "border-tertiary",
    },
    {
        title: "Common Property Focus",
        description: "Specialized in common area painting, including boundary walls, guard houses, lift shafts, and large unit facades.",
        icon: Paintbrush,
        accentColor: "border-secondary",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function BodyCorporatePaintingPage() {
    return (
        <div className="bg-primary pt-24 text-white">

            {/* --- MODULE 1: PAINTING FOCUS HERO --- */}
            <section className="relative py-24 md:py-40 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Large-Scale Residential Complexes
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Dedicated Body Corporate Painting Services.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        We deliver the durability and compliance required by trustees, supported by our **Independent QA guarantee** that eliminates debates over application quality.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Get Quote for Common Property &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: PROJECT FEATURES GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Project Management That Works for Residents
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Our team is optimized for efficiency and resident respect when working in complex, high-density residential environments.
                        </p>
                    </header>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {ProjectFeatures.map((feature, index) => (
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
                    
                    <div className="mt-12 text-center">
                         <Button asChild
                            variant="link"
                            className="text-tertiary hover:text-white mt-4 pl-0 text-lg font-bold"
                        >
                            <Link href="/solutions/for-body-corporates">
                                See How We Eliminate Trustee Risk &rarr;
                            </Link>
                        </Button>
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