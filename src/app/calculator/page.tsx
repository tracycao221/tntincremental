import type { Metadata } from "next";
import Link from "next/link";
import { CalculatorTool } from "@/components/tools/CalculatorTool";
import { faqs, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd, SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Calculator - Cash, Upgrades, Rebirth & Ascend`,
  description: `Use a manual ${siteConfig.gameName} calculator for Cash goals, upgrade targets, Rebirth timing, Rune planning, and Ascend prep. No fake formulas.`,
  alternates: { canonical: `${siteConfig.domain}/calculator` },
  openGraph: {
    title: `${siteConfig.gameName} Calculator - Cash & Rebirth Planner`,
    description: `Manual ${siteConfig.gameName} planner for Cash, upgrades, Runes, Rebirth, and Ascend.`,
    url: `${siteConfig.domain}/calculator`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Calculator - Cash & Rebirth Planner`,
    description: `Manual planner for ${siteConfig.gameName} Cash, upgrades, Runes, Rebirth, and Ascend.`,
    images: ["/opengraph-image"]
  }
};

export default function CalculatorPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Calculator", href: "/calculator" }]} />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd items={faqs.calculator} />
      <Breadcrumbs items={[{ label: "Calculator", href: "/calculator" }]} />
      <PageIntro
        eyebrow="Primary tool"
        title={`${siteConfig.gameName} Calculator`}
        description="Plan TNT Incremental Cash goals, upgrade targets, Rebirth timing, Rune choices, and Ascend prep with your own inputs. The tool stays manual because official formulas and values are not published here as facts."
      />
      <section className="mt-10">
        <CalculatorTool />
      </section>
      <section className="mt-10">
        <SectionHeader
          eyebrow="Progression links"
          title="Use the calculator with the guide pages"
          copy="Keep the tool next to source-safe pages for codes, upgrades, Rebirth, Runes, and Ascend so manual estimates stay grounded."
        />
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="button-secondary" href="/codes">Get Release code</Link>
          <Link className="button-secondary" href="/guides/upgrade-tree">Upgrade Tree guide</Link>
          <Link className="button-secondary" href="/guides/rebirth">Rebirth guide</Link>
          <Link className="button-secondary" href="/wiki/runes">Runes wiki</Link>
          <Link className="button-secondary" href="/guides/ascend">Ascend guide</Link>
        </div>
      </section>
    </main>
  );
}
