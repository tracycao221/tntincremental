import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: "TNT Incremental Upgrade Tree Guide (June 2026)",
  description: "Understand TNT Incremental Tree Crystals and the Upgrade Tree without fake node values or upgrade rankings.",
  alternates: { canonical: `${siteConfig.domain}/guides/upgrade-tree` }
};

export default function UpgradeTreeGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Upgrade Tree", href: "/guides/upgrade-tree" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Upgrade Tree", href: "/guides/upgrade-tree" }]} />
      <PageIntro eyebrow="Tree Crystals" title="TNT Incremental Upgrade Tree Guide" description="The official page confirms an Upgrade Tree where Tree Crystals buy global boosts. Node list, cost and boost values still need verification." />
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="content-card">
          <SectionHeader eyebrow="Confirmed" title="Upgrade Tree exists" copy="Tree Crystals and global boosts are official-page mechanics." />
        </article>
        <article className="content-card">
          <SectionHeader eyebrow="Needs verification" title="Exact priorities are held" copy="No hard best-upgrade claims until node costs and boost values are verified." />
        </article>
      </section>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="button-secondary" href="/calculator">Plan a target cost</Link>
        <Link className="button-secondary" href="/tier-list">View ranking status</Link>
      </div>
    </main>
  );
}
