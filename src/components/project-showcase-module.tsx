// src/components/project-showcase-module.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProjectShowcaseImageCard } from './project-showcase-image-card'; // <-- NEW IMPORT

// --- Portfolio Data based on Strategic Projects and Image Paths (Placeholders) ---
const strategicProjects = [
    { name: "Munyaka Lifestyle Estate", location: "Midrand", href: "/projects/munyaka", imageSrc: "/images/munyaka-midrand.jpg" },
    { name: "The Blyde Riverwalk Estate", location: "Pretoria East", href: "/projects/the-blyde", imageSrc: "/images/the-blyde-pretorria.jpg" },
    { name: "Celebration Retirement Estate", location: "North Riding", href: "/projects/celebration", imageSrc: "/images/celebration-retirement.jpg" },
    { name: "Eastlands Mature Lifestyle", location: "Benoni", href: "/projects/eastlands", imageSrc: "/images/eastlands-benoni.jpg" },
    { name: "Kikuyu Lifestyle Centre", location: "Midrand", href: "/projects/kikuyu", imageSrc: "/images/kikuyu-lifestyle.jpg" },
    { name: "Green Creek Eco-Estate", location: "Pretoria East", href: "/projects/greencreek", imageSrc: "/images/greencreek-estate.jpg" },
];
export function ProjectShowcaseModule() {
    return (
        <section className="bg-primary py-24 md:py-32 px-4 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                
                {/* --- HEADER: Bespoke, Magazine-Style Heading --- */}
                <header className="text-center max-w-4xl mx-auto mb-16 text-white">
                    {/* Subtext: Highlighting Local Authority (Local SEO Strategy) */}
                    <p className="text-xl font-medium uppercase tracking-wider text-secondary mb-2">
                        Verifiable Proof: Our Latest High-Value Projects
                    </p>
                    
                    {/* Headline: Uses large, confident typography */}
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        Built for Gauteng&apos;s Premier Assets.
                    </h2>
                    <p className="text-lg font-light mt-4 text-gray-400">
                        Showcasing work in Midrand, Pretoria East, North Riding, and Benoni.
                    </p>
                </header>

                {/* --- PROJECT GRID: Elegant List with Image Cards --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {strategicProjects.map((project, index) => (
                        <ProjectShowcaseImageCard
                            key={index}
                            name={project.name}
                            location={project.location}
                            href={project.href}
                            imageSrc={project.imageSrc}
                        />
                    ))}
                </div>

                {/* --- FINAL CTA BUTTON (View All Projects) --- */}
                <div className="text-center mt-16">
                    <Button asChild 
                        className="text-lg font-bold h-12 bg-secondary hover:bg-[#4AD5E2] text-white shadow-lg"
                    >
                        <Link href="/projects">
                            View All Projects and Portfolio
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}