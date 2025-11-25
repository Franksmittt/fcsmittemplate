import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: '404 - Page Not Found | Maverick Painting',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="bg-primary min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center text-white">
        <h1 className="text-9xl font-extrabold text-secondary mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-400 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-secondary hover:bg-[#4AD5E2] text-primary font-bold">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

