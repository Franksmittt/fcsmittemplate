import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare } from 'lucide-react'; 
// Note: DarkModeToggle import and usage have been removed

export function Header() {
  const navItems = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    // Header Background is Primary (#121111) and base text is white
    <header className="sticky top-0 z-50 w-full border-b border-primary/50 bg-primary text-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        
        {/* Logo (Left) */}
        <Link href="/" className="flex items-center text-2xl font-bold">
          <span className="text-primary-foreground">MAVERICK</span>
          <span className="text-tertiary ml-1">| PAINTING CONTRACTORS</span>
        </Link>

        {/* Navigation Items (Center) */}
        <nav className="flex gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              // Links are white, change to Secondary on hover
              className="text-sm font-medium text-primary-foreground hover:text-secondary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Section: Dual Buttons - UPDATED: Theme Toggle removed */}
        <div className="flex items-center space-x-3">
            
          {/* 1. Call Button: Tertiary Default, Secondary Hover */}
          <Button 
            asChild
            size="default" 
            className="
              bg-tertiary               /* Default: Tertiary (Green) Background */
              text-primary              /* Default: Primary (Black) Text */
              hover:bg-secondary        /* Hover: Secondary (Blue/Cyan) Background */
              hover:text-primary        /* Hover: Primary (Black) Text */
              transition-colors
            "
          >
            <Link href="tel:+1234567890">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Link>
          </Button>

          {/* 2. WhatsApp Button: Secondary Default, Tertiary Hover */}
          <Button 
            asChild 
            size="default" 
            className="
              bg-secondary              /* Default: Secondary (Blue/Cyan) Background */
              text-primary              /* Default: Primary (Black) Text */
              hover:bg-tertiary         /* Hover: Tertiary (Green) Background */
              hover:text-primary        /* Hover: Primary (Black) Text */
              transition-colors
            "
          >
            <Link href="https://wa.me/1234567890" target="_blank">
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp
            </Link>
          </Button>

        </div>

      </div>
    </header>
  );
}