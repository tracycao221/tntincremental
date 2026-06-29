import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: "TNT Incremental Leaderboards Wiki (June 2026)",
  description: "TNT Incremental Leaderboards are confirmed by the official page. Categories and scoring rules stay held until tested.",
  alternates: { canonical: `${siteConfig.domain}/wiki/leaderboards` }
};

export default function LeaderboardsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Leaderboards", href: "/wiki/leaderboards" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Leaderboards", href: "/wiki/leaderboards" }]} />
      <PageIntro eyebrow="Confirmed mechanic" title="TNT Incremental Leaderboards" description="The official page confirms Leaderboards. Categories, scoring and rewards stay held until tested." />
      <section className="mt-10">
        <SectionHeader eyebrow="Status" title="What stays held" />
        <div className="content-card mt-6">
          <p className="text-white/70">Before publishing leaderboard strategy, verify categories, reset cadence, scoring rules and whether rewards exist.</p>
        </div>
      </section>
    </main>
  );
}
