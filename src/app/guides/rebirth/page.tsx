import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: "TNT Incremental Rebirth Guide - Multipliers & Reset Timing",
  description: "Learn how Rebirth fits into TNT Incremental progression, permanent multipliers, upgrades, Runes, and Ascend planning without fake formulas.",
  alternates: { canonical: `${siteConfig.domain}/guides/rebirth` }
};

export default function RebirthGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Rebirth", href: "/guides/rebirth" }]} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Rebirth", href: "/guides/rebirth" }]} />
      <PageIntro eyebrow="Permanent multipliers" title="TNT Incremental Rebirth Guide" description="The official Roblox page confirms Rebirth resets for permanent multipliers. This guide focuses on when to think about resetting, how upgrades and Runes affect planning, and what values stay held until tested." />
      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="content-card">
          <SectionHeader eyebrow="Confirmed" title="What Rebirth does" copy="It is a reset layer for permanent multipliers." />
        </article>
        <article className="content-card">
          <SectionHeader eyebrow="Held values" title="What this guide does not fake" copy="Exact Rebirth timing, costs, and multiplier values stay out of the guide until they are backed by testing or creator-owned notes." />
        </article>
      </section>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="button-secondary" href="/calculator">Estimate manually</Link>
        <Link className="button-secondary" href="/guides/upgrade-tree">Upgrade Tree guide</Link>
        <Link className="button-secondary" href="/wiki/runes">Runes wiki</Link>
        <Link className="button-secondary" href="/guides/ascend">Read Ascend guide</Link>
        <Link className="button-secondary" href="/codes">Get Release code</Link>
      </div>
    </main>
  );
}
