import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaFinalStrip } from "@/components/cta-final-strip";
import { Shield, BookOpen, Droplet, Wrench } from "lucide-react";

export function LeakingBalconyFixesArticle() {
  return (
    <div className="bg-gray-50 pt-32 pb-24 text-primary min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-12 border-b border-gray-300 pb-6">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
            <Link
              href="/blog/waterproofing"
              className="hover:text-secondary font-semibold uppercase"
            >
              <BookOpen className="w-4 h-4 mr-1 inline-block" /> Waterproofing
              Guides
            </Link>
            <span>|</span>
            <span className="flex items-center space-x-1">
              <Droplet className="w-4 h-4" /> Balcony Remediation
            </span>
          </div>

          <h1 className="text-5xl font-extrabold text-primary leading-tight uppercase mb-4">
            The Low-Disruption Fix: Leaking Balconies Without Tile Removal.
          </h1>
        </header>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">
              The Balcony Leak Problem: Usually the Grout, Not the Slab
            </h2>
            <p>
              In many cases, water ingress in a tiled balcony is not caused by a
              failed slab, but by a <strong>failed or cracked grout and joint
              sealant system</strong>. Water penetrates these joints, saturates
              the screed beneath the tiles, and then migrates laterally until it
              reaches the substrate below or the room below. The key is to stop
              the water at the surface without the destructive, expensive process
              of removing all the tiles.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Low-Disruption Remediation Process
            </h2>
            <p>
              We specialize in targeted, low-disruption systems that save time,
              money, and most importantly, the original aesthetics of the balcony.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-6 font-semibold">
              <li className="flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-secondary" />{" "}
                <strong>Grout Removal:</strong> Carefully remove old, cracked, or
                compromised grout lines.
              </li>
              <li className="flex items-center space-x-2">
                <Droplet className="w-5 h-5 text-secondary" />{" "}
                <strong>Injection/Sealing:</strong> Injecting specialized flexible
                epoxy sealants into critical joints and re-grouting with
                high-performance, water-repellent grout.
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-secondary" />{" "}
                <strong>Final Finish:</strong> Applying an invisible, penetrating
                sealer over the entire tile surface to reduce porosity.
              </li>
            </ul>
            <p>
              This method minimizes disruption to residents and is significantly
              faster and more cost-effective than full demolition and
              re-waterproofing.
            </p>
          </section>

          <section className="bg-primary text-white p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-tertiary mb-3">
              A Note for Body Corporates
            </h3>
            <p className="text-lg">
              When dealing with multiple balconies, the low-disruption fix is
              essential to manage budgets and resident inconvenience. Always
              prioritize a solution that <strong>guarantees against water
              migration</strong> into the screed layer.
            </p>
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12"
            >
              <Link href="/waterproofing-services">
                View All Our Guaranteed Waterproofing Systems &rarr;
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

