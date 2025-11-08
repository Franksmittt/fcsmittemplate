"use client"; // Critical: Marks this file and its children as client-side code [cite: 462, 268]

import { Button } from "@/components/ui/button";

// This component uses a client-side prop (onClick) and passes it to the Button.
// Since the Button component itself already has "use client"; from shadcn/ui,
// you can define the interactive logic here.
export function InteractiveButton() {
  const handleClick = () => {
    alert("Button Clicked");
  };
  
  return (
    <Button 
      variant="default" 
      size="lg" 
      onClick={handleClick} // The event handler now lives within a Client Component boundary
    >
      Test Shadcn Button
    </Button>
  );
}