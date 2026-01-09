// src/app/projects/[slug]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { projectCaseStudies } from '@/data/projects';
import { siteConfig } from '@/lib/seo';
import { buildPageMetadata } from '@/lib/metadata';

// --- DYNAMIC METADATA GENERATION ---
interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project = projectCaseStudies.find(p => p.slug === params.slug);

    if (!project) {
        // If project isn't found, Next.js will handle the 404 via the notFound() call in the component
        return {
            title: 'Project Not Found | Maverick',
            description: 'The requested project could not be found.',
        };
    }

    const title = `${project.name} | Structural Repair & Painting Case Study | Maverick`;
    const description = `Case study for ${project.name} in ${project.location}. Scope: ${project.scope}. Project completed ${project.date}.`;

    // Use buildPageMetadata for consistent SEO (includes OG images, Twitter cards, canonical)
    const metadata = buildPageMetadata({
        title,
        description,
        path: `/projects/${project.slug}`,
        image: project.image, // Use project image if available
    });

    // Override type to 'article' for case studies
    return {
        ...metadata,
        openGraph: {
            ...metadata.openGraph,
            type: 'article',
        },
    };
}

export function generateStaticParams() {
    return projectCaseStudies.map((project) => ({ slug: project.slug }));
}

// --- MAIN PAGE COMPONENT ---
export default function ProjectDetailPage({ params }: ProjectPageProps) {
    const project = projectCaseStudies.find(p => p.slug === params.slug);

    if (!project) {
        // Use Next.js's built-in notFound() function to render the 404 page
        notFound();
    }

    // Structured Data (Article Schema) for SEO
    const baseUrl = siteConfig.url.replace(/\/$/, "");
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": project.name,
        "description": `Case study for ${project.name} in ${project.location}. Scope: ${project.scope}.`,
        "image": `${baseUrl}${project.image}`,
        "datePublished": project.lastModified || project.date,
        "dateModified": project.lastModified || project.date,
        "author": {
            "@type": "Organization",
            "name": siteConfig.name,
            "url": baseUrl,
        },
        "publisher": {
            "@type": "Organization",
            "name": siteConfig.name,
            "url": baseUrl,
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}/projects/${project.slug}`,
        },
        "articleSection": "Case Studies",
        "keywords": [
            "structural repair",
            "painting contractors",
            project.location,
            "waterproofing",
            "commercial painting",
        ],
    };

    return (
        <div className="bg-primary pt-24 text-white min-h-screen">
            {/* Structured Data Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c'),
                }}
            />

            {/* --- MODULE 1: PROJECT HERO (Dynamic Content) --- */}
            <section className="relative py-24 md:py-32 px-4 bg-gray-900 border-b-4 border-secondary">
                <div className="max-w-7xl mx-auto">
                    <p className="text-xl font-medium uppercase tracking-widest text-tertiary mb-3">
                        Project Case Study
                    </p>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
                        {project.name}
                    </h1>
                    <div className="flex flex-wrap space-x-6 mt-6">
                        <p className="flex items-center space-x-2 text-lg font-medium text-gray-400">
                            <MapPin className="w-5 h-5 text-secondary" />
                            <span>{project.location}</span>
                        </p>
                        <p className="flex items-center space-x-2 text-lg font-medium text-gray-400">
                            <Clock className="w-5 h-5 text-secondary" />
                            <span>Completed: {project.date}</span>
                        </p>
                    </div>
                    <p className="text-2xl font-light mt-6 max-w-4xl text-gray-300">
                        {project.scope}
                    </p>
                    <Button asChild
                        className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
                    >
                        <Link href="/contact">
                            Request Assessment for a Similar Project &rarr;
                        </Link>
                    </Button>
                </div>
            </section>
            
            {/* --- MODULE 2: PROJECT DETAIL POINTS --- */}
            <section className="py-24 px-4 bg-primary">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-extrabold uppercase mb-12">
                        Key Project Highlights
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {project.details.map((detail, index) => {
                             // Corrected: Use the actual icon reference from the data structure
                             const IconComponent = detail.icon;

                            return (
                                <div key={index} className="p-6 bg-gray-900 rounded-xl shadow-xl border-t-4 border-tertiary">
                                    <IconComponent className="w-8 h-8 text-secondary mb-4" />
                                    <p className="text-gray-400 text-base">
                                        {detail.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* --- MODULE 3: FINAL CTA STRIP (Conversion Funnel) --- */}
            <CtaFinalStrip />
        </div>
    );
}