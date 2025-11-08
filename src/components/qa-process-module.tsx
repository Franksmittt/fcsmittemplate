// src/components/qa-process-module.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// This component represents the De-Risking/QA Process section.
export function QaProcessModule() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* --- LEFT COLUMN: Narrative & CTA --- */}
                    <div className="lg:col-span-5">
                        <span className="text-primary font-semibold uppercase text-sm tracking-widest">Our Unbeatable Guarantee</span>
                        <h2 className="text-4xl font-extrabold text-primary uppercase mb-4 mt-2 leading-tight">
                            De-Risking Your Multi-Million Rand Asset.
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Unlike standard contractors who rely on biased, in-house quality checks, we utilize a trusted, **independent 3rd party QA company** on all projects. This is our commitment to verifiably superior quality.
                        </p>
                        {/* Button using shadcn/ui Button asChild */}
                        <Button asChild 
                            className="bg-primary hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 text-lg h-auto"
                        >
                            <Link href="/our-process-independent-qa">
                                Read the Full QA Process
                            </Link>
                        </Button>
                    </div>
                    
                    {/* --- RIGHT COLUMN: QA Steps --- */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Step 1 */}
                        <div className="p-6 border-l-4 border-secondary bg-white shadow-xl rounded-lg transition duration-300 transform hover:scale-[1.01]">
                            <div className="text-5xl font-extrabold text-primary mb-2 leading-none">01</div>
                            <h3 className="text-xl font-bold text-primary mb-2">Substrate Specification & Assessment</h3>
                            <p className="text-gray-600">
                                A dedicated project manager and the independent body conduct an **on-site assessment** to determine the correct coating system and technical specification required for your specific asset.
                            </p>
                        </div>
                        {/* Step 2 */}
                        <div className="p-6 border-l-4 border-secondary bg-white shadow-xl rounded-lg transition duration-300 transform hover:scale-[1.01]">
                            <div className="text-5xl font-extrabold text-primary mb-2 leading-none">02</div>
                            <h3 className="text-xl font-bold text-primary mb-2">Continuous Application Inspection</h3>
                            <p className="text-gray-600">
                                The independent company performs **continuous application inspections** at every critical stage (surface prep, primer, film thickness) to ensure manufacturer requirements are met *before* the final coat.
                            </p>
                        </div>
                        {/* Step 3 */}
                        <div className="p-6 border-l-4 border-secondary bg-white shadow-xl rounded-lg transition duration-300 transform hover:scale-[1.01]">
                            <div className="text-5xl font-extrabold text-primary mb-2 leading-none">03</div>
                            <h3 className="text-xl font-bold text-primary mb-2">Verifiable Bi-Weekly Reporting</h3>
                            <p className="text-gray-600">
                                You receive **bi-weekly progress and substrate reports** providing a complete, recorded history of the project. This delivers objective proof of quality and total peace of mind for trustees and facility managers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}