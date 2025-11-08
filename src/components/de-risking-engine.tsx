// src/components/de-risking-engine.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// Removed unused 'FileText' import. All other required icons imported explicitly:
import { Award, Layers, Scan, Users, XCircle, FileCheck } from 'lucide-react'; 
// Component representing the core De-Risking Engine Narrative
export function DeRiskingEngine() {
    return (
        <section className="w-full bg-gray-50 text-primary py-16 md:py-24 px-4">
            <div className="container mx-auto">

                {/* --- INTRO NARRATIVE HEADER (The "Why") --- */}
                <header className="text-center max-w-4xl mx-auto mb-16 space-y-4">
                    <p className="text-xl font-semibold text-secondary uppercase tracking-widest">
                        The Maverick Standard
                    </p>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-primary">
                        Your Project De-Risking Engine.
                    </h2>
                    <p className="text-xl text-gray-700">
                        This is the process integrity that eliminates failures, satisfies developers, 
                        and guarantees your asset&apos;s longevity. {/* Fixed unescaped apostrophe: 's -> &apos;s */}
                    </p>
                </header>

                {/* --- 6 NARRATIVE FRAMES (Simulating Scrollytelling Path) --- */}
                
                {/* Frame 1: The Problem */}
                <Frame
                    number={1}
                    icon={XCircle}
                    headline="The Real Risk Isn&apos;t the Paint. It&apos;s What&apos;s Hiding Underneath." /* Fixed unescaped apostrophe: 't -> &apos;t */
                    subtext="Most contractors just paint over the problem. Peeling, cracking, and structural failure are inevitable. We are not &quot;most contractors.&quot;" /* Fixed unescaped double quotes: " -> &quot; */
                    iconColor="text-red-600"
                />

                {/* Frame 2: The Diagnosis */}
                <Frame
                    number={2}
                    icon={Scan}
                    headline="Step 1: We Don&apos;t Guess. We Diagnose." /* Fixed unescaped apostrophe: 't -> &apos;t */
                    subtext="As 'Asset Maintenance Partners,' our work begins at the source. We conduct full defect identification to create a substrate-specific specification. We solve the cause, not just the symptom."
                    iconColor="text-tertiary"
                />

                {/* Frame 3: The Fix */}
                <Frame
                    number={3}
                    icon={Layers}
                    headline="Step 2: We Fix the Structure. Not Just the Surface."
                    subtext="We are certified structural repair and waterproofing specialists. We repair the spalling, inject the cracks, and apply guaranteed systems from Sika and a.b.e."
                    iconColor="text-secondary"
                />

                {/* Frame 4: The Application */}
                <Frame
                    number={4}
                    icon={Award}
                    headline="Step 3: A Flawless Finish, Guaranteed by the Manufacturer."
                    subtext="Only after the structure is sound does the painting begin. Our highly trained, 'Owner-Supervised' teams apply advanced coatings as Approved Applicators for Plascon, Dulux, and Marmoran."
                    iconColor="text-tertiary"
                />
                
                {/* Frame 5: The Climax (The Unbeatable USP) - Now using FileCheck */}
                <Frame
                    number={5}
                    icon={FileCheck} 
                    headline="Step 4: You Don&apos;t Have to Take Our Word for It." /* Fixed unescaped apostrophe: 't -> &apos;t */
                    subtext="This is the Maverick Standard. We are the only contractor that engages an **Independent 3rd Party Quality Assurance** company. You get objective, bi-weekly reports and a guarantee backed by an independent auditor. No excuses. Just verifiable proof."
                    iconColor="text-secondary"
                    isClimax={true}
                />
                
                {/* Frame 6: The Human Element */}
                <Frame
                    number={6}
                    icon={Users}
                    headline="Step 5: We&apos;re On-Site. Every. Single. Day." /* Fixed unescaped apostrophe: 're -> &apos;re */
                    subtext="With 50+ years of combined experience, our projects are Owner Supervised Daily. You get a dedicated project manager and total accountability. This is our promise. This is our process."
                    iconColor="text-tertiary"
                    isFinal={true}
                />
                
                {/* --- Dynamic Proof Bar Placeholder (Future Implementation) --- */}
                <DynamicProofBarPlaceholder />

            </div>
        </section>
    );
}


// --- Helper Component: Simulates a single frame's content and visual space ---
const Frame = ({ number, headline, subtext, icon: Icon, iconColor, isClimax, isFinal }: { 
    number: number; 
    headline: string; 
    subtext: string; 
    icon: React.ElementType; 
    iconColor: string; 
    isClimax?: boolean;
    isFinal?: boolean;
}) => (
    <div 
        className="grid md:grid-cols-2 gap-10 py-16 md:py-24 min-h-[70vh] items-center border-t border-gray-200" 
        style={isFinal ? {} : {marginBottom: '80px'}} 
    >
        {/* Left Column: Narrative Text */}
        <div className="space-y-4 md:order-1 order-2">
            <div className="flex items-center space-x-3">
                <Icon className={`h-8 w-8 ${iconColor}`} />
                <span className="text-sm font-bold uppercase text-gray-500">Frame {number}</span>
            </div>
            <h3 className={`text-4xl font-extrabold text-primary ${isClimax ?
                'text-secondary' : ''}`}>
                {headline}
            </h3>
            <p className={`text-lg text-gray-700 ${isClimax ?
                'text-primary font-semibold' : ''}`}>
                {subtext}
            </p>
        </div>

        {/* Right Column: Visual Anchor Placeholder (Future 3D Model) */}
        <div className="relative h-full min-h-[300px] bg-gray-100 rounded-lg flex items-center justify-center md:order-2 order-1 shadow-inner">
            <span className="text-gray-400 text-center text-sm font-medium">
                [Visual Anchor: 3D Wall Model State for Frame {number}]
            </span>
        </div>
    </div>
);
// --- Helper Component: The Dynamic Proof Bar Placeholder ---
const DynamicProofBarPlaceholder = () => (
    <div className="mt-16 pt-16 border-t border-gray-300">
        <h3 className="text-3xl font-extrabold text-center text-primary mb-6">
            Our Partners in Quality. Your Proof of Expertise.
        </h3>
        <div className="flex justify-center space-x-8">
            <div className="w-1/2 p-6 border rounded-lg bg-white shadow-xl">
                <h4 className="text-xl font-bold text-center text-secondary mb-3">
                    Tab 1: Manufacturer Accreditations
                </h4>
                <p className="text-sm text-gray-600 text-center">
                    (Future: Auto-scrolling logo carousel with interactive tooltips for Sika, Plascon, 
                    Marmoran.)
                </p>
            </div>
            <div className="w-1/2 p-6 border rounded-lg bg-white shadow-xl">
                <h4 className="text-xl font-bold text-center text-tertiary mb-3">
                    Tab 2: Our Proven Record
                </h4>
                <p className="text-sm text-gray-600 text-center">
                    (Future: Project carousel for Munyaka, The Blyde, etc., linking to &quot;ASAP Ranking&quot; case studies.) {/* Fixed unescaped double quotes: " -> &quot; */}
                </p>
            </div>
        </div>
        <div className="text-center mt-8">
            <Button asChild className="bg-tertiary hover:bg-secondary text-primary">
                <Link href="/contact">Schedule Your Technical Assessment</Link>
            </Button>
        </div>
    </div>
);