// src/lib/db/schema.ts
import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  serial,
  // REMOVED: Unnecessary explicit Drizzle types that caused the error
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "@auth/core/adapters";

// --- CORE TABLES FOR NEXT-AUTH INTEGRATION (Auth.js) ---

export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({ // FIX: Removed explicit type casting (PgTableFn<any>)
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({ // FIX: Removed explicit type casting (PgTableFn<any>)
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

// --- APPLICATION-SPECIFIC TABLES (Example) ---

// Placeholder table for Blog Articles (to enable dynamic content later)
export const articles = pgTable("article", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull().unique(),
    content: text("content").notNull(),
    createdAt: timestamp("createdAt", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updatedAt", { mode: "date" }).defaultNow().notNull(),
    // Link to the user who authored the article
    authorId: text("authorId").references(() => users.id, { onDelete: "set null" }), 
});