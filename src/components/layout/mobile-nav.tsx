// src/components/layout/mobile-nav.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react'; // Removed MessageCircle
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; 

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);
const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];
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
          // FIXED: Use solid header-dark background when open, not /90 transparency.
          "bg-header-dark", 
     
isOpen ? 'translate-x-0' : 'translate-x-full' // Slide-in/Slide-out logic
        )}
      >
        <nav className="flex flex-col border-t border-gray-700/50">
          
          {/* Nav Links */}
          {navItems.map((item) => (
            <Link
              key={item.name}
 
              href={item.href}
              className="block px-3 py-3 text-base font-medium text-white hover:bg-black/50"
              onClick={toggleMenu} // Close menu on click
            >
              {item.name}
            </Link>
          
))}
          
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
  
                {/* Use standard HTML img tag for the custom image asset */}
                <img 
                    src="/images/WhatsApp.svg.webp" 
                    alt="WhatsApp Icon" 
                    className="w-4 h-4 mr-2 inline-block"
                />
             WhatsApp Us
            </Link>
          </div>

        </nav>
      </div>
    </>
  );
} 