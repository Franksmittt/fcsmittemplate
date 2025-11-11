// src/components/hero-contact-form.tsx
"use client";

import React from "react"; 
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button"; // Shadcn button
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Shadcn card components

// --- 1. Define Form Schema (Validation) ---
const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."), // Added email validation
  service: z.string().min(1, "Please select a service type."),
  problems: z.string().min(10, "Please describe your needs in more detail (min 10 characters)."), // Added textarea field
});
type ContactFormValues = z.infer<typeof ContactSchema>;

const serviceOptions = [
  "Developer/New Build",
  "Body Corporate Maintenance",
  "Specialized Coating",
  "Structural Repairs",
];
// --- 2. Main Form Component (Client) ---
export function HeroContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
  });
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
// Simulate API call delay
    console.log("Form Data:", data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert(`Thank you, ${data.name}! We have received your request for ${data.service}. We will contact you soon.`);
    
    reset();
    setIsSubmitting(false);
  };
  return (
    // Card matches the HTML structure: p-6 rounded-xl shadow-2xl bg-white
    <Card className="rounded-xl shadow-2xl bg-white border-none mx-auto w-full max-w-sm"> 
      
      <CardHeader className="pt-6 pb-2">
        <CardTitle className="text-2xl font-extrabold text-primary mb-2">
          Get Started
        </CardTitle>
        {/* FIX: Used &apos; */}
        <p className="text-gray-600 text-sm leading-relaxed">
          Describe your project or property maintenance needs for a swift and comprehensive quote.
        </p>
      </CardHeader>
      
      <CardContent className="pt-2 pb-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Name Field */}
          <div className="group relative">
            <label htmlFor="name" className="sr-only">Your Name</label> {/* Accessibility: Screen Reader Only Label */}
            <input
           
              id="name"
              {...register("name")}
              placeholder="Your Name"
              // Updated border and focus ring colors for better contrast
              className={`w-full border rounded-lg bg-white text-primary py-2.5 px-3 text-base focus:outline-none focus:ring-2 focus:ring-secondary 
transition duration-300 ${errors.name ?
'border-red-600' : 'border-gray-400 placeholder:text-gray-600'}`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
          </div>

          {/* Email Field (New field to match validation schema) */}
          <div className="group relative">
            <label htmlFor="email" className="sr-only">Your Email</label> {/* Accessibility: Screen Reader Only Label */}
            <input
            
              type="email"
  
              id="email"
              {...register("email")}
              placeholder="Your Email"
              // Updated border and focus ring colors for better contrast
              className={`w-full border rounded-lg bg-white text-primary py-2.5 px-3 text-base focus:outline-none focus:ring-2 focus:ring-secondary transition duration-300 ${errors.email ?
'border-red-600' : 'border-gray-400 placeholder:text-gray-600'}`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
          </div>

          {/* Service Dropdown */}
          <div className="group relative custom-select-wrapper">
            <label htmlFor="service" className="sr-only">Select Service Type</label> {/* Accessibility: Screen Reader Only Label */}
            <select
              id="service"
       
 
               {...register("service")}
              // Applied HTML styles
              className={`block w-full border rounded-lg bg-white text-primary py-2.5 px-3 text-base focus:outline-none focus:ring-2 focus:ring-secondary cursor-pointer custom-select-arrow ${errors.service ?
'border-red-600' : 'border-gray-400 placeholder:text-gray-600'}`}
            >
              <option value="" disabled>Select Service Type</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
        
 
            {/* Custom arrow container recreated for visual fidelity */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600">
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
            </div>
      
          {errors.service && 
<p className="mt-1 text-xs text-red-600">{errors.service.message}</p>}
          </div>
          
          {/* Textarea Field (for 'problems') */}
          <div className="group relative">
            <label htmlFor="problems" className="sr-only">Describe your needs</label> {/* Accessibility: Screen Reader Only Label */}
            <textarea 
                id="problems" 
            
              {...register("problems")} 
   
             rows={2} 
                placeholder="Describe your needs (e.g., location, scope, deadline)"
                // Updated border and focus ring colors for better contrast
                className={`w-full border rounded-lg bg-white text-primary py-2.5 px-3 text-base focus:outline-none focus:ring-2 focus:ring-secondary resize-none transition duration-300 ${errors.problems ?
'border-red-600' : 'border-gray-400 placeholder:text-gray-600'}`}
            />
            {errors.problems && <p className="mt-1 text-xs text-red-600">{errors.problems.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-1">
            <Button 
                type="submit"
      
 
              disabled={isSubmitting}
                // Replicated HTML styling using Tailwind classes and form-gold color
                className="w-full py-2.5 px-6 rounded-lg text-base font-bold text-primary bg-form-gold hover:bg-[#ffb000] transition duration-300 shadow-xl transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-form-gold/50"
            >
                {isSubmitting 
?
(
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing Request...
                    </>
     
              ) : (
                    "Get Your Comprehensive Quote"
                )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}