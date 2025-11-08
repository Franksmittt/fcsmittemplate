"use client";

import React from "react"; 
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// --- 1. Define Form Schema (Validation) ---
const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().regex(/^0[0-9]{9}$/, "Invalid phone number (must be 10 digits starting with 0)."),
  service: z.string().min(1, "Please select a service."),
});

type ContactFormValues = z.infer<typeof ContactSchema>;

const serviceOptions = [
  "Commercial Painting",
  "Industrial/Corrosion Protection",
  "Waterproofing & Damp Repair",
  "Structural & Spalling Repair",
  "Residential & Estate Painting",
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
    
    console.log("Form Data:", data); 

    await new Promise(resolve => setTimeout(resolve, 1500)); 
    
    alert(`Thank you, ${data.name}! Your quote request for ${data.service} is being processed. We will contact you using ${data.phone}.`);
    reset();
    setIsSubmitting(false);
  };

  return (
    <Card className="shadow-2xl border-2 border-tertiary">
      <CardHeader className="text-center bg-tertiary/10">
        <CardTitle className="text-2xl font-extrabold text-primary">
          Get a Free, No-Obligation Quote
        </CardTitle>
        {/* FIXED APOSTROPHE */}
        <p className="text-sm text-primary/80">
          We&apos;ll contact you within 24 hours to schedule your on-site assessment.
        </p>
      </CardHeader>
      
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Name Field */}
          <div>
            <input
              id="name"
              {...register("name")}
              placeholder="Full Name"
              className={`w-full p-3 border-2 rounded-lg text-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <input
              id="phone"
              {...register("phone")}
              placeholder="Phone Number (e.g., 0821234567)"
              className={`w-full p-3 border-2 rounded-lg text-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
          </div>

          {/* Service Dropdown */}
          <div>
            <select
              id="service"
              {...register("service")}
              className={`w-full p-3 border-2 rounded-lg text-primary ${errors.service ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">-- Select Service Needed --</option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>}
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-12 text-lg font-bold
              bg-secondary hover:bg-tertiary text-primary transition-colors" 
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Request...
              </>
            ) : (
              "SEND QUOTE REQUEST"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}