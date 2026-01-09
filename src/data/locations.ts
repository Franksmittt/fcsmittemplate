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
  {
    slug: "benoni",
    name: "Benoni",
    metaTitle: "Benoni Painting Contractors | Structural Repairs & Waterproofing",
    metaDescription: "Expert painting and waterproofing services in Benoni. Serving Farrarmere, Rynfield, Lakefield, Northmead, and Eastlands. Owner-supervised quality guaranteed.",
    landmarks: ["Farrarmere", "Rynfield", "Lakefield", "Northmead", "Eastlands"],
  },
  {
    slug: "kempton-park",
    name: "Kempton Park",
    metaTitle: "Kempton Park Industrial Painting & Coating Specialists",
    metaDescription: "Professional painting contractors in Kempton Park. We serve Allen Grove, Aston Manor, Birch Acres, Glen Marais, and surrounding industrial areas.",
    landmarks: ["Allen Grove", "Aston Manor", "Birch Acres", "Glen Marais"],
  },
  {
    slug: "alberton",
    name: "Alberton",
    metaTitle: "Alberton Painting & Waterproofing | Estate Specialists",
    metaDescription: "Premium painting contractors for Alberton estates and commercial properties. Expert services in Meyersdal, Brackenhurst, Randhart, and surrounding areas.",
    landmarks: ["Meyersdal Eco Estate", "Brackenhurst", "Randhart"],
  },
  {
    slug: "johannesburg-north",
    name: "Johannesburg North",
    metaTitle: "Johannesburg North Painting Contractors | Melville & Rosebank",
    metaDescription: "Specialized painting and waterproofing services in Johannesburg North. Serving Melville, Rosebank, Parktown, and surrounding affluent suburbs.",
    landmarks: ["Melville", "Rosebank", "Parktown", "Parkhurst"],
  },
  {
    slug: "serengeti-estate",
    name: "Serengeti Golf & Wildlife Estate",
    metaTitle: "Serengeti Estate Painters | HOA Compliant Painting Services",
    metaDescription: "Fully compliant painting contractors for Serengeti Golf & Wildlife Estate. We understand HOA guidelines and use approved color palettes and finishes.",
    landmarks: ["Serengeti Golf Course", "Wildlife Reserve"],
  },
  {
    slug: "ebotse-estate",
    name: "Ebotse Golf Estate",
    metaTitle: "Ebotse Estate Painting Contractors | Luxury Estate Specialists",
    metaDescription: "Premium painting and waterproofing services for Ebotse Golf Estate. Expert contractors familiar with estate security protocols and architectural guidelines.",
    landmarks: ["Ebotse Golf Course", "Luxury Estates"],
  },
  {
    slug: "meyersdal-estate",
    name: "Meyersdal Eco Estate",
    metaTitle: "Meyersdal Estate Painters | Eco-Friendly Coating Solutions",
    metaDescription: "Specialized painting contractors for Meyersdal Eco Estate. We use low-VOC paints and eco-friendly coatings compliant with estate environmental standards.",
    landmarks: ["Meyersdal Eco Estate", "Nature Reserve"],
  },
];

export function getLocation(slug: string) {
  return serviceLocations.find((loc) => loc.slug === slug);
}
