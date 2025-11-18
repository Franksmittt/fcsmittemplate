// src/app/contact/page.tsx
import { Phone, Mail, MapPin, MessageCircle, Layers, ClipboardCheck, Scroll } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { HeroContactForm } from '@/components/hero-contact-form'; // Reusing the form logic
import { buildPageMetadata } from '@/lib/metadata';


// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Get a Professional Painting, Structural Repair Quote | Contact Maverick',
    description: 'Contact Maverick Painting for a free site assessment and comprehensive quote. Specialized solutions for Body Corporates, Developers, and high-value properties in Gauteng, South Africa.',
    path: '/contact',
});

// --- MAIN PAGE COMPONENT ---
export default function ContactPage() {
    return (
        <div className="bg-primary pt-24 text-white">
            
            {/* --- MODULE 1: CONVERSION HERO --- */}
            <section className="relative py-20 md:py-32 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* LEFT (Server Component): Dynamic Contact Info & Trust Signals */}
                    <div className="lg:col-span-6 space-y-10 lg:pr-12">
                        <header>
                            <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-2">
                                Talk to a Specialist
                            </p>
                            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight uppercase text-white">
                                Eliminate Risk. Get a Verifiable Quote.
                            </h1>
                            <p className="text-xl font-light mt-4 text-gray-400">
                                Schedule your free on-site assessment now. Our technical team is ready to assist with substrate-specific specifications for your high-value asset.
                            </p>
                        </header>

                        {/* Direct Contact Links (High Visual Priority) */}
                        <div className="space-y-8 p-6 bg-primary rounded-xl shadow-2xl border border-gray-800">
                            
                            <div className="flex items-center space-x-4">
                                <Phone className="w-10 h-10 text-tertiary flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-semibold uppercase text-gray-400">Call Lawrence Brooks (Owner Supervision)</p>
                                    <a href="tel:0826277082" className="text-3xl font-extrabold text-tertiary hover:text-white transition-colors">
                                        082 627 7082
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 border-t border-gray-800 pt-4">
                                <Mail className="w-10 h-10 text-secondary flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-semibold uppercase text-gray-400">Email for Technical Specifications</p>
                                    <a href="mailto:maverickpainters1984@gmail.com" className="text-xl font-bold text-white hover:text-tertiary transition-colors">
                                        maverickpainters1984@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Trust Bar Section: Core USPs */}
                         <div className="pt-6 space-y-4">
                            <h3 className="text-xl font-bold uppercase text-secondary">Why Quote with Maverick?</h3>
                            <div className="grid grid-cols-2 gap-4 text-gray-400">
                                <p className="flex items-center space-x-2 text-sm">
                                    <Layers className="w-5 h-5 text-tertiary" />
                                    <span>Specialized, Structural Solutions.</span>
                                </p>
                                <p className="flex items-center space-x-2 text-sm">
                                    <ClipboardCheck className="w-5 h-5 text-tertiary" />
                                    <span>Independent 3rd Party QA.</span>
                                </p>
                                <p className="flex items-center space-x-2 text-sm">
                                    <Scroll className="w-5 h-5 text-tertiary" />
                                    <span>Manufacturer Guarantees Issued.</span>
                                </p>
                                <p className="flex items-center space-x-2 text-sm">
                                    <MapPin className="w-5 h-5 text-tertiary" />
                                    <span>Gauteng-Wide Service Area.</span>
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT (Client Component): The Form Container */}
                    <div className="lg:col-span-6 flex justify-center lg:pl-12">
                        {/* HeroContactForm already contains its own white/shadow card styling */}
                        <HeroContactForm />
                    </div>

                </div>
            </section>
            
            {/* --- MODULE 2: FOOTER CTA STRIP (WhatsApp Focus) --- */}
            <section className="bg-header-dark py-12 px-4 border-t border-primary/50">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white mb-4">
                        Prefer WhatsApp? Get a Quick Response.
                    </h2>
                    <p className="text-gray-400 text-lg mb-6">
                        Send us pictures of your defect or project scope now for immediate attention.
                    </p>
                     <Button asChild 
                        className="bg-whatsapp-green hover:bg-[#25C356] text-primary font-bold text-xl h-14 shadow-2xl transform hover:scale-105"
                    >
                        <a href="https://wa.me/27826277082" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                             <MessageCircle className="w-6 h-6" />
                             <span>WhatsApp Maverick Painting</span>
                        </a>
                    </Button>
                </div>
            </section>

        </div>
    );
}