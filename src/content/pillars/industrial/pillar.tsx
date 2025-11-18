import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaFinalStrip } from "@/components/cta-final-strip";
import { Factory, Shield, Wrench } from "lucide-react";

const FEATURED = [
  {
    title: "The Science of Stopping Rust: Choosing the Right Zinc Primer",
    description:
      "A technical guide to sacrificial and barrier protection systems for structural steel and exposed plant assets.",
    icon: Wrench,
    href: "/blog/industrial/zinc-primer-corrosion-control",
  },
  {
    title: "Minimizing Downtime: Fast-Curing Floors for Food Production",
    description:
      "How fast-curing polyurethane screeds minimize disruption and ensure HACCP compliance in processing plants.",
    icon: Factory,
    href: "/blog/industrial/fast-curing-floors",
  },
  {
    title: "OHS Compliance: Managing High-Access Liability on Industrial Sites",
    description:
      "A checklist for facility managers to ensure contractors meet all OHS requirements for work performed at height.",
    icon: Shield,
    href: "/blog/industrial/ohs-access-liability",
  },
];

export function IndustrialPillarPage() {
  return (
    <div className="bg-primary pt-24 text-white min-h-screen">
      <section className="relative py-24 md:py-32 px-4 bg-gray-900 border-b-4 border-secondary">
        <div className="max-w-7xl mx-auto">
          <Factory className="w-12 h-12 text-tertiary mb-4" />
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-5xl">
            Industrial Asset Protection Insights.
          </h1>
          <p className="text-2xl font-light mt-6 max-w-4xl text-gray-400">
            Technical articles dedicated to <strong>corrosion control, high-performance coatings</strong>,
            floor systems, and structural preservation for manufacturing assets.
          </p>

          <Button
            asChild
            className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-14 shadow-2xl transform hover:scale-105"
          >
            <Link href="/contact">Request a Technical Consultation &rarr;</Link>
          </Button>
        </div>
      </section>

      <section className="py-24 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16">
            <h2 className="text-4xl font-extrabold uppercase mb-3">
              Featured Technical Guides
            </h2>
            <p className="text-lg text-gray-400 font-light">
              Deep-dive analysis on the highest-risk areas of industrial asset maintenance.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="p-8 bg-gray-900 rounded-xl shadow-xl border-t-4 border-tertiary transition-all duration-300 transform hover:scale-[1.03] hover:shadow-secondary/50 group"
              >
                <article.icon className="w-8 h-8 text-secondary mb-4 group-hover:text-tertiary" />
                <h3 className="text-xl font-bold uppercase mb-2 text-white leading-snug">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm">{article.description}</p>
                <span className="text-tertiary font-bold mt-4 block group-hover:text-white transition-colors">
                  Read Article &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaFinalStrip />
    </div>
  );
}

