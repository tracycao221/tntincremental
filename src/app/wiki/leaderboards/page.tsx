import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: "TNT Incremental Leaderboards Wiki - Progression Status",
  description: "TNT Incremental Leaderboards are confirmed by the official page. Categories, scoring rules, rewards, Rebirth, Runes, and Ascend impact stay held until tested.",
  alternates: { canonical: `${siteConfig.domain}/wiki/leaderboards` }
};

export default function LeaderboardsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Leaderboards", href: "/wiki/leaderboards" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Leaderboards", href: "/wiki/leaderboards" }]} />
      <PageIntro eyebrow="Confirmed mechanic" title="TNT Incremental Leaderboards Wiki" description="The official page confirms Leaderboards. Categories, scoring, rewards, and how Rebirth, Runes, upgrades, or Ascend affect rankings stay held until tested." />
      <section className="mt-10">
        <SectionHeader eyebrow="Status" title="What stays held" />
        <div className="content-card mt-6">
          <p className="text-white/70">Before publishing leaderboard strategy, verify categories, reset cadence, scoring rules and whether rewards exist.</p>
        </div>
      </section>
      <section className="mt-10">
        <SectionHeader
          eyebrow="Progression context"
          title="Pages that may affect leaderboard planning"
          copy="Leaderboard strategy should wait for scoring rules, but these pages cover the confirmed systems likely involved in progression."
        />
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="button-secondary" href="/guides/rebirth">Rebirth guide</Link>
          <Link className="button-secondary" href="/wiki/runes">Runes wiki</Link>
          <Link className="button-secondary" href="/guides/ascend">Ascend guide</Link>
          <Link className="button-secondary" href="/tier-list">Ranking status</Link>
        </div>
      </section>
    </main>
  );
}
