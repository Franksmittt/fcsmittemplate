export type SocialProfiles = {
  linkedin: string;
  facebook: string;
  instagram?: string;
  youtube?: string;
};

export type SiteAddress = {
  street: string;
  suburb: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  latitude?: number;
  longitude?: number;
};

export const siteConfig = {
  name: "Maverick Painting Contractors",
  shortName: "Maverick Painting",
  legalName: "Maverick Painting Contractors",
  slogan: "Owner supervised structural repairs, coatings & waterproofing",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.maverickpainting.co.za",
  description:
    "Owner supervised painting contractors in Gauteng specialising in structural repairs, waterproofing, industrial coatings and independent QA for body corporates, developers and high-end homeowners.",
  keywords: [
    "painting contractors gauteng",
    "commercial painting johannesburg",
    "industrial coatings south africa",
    "body corporate waterproofing",
    "structural repairs maverick painting",
    "rope access painters gauteng",
    "independent qa coating inspection",
  ],
  email: "maverickpainters1984@gmail.com",
  phoneNumber: "+27 82 627 7082",
  whatsapp: "https://wa.me/27826277082",
  social: {
    linkedin: "https://www.linkedin.com/company/maverickpainting",
    facebook: "https://www.facebook.com/maverickpaintingcontractors",
    instagram: "https://www.instagram.com/maverickpainting",
  } satisfies SocialProfiles,
  address: {
    street: "15 Highveld Techno Park",
    suburb: "Centurion",
    city: "Pretoria",
    region: "Gauteng",
    postalCode: "0157",
    country: "ZA",
    latitude: -25.89052,
    longitude: 28.18904,
  } satisfies SiteAddress,
  serviceAreas: [
    "Johannesburg",
    "Pretoria",
    "Midrand",
    "Centurion",
    "Sandton",
    "Benoni",
    "East Rand",
  ],
  primaryPages: [
    "/",
    "/about-us",
    "/services",
    "/solutions/for-body-corporates",
    "/solutions/for-developers",
    "/solutions/for-homeowners",
    "/painting-services",
    "/painting/body-corporate-painting",
    "/painting/commercial-painting",
    "/painting/high-volume-commercial-painting",
    "/painting/industrial-painting",
    "/waterproofing-services",
    "/damp-proofing-services",
    "/access-solutions",
    "/specialized-coatings",
    "/structural-repairs",
    "/coatings/hygienic-food-grade-flooring",
    "/our-process-independent-qa",
    "/projects",
    "/blog",
    "/blog/industrial",
    "/blog/waterproofing",
    "/blog/waterproofing/leaking-balcony-fixes",
    "/blog/waterproofing/liquid-vs-torch-on",
    "/blog/waterproofing/rising-damp-guide",
    "/blog/structural-remediation",
    "/privacy",
    "/terms",
    "/contact",
  ],
};

export const defaultChangeFrequency = "monthly";

