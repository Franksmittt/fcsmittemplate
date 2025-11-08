import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/header"; // Import the new Header component

const inter = Inter({ subsets: ["latin"] });

// Metadata is fetched on the server (SSR) to ensure good SEO[cite: 1859, 1911].
export const metadata: Metadata = {
  title: "MVVPPaint - Modern Next.js Boilerplate",
  description: "A production-ready Next.js application built with App Router, Tailwind CSS, and shadcn/ui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* The Header Server Component is rendered here, providing a consistent layout. */}
      <body className={inter.className}>
        <Header /> 
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}