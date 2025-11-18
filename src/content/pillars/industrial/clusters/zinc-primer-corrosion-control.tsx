import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaFinalStrip } from "@/components/cta-final-strip";
import { Factory, Shield } from "lucide-react";

export function ZincPrimerCorrosionControlArticle() {
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
              <Shield className="w-4 h-4" /> Corrosion Control
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight uppercase">
            The Science of Stopping Rust: Choosing the Right Zinc Primer
          </h1>
        </header>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Sacrificial vs. Barrier Protection
            </h2>
            <p>
              A zinc-rich primer is more than a coating—it is an engineered, sacrificial system.
              When the coating contains &gt;80% metallic zinc by weight, it becomes conductive and
              sacrifices itself before the structural steel corrodes. Barrier primers, by contrast,
              rely purely on film build to keep oxygen and moisture away from the substrate.
            </p>
            <p>
              Asset owners should evaluate the service environment: immersion, splash zones,
              or atmospheric C5 locations almost always warrant a zinc-rich epoxy or inorganic zinc
              primer beneath the build-coat system.
            </p>
          </section>

          <section className="bg-primary text-white p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-tertiary mb-3">
              Specification Checklist
            </h3>
            <ul className="list-disc list-inside space-y-2 text-base text-white">
              <li>Confirm the zinc loading (minimum 80% by weight in dry film).</li>
              <li>Verify compatibility between the zinc primer and intermediate coats.</li>
              <li>Measure surface profile (Sa 2.5 / 50–75μm) before priming.</li>
              <li>Document DFT readings for each layer to satisfy warranty requirements.</li>
            </ul>
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12"
            >
              <Link href="/industrial-painting">Request a plant coating audit &rarr;</Link>
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

