// src/app/blog/waterproofing/rising-damp-guide/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Layers, BookOpen, CheckSquare, Droplet, Wrench } from 'lucide-react'; 

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'The Permanent Fix for Rising Damp: Chemical DPC Injection Guide',
    description: 'A comprehensive guide on diagnosing rising damp versus condensation, detailing the chemical DPC (Damp Proof Course) injection method, and the essential subsequent plaster remediation.',
};

// --- MAIN PAGE COMPONENT ---
export default function RisingDampGuideArticle() {
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
                        <span className="flex items-center space-x-1"><Droplet className="w-4 h-4" /> Moisture Control</span>
                    </div>
                    
                    <h1 className="text-5xl font-extrabold text-primary leading-tight uppercase mb-4">
                        The Permanent Fix for Rising Damp: Chemical DPC Injection.
                    </h1>
                </header>

                {/* --- ARTICLE CONTENT --- */}
                <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
                    
                    <section>
                        <h2 className="text-3xl font-bold text-primary mb-4">Rising Damp vs. Condensation: The Correct Diagnosis</h2>
                        <p>
                            The first mistake is treating all internal dampness as rising damp. Rising damp draws moisture up from the ground via capillary action, typically affecting only the lowest meter of the wall. Condensation is an airborne moisture problem, usually appearing in high-humidity areas like bathrooms. We use **moisture profiling equipment** to definitively diagnose the source before recommending treatment.
                        </p>
                    </section>
                    
                    <section>
                        <h2 className="text-3xl font-bold text-primary mb-4">The Chemical DPC Injection Process</h2>
                        <p>
                            Since many older properties have failed or absent damp-proof courses, the modern solution is a **Chemical DPC**. This involves drilling a series of holes into the lowest mortar course, injecting a water-repellent (silane or siloxane-based) cream under pressure, and allowing it to cure.
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-6 font-semibold">
                            <li className="flex items-center space-x-2"><Wrench className="w-5 h-5 text-secondary" /> **Injection:** Forming a new, permanent, horizontal barrier within the wall fabric.</li>
                            <li className="flex items-center space-x-2"><Layers className="w-5 h-5 text-secondary" /> **Plaster Remediation:** All contaminated plaster must be removed and replaced with salt-retardant render to prevent salt migration.</li>
                            <li className="flex items-center space-x-2"><CheckSquare className="w-5 h-5 text-secondary" /> **Finishing:** Applying a final coat of breathable, decorative paint.</li>
                        </ul>
                    </section>

                    <section className="bg-primary text-white p-6 rounded-xl shadow-xl">
                        <h3 className="text-2xl font-bold text-tertiary mb-3">Why DIY Damp Proofing Fails</h3>
                        <p className="text-lg">
                            The failure of DIY or non-specialized damp proofing usually occurs in the **plaster remediation** phase. If salt-contaminated plaster is not fully removed, the salts will continue to draw moisture from the air, causing the damp to reappear. Always use a professional who guarantees the entire process.
                        </p>
                         <Button asChild className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12">
                            <Link href="/damp-proofing-services">View Our Full Damp Proofing Solutions &rarr;</Link>
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