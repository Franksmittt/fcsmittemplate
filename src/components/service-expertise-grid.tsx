// src/components/service-expertise-grid.tsx
import Link from 'next/link';
import { ServiceGridItem } from './service-grid-item';
import { Button } from '@/components/ui/button';
// Import the actual Lucide components used for the data array
import { Wrench, Umbrella, AirVent, PersonStanding, FlaskConical, Stethoscope, Building } from 'lucide-react'; 

const servicesData = [
    // NOW PASSING THE ACTUAL COMPONENT TYPE (e.g., Wrench)
    { title: "Structural & Spalling Repairs", description: "Fixing concrete cancer and structural defects.", href: "/structural-repairs/", icon: Wrench },
    { title: "Roof & Balcony Waterproofing", description: "Guaranteed systems for flat roofs and under-tile leaks.", href: "/waterproofing-services/", icon: Umbrella },
    { title: "Rising Damp Treatment", description: "Permanent chemical injection DPC solutions.", href: "/damp-proofing-services/", icon: AirVent },
    { title: "Rope Access & High Access", description: "Cost-effective maintenance for high-rise buildings.", href: "/access-solutions/", icon: PersonStanding },
    { title: "Industrial Corrosion Control", description: "Protective coatings for factory assets and steelwork.", href: "/painting/industrial-painting/", icon: Wrench },
    { title: "Hygienic Food-Grade Floors", description: "Seamless, chemical-resistant systems for food plants.", href: "/coatings/hygienic-food-grade-flooring/", icon: FlaskConical },
    { title: "Body Corporate Painting", description: "Managing complex projects with minimal disturbance.", href: "/painting/body-corporate-painting/", icon: Building },
    { title: "Commercial & Healthcare", description: "Low-VOC, specialized coatings for sensitive environments.", href: "/painting/commercial-painting/", icon: Stethoscope },
];

// This is the main layout component for the service grid.
export function ServiceExpertiseGrid() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    
                    {/* --- LEFT PANEL: Headline & CTA --- */}
                    <div className="col-span-1 md:col-span-2 bg-primary p-10 rounded-xl shadow-2xl flex flex-col justify-between">
                        <header>
                            <h2 className="text-4xl font-extrabold text-white uppercase mb-4 tracking-tight">
                                Expertise in High-Performance Assets
                            </h2>
                            <p className="text-xl text-secondary font-medium">
                                We offer advanced systems and specialized access to protect complex assets where others cannot reach.
                            </p>
                        </header>
                        
                        {/* CTA Button using shadcn/ui Button (Server-safe link structure) */}
                        <Button asChild 
                            // CORRECT: bg-secondary, text-white
                            className="mt-8 self-start bg-secondary hover:bg-[#4AD5E2] text-white font-bold py-3 px-6 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 whitespace-nowrap text-lg h-auto"
                        >
                             <Link href="/services">
                                View All Technical Services
                            </Link>
                        </Button>
                    </div>
                    
                    {/* --- RIGHT GRID: Service Cards --- */}
                    <div className="col-span-1 md:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {servicesData.map((service, index) => (
                            <ServiceGridItem 
                                key={index} 
                                title={service.title} 
                                description={service.description} 
                                href={service.href} 
                                // Pass the component directly
                                icon={service.icon} 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}