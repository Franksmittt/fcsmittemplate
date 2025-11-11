// src/components/service-grid-item.tsx
import Link from 'next/link';
import React from 'react';
import { Wrench, Umbrella, AirVent, PersonStanding, FlaskConical, Stethoscope, Building, Tent } from 'lucide-react';
interface ServiceGridItemProps {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
// The correct type for a component like 'Wrench'
}

// FIX: Corrected iconMap structure to map strings to the actual Lucide component imports.
const iconMap: { [key: string]: React.ElementType } = {
    // Structural Repairs (fa-house-crack) -> Wrench (for fixing)
    "Structural & Spalling Repairs": Wrench, 
    // Waterproofing (fa-umbrella) -> Umbrella
    "Roof & Balcony Waterproofing": Umbrella, 
    // Damp Treatment (fa-lungs-virus) -> AirVent (for air quality/moisture)
    "Rising Damp Treatment": AirVent, 
    // Rope Access (fa-person-hiking) -> PersonStanding (for high access)
    "Rope Access & High Access": PersonStanding, // Note: This uses PersonStanding, defined above
    // Industrial Corrosion (fa-wrench) -> Wrench (re-used for industrial)
    "Industrial Corrosion Control": Wrench, 
    // Hygienic Floors (fa-flask-vial) -> FlaskConical
    "Hygienic Food-Grade Floors": FlaskConical, 
    // Body Corporate (fa-building-user) -> Building
    "Body Corporate Painting": Building, 
    // Commercial/Healthcare (fa-hospital) -> Stethoscope
    "Commercial & Healthcare": Stethoscope,
};
// This is a reusable Server Component for each card.
export function ServiceGridItem({ title, description, href, icon: IconComponent }: ServiceGridItemProps) {
    
    // Fallback: If a valid Lucide component is passed, use it.
// Otherwise, attempt to look up by title.
    const FinalIconComponent = (typeof IconComponent === 'string' ? iconMap[title] : IconComponent) || Tent;
    return (
        <Link href={href} 
            // FIX: Increased vertical padding from p-4 to py-6 px-4 to increase touch target size for Accessibility (Touch Targets audit).
            className="group bg-white py-6 px-4 rounded-lg border-b-2 border-primary/50 flex flex-col justify-between 
                       transition-all duration-300 
                       hover:bg-gray-50 
                   
    hover:translate-y-[-4px] 
                       hover:shadow-xl 
                       hover:ring-2 hover:ring-secondary/50" // <-- ADDED HOVER EFFECTS
        >
            {/* ICON COLOR CHANGE: Handled by 'group-hover:text-secondary' */}
            <FinalIconComponent className="w-6 h-6 
text-tertiary transition duration-300 mb-2 group-hover:text-secondary" /> 
            
            <h3 className="text-base font-semibold text-primary leading-tight flex-grow">
                {title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
                {description}
      
            </p>
        </Link>
    );
}