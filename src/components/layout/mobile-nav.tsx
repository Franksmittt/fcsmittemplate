// src/components/layout/mobile-nav.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { Menu, X, Phone, ChevronDown } from 'lucide-react'; // ADDED ChevronDown
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; 
// NOTE: We now receive pillars as a prop from the parent Header component
import type { PillarDefinition } from '@/lib/pillars'; 
import { useState } from 'react'; // ADDED useState

interface MobileNavProps {
    pillars: PillarDefinition[]; // Receive Pillar data as prop
}

export function MobileNav({ pillars }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isGuidesOpen, setIsGuidesOpen] = useState(false); // State for mobile accordion

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];
  // const pillars = getPillars(); // REMOVED: Now comes from props
const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Icon Button (Mobile Only) */}
      <Button 
        variant="ghost"
        size="icon"
        // Use custom Tailwind colors defined in config
        className="text-white hover:text-secondary p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ml-auto"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
 
{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-20 z-40 transition-transform duration-300 ease-in-out lg:hidden",
          "bg-footer-dark", 
          "overflow-y-auto", // FIX: Added scrollability
          
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col border-t border-gray-700/50">
          
          {/* Nav Links */}
          {navItems.map((item) => (
            <Link
              key={item.name}
 
              href={item.href}
              className="block px-3 py-3 text-base font-medium text-white hover:bg-black/50"
              onClick={toggleMenu} 
 // Close menu on click
            >
              {item.name}
            </Link>
          
))}
        
            {/* Guides Dropdown (Accordion for Mobile) */}
            <div className="border-t border-gray-700/50">
                <button
                    type="button"
                    onClick={() => setIsGuidesOpen(!isGuidesOpen)}
                    className="flex justify-between items-center w-full px-3 py-3 text-base font-medium text-white hover:bg-black/50 focus:outline-none"
                >
                    Guides
                    <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isGuidesOpen ? "rotate-180" : "rotate-0"
                    )} />
                </button>
                {/* Accordion Content */}
                <div
                    className={cn(
                        "overflow-hidden transition-all duration-300",
                        isGuidesOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                    )}
                >
                    <Link
                        href="/blog"
                        className="block px-6 py-2 text-sm font-medium text-secondary hover:bg-black/50 border-b border-white/5"
                        onClick={toggleMenu}
                    >
                        View All Guides →
                    </Link>

                    {pillars.map((pillar) => (
                        <div key={pillar.slug} className="px-6 py-3 border-b border-white/10">
                            <Link
                                href={`/blog/${pillar.slug}`}
                                className="text-white font-semibold"
                                onClick={toggleMenu}
                            >
                                {pillar.title}
                            </Link>
                            <p className="mt-1 text-sm text-white/70">{pillar.summary}</p>
                            <div className="mt-2 flex flex-wrap gap-2 text-xs text-white/60">
                                {pillar.clusters.slice(0, 3).map((cluster) => (
                                    <Link
                                        key={cluster.slug}
                                        // *** FIX APPLIED: Provides a fallback string if metadata.path is undefined ***
                                        href={cluster.metadata.path || `/blog/${pillar.slug}/${cluster.slug}`}
                                        className="px-2 py-1 rounded-full bg-white/10"
                                        onClick={toggleMenu}
                                    >
                                        {cluster.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          
          {/* Mobile CTAs (Bottom of Menu) */}
          <div className="pt-6 space-y-3">
            {/* Call Lawrence */}
            <Link 
              href="tel:0826277082" 
              className="block px-3 py-3 text-base font-medium 
text-white hover:bg-black/50"
              onClick={toggleMenu}
           
  >
              <Phone className="w-4 h-4 mr-2 inline-block" /> Call Lawrence (082 627 7082)
            </Link>
            
            {/* WhatsApp Link (Using Green Text) - NEW ICON IMPLEMENTATION */}
       
            <Link 
              href="https://wa.me/27826277082" 
              target="_blank" 
              rel="noopener noreferrer" 
    
           className="block px-3 py-3 text-base font-medium text-tertiary hover:bg-black/50"
              onClick={toggleMenu}
            >
  
                {/* Use next/image for optimized performance */}
                <Image 
                    src="/images/WhatsApp.svg.webp" 
                    alt="WhatsApp Icon" 
               
      className="w-4 h-4 mr-2 inline-block"
                    width={16} // Must be defined for Image component
                    height={16} // Must be defined for Image component
                />
             WhatsApp Us
            </Link>
          </div>

        </nav>
      </div>
    </>
  );
}