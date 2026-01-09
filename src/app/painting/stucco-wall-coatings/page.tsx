// src/app/painting/stucco-wall-coatings/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { QaProcessModule } from '@/components/qa-process-module';
import { AccreditationsStrip } from '@/components/accreditations-strip';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Home, Shield, Droplet, Wrench, Sun, Building } from 'lucide-react';
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Stucco & Specialized Wall Coatings | Premium Masonry Cladding Gauteng',
    description: 'Expert stucco application and specialized wall coating services. Monolithic masonry cladding systems with vapor-permeable, fire-resistant finishes. Traditional 3-coat systems and restoration services. Gauteng contractors.',
    path: '/painting/stucco-wall-coatings',
});

// --- KEY SERVICES DATA ---
const StuccoServices = [
    {
        title: "Traditional 3-Coat System",
        description: "Superior durability with lath reinforcement, scratch coat, brown coat, and decorative finish. Creates a monolithic, rock-hard shell that becomes an extension of your building's foundation.",
        icon: Building,
        accentColor: "border-tertiary",
    },
    {
        title: "Re-Dash & Restoration",
        description: "Renew faded, stained, or hairline-cracked surfaces with acrylic-modified finish coats. Restores waterproofing and provides fresh color without full rebuild costs.",
        icon: Wrench,
        accentColor: "border-secondary",
    },
    {
        title: "Vapor-Permeable Finishes",
        description: "Water-resistant yet breathable coatings that shed rain while allowing internal moisture vapor to escape. Prevents rot and mold buildup within wall cavities.",
        icon: Droplet,
        accentColor: "border-tertiary",
    },
    {
        title: "Elastomeric Crack-Defense",
        description: "High-build, rubberized coatings that stretch up to 300% to bridge hairline fractures as buildings settle. Maintains waterproofing seal integrity over time.",
        icon: Shield,
        accentColor: "border-secondary",
    },
];

// --- TEXTURE OPTIONS DATA ---
const TextureOptions = [
    {
        title: "Float Finish (Sand Finish)",
        description: "Fine, gritty texture popular for modern, minimalist, and contemporary homes. Provides a subtle, elegant appearance.",
    },
    {
        title: "Spanish Lace / Skip Trowel",
        description: "Classic, elegant finish with flattened high spots and rough low spots. Excellent for hiding dirt and minor imperfections.",
    },
    {
        title: "Dash Finish (Roughcast)",
        description: "Gravel-like, bumpy texture sprayed onto walls. Most durable finish, highly effective at masking uneven brickwork.",
    },
    {
        title: "Smooth / Santa Barbara",
        description: "Ultra-smooth, almost polished concrete look. Requires highest skill level to apply. Premium finish option.",
    },
];

// --- MAIN PAGE COMPONENT ---
export default function StuccoWallCoatingsPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            
            {/* --- MODULE 1: STUCCO HERO --- */}
            <section className="relative py-24 md:py-32 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Premium Masonry Cladding Systems
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        Stucco & Specialized Wall Coatings
                    </h1>
                    <p className="text-2xl font-light mt-6 max-w-4xl text-gray-400">
                        Transform your property with premium stucco cladding—a monolithic, durable masonry system that combines aesthetic versatility with structural integrity. From glass-smooth finishes to rustic textures, we deliver lasting protection and curb appeal.
                    </p>
                    <div className="mt-8 p-6 bg-primary/50 rounded-xl border border-tertiary/30 max-w-2xl">
                        <p className="text-lg font-semibold text-tertiary mb-2">The Monolithic Advantage</p>
                        <p className="text-gray-300">Unlike siding or brick veneer with seams, stucco cures into a single, rock-hard shell that becomes an extension of your building's foundation—providing impact resistance, fire protection, and thermal mass efficiency.</p>
                    </div>
                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Get Stucco Quote &rarr;
                        </Link>
                    </Button>
                </div>
            </section>

            {/* --- MODULE 2: STUCCO SERVICES GRID --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Comprehensive Stucco Solutions
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            From new installations to restoration projects, we provide complete stucco systems with proven durability and aesthetic versatility.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {StuccoServices.map((service, index) => (
                            <div key={index} className={`p-8 bg-gray-900 rounded-xl shadow-xl border-t-4 ${service.accentColor}`}>
                                <service.icon className="w-10 h-10 text-secondary mb-4" />
                                <h3 className="text-2xl font-bold uppercase mb-3 text-white">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-base leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MODULE 3: THE ENGINEERING BENEFITS --- */}
            <section className="py-24 px-4 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-extrabold uppercase mb-12 text-center">
                        Engineering Advantages of Stucco
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-primary rounded-xl">
                            <Droplet className="w-10 h-10 text-tertiary mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-tertiary">Vapor Permeability</h3>
                            <p className="text-gray-400">Water-resistant yet breathable. Sheds liquid water from outside while allowing internal moisture vapor to escape, preventing rot and mold buildup within wall cavities.</p>
                        </div>
                        <div className="p-6 bg-primary rounded-xl">
                            <Sun className="w-10 h-10 text-tertiary mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-tertiary">Thermal Mass Efficiency</h3>
                            <p className="text-gray-400">Acts as thermal mass, absorbing heat during the day and releasing it slowly at night. Helps regulate indoor temperatures and reduce cooling costs in South African climate.</p>
                        </div>
                        <div className="p-6 bg-primary rounded-xl">
                            <Shield className="w-10 h-10 text-tertiary mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-tertiary">Fire & Impact Resistance</h3>
                            <p className="text-gray-400">Fully cured stucco walls typically achieve a one-hour fire rating, providing significant safety barrier compared to wood or vinyl siding.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MODULE 4: APPLICATION PROCESS --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            The Traditional 3-Coat System
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Our proven application process ensures maximum durability and longevity.
                        </p>
                    </header>

                    <div className="space-y-8">
                        <div className="p-8 bg-gray-900 rounded-xl border-l-4 border-secondary">
                            <h3 className="text-2xl font-bold uppercase mb-3 text-white">Step 1: The Lath (Reinforcement)</h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                We install heavy-gauge metal wire mesh or expanded metal lath over a weather-resistive barrier (WRB). This acts as the "skeleton" for the stucco to grip, ensuring structural integrity.
                            </p>
                        </div>

                        <div className="p-8 bg-gray-900 rounded-xl border-l-4 border-tertiary">
                            <h3 className="text-2xl font-bold uppercase mb-3 text-white">Step 2: The Scratch Coat (Base)</h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                A base layer of cement is troweled onto the lath and physically scored (scratched) horizontally. These grooves provide a mechanical key for the next layer to bond to, creating a strong foundation.
                            </p>
                        </div>

                        <div className="p-8 bg-gray-900 rounded-xl border-l-4 border-secondary">
                            <h3 className="text-2xl font-bold uppercase mb-3 text-white">Step 3: The Brown Coat (Leveling)</h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                A second, thicker layer is applied to straighten the walls, fill voids, and create a perfectly flat surface. This ensures the final finish coat has an ideal substrate.
                            </p>
                        </div>

                        <div className="p-8 bg-gray-900 rounded-xl border-l-4 border-tertiary">
                            <h3 className="text-2xl font-bold uppercase mb-3 text-white">Step 4: The Finish Coat (Decorative)</h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                The final, visible layer where color and texture are applied. This is where your chosen finish—from smooth to textured—comes to life, creating the aesthetic you desire.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MODULE 5: TEXTURE OPTIONS --- */}
            <section className="py-24 px-4 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Texture & Finish Options
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Choose from a variety of textures to match your architectural style and aesthetic preferences.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {TextureOptions.map((texture, index) => (
                            <div key={index} className="p-6 bg-primary rounded-xl">
                                <h3 className="text-xl font-bold mb-2 text-tertiary">{texture.title}</h3>
                                <p className="text-gray-400">{texture.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MODULE 6: QUALITY ASSURANCE & TECHNICAL SPECS --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Technical Specifications & Quality Assurance
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            Our process guarantees lasting results through proper curing, alkalinity management, and crack-defense technology.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-gray-900 rounded-xl border-t-4 border-secondary">
                            <h3 className="text-xl font-bold uppercase mb-3 text-white">The Curing Protocol</h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                True stucco requires patience. We adhere to a strict 28–30 day curing window for new installations before applying final paint coatings. This ensures the cement reaches maximum hardness and all moisture evaporates, preventing future bubbling or delamination.
                            </p>
                        </div>

                        <div className="p-8 bg-gray-900 rounded-xl border-t-4 border-tertiary">
                            <h3 className="text-xl font-bold uppercase mb-3 text-white">Alkalinity Management</h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                Fresh masonry has a high pH level (alkalinity) which can "burn" standard paints. We utilize specialized <strong className="text-white">Alkali-Resistant Primers</strong> that neutralize the surface, ensuring the topcoat bonds permanently without chalking.
                            </p>
                        </div>

                        <div className="p-8 bg-gray-900 rounded-xl border-t-4 border-secondary">
                            <h3 className="text-xl font-bold uppercase mb-3 text-white">Crack-Defense Technology</h3>
                            <p className="text-gray-400 text-base leading-relaxed">
                                All concrete products undergo micro-movements. We recommend finishing with <strong className="text-white">Elastomeric Coatings</strong>—high-build, rubberized exterior paint that stretches up to 300%. It bridges hairline fractures as buildings settle, keeping the waterproofing seal intact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MODULE 7: VALUE PROPOSITION --- */}
            <section className="py-24 px-4 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-4xl font-extrabold uppercase mb-3">
                            Why Choose Stucco?
                        </h2>
                        <p className="text-lg text-gray-400 font-light">
                            The value proposition that makes stucco an investment in your property's future.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-primary rounded-xl text-center">
                            <Home className="w-12 h-12 text-tertiary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-tertiary">Curb Appeal ROI</h3>
                            <p className="text-gray-400">Instantly modernizes the look of dated brick or plaster homes, significantly increasing property resale value.</p>
                        </div>

                        <div className="p-6 bg-primary rounded-xl text-center">
                            <Wrench className="w-12 h-12 text-tertiary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-tertiary">Low Maintenance</h3>
                            <p className="text-gray-400">Unlike wood which rots or vinyl which cracks, stucco resists rot, fungus, and termites—requiring minimal upkeep.</p>
                        </div>

                        <div className="p-6 bg-primary rounded-xl text-center">
                            <Shield className="w-12 h-12 text-tertiary mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-tertiary">Sound Dampening</h3>
                            <p className="text-gray-400">The density of the material provides excellent noise reduction, quieting street noise for a more peaceful interior.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MODULE 8: THE PROCESS IN DEPTH --- */}
            <QaProcessModule />

            {/* --- MODULE 9: ACCREDITATIONS --- */}
            <AccreditationsStrip />

            {/* --- MODULE 10: FINAL CTA --- */}
            <CtaFinalStrip />
        </div>
    );
}

