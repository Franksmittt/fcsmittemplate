import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaFinalStrip } from "@/components/cta-final-strip";
import { Shield, Factory } from "lucide-react";

export function OhsAccessLiabilityArticle() {
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
              <Shield className="w-4 h-4" /> OHS & Access
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight uppercase">
            OHS Compliance: Managing High-Access Liability on Industrial Sites
          </h1>
        </header>

        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">
              The Liability Chain
            </h2>
            <p>
              Even when work-at-height is outsourced, the facility owner retains residual liability.
              South African OHS Act requirements mandate that clients verify training, rescue plans,
              and equipment inspection records for every contractor. Failure to do so can invalidate
              insurance coverage after an incident.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Mandatory Documentation Checklist
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-6 font-semibold">
              <li>Letter of Good Standing and rope-access certifications.</li>
              <li>Method statements referencing SANS 50795.</li>
              <li>Daily toolbox talks logged and signed by all personnel.</li>
              <li>Emergency rescue drills recorded before work commences.</li>
            </ul>
          </section>

          <section className="bg-primary text-white p-6 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-tertiary mb-3">
              Building an Audit Trail
            </h3>
            <p>
              We supply a cloud-based compliance pack so facility managers can prove due diligence
              within minutes. Each job card logs anchor inspections, PPE serial numbers, and altitude
              permits, making third-party audits painless.
            </p>
            <Button
              asChild
              className="mt-4 bg-secondary hover:bg-[#4AD5E2] text-primary font-bold text-lg h-12"
            >
              <Link href="/access-solutions">Review our access protocols &rarr;</Link>
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

