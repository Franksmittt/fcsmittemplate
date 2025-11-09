// src/app/about-us/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { ClipboardCheck, Medal, Scroll, Users, Phone, Wrench, Sprout, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module'; // Reusing existing module
import { AccreditationsStrip } from '@/components/accreditations-strip'; // Reusing existing module

// --- Temporary Local Components for the About Page ---

// NOTE: In a professional setup, complex components like this would be moved 
// to src/components/about/section-name.tsx for clean architecture.

// Component for the "Experience" statistics grid
function ExperienceStatCard({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) {
    return (
        <div className="flex flex-col items-center p-6 bg-primary border border-secondary/50 rounded-xl shadow-xl">
            <Icon className="w-8 h-8 text-secondary mb-3 animate-shake" />
            <h3 className="text-4xl font-extrabold text-white">{value}</h3>
            <p className="text-sm uppercase tracking-wider text-tertiary mt-1 font-semibold">{label}</p>
        </div>
    );
}

// --- METADATA (SEO) ---
export const metadata: Metadata = {
    title: 'Owner Supervised Painting Contractors - 50+ Years Experience | Maverick',
    description: 'Established in 2004, Maverick Painting offers structural repair and specialized coatings, backed by Independent 3rd Party Quality Assurance on every high-value project.',
};


// --- MAIN PAGE COMPONENT ---
export default function AboutUsPage() {
    return (
        <div className="bg-primary pt-24">
            
            {/* --- MODULE 1: THE AUTHORITY HERO (Experience & Mission) --- */}
            <section className="relative py-24 md:py-32 px-4 text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* LEFT: Headline & Core USP */}
                    <div className="lg:col-span-7">
                        <p className="text-xl font-medium uppercase tracking-widest text-secondary mb-2">
                            The Structural Asset Maintenance Partner
                        </p>
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase text-white">
                            Driven by Experience. Built for Trust.
                        </h1>
                        <p className="text-xl font-light mt-6 max-w-2xl text-gray-400">
                            Maverick Painting was established in 2004 and is led by a management team with more than 50 years combined experience in the coatings and structural solutions industry. 
                            We are committed to verifiable safety, reliability, and guaranteed quality workmanship.
                        </p>

                        {/* Direct CTA */}
                        <Button asChild 
                            className="mt-8 bg-tertiary hover:bg-[#9ED529] text-primary font-bold text-lg h-12 shadow-xl transform hover:scale-[1.02]"
                        >
                            <Link href="/contact">
                                Get Your Verifiable Quote Now
                            </Link>
                        </Button>
                    </div>

                    {/* RIGHT: Visual Proof & Stats Grid */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Placeholder for Management Photo */}
                        <div className="w-full h-80 bg-gray-800 rounded-xl shadow-2xl flex items-center justify-center">
                            <span className="text-white/60 text-lg"></span>
                        </div>
                        
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <ExperienceStatCard value="50+" label="Years Combined" icon={Medal} />
                            <ExperienceStatCard value="Est. 2004" label="Since Inception" icon={Scroll} />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MODULE 2: CORE PILLARS & INDEPENDENCE (4-Column Grid) --- */}
            <section className="bg-gray-900 py-24 px-4 border-t border-b border-primary/50">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-3xl mx-auto mb-16">
                         <h2 className="text-4xl font-extrabold uppercase text-white mb-3">
                            The Maverick Difference
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Our process is built on four non-negotiable standards that de-risk the project for every high-value client.
                        </p>
                    </header>
                    
                    {/* 4-Column Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        {/* Pillar 1: Owner Supervision */}
                        <div className="p-6 bg-primary rounded-xl shadow-xl border-t-4 border-tertiary transform hover:shadow-tertiary/40 transition duration-300">
                            <Users className="w-8 h-8 text-tertiary mb-3" />
                            <h3 className="text-xl font-bold uppercase text-white mb-2">Daily Owner Supervision</h3>
                            <p className="text-gray-400 text-sm">
                                Every project is owner supervised daily with a dedicated foreman on-site, ensuring the highest quality of workmanship is maintained.
                            </p>
                        </div>

                        {/* Pillar 2: Specialized Access */}
                        <div className="p-6 bg-primary rounded-xl shadow-xl border-t-4 border-secondary transform hover:shadow-secondary/40 transition duration-300">
                            <Scroll className="w-8 h-8 text-secondary mb-3" />
                            <h3 className="text-xl font-bold uppercase text-white mb-2">Advanced Access Solutions</h3>
                            <p className="text-gray-400 text-sm">
                                We invest in advanced access methods, including scaffolding, rope access, and cherry pickers, to ensure cost-effective access to the most difficult surfaces.
                            </p>
                        </div>
                        
                        {/* Pillar 3: Manufacturer Compliance */}
                        <div className="p-6 bg-primary rounded-xl shadow-xl border-t-4 border-tertiary transform hover:shadow-tertiary/40 transition duration-300">
                            <Medal className="w-8 h-8 text-tertiary mb-3" />
                            <h3 className="text-xl font-bold uppercase text-white mb-2">Manufacturer Guarantees</h3>
                            <p className="text-gray-400 text-sm">
                                We work closely with the best paint & waterproofing manufacturers to issue manufacturer and workmanship guarantees.
                            </p>
                        </div>
                        
                        {/* Pillar 4: Independent QA (The Differentiator) */}
                        <div className="p-6 bg-primary rounded-xl shadow-xl border-t-4 border-secondary transform hover:shadow-secondary/40 transition duration-300">
                            <ClipboardCheck className="w-8 h-8 text-secondary mb-3" />
                            <h3 className="text-xl font-bold uppercase text-white mb-2">Independent QA Process</h3>
                            <p className="text-gray-400 text-sm">
                                We use independent 3rd party quality assurance on all projects, with fortnightly reports on progress and film thickness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- NEW MODULE 3: THE STRUCTURAL THESIS (Paint vs. Plaster) --- */}
            <section className="py-24 px-4 text-white bg-primary">
                 <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* LEFT: Core Structural Statement */}
                    <div className="lg:pr-12">
                        <span className="text-xl font-medium uppercase tracking-widest text-tertiary mb-2 block">
                            Our Core Thesis
                        </span>
                        <h2 className="text-5xl font-extrabold leading-tight uppercase mb-4">
                            We Don&apos;t Just Paint Over Problems.
                        </h2>
                        <p className="text-xl font-light text-gray-400">
                            We pivot the conversation from cosmetic painting to structural protection. Visible cracks, spalling, and damp are symptoms of deeper asset failure. We handle defect identification, structural repairs, waterproofing, and specialized coatings—providing a complete turn-key solution.
                        </p>
                        
                        <Button asChild 
                            variant="link"
                            className="text-secondary hover:text-white mt-4 pl-0 text-lg font-bold"
                        >
                            <Link href="/structural-repairs">
                                Explore Our Structural Repair Services &rarr;
                            </Link>
                        </Button>
                    </div>

                    {/* RIGHT: Service Breakdown Grid (The Proof) */}
                    <div className="grid grid-cols-2 gap-6 p-4 bg-gray-900 rounded-xl shadow-2xl">
                         <div className="p-4">
                            <Wrench className="w-6 h-6 text-secondary mb-2" />
                            <h4 className="font-bold text-lg text-white">Structural Repairs</h4>
                            <p className="text-sm text-gray-400">Concrete spalling, crack injection, and expansion joint sealing are fixed structurally, not just patched.</p>
                        </div>
                        <div className="p-4">
                            <Shield className="w-6 h-6 text-tertiary mb-2" />
                            <h4 className="font-bold text-lg text-white">Waterproofing First</h4>
                            <p className="text-sm text-gray-400">Guaranteed systems for flat roofs and balconies using manufacturer-approved membranes and liquid-applied coatings.</p>
                        </div>
                         <div className="p-4">
                            <Sprout className="w-6 h-6 text-tertiary mb-2" />
                            <h4 className="font-bold text-lg text-white">Turn-Key Service</h4>
                            <p className="text-sm text-gray-400">From defect identification to preparation and final specialized coating application, we provide a full solution.</p>
                        </div>
                        <div className="p-4">
                            <ClipboardCheck className="w-6 h-6 text-secondary mb-2" />
                            <h4 className="font-bold text-lg text-white">Specialized Coatings</h4>
                            <p className="text-sm text-gray-400">We are one of a select few applicators for high-performance, industrial-grade floor and wall systems.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- MODULE 4: THE PROCESS IN DEPTH (Reusing existing module) --- */}
            {/* The QA Process module is perfectly suited for the narrative architecture. */}
            <QaProcessModule />

            {/* --- MODULE 5: ACCREDITATIONS (Reusing existing module) --- */}
            {/* Displaying logos to build visual trust. */}
            <AccreditationsStrip />

            {/* --- MODULE 6: FINAL CTA STRIP (Standard Footer CTA) --- */}
            <section className="bg-header-dark py-12 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white mb-4">
                        Ready for Verifiable, Zero-Risk Quality?
                    </h2>
                    <p className="text-gray-400 text-lg mb-6">
                        Contact us today to schedule an on-site assessment and receive your substrate-specific specification.
                    </p>
                     <Button asChild 
                        className="bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-xl h-14 shadow-2xl transform hover:scale-105"
                    >
                        <a href="tel:0826277082" className="flex items-center space-x-2">
                             <Phone className="w-6 h-6" />
                             <span>Call Lawrence Brooks: 082 627 7082</span>
                        </a>
                    </Button>
                </div>
            </section>

        </div>
    );
}