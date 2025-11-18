# ⚡ mvvppaint: Production-Ready Next.js 14 Boilerplate

[![GitHub Workflow Status (main)](https://img.shields.io/github/actions/workflow/status/Franksmittt/fcsmittemplate/main.yml?branch=main&label=Build%20Status)](https://github.com/Franksmittt/fcsmittemplate/actions)
[![GitHub last commit](https://img.shields.io/github/last-commit/Franksmittt/fcsmittemplate)](https://github.com/Franksmittt/fcsmittemplate/commits/main)
[![Next.js Version](https://img.shields.io/badge/Next.js-14.2.33-000000.svg)](https://nextjs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Live Demo:** [https://fcsmittemplate.vercel.app/](https://fcsmittemplate.vercel.app/)

---

## 🎯 1. Project Philosophy & Stack Overview

This project is a **Minimum Viable Production-Ready** template, built to institutionalize best practices for performance, scalability, and maintainability.

### The Modern "Server-First" Stack

| Layer | Technology | Rationale & Best Practice |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14.2.33** | [cite_start]The **App Router** is used exclusively, embracing the **Server-First Paradigm**[cite: 864]. This minimizes client-side JavaScript, leading to faster initial page loads (Lighthouse Core Web Vitals). |
| **Styling** | **Tailwind CSS (v3.4)** | Utility-first framework for rapid, conflict-free UI development. |
| **UI Components** | **shadcn/ui (New York Style)** | [cite_start]Uses the "copy, don't install" philosophy for **Architectural Sovereignty**[cite: 1040, 1120]. Components are locally owned and styled with Tailwind, ensuring zero runtime CSS-in-JS overhead. |
| **Language** | **TypeScript (v5)** | Essential for building robust, scalable applications by catching type errors at compile time, enforcing the strictest project quality gate. |
| **Auth & DB (Planned)**| **Auth.js** & **Drizzle ORM** | Dependencies installed (`next-auth`, `@auth/drizzle-adapter`) to provide a self-hosted, highly flexible authentication system backed by the modern, type-safe Drizzle SQL query builder. |
| **Forms** | **React Hook Form & Zod** | Used for high-performance form state management and robust, type-safe schema validation. |

---

## 🛠️ 2. Local Setup & Development

### 2.1 Prerequisites

Ensure you have the following installed on your system:

1.  **Node.js LTS** (v20.x or later is strongly recommended).
2.  [cite_start]**pnpm** (The chosen package manager for superior peer dependency handling and performance [cite: 1065, 1074]).
3.  **A PostgreSQL Database** connection string for the data layer.

### 2.2 Project Initialization & Installation

First, clone the repository and install dependencies using `pnpm`.

```bash
# 1. Clone the repository
git clone [https://github.com/Franksmittt/fcsmittemplate.git](https://github.com/Franksmittt/fcsmittemplate.git) mvvppaint
cd mvvppaint

# 2. Install all dependencies using pnpm
pnpm install

### 2.3 Configure On-Demand Revalidation

1. Define a strong shared secret in your environment (e.g. `.env.local`):

   ```
   REVALIDATE_SECRET="replace_with_random_string"
   ```

2. Point your CMS/webhook provider at `POST /api/revalidate` with JSON like:

   ```json
   {
     "secret": "replace_with_random_string",
     "scope": "pillar",
     "pillar": "waterproofing"
   }
   ```

   - `scope`: `"all" | "pillar" | "cluster"` (defaults to `"all"`).
   - `pillar`: slug from `src/lib/pillars.ts`.
   - `cluster`: required only for `scope: "cluster"`.

Every successful request purges the relevant static routes and cache tags so updated content publishes instantly.