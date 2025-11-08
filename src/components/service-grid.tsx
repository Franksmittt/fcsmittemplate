// src/components/service-grid.tsx
import Link from 'next/link';
// Import all necessary icons explicitly
import { Wrench, Shield, ArrowRight, Warehouse, Building } from 'lucide-react'; 

// Define the top four specialized services (from SEO clusters)
const specializedServices = [
    { 
        title: "Structural & Spalling Repair", 
        description: "We treat concrete cancer, spalling, and structural cracks from the rebar out, ensuring permanent solutions.", 
        icon: Wrench, 
        href: "/services/spalling-repair" 
    },
    { 
        title: "Waterproofing Specialists", 
        description: "Expert application of liquid membranes and torch-on systems for flat roofs, balconies, and damp areas.", 
        icon: Shield, 
        href: "/services/waterproofing" 
    },
    { 
        title: "Industrial & Protective Coatings", 
        description: "Corrosion protection and specialized epoxy/polyurethane systems for factories and warehouses.", 
        // Use Warehouse icon as a substitute for Factory/Industrial theme
        icon: Warehouse, 
        href: "/services/industrial-painting" 
    },
    { 
        title: "Body Corporate Painting", 
        description: "Owner-supervised, large-scale residential painting tailored for sectional titles and complex stakeholders.", 
        icon: Building, 
        href: "/services/body-corporate-painting" 
    },
];

// This is a Server Component.
export function ServiceGrid() {
    return (
        <section className="bg-white py-16 md:py-20 px-4">
            <div className="container mx-auto text-center">
                
                <h2 className="text-4xl font-extrabold text-primary mb-12">
                    Our Specialized Service Expertise
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {specializedServices.map((service, index) => (
                        <Link 
                            key={index}
                            href={service.href}
                            className="group flex flex-col p-6 border-4 border-tertiary/20 rounded-lg transition-all duration-300 hover:border-tertiary hover:shadow-xl hover:scale-[1.02] bg-gray-50"
                        >
                            <service.icon className="w-10 h-10 text-tertiary mb-4" />
                            <h3 className="text-xl font-bold text-primary mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-600 flex-grow">
                                {service.description}
                            </p>
                            <span className="mt-4 text-sm font-semibold text-secondary group-hover:text-tertiary flex items-center">
                                Learn More <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}

// Note: The original implementation in the prompt was missing the import 
// for Wrench, Shield, ArrowRight, and used the unavailable name 'Factory'.