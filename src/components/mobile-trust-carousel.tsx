"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { LucideIcon, ClipboardCheck, Medal, Scroll, Stethoscope } from 'lucide-react';

// Map of all possible Lucide icon names to their imported components
const IconMap: { [key: string]: LucideIcon } = {
    ClipboardCheck: ClipboardCheck,
    Medal: Medal,
    Scroll: Scroll,
    Stethoscope: Stethoscope,
};

interface TrustSignal {
    id: number;
    text: string;
    icon: string; // Changed type from LucideIcon (Function) to string (Serializable)
    tailwindColor: string;
}

interface MobileTrustCarouselProps {
    signals: TrustSignal[];
}

// This Client Component handles the mobile-only cycling carousel logic
export function MobileTrustCarousel({ signals }: MobileTrustCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cycleItems = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % signals.length);
    }, [signals.length]);

    // Use useEffect to handle setInterval, which is a browser API.
    // This logic runs only on the client.
    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        
        if (isMobile && signals.length > 0) {
            const intervalId = setInterval(cycleItems, 3000); 
            return () => clearInterval(intervalId); // Cleanup function
        }
    }, [signals, cycleItems]);
    
    // Ensure that if the window resizes above mobile size, the correct view is shown.
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setCurrentIndex(0); 
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Return the mobile container (the carousel effect happens via position/opacity)
    return (
        <div id="mobile-trust-container" className="relative h-[30px] overflow-hidden text-white text-center text-sm font-medium">
            {signals.map((signal, index) => {
                // Look up the icon component using the string name
                const IconComponent = IconMap[signal.icon];
                
                return (
                    <div
                        key={signal.id}
                        className={`absolute top-0 left-0 w-full flex items-center justify-center space-x-2 transition-opacity duration-500 ease-in-out ${
                            index === currentIndex ? 'opacity-100 relative' : 'opacity-0' 
                        }`}
                        style={{ 
                            position: index === currentIndex ? 'relative' : 'absolute', 
                            height: '30px',
                        }}
                    >
                        {/* Only render if the component was found */}
                        {IconComponent && <IconComponent className={`w-5 h-5 ${signal.tailwindColor}`} />}
                        <span className="whitespace-nowrap">{signal.text}</span>
                    </div>
                );
            })}
        </div>
    );
}