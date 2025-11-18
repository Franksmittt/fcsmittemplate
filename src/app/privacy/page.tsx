// src/app/privacy/page.tsx
import { CtaFinalStrip } from '@/components/cta-final-strip';
import { Shield } from 'lucide-react'; // REMOVED: FileText
import { buildPageMetadata } from '@/lib/metadata';

// --- METADATA (SEO) ---
export const metadata = buildPageMetadata({
    title: 'Privacy Policy | Data Collection and Use | Maverick Painting Contractors',
    description: 'Review the official Privacy Policy for Maverick Painting, detailing how user data is collected, used, and protected.',
    path: '/privacy',
});

// --- MAIN PAGE COMPONENT ---
export default function PrivacyPage() {
    return (
        <div className="bg-primary pt-32 pb-24 text-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                
                <header className="mb-12 border-b border-gray-700 pb-6">
                    <Shield className="w-10 h-10 text-secondary mb-3" />
                    <h1 className="text-5xl font-extrabold uppercase mb-3">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-400">
                        Last Updated: November 9, 2025
                    </p>
                </header>

                <div className="space-y-8 text-gray-300 leading-relaxed text-base">
                    
                    {/* SECTION 1: Data Collection */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                        <p>
                            We collect personal identification information only when you voluntarily provide it through our contact forms, quote request forms, or direct email correspondence. This typically includes your name, email address, phone number, and details regarding your specific project or property maintenance needs.
                        </p>
                        <p>
                            We also collect non-personal information automatically when you visit our website, such as your IP address, browser type, operating system, and the pages you view. This is used for traffic analysis and site improvement.
                        </p>
                    </section>
                    
                    {/* SECTION 2: Use of Information */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>To respond to your inquiries and schedule on-site assessments for quotations.</li>
                            <li>To improve our website functionality and user experience.</li>
                            <li>To comply with legal obligations.</li>
                            <li>We do not sell, rent, or lease our customer lists to third parties.</li>
                        </ul>
                    </section>
                    
                    {/* SECTION 3: Security and Cookies */}
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Data Security and Cookies</h2>
                        <p>
                            We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.
                        </p>
                        <p>
                            Our website uses cookies to enhance user experience. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the Site may not function properly.
                        </p>
                    </section>
                </div>

            </div>
            {/* The final CTA strip sits below the main content, outside the text container */}
            <div className="mt-20">
                <CtaFinalStrip />
            </div>
        </div>
    );
}