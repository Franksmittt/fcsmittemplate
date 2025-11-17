import type { LucideIcon } from "lucide-react";
import {
  Layers,
  Wrench,
  CheckSquare,
  PersonStanding,
  Droplet,
  Shield,
  Factory,
  Clock,
  Building,
} from "lucide-react";

export type ProjectDetail = {
  icon: LucideIcon;
  text: string;
};

export type ProjectCaseStudy = {
  slug: string;
  name: string;
  location: string;
  scope: string;
  date: string;
  value?: string;
  image: string;
  details: ProjectDetail[];
  lastModified?: string;
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "munyaka",
    name: "Munyaka Lifestyle Estate",
    location: "Midrand, Gauteng",
    scope:
      "Full exterior repaint, polyurethane waterproofing and structural crack remediation across luxury lifestyle blocks.",
    date: "2023 Q4 – 2024 Q2",
    value: "R7.5 Million",
    image: "/images/munyaka-midrand.jpg",
    details: [
      {
        icon: Layers,
        text: "Installed 5,000 m² of liquid-applied polyurethane membrane on flat roofs and podium decks.",
      },
      {
        icon: Wrench,
        text: "Repaired severe concrete spalling across three residential blocks using engineer-approved mortars.",
      },
      {
        icon: CheckSquare,
        text: "Independent QA issued bi-weekly film thickness and adhesion reports for the developer.",
      },
    ],
    lastModified: "2024-10-02",
  },
  {
    slug: "the-blyde",
    name: "The Blyde Riverwalk Estate",
    location: "Pretoria East, Gauteng",
    scope:
      "High-access facade repainting, balcony remediation and elastomeric coating application for coastal-grade protection.",
    date: "2022 Q3",
    value: "R4.2 Million",
    image: "/images/the-blyde-pretorria.jpg",
    details: [
      {
        icon: PersonStanding,
        text: "Used IRATA rope access to coat difficult-to-reach elevations without scaffolding delays.",
      },
      {
        icon: Droplet,
        text: "Fixed multiple leaking under-tile balconies with low-disruption injection and regouting systems.",
      },
      {
        icon: Shield,
        text: "Applied UV-stable, anti-fungal elastomeric coatings to all high-exposure facades.",
      },
    ],
    lastModified: "2024-05-18",
  },
  {
    slug: "celebration",
    name: "Celebration Retirement Estate",
    location: "North Riding, Gauteng",
    scope:
      "Turn-key repaint with on-site damp remediation, roof restoration and resident-friendly scheduling.",
    date: "2024 Q1",
    image: "/images/celebration-retirement.jpg",
    details: [
      {
        icon: Clock,
        text: "Executed a multi-phase programme to minimise disruption for elderly residents.",
      },
      {
        icon: Droplet,
        text: "Installed new chemical DPC and re-plastered 1,200 m² of rising damp zones before painting.",
      },
      {
        icon: CheckSquare,
        text: "Delivered photographic QA packs for trustee sign-off at every milestone.",
      },
    ],
    lastModified: "2024-07-09",
  },
  {
    slug: "eastlands",
    name: "Eastlands Mature Lifestyle Estate",
    location: "Benoni, Gauteng",
    scope:
      "Structural repairs, waterproofing, and repainting of common property and high-exposure boundary walls.",
    date: "2023 Q2",
    image: "/images/eastlands-benoni.jpg",
    details: [
      {
        icon: Wrench,
        text: "Injected structural cracks and sealed 350 linear metres of expansion joints.",
      },
      {
        icon: Shield,
        text: "Applied torch-on membranes on clubhouse roofs with 15-year manufacturer guarantees.",
      },
      {
        icon: Layers,
        text: "Completed full facade repaint with breathable elastomeric coatings for long-term durability.",
      },
    ],
    lastModified: "2023-11-21",
  },
  {
    slug: "kikuyu",
    name: "Kikuyu Lifestyle Centre",
    location: "Midrand, Gauteng",
    scope:
      "Industrial-grade corrosion protection and decorative coatings for the flagship lifestyle centre.",
    date: "2022 Q4",
    image: "/images/kikuyu-lifestyle.jpg",
    details: [
      {
        icon: Factory,
        text: "Abrasive blasted structural steel to SA 2.5 profile prior to zinc-rich priming.",
      },
      {
        icon: Layers,
        text: "Installed hygienic epoxy floor systems throughout the food court and back-of-house areas.",
      },
      {
        icon: CheckSquare,
        text: "Issued joint manufacturer + contractor guarantees covering corrosion and hygienic finishes.",
      },
    ],
    lastModified: "2023-02-14",
  },
  {
    slug: "greencreek",
    name: "Green Creek Eco-Estate",
    location: "Pretoria East, Gauteng",
    scope:
      "Eco-focused repaint and waterproofing programme covering residential blocks, guard houses and lifestyle amenities.",
    date: "2023 Q1",
    image: "/images/greencreek-estate.jpg",
    details: [
      {
        icon: Building,
        text: "Coated 18 multi-storey apartment blocks with low-VOC, high-cover masonry systems.",
      },
      {
        icon: Droplet,
        text: "Remediated chronic balcony leaks using liquid-applied membranes and new drainage detail.",
      },
      {
        icon: Shield,
        text: "Rope access teams sealed parapets and coping stones to protect the estate against driving rain.",
      },
    ],
    lastModified: "2023-08-30",
  },
];

export const featuredProjects = projectCaseStudies.map(
  ({ name, location, slug, image }) => ({
    name,
    location,
    slug,
    image,
  })
);

