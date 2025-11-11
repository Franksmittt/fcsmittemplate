// src/lib/hooks/useIntervalWhenVisible.ts
"use client" ; 

import { useState, useEffect, useRef } from 'react'
//
export function useIntervalWhenVisible(
  callback: () => void,
  delay: number | null,
) {
  const savedCallback = useRef(callback);
 const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
 const targetRef = useRef<Element | null>(null);

// Save the latest callback 
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

// Set up the IntersectionObserver 
  useEffect(() => {
    // Ensure this only runs in the browser
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      // Fallback for old browsers or SSR: just run the interval
      setIsVisible(true);
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Disconnect observer after first intersection 
          if (observerRef.current && targetRef.current) {
            observerRef.current.unobserve(targetRef.current);
          }
        }
      },
      { rootMargin: '0px', threshold: 0.1 } // Trigger when 10% is visible
    );

    if (targetRef.current) {
      observerRef.current.observe(targetRef.current);
    }

    const obs = observerRef.current;
    const target = targetRef.current;
    return () => {
      if (obs && target) {
        obs.unobserve(target);
      }
    };
  }, []);

// Set up the interval 
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    // Only run the interval if delay is not null AND the element is visible
    if (delay !== null && isVisible) {
      // FIX: Change 'let id' to 'const id' to satisfy the ESLint prefer-const rule.
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, isVisible]);

// Return a ref-setter function for the target element
  const setTargetRef = (node: Element | null) => {
    if (targetRef.current) {
      observerRef.current?.unobserve(targetRef.current);
 }
    targetRef.current = node;
    if (targetRef.current) {
      observerRef.current?.observe(targetRef.current);
    }
  };

  return { setTargetRef };
}