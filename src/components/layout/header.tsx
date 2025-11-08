import Link from 'next/link';
import { Button } from '@/components/ui/button';

// This is a Server Component, optimized for rendering static UI.
export function Header() {
  // Dummy navigation items
  const navItems = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        
        {/* Logo (Left) */}
        <Link href="/" className="flex items-center text-2xl font-bold text-gray-900">
          MVVP🎨
        </Link>

        {/* Navigation Items (Center) */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Button (Right) - UPDATED with Red to Black/Pink Hover Effect */}
        <Button 
          asChild 
          className="
            bg-red-600                   /* Default: Red Background */
            text-white                  /* Default: White Text */
            hover:bg-black              /* Hover: Black Background */
            hover:text-pink-400         /* Hover: Pink Text */
            transition-colors           /* Smooth transition for the effect */
          "
        >
          <Link href="/get-started">
            Start Free Trial
          </Link>
        </Button>
      </div>
    </header>
  );
}