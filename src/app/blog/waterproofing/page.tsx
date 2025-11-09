// src/app/blog/waterproofing/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Shield, Droplet, Layers } from 'lucide-react'; // REMOVED: Building

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Waterproofing & Damp Proofing Guides | Flat Roof, Balcony, and Basement Solutions',
    description: 'Expert guides on selecting liquid-applied vs. torch-on membranes, preventing rising damp, and troubleshooting water ingress in balconies and basements.',
};

// --- DATA: Featured Waterproofing Content (Placeholders) ---
const FeaturedArticles = [
    { 
        title: "Liquid Applied Membranes vs. Torch-On: Which System is Right for Your Roof?", 
        description: "A technical comparison of durability, installation complexity, and warranty implications for flat concrete roofs.", 
        icon: Droplet, 
        href: "/blog/waterproofing/liquid-vs-torch-on" 
    },
    { 
        title: "The Ultimate Guide to Eliminating Rising Damp Permanently", 
        description: "Detailing the chemical DPC injection process and the necessary subsequent plastering and finishing work.", 
        icon: Layers, 
        href: "/blog/waterproofing/rising-damp-guide" 
    },
    { 
        title: "Why Your Under-Tile Balcony Keeps Leaking (and how to fix it)", 
        description: "Diagnosing failed joint sealants and applying low-disruption remediation methods to save your tiles.", 
        icon: Shield, 
        href: "/blog/waterproofing/leaking-balcony-fixes" 
    },
];

// --- MAIN PAGE COMPONENT ---
export default function WaterproofingBlogIndexPage() {
    return (
        <div className="bg-primary pt-24 text-white min-h-screen">

            {/* --- MODULE 1: WATERPROOFING BLOG HERO --- */}
            <section className="relative py-24 md:py-32 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <Layers className="w-12 h-12 text-tertiary mb-4" />
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Waterproofing & Structural Protection Guides.
                    </h1>
                    <p className="2xl font-light mt-6 max-w-4xl text-gray-400">
                        In-depth articles from our specialists on **solving structural water ingress,** chemical damp proofing, and selecting certified membrane systems.
                    </p>

                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Consult a Waterproofing Expert &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: FEATURED ARTICLES GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Essential Guides to Moisture Control
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Protect your investment by understanding the critical technical differences between systems.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {FeaturedArticles.map((article, index) => (
                            <Link key={index} href={article.href}
                                className="p-8 bg-gray-900 rounded-xl shadow-xl border-t-4 border-tertiary 
                                           transition-all duration-300 transform hover:scale-[1.03] hover:shadow-secondary/50 group"
                            >
                                <article.icon className="w-8 h-8 text-secondary mb-4 group-hover:text-tertiary" />
                                <h3 className="text-xl font-bold uppercase mb-2 text-white leading-snug">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {article.description}
                                </p>
                                <span className="text-tertiary font-bold mt-4 block group-hover:text-white transition-colors">
                                    Read Article &rarr;
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* --- MODULE 3: FINAL CTA STRIP (Conversion Funnel) --- */}
            <CtaFinalStrip />
        </div>
    );
}