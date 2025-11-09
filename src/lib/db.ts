// src/lib/db.ts
// FIX: Using the direct package name, relying on npm resolution
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres"; 
import * as schema from "./db/schema"; // Import your schema definitions

// Drizzle ORM requires the developer to define the DATABASE_URL environment variable.
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing in environment variables.");
}

// Create a connection pool using postgres-js
const client = postgres(process.env.DATABASE_URL);

// Initialize Drizzle with the client and your schema files
export const db = drizzle(client, { schema });