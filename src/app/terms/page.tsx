// src/app/terms/page.tsx
import type { Metadata } from 'next';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { FileText } from 'lucide-react';

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Terms of Service | Maverick Painting Contractors',
    description: 'Review the official Terms of Service for all contracting work and use of the Maverick Painting website.',
};

// --- MAIN PAGE COMPONENT ---
export default function TermsPage() {
    return (
        <div className="bg-primary pt-32 pb-24 text-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                
                <header className="mb-12 border-b border-gray-700 pb-6">
                    <FileText className="w-10 h-10 text-secondary mb-3" />
                    <h1 className="text-5xl font-extrabold uppercase mb-3">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-gray-400">
                        Last Updated: November 9, 2025
                    </p>
                </header>

                <div className="space-y-8 text-gray-300 leading-relaxed text-base">
                    
                    {/* SECTION 1: Introduction */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By engaging Maverick Painting for services, or by using this website, you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). These Terms govern your access to and use of our services and our website. If you disagree with any part of the terms then you may not access the Service.
                        </p>
                    </section>
                    
                    {/* SECTION 2: Service Provision */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Service Provision and Scope of Work</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>All project work, including structural repairs, painting, and waterproofing, will be executed strictly in accordance with the signed quotation and technical specification provided to the client.</li>
                            <li>The scope of work is defined exclusively by the written agreement and does not include any verbal modifications unless formalized in writing.</li>
                            <li>Payment terms and conditions, including deposit schedules and final settlement, are outlined in the official quotation document.</li>
                        </ul>
                    </section>
                    
                    {/* SECTION 3: Quality Assurance and Guarantees */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Quality Assurance and Guarantees</h2>
                        <p>
                            We warrant that the work will be performed in a professional and workmanlike manner. Product guarantees are issued by the respective material manufacturer (e.g., Plascon, Dulux, Sika) and are subject to their terms and conditions. Our **Independent 3rd Party QA** process is designed to mitigate risk but does not replace manufacturer guarantees.
                        </p>
                    </section>

                    {/* SECTION 4: Liability */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                        <p>
                            Maverick Painting&apos;s liability is limited to the total value of the contract price for the services rendered. We are not liable for consequential damages or latent defects in the original structure that were not identifiable during the initial inspection.
                        </p>
                    </section>

                    {/* SECTION 5: Governing Law */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions.
                        </p>
                    </section>

                </div>

            </div>
            {/* The final CTA strip sits below the main content, outside the text container */}
            <div className="mt-20">
                <CtaFinalStrip />
            </div>
        </div>
    );
}