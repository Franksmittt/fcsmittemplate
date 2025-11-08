"use client";

import React from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Icon Button (Client Component) */}
      <Button 
        variant="ghost"
        size="icon"
        className="lg:hidden text-primary-foreground hover:bg-primary/50 z-50"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay (Hidden by default, shown when isOpen is true) */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-primary/95 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-2xl font-semibold text-primary-foreground hover:text-secondary transition-colors"
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile CTAs */}
          <div className="pt-6 space-y-3">
            <Button asChild className="w-full text-base bg-tertiary hover:bg-secondary text-primary">
              <Link href="tel:+1234567890" className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" /> Call Now
              </Link>
            </Button>
            <Button asChild className="w-full text-base bg-secondary hover:bg-tertiary text-primary">
              <Link href="https://wa.me/1234567890" target="_blank" className="flex items-center justify-center">
                <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}