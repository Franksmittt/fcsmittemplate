import os
import shutil
from pathlib import Path

# ==============================================================================
# CONFIGURATION
# ==============================================================================
PROJECT_ROOT = os.getcwd()
SRC_DIR = os.path.join(PROJECT_ROOT, "src")
UNDO_SCRIPT_NAME = "undo_seo_changes.py"

# Files to be created (Path relative to src, Content)
FILES_TO_CREATE = [
    {
        "path": os.path.join("data", "locations.ts"),
        "content": """export type ServiceLocation = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  landmarks: string[];
};

export const serviceLocations: ServiceLocation[] = [
  {
    slug: "midrand",
    name: "Midrand",
    metaTitle: "Commercial Painting & Waterproofing Contractors Midrand",
    metaDescription: "Specialized structural repairs and industrial painting in Midrand. Serving Waterfall City, Kyalami, and surrounding business parks. Independent QA guaranteed.",
    landmarks: ["Waterfall City", "Mall of Africa", "Kyalami Business Park"],
  },
  {
    slug: "sandton",
    name: "Sandton",
    metaTitle: "Sandton Body Corporate Painting & Maintenance",
    metaDescription: "Premium painting contractors for Sandton residential complexes and office blocks. We maintain assets in Morningside, Bryanston, and the CBD.",
    landmarks: ["Sandton City", "The Leonardo", "Alice Lane Precinct"],
  },
  {
    slug: "centurion",
    name: "Centurion",
    metaTitle: "Centurion Industrial Coatings & Damp Proofing",
    metaDescription: "Approved applicators for industrial parks in Centurion. We fix rising damp and corrosion in Highveld, Irene, and Rooihuiskraal.",
    landmarks: ["Centurion Mall", "Highveld Techno Park", "Irene Link"],
  },
  {
    slug: "pretoria-east",
    name: "Pretoria East",
    metaTitle: "Pretoria East Waterproofing & Painting Specialists",
    metaDescription: "Solving water ingress and spalling issues in Pretoria East. Expert contractors for Faerie Glen, Menlyn, and luxury estates.",
    landmarks: ["Menlyn Maine", "Woodhill Estate", "The Grove"],
  },
];

export function getLocation(slug: string) {
  return serviceLocations.find((loc) => loc.slug === slug);
}
"""
    },
    {
        "path": os.path.join("app", "locations", "[city]", "page.tsx"),
        "content": """import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaFinalStrip } from "@/components/cta-final-strip";
import { AccreditationsStrip } from "@/components/accreditations-strip";
import { MapPin, CheckSquare, Shield, Phone } from "lucide-react";
import { serviceLocations, getLocation } from "@/data/locations";
import { siteConfig } from "@/lib/seo";
import { buildPageMetadata } from "@/lib/metadata";

// 1. Static Params Generation
export function generateStaticParams() {
  return serviceLocations.map((location) => ({
    city: location.slug,
  }));
}

// 2. Dynamic SEO Metadata
export function generateMetadata({ params }: { params: { city: string } }) {
  const loc = getLocation(params.city);
  if (!loc) return {};

  return buildPageMetadata({
    title: loc.metaTitle,
    description: loc.metaDescription,
    path: `/locations/${loc.slug}`,
  });
}

// 3. The Local Landing Page Component
export default function LocationPage({ params }: { params: { city: string } }) {
  const loc = getLocation(params.city);
  if (!loc) notFound();

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Painting & Waterproofing in ${loc.name}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": loc.name,
        "addressRegion": "Gauteng",
        "addressCountry": "ZA"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": loc.name
    }
  };

  return (
    <div className="bg-primary pt-24 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative py-24 px-4 bg-gray-900 border-b-4 border-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-tertiary mb-4">
            <MapPin className="w-5 h-5" />
            <span className="uppercase tracking-widest font-bold">{loc.name} Contractor</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl mb-6">
            Reliable Asset Maintenance in {loc.name}.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mb-8">
            We provide owner-supervised structural repairs, waterproofing, and painting services 
            specifically for commercial and body corporate assets near 
            <span className="text-white font-semibold"> {loc.landmarks.join(", ")}</span>.
          </p>
          <Button asChild className="bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 px-8">
            <Link href="/contact">Get a {loc.name} Quote &rarr;</Link>
          </Button>
        </div>
      </section>

      {/* LOCAL SERVICE GRID */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900 rounded-xl border-t-4 border-tertiary">
              <Shield className="w-10 h-10 text-tertiary mb-4" />
              <h3 className="text-2xl font-bold mb-2">{loc.name} Waterproofing</h3>
              <p className="text-gray-400">Guaranteed flat roof and balcony systems designed for the specific climate challenges of {loc.name}.</p>
            </div>
            <div className="p-8 bg-gray-900 rounded-xl border-t-4 border-secondary">
              <CheckSquare className="w-10 h-10 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Independent QA</h3>
              <p className="text-gray-400">We bring independent inspectors to every site in {loc.name} to verify film thickness and adhesion.</p>
            </div>
            <div className="p-8 bg-gray-900 rounded-xl border-t-4 border-tertiary">
              <Phone className="w-10 h-10 text-tertiary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Fast Response</h3>
              <p className="text-gray-400">Our teams are active in {loc.landmarks[0]} and surrounding areas daily, ensuring rapid assessment times.</p>
            </div>
          </div>
        </div>
      </section>

      <AccreditationsStrip />
      <CtaFinalStrip />
    </div>
  );
}
"""
    },
    {
        "path": os.path.join("app", "blog", "[pillar]", "[cluster]", "opengraph-image.tsx"),
        "content": """import { ImageResponse } from 'next/og'
import { getClusterBySlugs } from '@/lib/pillars'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export const headers = {
  'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
}

export default async function Image({ params }: { params: { pillar: string; cluster: string } }) {
  const cluster = getClusterBySlugs(params.pillar, params.cluster)
  const title = cluster?.title || 'Maverick Painting Technical Guide'
  const category = params.pillar.replace('-', ' ').toUpperCase()

  return new ImageResponse(
    (
      <div
        style={{
          background: '#171716', // Primary Dark
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '16px', background: '#5AD5E2' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ fontSize: 32, color: '#A9D834', letterSpacing: '0.1em', fontWeight: 700, textTransform: 'uppercase' }}>
            {category} GUIDE
          </div>
          <div style={{ fontSize: 72, color: 'white', fontWeight: 900, lineHeight: 1.1, textTransform: 'uppercase' }}>
            {title}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '60px', height: '60px', background: '#A9D834', borderRadius: '50%' }} />
          <div style={{ fontSize: 30, color: 'gray', fontWeight: 600 }}>MAVERICK PAINTING</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
"""
    },
    {
        "path": os.path.join("components", "analytics", "gtm-partytown.tsx"),
        "content": """'use client'

import Script from 'next/script'

export function GoogleTagManager({ containerId }: { containerId: string }) {
  return (
    <>
      <Script
        id="gtm-partytown"
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${containerId}');
          `,
        }}
      />
    </>
  )
}
"""
    }
]

# ==============================================================================
# LOGIC
# ==============================================================================

def generate_undo_script(created_files, backed_up_files):
    undo_content = f"""import os
import shutil

# AUTO-GENERATED UNDO SCRIPT
# RUNNING THIS WILL DELETE THE FILES CREATED BY THE SEO INSTALLER

FILES_TO_REMOVE = {created_files}
BACKUPS_TO_RESTORE = {backed_up_files}

def main():
    print("=== STARTING UNDO PROCESS ===")
    
    # 1. Remove created files
    for file_path in FILES_TO_REMOVE:
        if os.path.exists(file_path):
            try:
                os.remove(file_path)
                print(f"[DELETED] {{file_path}}")
                # Try to remove empty parent directories
                try:
                    os.rmdir(os.path.dirname(file_path))
                    print(f"[CLEANED DIR] {{os.path.dirname(file_path)}}")
                except OSError:
                    pass # Directory not empty
            except Exception as e:
                print(f"[ERROR] Could not delete {{file_path}}: {{e}}")
        else:
            print(f"[SKIP] File not found: {{file_path}}")

    # 2. Restore backups
    for original, backup in BACKUPS_TO_RESTORE.items():
        if os.path.exists(backup):
            try:
                shutil.move(backup, original)
                print(f"[RESTORED] {{original}} from backup")
            except Exception as e:
                print(f"[ERROR] Could not restore {{original}}: {{e}}")

    print("=== UNDO COMPLETE. YOUR PROJECT IS RESTORED. ===")

if __name__ == "__main__":
    main()
"""
    with open(UNDO_SCRIPT_NAME, "w", encoding="utf-8") as f:
        f.write(undo_content)
    print(f"\n[SAFETY] Undo script created at: {UNDO_SCRIPT_NAME}")

def main():
    print("=== ORACLE SEO INSTALLER: SAFE MODE ===")
    print(f"Target Project: {PROJECT_ROOT}")
    
    created_files = []
    backed_up_files = {}

    for item in FILES_TO_CREATE:
        full_path = os.path.join(SRC_DIR, item["path"])
        dir_name = os.path.dirname(full_path)
        
        # 1. Create Directory if missing
        if not os.path.exists(dir_name):
            os.makedirs(dir_name, exist_ok=True)
            print(f"[DIR] Created {dir_name}")

        # 2. Safety Check: Backup if exists
        if os.path.exists(full_path):
            backup_path = full_path + ".bak_oracle"
            shutil.copy2(full_path, backup_path)
            backed_up_files[full_path] = backup_path
            print(f"[BACKUP] Existing file backed up to {backup_path}")

        # 3. Write File
        try:
            with open(full_path, "w", encoding="utf-8") as f:
                f.write(item["content"])
            created_files.append(full_path)
            print(f"[WRITE] Successfully created {item['path']}")
        except Exception as e:
            print(f"[ERROR] Failed to write {item['path']}: {e}")

    # 4. Generate Undo Script
    generate_undo_script(created_files, backed_up_files)

    print("\n=== INSTALLATION COMPLETE ===")
    print("To connect these new files, you must manually:")
    print("1. Open `src/app/sitemap.ts` and import `serviceLocations`.")
    print("2. Open `src/app/layout.tsx` and add `<GoogleTagManager>`.")
    print("\nIf anything looks wrong, run:")
    print(f"python {UNDO_SCRIPT_NAME}")

if __name__ == "__main__":
    main()