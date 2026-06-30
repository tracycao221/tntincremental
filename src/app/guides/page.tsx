import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const guides = [
  {
    title: "Rebirth Guide",
    href: "/guides/rebirth",
    eyebrow: "Permanent multipliers",
    description: "Learn the reset layer and how to think about timing without fake multiplier formulas."
  },
  {
    title: "Upgrade Tree Guide",
    href: "/guides/upgrade-tree",
    eyebrow: "Tree Crystals",
    description: "Track what is known about global boosts while exact node values remain held for testing."
  },
  {
    title: "Ascend Guide",
    href: "/guides/ascend",
    eyebrow: "Big Rune and Cash boosts",
    description: "Plan around Ascend safely without inventing requirements or boost values."
  }
];

export const metadata: Metadata = {
  title: "TNT Incremental Guide - Upgrades, Rebirth, Runes & Ascend",
  description: "TNT Incremental guide hub for Drop TNT, Cash, upgrades, Rebirth, Upgrade Tree, Runes, Ascend, codes, and source-safe progression planning.",
  alternates: { canonical: `${siteConfig.domain}/guides` },
  openGraph: {
    title: "TNT Incremental Guide - Upgrades, Rebirth, Runes & Ascend",
    description: "Source-safe TNT Incremental guide hub for codes, upgrades, Rebirth, Upgrade Tree, Runes, and Ascend.",
    url: `${siteConfig.domain}/guides`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "TNT Incremental Guide - Upgrades, Rebirth, Runes & Ascend",
    description: "Guide hub for TNT Incremental codes, upgrades, Rebirth, Runes, and Ascend.",
    images: ["/opengraph-image"]
  }
};

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }]} />
      <PageIntro
        eyebrow="Guide hub"
        title="TNT Incremental Guide Hub"
        description="Use this TNT Incremental guide hub for the confirmed progression loop: Drop TNT, earn Cash, buy upgrades, Rebirth, use the Upgrade Tree, roll Runes, and plan Ascend."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Recommended guides"
          title="Progression guides with source boundaries"
          copy="Each guide separates official-page facts from formulas, costs, effects, and timing advice that need player testing."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.title} href={guide.href} className="content-card">
              <span className="mini-label">{guide.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <SectionHeader
          eyebrow="Quick routes"
          title="Codes, wiki, runes, and calculator"
          copy="These pages answer the most common next questions after the guide: active code status, rune names, held values, and manual planning."
        />
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="button-secondary" href="/codes">Get Release code</Link>
          <Link className="button-secondary" href="/wiki">Open wiki</Link>
          <Link className="button-secondary" href="/wiki/runes">Runes wiki</Link>
          <Link className="button-secondary" href="/calculator">Use calculator</Link>
          <Link className="button-secondary" href="/sources">Check sources</Link>
        </div>
      </section>
    </main>
  );
}
