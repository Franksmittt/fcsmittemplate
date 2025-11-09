// src/app/blog/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { BookOpen, Wrench, Layers, Building } from 'lucide-react';

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Expertise Hub: Structural Repair, Waterproofing & Coating Guides | Maverick Blog',
    description: 'Read technical guides and expert advice on concrete spalling, high-performance epoxy coatings, industrial waterproofing, and managing body corporate maintenance projects.',
};

// --- DATA: Content Categories (Future SEO Silos) ---
const ContentCategories = [
    { title: "Structural Remediation", icon: Wrench, description: "Deep dives into concrete cancer, crack injection, and spalling repair methodologies.", href: "/blog/structural-remediation" },
    { title: "Waterproofing & Damp", icon: Layers, description: "Guides on choosing the right torch-on or liquid membrane system for flat roofs and balconies.", href: "/blog/waterproofing" },
    { title: "Commercial & Industrial", icon: Building, description: "Best practices for facility managers, corrosion control, and large-scale project management.", href: "/blog/industrial" },
];

// --- MAIN PAGE COMPONENT ---
export default function BlogIndexPage() {
    return (
        <div className="bg-primary pt-24 text-white min-h-screen">

            {/* --- MODULE 1: BLOG HERO (Authority Statement) --- */}
            <section className="relative py-24 md:py-32 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <BookOpen className="w-12 h-12 text-tertiary mb-4" />
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        The Expertise Hub. Technical Guides & Insights.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        We don&apos;t just paint; we educate. Access expert resources on solving complex structural and waterproofing defects for high-value assets.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Contact an Expert Now &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: CONTENT CATEGORIES (SEO Silo Links) --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Explore Technical Categories
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Jump straight into the expert knowledge required to protect your asset.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {ContentCategories.map((category, index) => (
                            <Link key={index} href={category.href}
                                className="p-8 bg-gray-900 rounded-xl shadow-xl border-t-4 border-tertiary 
                                           transition-all duration-300 transform hover:scale-[1.03] hover:shadow-tertiary/50 group"
                            >
                                <category.icon className="w-8 h-8 text-secondary mb-4 group-hover:text-tertiary" />
                                <h3 className="text-2xl font-bold uppercase mb-2 text-white">
                                    {category.title}
                                </h3>
                                <p className="text-gray-400 text-base">
                                    {category.description}
                                </p>
                                <span className="text-tertiary font-bold mt-4 block group-hover:text-white transition-colors">
                                    View Articles &rarr;
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MODULE 3: FEATURED ARTICLES (Placeholder for Dynamic Content) --- */}
            <section className="py-24 px-4 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-extrabold uppercase mb-12">
                        Latest Insights
                    </h2>
                    
                    {/* Placeholder for fetching and mapping dynamic articles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center text-gray-500 italic">
                        <p className="p-12 bg-primary rounded-xl">Article Placeholder 1 (Requires CMS/Database Integration)</p>
                        <p className="p-12 bg-primary rounded-xl">Article Placeholder 2 (Requires CMS/Database Integration)</p>
                        <p className="p-12 bg-primary rounded-xl">Article Placeholder 3 (Requires CMS/Database Integration)</p>
                    </div>
                </div>
            </section>

            {/* --- MODULE 4: FINAL CTA STRIP (Conversion Funnel) --- */}
            <CtaFinalStrip />
        </div>
    );
}