// src/app/services/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ClipboardCheck, Shield, Wrench, FlaskConical, Building, Layers, Home, Factory, Phone } from 'lucide-react';
// Removed HardHat and Scroll
import { QaProcessModule } from '@/components/qa-process-module'; // Reusing existing module
import { AccreditationsStrip } from '@/components/accreditations-strip';
// Reusing existing module

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Specialized Painting, Waterproofing & Structural Repair Services | Gauteng Contractor',
    description: 'A structural asset maintenance partner offering guaranteed, turn-key solutions for commercial, industrial, and body corporate properties, including structural repairs, specialized coatings, and Independent QA. Johannesburg & Pretoria.',
};
// --- CORE SERVICE PILLAR DATA (Central to SEO Silo) ---
const servicePillars = [
    {
        title: "Structural & Remedial Repairs",
        href: "/structural-repairs",
        icon: Wrench,
        description: "The foundation of asset maintenance. We fix concrete cancer, spalling, structural cracks, and joint defects before any coating is applied.",
        subServices: [
            "Concrete Spalling Repair",

            "Structural Crack Injection",
            "Expansion Joint Sealing",
            "Rising Damp Treatment",
        ],
        accentColor: "border-tertiary",
        isFeatured: true, // Used for visual prominence
    },
    {
        title: "Specialized Coating Systems",
        href: "/specialized-coatings",

        icon: FlaskConical,
        description: "Beyond standard paint. We are approved applicators for high-performance, durable floor, wall, and industrial coating systems.",
        subServices: [
            "Epoxy & Polyurethane Flooring",
            "Hygienic Food-Grade Floors",
            "Marmoran Master Applicator",
            "Industrial Corrosion Control",

        ],
        accentColor: "border-secondary",
        isFeatured: false,
    },
    {
        title: "Advanced Waterproofing",
        href: "/waterproofing-services",
        icon: Shield,
        description: "Guaranteed systems for high-stakes water ingress problems in flat roofs, slabs, and balconies, using both Torch-On and Liquid Applied Membranes.",
        subServices: [

            "Flat Concrete Roof Systems",
            "Leaking Balcony Repair (Under-Tile)",
            "Torch-On & Liquid Membranes",
            "Basement Waterproofing",
        ],
        accentColor: "border-tertiary",
        isFeatured: false,
    },
    {
        title: "Commercial & High-Access Painting",
        href: "/painting-services",
        icon: Building,
        description: "High-volume painting solutions for Body Corporates, industrial sites, and commercial spaces, including complex access and full project management.",
        subServices: [
            "Body Corporate Painting",
            "Industrial & Factory Painting",
            "Rope Access Painting",

            "Roof Painting & Restoration",
        ],
        accentColor: "border-secondary",
        isFeatured: false,
    },
];
// --- MAIN PAGE COMPONENT ---
export default function ServicesPage() {
    return (
        <div className="bg-primary pt-24">

            {/* --- MODULE 1: SEO HERO (Structural Thesis) --- */}
            <section className="relative py-20 md:py-32 px-4 text-white bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 
items-center">

                    {/* LEFT: Headline */}
                    <div className="lg:col-span-6">
                        <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-2">
                            The Turn-Key Asset Solution
                        </p>
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase text-white">
                            Beyond Paint. Specialized Contractor Services.
                        </h1>
                    </div>

                    {/* RIGHT: Core Thesis/CTA */}
                    <div 
className="lg:col-span-6 lg:pl-12">
                        <p className="text-xl font-light text-gray-400 mb-6">
                            We are not general painters. We are structural remediation specialists, approved applicators, and advanced coating experts. We provide guaranteed, turn-key solutions from defect identification to the final protective layer.
                        </p>

                        {/* Direct link to QA Process */}
                        <Button asChild 

                            className="bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12 shadow-xl"
                        >
                            <Link href="/our-process-independent-qa" className="flex items-center space-x-2">
                                <ClipboardCheck className="w-5 h-5" />
                                <span>Our Independent QA Guarantee</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* --- MODULE 2: AUDIENCE FUNNEL (Segmented UX) --- */}
            <section className="py-20 px-4 bg-primary text-white">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase text-white mb-3">
                            Who We Serve
                        </h2>
                        <p className="text-xl text-gray-400 font-light">
                            Select your role below to view the solutions, guarantees, and compliance you require.
                        </p>
                    </header>

                    {/* 3-Column Audience Grid - High Contrast Links */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* Audience 1: Developers / Engineers */}
                        <Link href="/solutions/for-developers" className="group p-8 bg-gray-900 rounded-xl shadow-2xl border-b-4 border-secondary transform hover:scale-[1.03] transition-all duration-500">
                            <Factory className="w-10 h-10 text-secondary mb-3" />
                            <h3 className="text-2xl font-extrabold uppercase text-white mb-2">Developers & Engineers</h3>
                            <p className="text-gray-400 text-base mb-4">
                                Verifiable specifications, on-time delivery, and full compliance 
                                to eliminate delays and hand-over issues.
                            </p>
                            <span className="text-tertiary font-bold group-hover:text-white transition-colors">
                                View Technical Solutions &rarr;
                            </span>
                        </Link>

                        {/* Audience 2: Body Corporates / HOAs */}
                        <Link href="/solutions/for-body-corporates" className="group p-8 bg-gray-900 rounded-xl shadow-2xl border-b-4 border-tertiary transform hover:scale-[1.03] transition-all duration-500">
                            <Layers className="w-10 h-10 text-tertiary mb-3" />
                            <h3 className="text-2xl font-extrabold uppercase text-white mb-2">Body Corporates & Trustees</h3>
                            <p className="text-gray-400 text-base mb-4">
                                Independent QA, co-signed guarantees, and minimal disturbance for long-term asset security and peace of mind.
                            </p>
                            <span className="text-tertiary font-bold group-hover:text-white transition-colors">
                                View Maintenance Solutions &rarr;
                            </span>
                        </Link>

                        {/* Audience 3: Homeowners / Industrial */}
                        <Link href="/solutions/for-homeowners" className="group p-8 bg-gray-900 rounded-xl shadow-2xl border-b-4 border-secondary transform hover:scale-[1.03] transition-all duration-500">
                            <Home className="w-10 h-10 text-secondary mb-3" />
                            <h3 className="text-2xl font-extrabold uppercase text-white mb-2">Homeowners & Facilities</h3>
                            <p className="text-gray-400 text-base mb-4">
                                Owner supervised excellence, guaranteed workmanship, and the highest standards of cleanliness and efficiency for your property.
                            </p>
                            <span className="text-tertiary font-bold group-hover:text-white transition-colors">
                                View Project Solutions &rarr;
                            </span>
                        </Link>
                    </div>
                </div>
            </section>


            {/* --- MODULE 3: THE SERVICE SILOS (Pillars Grid) --- */}

            <section className="py-24 md:py-32 px-4 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-5xl font-extrabold uppercase text-white mb-3">
                            The Four Pillars of Asset Protection
                        </h2>
                        <p className="text-xl text-gray-400 font-light">
                            Select an expertise area below 
                            to see how we apply advanced methods and verifiable quality to your specific maintenance challenge.
                        </p>
                    </header>

                    {/* 2x2 Layout with a Featured Item for a non-template look */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {servicePillars.map((pillar, index) => {
                            const IconComponent = pillar.icon;

                            // Visual emphasis for the most complex service (Structural)
                            const isFeatured = pillar.isFeatured;
                            const cardClass = isFeatured ? "lg:col-span-2 p-10 transform hover:scale-[1.01] transition-all duration-500" : 
                                                    "p-8 transform hover:scale-[1.03] transition-all duration-500";
                            const titleClass = isFeatured ? "text-3xl md:text-4xl" : "text-2xl";
                            const descriptionClass = isFeatured ? "text-lg text-secondary/80 mt-4" : "text-base text-gray-400 mt-2";
                            return (
                                <Link 
                                    key={index} 
                                    href={pillar.href}
                                    className={`group bg-primary rounded-xl shadow-2xl flex flex-col justify-between 
                                                ${cardClass} ${pillar.accentColor}`}
                                    style={{ borderTopWidth: isFeatured ? '8px' : '4px' }}
                                >
                                    <div>
                                        <IconComponent className="w-10 h-10 text-secondary mb-4 group-hover:text-tertiary transition-colors" />
                                        <h3 className={titleClass + 
                                            " font-extrabold uppercase text-white mb-2 leading-snug"}>
                                            {pillar.title}
                                        </h3>
                                        <p className={descriptionClass}>
                                            {pillar.description}
                                        </p>
                                    </div>

                                    <div className="mt-8">
                                        <ul className="space-y-2 text-sm text-gray-400 list-inside border-t border-gray-700 pt-4 mb-4">
                                            {pillar.subServices.map((sub, i) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-tertiary mr-2">•</span>
                                                    <span className="flex-1 text-base font-medium">{sub}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <span className="text-lg font-bold text-secondary flex items-center group-hover:text-tertiary transition-colors">
                                            Explore Full Expertise &rarr;
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* --- MODULE 4: THE PROCESS IN DEPTH (Trust Module) --- */}
            <QaProcessModule />


            {/* --- MODULE 5: ACCREDITATIONS (Visual Trust) --- */}
            <AccreditationsStrip />

            {/* --- MODULE 6: FINAL CTA STRIP (Conversion Funnel) --- */}
            <section className="bg-header-dark py-12 px-4">
                <div className="max-w-7xl mx-auto text-center">

                    <h2 className="text-3xl font-extrabold text-white mb-4">
                        Don&apos;t Risk Your Asset. Talk to a Specialist.
                    </h2>
                    <p className="text-gray-400 text-lg mb-6">
                        Contact us today to schedule an on-site assessment and receive your substrate-specific specification.
                    </p>
                    <Button asChild 
                        className="bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-xl h-14 shadow-2xl transform hover:scale-105"
                    >
                        <a 
                            href="tel:0826277082" className="flex items-center space-x-2">
                            <Phone className="w-6 h-6" />
                            <span>Call Lawrence Brooks: 082 627 7082</span>
                        </a>
                    </Button>
                </div>
            </section>

        </div>
    );
}