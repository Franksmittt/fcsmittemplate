// src/components/project-showcase-image-card.tsx
import Link from 'next/link';
import React from 'react';
import { ArrowRight } from 'lucide-react';
// import Image from 'next/image'; // Placeholder for next/image functionality

interface ProjectCardProps {
    name: string;
    location: string;
    href: string;
    imageSrc: string;
}

// FINAL FIX: We rename 'tags' to '_tags' in the parameters list.
// We ensure 'href' is correctly destructured.
export function ProjectShowcaseImageCard({ name, location, href, imageSrc }: ProjectCardProps) {
    return (
        <Link 
            href={href} 
            className="flex flex-col border border-gray-800 rounded-xl overflow-hidden group transition-all duration-500 
                       bg-primary/90 shadow-xl transform hover:scale-[1.02] hover:shadow-secondary/30"
        >
            {/* --- Image Area (Top) --- */}
            <div className="relative h-60 w-full overflow-hidden">
                {/* Image Placeholder with Hover Effect */}
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 
group-hover:scale-[1.05]"
                    // NOTE: In a real project, this style property would be replaced by <Image> 
                    // and its src attribute for Next.js optimization.
                    style={{ backgroundImage: `url(${imageSrc})` }}
                >
                    {/* Dark Overlay for Text Clarity (fades out on hover) */}
                    <div className="absolute inset-0 bg-primary/20 transition-all duration-300 group-hover:bg-primary/0" />
                    
                    {/* Placeholder Text 
                    <span className="absolute inset-0 flex items-center justify-center text-white/50 text-xs font-semibold">
                        [Placeholder for Image: {name}]
                    </span>
                    */}
                </div>
         
           </div>

            {/* --- Content Area (Bottom) --- */}
            <div className="p-6 md:p-8 flex flex-col flex-grow">
                <p className="text-sm font-medium uppercase tracking-wider text-secondary mb-1">
                    {location}
                </p>
    
                            
                <h3 className="text-2xl font-extrabold mb-3 text-white group-hover:text-tertiary transition-colors leading-tight">
                    {name}
                </h3>
                
             
           {/* Tags section is REMOVED as requested */}
                
                {/* Link/CTA with subtle motion */}
                <span className="mt-auto pt-2 text-base font-semibold text-tertiary flex items-center group-hover:text-secondary transition-colors">
                    View Project Details
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
            </div>
        </Link>
    );
}