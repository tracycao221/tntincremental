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
    description: "Basic, Fire, Gem and Mining runes are confirmed by the official page. Effects, odds, rarity and best-use claims are held until tested."
  },
  {
    title: "Potions",
    href: "/wiki/potions",
    eyebrow: "Code reward",
    description: "The official Release code mentions free Potions. Potion types, durations, effects and stacking notes stay source-labelled."
  },
  {
    title: "Leaderboards",
    href: "/wiki/leaderboards",
    eyebrow: "Progression",
    description: "Leaderboards are confirmed by the official page. Categories, scoring rules, and reward claims are held for source-backed checks."
  },
  {
    title: "Upgrade Tree",
    href: "/guides/upgrade-tree",
    eyebrow: "Guide",
    description: "Tree Crystals and global boosts are confirmed. Node values and priority rankings stay held until tested."
  }
];

export const metadata: Metadata = {
  title: "TNT Incremental Wiki - Runes, Potions, Rebirth & Ascend",
  description: "Open the TNT Incremental wiki for Release code notes, free Potions, confirmed Runes, upgrades, Rebirth, Ascend, Leaderboards, and source-labelled data gaps.",
  alternates: { canonical: `${siteConfig.domain}/wiki` },
  openGraph: {
    title: "TNT Incremental Wiki - Runes, Potions, Rebirth & Ascend",
    description: "Confirmed TNT Incremental wiki notes for Release code, free Potions, Runes, upgrades, Rebirth, and Ascend.",
    url: `${siteConfig.domain}/wiki`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "TNT Incremental Wiki - Runes, Potions, Rebirth & Ascend",
    description: "Wiki notes for TNT Incremental Release code, free Potions, Runes, upgrades, Rebirth, and Ascend.",
    images: ["/opengraph-image"]
  }
};

export default function WikiPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }]} />
      <PageIntro
        eyebrow="Source-aware wiki"
        title="TNT Incremental Wiki"
        description="Use this hub for confirmed TNT Incremental mechanics: Release code notes, upgrades, Rebirth, Upgrade Tree, Runes, Ascend, Potions, and Leaderboards. Official source facts come from the OG Incrementals Roblox page only."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Game topics"
          title="Confirmed mechanics and source-labelled notes"
          copy="Every topic separates confirmed mechanics from values that need in-game testing or creator-owned source notes."
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
      <section className="mt-10">
        <SectionHeader
          eyebrow="Guide routes"
          title="Go from wiki notes to progression help"
          copy="Use these links when a wiki topic turns into a planning question about codes, upgrades, Rebirth, Runes, or Ascend."
        />
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="button-secondary" href="/codes">Release code for free Potions</Link>
          <Link className="button-secondary" href="/guides">TNT Incremental guide after codes</Link>
          <Link className="button-secondary" href="/guides/rebirth">Rebirth guide</Link>
          <Link className="button-secondary" href="/guides/ascend">Ascend guide</Link>
          <Link className="button-secondary" href="/calculator">Cash and Rebirth calculator</Link>
        </div>
      </section>
    </main>
  );
}
