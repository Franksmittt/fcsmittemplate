// src/lib/auth.ts
// ADDED: Module augmentation for NextAuth types
declare module "next-auth" {
    interface Session {
        user: {
            id: string; // Add the 'id' property to the User interface
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }
}

import { getServerSession } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { db } from "./db"; // Placeholder for actual database connection

// NOTE: We rely on the developer setting environment variables:
// GITHUB_ID, GITHUB_SECRET, AUTH_SECRET (for NextAuth)
// and DATABASE_URL (for Drizzle/Postgres)

export const authOptions: NextAuthOptions = {
    // Adapter connects Auth.js to the database schema
    adapter: DrizzleAdapter(db), 
    
    // Configure authentication providers
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        }),
        // Add more providers here (e.g., Google, Credentials)
    ],

    // Strategy for managing sessions (using JWTs for statelessness is common for Next.js/Vercel)
    session: {
        strategy: "jwt",
    },

    // Secret is required for signing the session cookie
    secret: process.env.AUTH_SECRET,
    
    // Pages configuration (optional, but good practice for protected routes)
    pages: {
        signIn: '/auth/signin', // Custom sign-in page path
        error: '/auth/error', // Error page path
    },

    // Callbacks can be used to customize session and JWT data
    callbacks: {
        async session({ session, token }) {
            // Include user ID in the session object (now safe due to augmentation)
            if (token.sub && session.user) {
                session.user.id = token.sub; 
            }
            return session;
        },
        async jwt({ token, user }) {
             // Pass user ID from sign-in to the token
            if (user) {
                token.sub = user.id;
            }
            return token;
        }
    },
};

// Helper function to get the session on the server (used in API handlers and Server Components)
export const getAuthSession = () => getServerSession(authOptions);