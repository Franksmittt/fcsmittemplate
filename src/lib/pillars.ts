import type { LucideIcon } from "lucide-react";
import { Layers, Droplet, Shield, Factory, ShieldCheck, Wrench } from "lucide-react";
import type { BuildMetadataParams } from "@/lib/metadata";
import {
  getPillarsData,
  getPillarContent,
  getClusterContent,
  getPillarStaticParams as getPillarStaticContent,
  getClusterStaticParams as getClusterStaticContent,
} from "@/data/pillars";
import {
  WaterproofingPillarPage,
  LiquidVsTorchOnArticle,
  LeakingBalconyFixesArticle,
  RisingDampGuideArticle,
} from "@/content/pillars/waterproofing";
import {
  IndustrialPillarPage,
  ZincPrimerCorrosionControlArticle,
  FastCuringFloorsArticle,
  OhsAccessLiabilityArticle,
} from "@/content/pillars/industrial";
import {
  StructuralRemediationPillarPage,
  ConcreteSpallingRepairArticle,
  PeelingPaintRepairArticle,
} from "@/content/pillars/structural-remediation";

type Component = () => JSX.Element;

export type ClusterDefinition = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  metadata: BuildMetadataParams;
  component: Component;
  relatedSlugs?: string[];
};

export type PillarDefinition = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  icon: LucideIcon;
  heroCta?: {
    label: string;
    href: string;
  };
  metadata: BuildMetadataParams;
  component: Component;
  clusters: ClusterDefinition[];
};

const waterproofingPillar: PillarDefinition = {
  slug: "waterproofing",
  title: "Waterproofing & Damp Proofing Guides",
  subtitle: "Flat roofs, balconies, and moisture diagnostics.",
  summary:
    "Technical playbooks for liquid-applied vs. torch-on membranes, chemical damp proofing, and low-disruption balcony repairs.",
  icon: Layers,
  heroCta: {
    label: "Consult a Waterproofing Expert",
    href: "/contact",
  },
  metadata: {
    title:
      "Waterproofing & Damp Proofing Guides | Flat Roof, Balcony, and Basement Solutions",
    description:
      "Expert guides on selecting liquid-applied vs. torch-on membranes, preventing rising damp, and troubleshooting water ingress in balconies and basements.",
    path: "/blog/waterproofing",
  },
  component: WaterproofingPillarPage,
  clusters: [
    {
      slug: "liquid-vs-torch-on",
      title:
        "Liquid Applied Membranes vs. Torch-On: Which System is Right for Your Roof?",
      description:
        "Durability, installation, and warranty differences between polyurethane membranes and traditional torch-on systems.",
      icon: Droplet,
      metadata: {
        title:
          "Technical Comparison: Liquid Applied vs. Torch-On Waterproofing Membranes",
        description:
          "An expert technical guide comparing the durability, installation process, and long-term cost-effectiveness of liquid applied polyurethane membranes against traditional torch-on felt systems for flat roofs and balconies.",
        path: "/blog/waterproofing/liquid-vs-torch-on",
      },
      component: LiquidVsTorchOnArticle,
      relatedSlugs: ["rising-damp-guide", "leaking-balcony-fixes"],
    },
    {
      slug: "leaking-balcony-fixes",
      title:
        "How to Fix a Leaking Balcony Without Removing Tiles (Low-Disruption Repair)",
      description:
        "Diagnosis and remediation workflow for under-tile balcony leaks using injection and re-grouting systems.",
      icon: Shield,
      metadata: {
        title:
          "How to Fix a Leaking Balcony Without Removing Tiles (Low-Disruption Repair)",
        description:
          "A practical guide for body corporates and homeowners on diagnosing and repairing leaking under-tile balconies using low-disruption injection and re-grouting systems, avoiding costly demolition.",
        path: "/blog/waterproofing/leaking-balcony-fixes",
      },
      component: LeakingBalconyFixesArticle,
      relatedSlugs: ["liquid-vs-torch-on"],
    },
    {
      slug: "rising-damp-guide",
      title: "The Permanent Fix for Rising Damp: Chemical DPC Injection Guide",
      description:
        "Diagnosing rising damp vs. condensation and executing the full chemical DPC + plaster remediation process.",
      icon: Layers,
      metadata: {
        title:
          "The Permanent Fix for Rising Damp: Chemical DPC Injection Guide",
        description:
          "A comprehensive guide on diagnosing rising damp versus condensation, detailing the chemical DPC (Damp Proof Course) injection method, and the essential subsequent plaster remediation.",
        path: "/blog/waterproofing/rising-damp-guide",
      },
      component: RisingDampGuideArticle,
      relatedSlugs: ["liquid-vs-torch-on"],
    },
  ],
};

const industrialPillar: PillarDefinition = {
  slug: "industrial",
  title: "Industrial Painting & Maintenance Guides",
  subtitle: "Corrosion control, floor systems, and plant liability.",
  summary:
    "Expert industrial guides on corrosion control, abrasive blasting prep, hygienic flooring, and OHS compliance for factories and plant assets.",
  icon: Factory,
  heroCta: {
    label: "Request a technical consultation",
    href: "/contact",
  },
  metadata: {
    title:
      "Industrial Painting & Maintenance Blog | Corrosion Control & Plant Asset Guides",
    description:
      "Expert industrial guides on corrosion control, abrasive blasting preparation, epoxy flooring systems, and protective coatings for factories and plant assets.",
    path: "/blog/industrial",
  },
  component: IndustrialPillarPage,
  clusters: [
    {
      slug: "zinc-primer-corrosion-control",
      title: "The Science of Stopping Rust: Choosing the Right Zinc Primer",
      description:
        "Technical comparison of sacrificial vs. barrier protection for structural steel and exposed plant assets.",
      icon: Wrench,
      metadata: {
        title:
          "The Science of Stopping Rust: Choosing the Right Zinc Primer",
        description:
          "A technical guide to sacrificial and barrier protection systems for structural steel and exposed plant assets.",
        path: "/blog/industrial/zinc-primer-corrosion-control",
      },
      component: ZincPrimerCorrosionControlArticle,
      relatedSlugs: ["fast-curing-floors", "ohs-access-liability"],
    },
    {
      slug: "fast-curing-floors",
      title: "Minimizing Downtime: Fast-Curing Floors for Food Production",
      description:
        "How polyurethane screeds minimize disruption and secure HACCP compliance in high-throughput facilities.",
      icon: Factory,
      metadata: {
        title: "Minimizing Downtime: Fast-Curing Floors for Food Production",
        description:
          "How fast-curing polyurethane screeds minimize disruption and ensure HACCP compliance in processing plants.",
        path: "/blog/industrial/fast-curing-floors",
      },
      component: FastCuringFloorsArticle,
      relatedSlugs: ["zinc-primer-corrosion-control"],
    },
    {
      slug: "ohs-access-liability",
      title: "OHS Compliance: Managing High-Access Liability on Industrial Sites",
      description:
        "A compliance checklist for facility managers coordinating rope access and elevated work.",
      icon: Shield,
      metadata: {
        title:
          "OHS Compliance: Managing High-Access Liability on Industrial Sites",
        description:
          "A checklist for facility managers to ensure contractors meet all OHS requirements for work performed at height.",
        path: "/blog/industrial/ohs-access-liability",
      },
      component: OhsAccessLiabilityArticle,
      relatedSlugs: ["zinc-primer-corrosion-control"],
    },
  ],
};

const structuralRemediationPillar: PillarDefinition = {
  slug: "structural-remediation",
  title: "Structural Remediation Guides",
  subtitle: "Concrete spalling, crack injection, and QA workflows.",
  summary:
    "Engineering-led playbooks covering defect diagnostics, steel passivation, polymer-modified mortars, and breathable protective coatings.",
  icon: ShieldCheck,
  heroCta: {
    label: "Book a remediation assessment",
    href: "/structural-repairs",
  },
  metadata: {
    title: "Technical Guide: How to Permanently Repair Concrete Spalling & Cancer",
    description:
      "An expert guide to structural remediation, detailing the process of concrete spalling repair, rebar passivation, crack injection, and final protective coating application.",
    path: "/blog/structural-remediation",
  },
  component: StructuralRemediationPillarPage,
  clusters: [
    {
      slug: "concrete-spalling-repair",
      title: "Concrete Spalling Repair: Permanent, Engineering-Led Workflow",
      description:
        "A four-phase remediation blueprint covering defect breakout, rebar treatment, structural mortars, and breathable coatings.",
      icon: Wrench,
      metadata: {
        title: "Concrete Spalling Repair: Permanent, Engineering-Led Workflow",
        description:
          "Step-by-step remediation process that prevents recurring failure by addressing rebar corrosion and protective top coats.",
        path: "/blog/structural-remediation/concrete-spalling-repair",
      },
      component: ConcreteSpallingRepairArticle,
    },
    {
      slug: "peeling-paint-repair",
      title: "Why is My Paint Peeling? Complete Diagnostic Guide",
      description:
        "Diagnose and fix peeling paint by identifying root causes: moisture intrusion, poor preparation, or adhesion failure.",
      icon: Wrench,
      metadata: {
        title: "Why is My Paint Peeling? The Complete Diagnostic & Repair Guide",
        description:
          "Expert guide to diagnosing and permanently fixing peeling paint. Learn to identify moisture intrusion, poor surface preparation, and adhesion failures before repainting.",
        path: "/blog/structural-remediation/peeling-paint-repair",
      },
      component: PeelingPaintRepairArticle,
    },
  ],
};

const contentToComponentMap: Record<string, PillarDefinition> = {
  waterproofing: waterproofingPillar,
  industrial: industrialPillar,
  "structural-remediation": structuralRemediationPillar,
};

const detailComponentMap: Record<string, ClusterDefinition> = {
  "waterproofing:liquid-vs-torch-on": {
    ...waterproofingPillar.clusters[0],
    component: LiquidVsTorchOnArticle,
  },
  "waterproofing:leaking-balcony-fixes": {
    ...waterproofingPillar.clusters[1],
    component: LeakingBalconyFixesArticle,
  },
  "waterproofing:rising-damp-guide": {
    ...waterproofingPillar.clusters[2],
    component: RisingDampGuideArticle,
  },
  "industrial:zinc-primer-corrosion-control": {
    ...industrialPillar.clusters[0],
    component: ZincPrimerCorrosionControlArticle,
  },
  "industrial:fast-curing-floors": {
    ...industrialPillar.clusters[1],
    component: FastCuringFloorsArticle,
  },
  "industrial:ohs-access-liability": {
    ...industrialPillar.clusters[2],
    component: OhsAccessLiabilityArticle,
  },
  "structural-remediation:concrete-spalling-repair": {
    ...structuralRemediationPillar.clusters[0],
    component: ConcreteSpallingRepairArticle,
  },
  "structural-remediation:peeling-paint-repair": {
    ...structuralRemediationPillar.clusters[1],
    component: PeelingPaintRepairArticle,
  },
};

export function getPillars() {
  return getPillarsData().map((pillar) => ({
    ...contentToComponentMap[pillar.slug],
    metadata: pillar.metadata,
    summary: pillar.summary,
    clusters: pillar.clusters.map((cluster) => ({
      ...detailComponentMap[`${pillar.slug}:${cluster.slug}`],
      metadata: cluster.metadata,
      description: cluster.description,
    })),
  }));
}

export function getPillarBySlug(slug: string) {
  const pillar = contentToComponentMap[slug];
  if (!pillar) return undefined;
  return {
    ...pillar,
    metadata: getPillarContent(slug)?.metadata ?? pillar.metadata,
    clusters: pillar.clusters,
  };
}

export function getClusterBySlugs(pillarSlug: string, clusterSlug: string) {
  const key = `${pillarSlug}:${clusterSlug}`;
  const cluster = detailComponentMap[key];
  if (!cluster) return undefined;
  return {
    ...cluster,
    metadata: getClusterContent(pillarSlug, clusterSlug)?.metadata ?? cluster.metadata,
  };
}

export function getPillarStaticParams() {
  return getPillarStaticContent();
}

export function getClusterStaticParams() {
  return getClusterStaticContent();
}

export function getPillarJsonLd(pillarSlug: string) {
  const pillar = getPillarBySlug(pillarSlug);
  if (!pillar) return undefined;

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pillar.title,
    description: pillar.summary,
    url: pillar.metadata.path,
    hasPart: pillar.clusters.map((cluster) => ({
      "@type": "Article",
      name: cluster.title,
      description: cluster.description,
      url: cluster.metadata.path,
    })),
  };
}

export function getClusterJsonLd(pillarSlug: string, clusterSlug: string) {
  const cluster = getClusterBySlugs(pillarSlug, clusterSlug);
  const pillar = getPillarBySlug(pillarSlug);
  if (!cluster || !pillar) return undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cluster.title,
    description: cluster.description,
    url: cluster.metadata.path,
    isPartOf: {
      "@type": "CollectionPage",
      name: pillar.title,
      url: pillar.metadata.path,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Blog",
          item: "/blog",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: pillar.title,
          item: pillar.metadata.path,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: cluster.title,
          item: cluster.metadata.path,
        },
      ],
    },
  };
}

