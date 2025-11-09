// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// This dynamic file exports the NextAuth handler function, connecting it to our core configuration.

const handler = NextAuth(authOptions);

// Required by Next.js App Router for handling API requests
export { handler as GET, handler as POST };