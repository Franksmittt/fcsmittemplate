import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/header"; 
// Note: ColorSeparator import is permanently removed

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAVERICK | PAINTING CONTRACTORS",
  description: "A production-ready Next.js application built with App Router, Tailwind CSS, and shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* The architecture is now Header -> Main Content */}
        <Header /> 
        
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}