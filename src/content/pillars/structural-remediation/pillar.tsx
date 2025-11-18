import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaFinalStrip } from "@/components/cta-final-strip";
import { Layers, ShieldCheck, Wrench } from "lucide-react";

export function StructuralRemediationPillarPage() {
  return (
    <div className="bg-primary pt-24 text-white min-h-screen">
      <section className="relative py-24 md:py-32 px-4 bg-gray-900 border-b-4 border-secondary">
        <div className="max-w-6xl mx-auto">
          <Layers className="w-12 h-12 text-tertiary mb-4" />
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Structural Remediation • Concrete Restoration
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase max-w-4xl">
            Permanent Repairs for Concrete Spalling &amp; Structural Defects.
          </h1>
          <p className="text-xl mt-6 max-w-3xl text-gray-300">
            Engineering-led playbooks covering defect diagnostics, rebar passivation, polymer-modified mortars,
            and the protective coatings that lock in the repair. Designed for trustees, developers, and consulting engineers.
          </p>

          <Button
            asChild
            className="mt-10 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12 shadow-2xl transform hover:scale-105"
          >
            <Link href="/structural-repairs">Book a remediation assessment &rarr;</Link>
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-primary">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
          <article className="p-8 bg-gray-900 rounded-2xl border border-white/10">
            <h2 className="text-3xl font-extrabold uppercase mb-4 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-tertiary" /> Engineering Discipline
            </h2>
            <p className="text-gray-300">
              Every guide inside this pillar maps back to a tested inspection &amp; repair workflow:
              hammer testing, chloride profiling, structural mortar selection, and QA documentation that satisfies insurers.
            </p>
          </article>
          <article className="p-8 bg-gray-900 rounded-2xl border border-white/10">
            <h2 className="text-3xl font-extrabold uppercase mb-4 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-tertiary" /> Field-Proven Specs
            </h2>
            <p className="text-gray-300">
              Downloadable checklists and scopes ensure the site crew follows the exact same steps:
              defect breakout, steel prep, passivation, rebuild, and breathable coatings.
            </p>
          </article>
        </div>
      </section>

      <CtaFinalStrip />
    </div>
  );
}

