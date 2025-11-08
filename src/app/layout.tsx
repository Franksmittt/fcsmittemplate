import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer"; // <-- NEW IMPORT

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
        {/* The entire application content lives within the body tags */}
        
        <Header /> 
        
        {/* Main content wrapper. flex-1 ensures it pushes the footer down if content is short. */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* The Footer is placed outside the main content area for site-wide consistency */}
        <Footer />
      </body>
    </html>
  );
}