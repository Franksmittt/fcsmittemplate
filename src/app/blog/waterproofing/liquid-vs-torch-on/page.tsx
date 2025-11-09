// src/app/blog/waterproofing/liquid-vs-torch-on/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Droplet, BookOpen, Layers, CheckSquare } from 'lucide-react'; 

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Technical Comparison: Liquid Applied vs. Torch-On Waterproofing Membranes',
    description: 'An expert technical guide comparing the durability, installation process, and long-term cost-effectiveness of liquid applied polyurethane membranes against traditional torch-on felt systems for flat roofs and balconies.',
};

// --- MAIN PAGE COMPONENT ---
export default function LiquidVsTorchOnArticle() {
    return (
        <div className="bg-gray-50 pt-32 pb-24 text-primary min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                
                {/* --- HEADER: Article Metadata --- */}
                <header className="mb-12 border-b border-gray-300 pb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                        <Link href="/blog/waterproofing" className="hover:text-secondary font-semibold uppercase">
                            <BookOpen className="w-4 h-4 mr-1 inline-block" /> Waterproofing Guides
                        </Link>
                        <span>|</span>
                        <span className="flex items-center space-x-1"><Layers className="w-4 h-4" /> Technical Specification</span>
                    </div>
                    
                    <h1 className="text-5xl font-extrabold text-primary leading-tight uppercase mb-4">
                        Liquid Applied vs. Torch-On: Which Waterproofing System is Superior?
                    </h1>
                </header>

                {/* --- ARTICLE CONTENT --- */}
                <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                    
                    <section>
                        <h2 className="text-3xl font-bold text-primary mb-4">The Seamless Advantage of Liquid Membranes</h2>
                        <p>
                            **Liquid Applied Membranes (LAMs)**, particularly polyurethane systems, offer a fundamentally superior seal for complex flat roofs and structures. Unlike felt-based systems, LAMs cure to form a single, seamless, monolithic barrier. This eliminates the weakest point of any traditional system: the joins and overlaps.
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-6 font-semibold">
                            <li className="flex items-center space-x-2"><Droplet className="w-5 h-5 text-secondary" /> Forms a single, monolithic, and joint-free barrier.</li>
                            <li className="flex items-center space-x-2"><CheckSquare className="w-5 h-5 text-secondary" /> Adheres fully to substrates, reducing risk of water migration beneath the membrane.</li>
                            <li className="flex items-center space-x-2"><Droplet className="w-5 h-5 text-secondary" /> Ideal for complex details like parapet walls, vents, and flashings where torch-on often fails.</li>
                        </ul>
                    </section>
                    
                    <section>
                        <h2 className="text-3xl font-bold text-primary mb-4">The Trade-offs of Torch-On Systems</h2>
                        <p>
                            **Torch-On Systems** (bituminous felt) are robust and widely used, but their reliance on heat application introduces site risks and inherent limitations. Every overlap is a potential point of failure. While they offer excellent resistance to foot traffic and puncture, the system&apos;s performance is entirely dependent on the skill and precision of the applicator fusing the seams.
                        </p>
                    </section>

                    <section className="bg-primary text-white p-6 rounded-xl shadow-xl">
                        <h3 className="text-2xl font-bold text-tertiary mb-3">Maverick&apos;s Specification Recommendation</h3>
                        <p className="text-lg">
                            For critical, high-value assets (like multi-story commercial roofs and balconies), we generally specify **high-quality polyurethane LAMs** due to their seamless, long-term integrity. For large, open, and accessible industrial roofs, an expertly applied torch-on system can still be cost-effective. The choice is always substrate and project-specific.
                        </p>
                         <Button asChild className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12">
                            <Link href="/waterproofing-services">Request a Waterproofing Specification Audit &rarr;</Link>
                        </Button>
                    </section>
                </div>
            </div>
            
            {/* --- MODULE 4: FINAL CTA STRIP (Conversion Funnel) --- */}
            <div className="mt-20">
                <CtaFinalStrip />
            </div>
        </div>
    );
}