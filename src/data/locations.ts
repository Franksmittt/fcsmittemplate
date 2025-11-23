export type ServiceLocation = {
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
