import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: "TNT Incremental Ascend Guide (June 2026)",
  description: "Plan around TNT Incremental Ascend with source-safe notes. Requirements and boost values still need verification.",
  alternates: { canonical: `${siteConfig.domain}/guides/ascend` }
};

export default function AscendGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Ascend", href: "/guides/ascend" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Ascend", href: "/guides/ascend" }]} />
      <PageIntro eyebrow="Advanced reset" title="TNT Incremental Ascend Guide" description="The official page confirms Ascend resets progress for Big Rune and Cash boosts. Requirements, boost amounts and best timing need verification." />
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="content-card">
          <SectionHeader eyebrow="Confirmed" title="Ascend exists" copy="Ascend is an advanced reset connected to Big Rune and Cash boosts." />
        </article>
        <article className="content-card">
          <SectionHeader eyebrow="Needs verification" title="Exact values are held" copy="Do not claim requirements, boost values or timing thresholds until source-backed data exists." />
        </article>
      </section>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="button-secondary" href="/calculator">Estimate manually</Link>
        <Link className="button-secondary" href="/wiki/runes">Check rune notes</Link>
      </div>
    </main>
  );
}
