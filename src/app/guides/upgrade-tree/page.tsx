import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: "TNT Incremental Upgrades Guide - Upgrade Tree & Tree Crystals",
  description: "Understand TNT Incremental upgrades, Tree Crystals, Upgrade Tree boosts, Rebirth planning, Runes, and Ascend prep without fake node values.",
  alternates: { canonical: `${siteConfig.domain}/guides/upgrade-tree` }
};

export default function UpgradeTreeGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Upgrade Tree", href: "/guides/upgrade-tree" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Upgrade Tree", href: "/guides/upgrade-tree" }]} />
      <PageIntro eyebrow="Tree Crystals" title="TNT Incremental Upgrades and Upgrade Tree Guide" description="The official page confirms an Upgrade Tree where Tree Crystals buy global boosts. This guide connects upgrades with Cash, Rebirth, Runes, and Ascend while holding exact node costs and boost values for testing." />
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="content-card">
          <SectionHeader eyebrow="Confirmed" title="Upgrade Tree exists" copy="Tree Crystals and global boosts are official-page mechanics." />
        </article>
        <article className="content-card">
          <SectionHeader eyebrow="Held ranking" title="Exact priorities are held" copy="No hard best-upgrade claims are published until node costs and boost values are tested." />
        </article>
      </section>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="button-secondary" href="/calculator">Plan a target cost</Link>
        <Link className="button-secondary" href="/guides/rebirth">Rebirth guide</Link>
        <Link className="button-secondary" href="/wiki/runes">Runes wiki</Link>
        <Link className="button-secondary" href="/guides/ascend">Ascend guide</Link>
        <Link className="button-secondary" href="/tier-list">View ranking status</Link>
      </div>
    </main>
  );
}
