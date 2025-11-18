import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaFinalStrip } from "@/components/cta-final-strip";
import { Factory, TimerReset } from "lucide-react";

export function FastCuringFloorsArticle() {
  return (
    <div className="bg-gray-50 pt-32 pb-24 text-primary min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-12 border-b border-gray-200 pb-6">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
            <Link
              href="/blog/industrial"
              className="hover:text-secondary font-semibold uppercase"
            >
              <Factory className="w-4 h-4 inline-block mr-1" />
              Industrial Guides
            </Link>
            <span>|</span>
            <span className="flex items-center gap-1">
              <TimerReset className="w-4 h-4" /> Fast-Curing Systems
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight uppercase">
            Minimizing Downtime: Fast-Curing Floors for Food Production
          </h1>
        </header>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Why Polyurethane Screeds Beat Epoxy in Hygienic Zones
            </h2>
            <p>
              Food processors cannot afford multi-day shutdowns. Polyurethane cement screeds deliver
              chemical resistance, steam-clean tolerance, and walk-on readiness in as little as 6 hours.
              That combination makes them ideal for cook lines, blast freezers, and wash bays where HACCP compliance
              is non-negotiable.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Program for Zero Production Interruptions
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-6 font-semibold">
              <li>Phase work by aisle or zone and use mobile hoarding.</li>
              <li>Specify slip-resistant top coats (R11+) without trapping debris.</li>
              <li>Coordinate QA sign-offs with swab testing before reopening the line.</li>
            </ul>
          </section>

          <section className="bg-primary text-white p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-tertiary mb-3">
              Implementation Snapshot
            </h3>
            <p>
              A recent retrofit swapped 1,200 m² of delaminated epoxy with 9mm PU screed, executed over
              a single weekend shift. Production resumed Monday morning with documented temperature logs
              and cure certificates for the client&apos;s auditors.
            </p>
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12"
            >
              <Link href="/coatings/hygienic-food-grade-flooring">
                Plan my floor replacement &rarr;
              </Link>
            </Button>
          </section>
        </div>
      </div>

      <div className="mt-20">
        <CtaFinalStrip />
      </div>
    </div>
  );
}

