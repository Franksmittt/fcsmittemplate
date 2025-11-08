// src/app/page.tsx
// This component remains a Server Component by default, which is the architectural best practice.

import { InteractiveButton } from "@/components/interactive-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-xl font-bold mb-4">Welcome to mvvppaint!</h1>
      
      {/* The Server Component imports the Client Component, which contains the interactivity. */}
      <InteractiveButton />
    </main>
  );
}