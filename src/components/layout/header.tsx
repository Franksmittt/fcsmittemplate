// src/components/layout/header.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react'; // Removed unused MessageSquare
import { MobileNav } from '@/components/layout/mobile-nav'; 
import { cn } from '@/lib/utils'; 
// Note: SVG icon path is complex and included directly here.

export function Header() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  // **The original HTML used JS for fixed/scroll logic, we apply fixed/blur/shadow classes directly**
  return (
    <header 
        id="header-nav" 
        className={cn(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md shadow-lg",
            "bg-header-dark/90" // Always use the dark background with slight transparency
        )}
    >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                
                {/* --- 1. LOGO & ICON (Left) --- */}
                <Link href="/" className="flex-shrink-0 flex items-center text-white rounded-lg p-1 transition duration-300 hover:text-secondary space-x-2">
                    {/* SVG Icon - Remains Green/tertiary (fill="#A9D834") */}
                    <svg className="w-7 h-7 animate-shake" fill="#A9D834" height="800px" width="800px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463 463" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 463 463">
                        <g>
                            <path d="m423.5,40h-0.5v-8.5c0-17.369-14.131-31.5-31.5-31.5h-288c-17.369,0-31.5,14.131-31.5,31.5v8.5h-0.5c-12.958,0-23.5,10.542-23.5,23.5v8.5h-0.5c-17.369,0-31.5,14.131-31.5,31.5v64c0,17.369 14.131,31.5 31.5,31.5h176c9.098,0 16.5,7.402 16.5,16.5v16.5h-8.5c-12.958,0-23.5,10.542-23.5,23.5v168c0,21.78 17.72,39.5 39.5,39.5s39.5-17.72 39.5-39.5v-168c0-12.958-10.542-23.5-23.5-23.5h-8.5v-16.5c0-17.369-14.131-31.5-31.5-31.5h-176c-9.098,0-16.5-7.402-16.5-16.5v-64c0-9.098 7.402-16.5 16.5-16.5h0.5v8.5c0,12.958 10.542,23.5 23.5,23.5h0.5v8.5c0,17.369 14.131,31.5 31.5,31.5h288c17.369,0 31.5-14.131 31.5-31.5v-8.5h0.5c12.958,0 23.5-10.542 23.5-23.5v-32c0-12.958-10.542-23.5-23.5-23.5zm-176,408c-13.509,0-24.5-10.99-24.5-24.5v-144.5h49v144.5c0,13.51-10.991,24.5-24.5,24.5zm24.5-192.5v8.5h-49v-8.5c0-4.687 3.813-8.5 8.5-8.5h32c4.687,0 8.5,3.813 8.5,8.5zm-200.5-151.5c-4.687,0-8.5-3.813-8.5-8.5v-32c0-4.687 3.813-8.5 8.5-8.5h0.5v49h-0.5zm336.5,23.5c0,9.098-7.402,16.5-16.5,16.5h-288c-9.098,0-16.5-7.402-16.5-16.5v-96c0-9.098 7.402-16.5 16.5-16.5h288c9.098,0 16.5,7.402 16.5,16.5v96zm24-32c0,4.687-3.813,8.5-8.5,8.5h-0.5v-49h0.5c4.687,0 8.5,3.813 8.5,8.5v32z"/>
                            <path d="m247.5,416c-1.98,0-3.91,0.8-5.3,2.2-1.4,1.39-2.2,3.319-2.2,5.3 0,1.97 0.8,3.91 2.2,5.3 1.39,1.4 3.33,2.2 5.3,2.2 1.97,0 3.91-0.8 5.3-2.2 1.4-1.4 2.2-3.33 2.2-5.3 0-1.971-0.8-3.91-2.2-5.3-1.39-1.4-3.33-2.2-5.3-2.2z"/>
                        </g>
                    </svg>
                    {/* Text remains white */}
                    <span className="font-extrabold text-2xl tracking-tight leading-none text-white">MAVERICK</span>
                </Link>

                {/* --- 2. DESKTOP NAVIGATION (Center) --- */}
                <nav className="hidden md:flex flex-grow justify-center px-4">
                    {navItems.map((item) => (
                        <Link 
                            key={item.name} 
                            href={item.href} 
                            className="text-white hover:text-secondary transition duration-300 font-medium py-2 px-3 rounded-lg"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* --- 3. DESKTOP CTAS (Right) --- */}
                <div className="hidden md:flex space-x-6 items-center flex-shrink-0">
                    {/* Phone Number Section (Simplified using Lucide Icons) */}
                    <Link href="tel:0826277082" className="flex items-center text-white/90 transition duration-300 hover:text-secondary space-x-2">
                        <div className="p-2 border border-white/50 rounded-full">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                            <span className="text-xs font-light block text-white/70">Lawrence Brooks</span>
                            <span className="text-base font-semibold block whitespace-nowrap text-white">082 627 7082</span>
                        </div>
                    </Link>
                    
                    {/* Get A Quote Button (using shadcn/ui Button asChild) */}
                    <Button asChild 
                        className="bg-form-gold hover:bg-[#ffb000] text-primary font-bold text-lg py-3 px-6 rounded-lg shadow-xl transition duration-300 transform hover:scale-105 whitespace-nowrap"
                    >
                        <Link href="/contact">
                            Get A Quote
                        </Link>
                    </Button>
                </div>

                {/* --- 4. MOBILE MENU TOGGLE (Right, Mobile Only) --- */}
                {/* Note: The button logic is contained within the MobileNav Client Component */}
                <div className="md:hidden">
                    <MobileNav />
                </div>

            </div>
        </div>
        {/* Mobile menu content container will be handled by MobileNav Client Component */}
    </header>
  );
}