import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaFinalStrip } from "@/components/cta-final-strip";
import { Wrench, BookOpen, Clock, Users, Layers } from "lucide-react";

export function ConcreteSpallingRepairArticle() {
  return (
    <div className="bg-gray-50 pt-32 pb-24 text-primary min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-12 border-b border-gray-300 pb-6">
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
            <Link
              href="/blog/structural-remediation"
              className="hover:text-secondary font-semibold uppercase"
            >
              <BookOpen className="w-4 h-4 mr-1 inline-block" /> Structural Remediation
            </Link>
            <span>|</span>
            <span className="flex items-center space-x-1">
              <Clock className="w-4 h-4" /> 10 Min Read
            </span>
            <span className="flex items-center space-x-1">
              <Users className="w-4 h-4" /> Maverick Technical Team
            </span>
          </div>

          <h1 className="text-5xl font-extrabold text-primary leading-tight uppercase mb-4">
            The Core Problem: Why Painting Over Concrete Spalling Fails.
          </h1>
        </header>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">
              The Failure of Cosmetic Patches
            </h2>
            <p>
              Concrete spalling (often called &quot;concrete cancer&quot;) is not a surface flaw; it&apos;s a symptom of
              internal structural degradation. It occurs when moisture and carbon dioxide penetrate the concrete,
              causing the reinforcing steel (rebar) to rust and expand, exerting immense pressure that pops the
              concrete off the surface.
            </p>
            <p>
              Painting over this defect or using non-structural plaster patches only provides a temporary, cosmetic fix.
              The underlying corrosion process continues, and the patched area will fail again, often within 12 to 18 months,
              leading to costly recurring repairs.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">
              The Four-Phase Structural Solution
            </h2>
            <p>
              A permanent repair must follow a strict engineering protocol that addresses the steel corrosion and restores
              the concrete&apos;s alkalinity. Our four-phase process includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-6 font-semibold">
              <li className="flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-secondary" /> Defect removal and rebar cleaning to a bright metal finish.
              </li>
              <li className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-secondary" /> Passivation of the rebar (applying an anti-corrosive coating) to halt the rusting process.
              </li>
              <li className="flex items-center space-x-2">
                <Wrench className="w-5 h-5 text-secondary" /> Application of polymer-modified structural mortar to replace the spalled concrete.
              </li>
              <li className="flex items-center space-x-2">
                <Layers className="w-5 h-5 text-secondary" /> Final application of a breathable, elastomeric coating to prevent future moisture ingress.
              </li>
            </ul>
          </section>

          <section className="bg-primary text-white p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-tertiary mb-3">
              Key Takeaway for Trustees &amp; Developers
            </h3>
            <p className="text-lg">
              Always demand an assessment that includes moisture readings and hammer testing. A true structural solution is an{" "}
              <strong>investment</strong> that reduces long-term liability, whereas a patch is merely an <strong>expense</strong>.
            </p>
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12"
            >
              <Link href="/structural-repairs">
                View Our Structural Repair Service Page &rarr;
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

