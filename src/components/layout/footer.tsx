// src/components/layout/footer.tsx
import Link from 'next/link';
// ADDED ClipboardCheck to the import list
import { Phone, Mail, MessageCircle, Facebook, Linkedin, ClipboardCheck } from 'lucide-react';
import React from 'react';

// NOTE: This component needs to be rendered OUTSIDE of the main content area 
// to ensure it is correctly placed at the bottom of the page structure.
export function Footer() {
    // Get current year for copyright text
    const currentYear = new Date().getFullYear();
    // Reusable utility class for footer links to match the HTML design
    const footerLinkClass = "text-gray-400 hover:text-secondary transition duration-300";
    // SVG Path for the Maverick Logo (reused from header)
    const logoSvgPath = "m423.5,40h-0.5v-8.5c0-17.369-14.131-31.5-31.5-31.5h-288c-17.369,0-31.5,14.131-31.5,31.5v8.5h-0.5c-12.958,0-23.5,10.542-23.5,23.5v8.5h-0.5c-17.369,0-31.5,14.131-31.5,31.5v64c0,17.369 14.131,31.5 31.5,31.5h176c9.098,0 16.5,7.402 16.5,16.5v16.5h-8.5c-12.958,0-23.5,10.542-23.5,23.5v168c0,21.78 17.72,39.5 39.5,39.5s39.5-17.72 39.5-39.5v-168c0-12.958-10.542-23.5-23.5-23.5h-8.5v-16.5c0-17.369-14.131-31.5-31.5-31.5h-176c-9.098,0-16.5-7.402-16.5-16.5v-64c0-9.098 7.402-16.5 16.5-16.5h0.5v8.5c0,12.958 10.542,23.5 23.5,23.5h0.5v8.5c0,17.369 14.131,31.5 31.5,31.5h288c17.369,0 31.5-14.131 31.5-31.5v-8.5h0.5c12.958,0 23.5-10.542 23.5-23.5v-32c0-12.958-10.542-23.5-23.5-23.5zm-176,408c-13.509,0-24.5-10.99-24.5-24.5v-144.5h49v144.5c0,13.51-10.991,24.5-24.5,24.5zm24.5-192.5v8.5h-49v-8.5c0-4.687 3.813-8.5 8.5-8.5h32c4.687,0 8.5,3.813 8.5,8.5zm-200.5-151.5c-4.687,0-8.5-3.813-8.5-8.5v-32c0-4.687 3.813-8.5 8.5-8.5h0.5v49h-0.5zm336.5,23.5c0,9.098-7.402,16.5-16.5,16.5h-288c-9.098,0-16.5-7.402-16.5-16.5v-96c0-9.098 7.402-16.5 16.5-16.5h288c9.098,0 16.5,7.402 16.5,16.5v96zm24-32c0,4.687-3.813,8.5-8.5,8.5h-0.5v-49h0.5c4.687,0 8.5,3.813 8.5,8.5v32zM247.5,416c-1.98,0-3.91,0.8-5.3,2.2-1.4,1.39-2.2,3.319-2.2,5.3 0,1.97 0.8,3.91 2.2,5.3 1.39,1.4 3.33,2.2 5.3,2.2 1.97,0 3.91-0.8 5.3-2.2 1.4-1.4 2.2-3.33 2.2-5.3 0-1.971-0.8-3.91-2.2-5.3-1.39-1.4-3.33-2.2-5.3-2.2z";
    return (
        <footer className="bg-footer-dark pt-16 pb-8 border-t border-primary/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* --- TOP SECTION: Grid of Links and Contact Info --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-700/50 pb-10 mb-8">
                    
                    {/* COLUMN 1: Brand & Mission */}
                    <div>
                        <Link href="/" className="flex items-center text-white space-x-2 mb-4">
                            {/* Logo SVG (Green Roller, White Text) */}
                            <svg className="w-7 h-7" fill="#A9D834" height="800px" width="800px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463 463" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 463 463">
                                <g>
                                    <path d={logoSvgPath} />
                                </g>
                            </svg>
                            <span className="font-extrabold text-2xl tracking-tight leading-none text-white">MAVERICK</span>
                        </Link>
                        <p className="text-gray-400 text-sm mb-4">
                            The trusted Asset Maintenance Partner for high-value properties in Gauteng. We solve problems from the structure up.
                        </p>
                        <Link href="/our-process-independent-qa" className="inline-flex items-center text-secondary hover:text-white transition duration-300 font-semibold text-sm space-x-2">
                            <ClipboardCheck className="w-4 h-4" />
                            <span>Independent QA Process</span>
                        </Link>
                    </div>

                    {/* COLUMN 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white uppercase mb-4 tracking-wider">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/" className={footerLinkClass}>Home</Link></li>
                            <li><Link href="/about-us" className={footerLinkClass}>About Us & Experience</Link></li>
                            <li><Link href="/projects" className={footerLinkClass}>Portfolio (Key Projects)</Link></li>
                            <li><Link href="/accreditations" className={footerLinkClass}>Approved Applicators</Link></li>
                            <li><Link href="/blog" className={footerLinkClass}>Expertise Hub (Blog)</Link></li>
                            <li><Link href="/contact" className={footerLinkClass}>Get a Quote</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 3: Specialist Services */}
                    <div>
                        <h3 className="text-lg font-bold text-white uppercase mb-4 tracking-wider">Specialist Services</h3>
                        <ul className="space-y-3">
                            <li><Link href="/waterproofing-services" className={footerLinkClass}>Roof & Balcony Waterproofing</Link></li>
                            <li><Link href="/structural-repairs" className={footerLinkClass}>Structural & Spalling Repair</Link></li>
                            {/* NEW LINK: Hygienic Flooring */}
                            <li><Link href="/coatings/hygienic-food-grade-flooring" className={footerLinkClass}>Hygienic Floor Coatings</Link></li>
                            <li><Link href="/access-solutions" className={footerLinkClass}>Rope Access Painting</Link></li>
                            <li><Link href="/painting/body-corporate-painting" className={footerLinkClass}>Body Corporate Painting</Link></li>
                            {/* NEW LINK: Industrial Corrosion */}
                            <li><Link href="/painting/industrial-painting" className={footerLinkClass}>Industrial Corrosion Control</Link></li>
                        </ul>
                    </div>

                    {/* COLUMN 4: Contact & Social */}
                    <div>
                        <h3 className="text-lg font-bold text-white uppercase mb-4 tracking-wider">Contact & Connect</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-gray-400 text-sm block">Call Lawrence Brooks:</span>
                                    <a href="tel:0826277082" className="text-white hover:text-secondary font-semibold transition duration-300">082 627 7082</a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="text-gray-400 text-sm block">Email for Quotes:</span>
                                    <a href="mailto:maverickpainters1984@gmail.com" className="text-white hover:text-secondary transition duration-300 text-sm md:text-base">maverickpainters1984@gmail.com</a>
                                </div>
                            </li>
                            <li className="flex space-x-4 pt-2">
                                <a href="#" className="text-white hover:text-tertiary transition duration-300 text-2xl" aria-label="Connect on Facebook"><Facebook /></a>
                                <a href="#" className="text-white hover:text-tertiary transition duration-300 text-2xl" aria-label="Connect on LinkedIn"><Linkedin /></a>
                                <a href="https://wa.me/27826277082" target="_blank" rel="noopener noreferrer" className="text-white hover:text-tertiary transition duration-300 text-2xl" aria-label="WhatsApp Maverick Painting"><MessageCircle /></a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* --- BOTTOM SECTION: Copyright & Legal Links + Custom Credit --- */}
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs md:text-sm">
                    <p className="mb-3 md:mb-0">&copy;{currentYear} Maverick Painting. All rights reserved. Registered in Gauteng, South Africa.</p>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center">
                         <p className="order-2 md:order-1 text-gray-500 text-xs">
                             Designed, Developed & Maintained by <a href="https://www.endpointmedia.co.za/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-tertiary transition duration-300 font-semibold">Endpoint Media.</a>
                         </p>
                        <div className="flex space-x-4 order-1 md:order-2">
                            <Link href="/terms" className="hover:text-secondary transition duration-300">Terms of Service</Link>
                            <span className="text-gray-600">|</span>
                            <Link href="/privacy" className="hover:text-secondary transition duration-300">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}