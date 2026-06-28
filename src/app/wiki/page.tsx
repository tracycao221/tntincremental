import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const topics = [
  {
    title: "Runes",
    href: "/wiki/runes",
    eyebrow: "Confirmed mechanic",
    description: "Basic, Fire, Gem and Mining runes are confirmed by the official page. Effects and odds still need verification."
  },
  {
    title: "Potions",
    href: "/wiki/potions",
    eyebrow: "Code reward",
    description: "The official Release code mentions free Potions. Potion types and effects still need verification."
  },
  {
    title: "Leaderboards",
    href: "/wiki/leaderboards",
    eyebrow: "Progression",
    description: "Leaderboards are confirmed by the official page. Categories and scoring rules still need verification."
  },
  {
    title: "Upgrade Tree",
    href: "/guides/upgrade-tree",
    eyebrow: "Guide",
    description: "Tree Crystals and global boosts are confirmed. Node values and priorities still need data."
  }
];

export const metadata: Metadata = {
  title: "TNT Incremental Wiki (June 2026)",
  description: "TNT Incremental wiki hub for confirmed mechanics, runes, potions, leaderboards and source-labelled data gaps.",
  alternates: { canonical: `${siteConfig.domain}/wiki` }
};

export default function WikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <PageIntro
        eyebrow="Source-aware wiki"
        title="TNT Incremental Wiki"
        description="Use this hub for confirmed TNT Incremental mechanics and visible data gaps. Official source facts come from the OG Incrementals Roblox page only."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Game topics"
          title="Confirmed mechanics and pages to verify"
          copy="Every topic separates what is confirmed from what still needs a source-backed value."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {topics.map((card) => (
            <Link key={card.title} href={card.href} className="content-card">
              <span className="mini-label">{card.eyebrow}</span>
              <h2 className="mt-3 text-xl font-bold text-white">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/65">{card.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
