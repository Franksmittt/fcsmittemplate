// src/components/project-showcase.tsx
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- Portfolio Data based on SEO Strategy ---
const projects = [
    { name: "Munyaka & Kikuyu Estates", location: "Midrand", tags: ["Redecoration", "Structural Maintenance"], href: "/projects/munyaka" },
    { name: "The Blyde Riverwalk Estate", location: "Pretoria East", tags: ["Waterproofing", "Specialized Coatings"], href: "/projects/the-blyde" },
    { name: "Celebration Retirement Estate", location: "North Riding", tags: ["Large Scale Residential", "Owner Supervised"], href: "/projects/celebration" },
    { name: "Eastlands Mature Lifestyle", location: "Benoni", tags: ["Facility Painting", "Long-Term Guarantee"], href: "/projects/eastlands" },
];

// This component uses large typography and high contrast for a luxury magazine feel.
export function ProjectShowcase() {
    return (
        <section className="bg-primary/95 text-primary-foreground py-20 md:py-32 px-4 border-t border-secondary">
            <div className="container mx-auto">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <p className="text-xl font-semibold uppercase tracking-widest text-secondary">
                        Our Proven Record
                    </p>
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mt-2">
                        Projects Built on Verifiable Excellence.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col border-b border-secondary/50 pb-6 group transition-all duration-300 hover:bg-primary/50">
                            <p className="text-sm font-medium uppercase tracking-wider text-tertiary mb-1">
                                {project.location}
                            </p>
                            
                            <h3 className="text-3xl md:text-4xl font-extrabold mb-3 group-hover:text-secondary transition-colors">
                                {project.name}
                            </h3>
                            
                            <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-400">
                                {project.tags.map(tag => (
                                    <span key={tag} className="border border-gray-600 rounded-full px-3 py-1 bg-primary/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Detailed Link CTA */}
                            <Link 
                                href={project.href} 
                                className="mt-4 text-base font-semibold text-tertiary flex items-center group-hover:text-secondary transition-colors"
                            >
                                View Case Study Details
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Final CTA for the whole section */}
                <div className="text-center mt-16">
                    <Button asChild 
                        className="text-lg font-bold h-12 bg-tertiary hover:bg-secondary text-primary shadow-lg">
                        <Link href="/projects">
                            Explore All 50+ Years of Combined Expertise
                        </Link>
                    </Button>
                </div>

            </div>
        </section>
    );
}