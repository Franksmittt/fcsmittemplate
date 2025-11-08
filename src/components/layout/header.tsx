// src/components/layout/header.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare } from 'lucide-react'; 
import { MobileNav } from '@/components/layout/mobile-nav'; // <-- NEW IMPORT

export function Header() {
  const navItems = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/50 bg-primary text-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        
        {/* Logo (Left) - UPDATED: Responsive Sizing */}
        <Link href="/" className="flex flex-col md:flex-row items-start md:items-center text-lg font-bold md:text-2xl">
          <span className="text-primary-foreground">MAVERICK</span>
          {/* Smaller text, hidden on large screens for space efficiency */}
          <span className="text-tertiary text-xs md:text-2xl md:ml-1 md:block">| PAINTING CONTRACTORS</span> 
        </Link>

        {/* Desktop Navigation (Center) - Hidden on mobile */}
        <nav className="hidden lg:flex gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium text-primary-foreground hover:text-secondary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Section: Dual Buttons and Mobile Toggle */}
        <div className="flex items-center space-x-3">
            
          {/* Desktop Call to Action Buttons - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button asChild size="default"
              className="bg-tertiary text-primary hover:bg-secondary hover:text-primary transition-colors">
              <Link href="tel:+1234567890" className="flex items-center"> 
                <Phone className="w-4 h-4 mr-2" /> Call Now
              </Link>
            </Button>
            <Button asChild size="default"
              className="bg-secondary text-primary hover:bg-tertiary hover:text-primary transition-colors">
              <Link href="https://wa.me/1234567890" target="_blank" className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button (Visible on mobile/tablet) */}
          <MobileNav /> 
        </div>

      </div>
    </header>
  );
}