import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const checkedDate = "June 28, 2026";

const buildFaqSchema = [
  {
    q: "Does TNT Incremental have a final tier list?",
    a: "This page is a ranking status page, not a fake final tier list. Basic, Fire, Gem, and Mining runes are confirmed, while exact effects and odds are held until tested."
  },
  {
    q: "Why are hard S/A/B tiers held?",
    a: "The public sources reviewed here do not provide enough rune effects, upgrade values, Rebirth formulas, or Ascend boost values for fair S/A/B ranking."
  },
  {
    q: "What can be ranked safely now?",
    a: "The page can track confirmed mechanics and show what data is still missing, but it should not claim exact best runes or upgrades."
  },
  {
    q: "What affects future TNT Incremental rankings?",
    a: "Future rankings need tested Rune effects, Upgrade Tree values, Rebirth formulas, Ascend boost values, and how each choice affects Cash progression."
  }
];

const trackedItems = [
  {
    name: "Basic Rune",
    type: "Rune",
    confidence: "Source-backed existence",
    status: "Held for effect data",
    source: "Official source names Basic runes.",
    nextCheck: "Rank after effect, odds, rarity and best-use data is tested."
  },
  {
    name: "Fire Rune",
    type: "Rune",
    confidence: "Source-backed existence",
    status: "Held for effect data",
    source: "Official source names Fire runes.",
    nextCheck: "Rank after effect, odds, rarity and best-use data is tested."
  },
  {
    name: "Gem Rune",
    type: "Rune",
    confidence: "Source-backed existence",
    status: "Held for effect data",
    source: "Official source names Gem runes.",
    nextCheck: "Rank after effect, odds, rarity and best-use data is tested."
  },
  {
    name: "Mining Rune",
    type: "Rune",
    confidence: "Source-backed existence",
    status: "Held for effect data",
    source: "Official source names Mining runes.",
    nextCheck: "Rank after effect, odds, rarity and best-use data is tested."
  },
  {
    name: "Upgrade Tree priorities",
    type: "Progression choice",
    confidence: "Early signal",
    status: "Held from ranking",
    source: "Official source confirms Upgrade Tree and Tree Crystals.",
    nextCheck: "Rank after node list, unlock cost, and boost values are tested."
  }
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "TNT Incremental ranking evidence status",
  itemListElement: trackedItems.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    description: `${item.status}. ${item.nextCheck}`
  }))
};

export const metadata: Metadata = {
  title: "TNT Incremental Tier List - Runes & Upgrade Ranking Status",
  description: "See TNT Incremental Rune, Upgrade Tree, Rebirth, and Ascend ranking status with source-backed evidence and no fake best-rune claims.",
  alternates: { canonical: `${siteConfig.domain}/tier-list` },
  openGraph: {
    title: "TNT Incremental Tier List - Runes & Upgrades",
    description: "Confirmed mechanics, source notes, and held rankings for TNT Incremental Runes, upgrades, Rebirth, and Ascend.",
    url: `${siteConfig.domain}/tier-list`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: "TNT Incremental Tier List - Runes & Upgrades",
    description: "Confidence-labelled TNT Incremental ranking evidence for Runes, upgrades, Rebirth, and Ascend.",
    images: ["/opengraph-image"]
  }
};

export default function TierListPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Tier List", href: "/tier-list" }]} />
      <FaqJsonLd items={buildFaqSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Breadcrumbs items={[{ label: "Tier List", href: "/tier-list" }]} />

      <PageIntro
        eyebrow={`Checked date: ${checkedDate}`}
        title="TNT Incremental Tier List and Ranking Status"
        description="This is a confidence-labelled ranking status page for Runes, Upgrade Tree choices, Rebirth value, and Ascend planning. Hard S/A/B tiers stay held until rune effects, upgrade values, and reset formulas are tested."
      />

      <section className="mt-8 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Ranking criteria</span>
          <h2 className="mt-3 text-xl font-bold text-white">Effect, odds, unlock cost, utility</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Exact ranking needs effect data, roll odds, upgrade costs, Rebirth value, Ascend value and replacement risk.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Source notes</span>
          <h2 className="mt-3 text-xl font-bold text-white">Official source first</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">The OG Incrementals Roblox page confirms rune names and core mechanics. YouTube and community reports are vocabulary signals only until reviewed.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Latest adjustment:</span>
          <h2 className="mt-3 text-xl font-bold text-white">Hard tiers held</h2>
          <p className="mt-2 text-sm leading-6 text-white/66">Change log: page is launched as evidence status, not a final best-rune ranking.</p>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Filter tabs"
          title="Confirmed mechanics and held rankings"
          copy="Use these cards to see what exists, what is source-backed, and which evidence is required before a final tier list."
        />
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="status-pill">Runes</span>
          <span className="status-pill">Upgrades</span>
          <span className="status-pill">Data held</span>
          <span className="status-pill">Held from ranking</span>
        </div>
        <div className="mt-6 grid gap-4">
          {trackedItems.map((item) => (
            <article key={item.name} className="content-card">
              <div className="flex flex-wrap items-center gap-3">
                <span className="tier-badge">Hold</span>
                <div>
                  <h2 className="text-2xl font-extrabold text-white">{item.name}</h2>
                  <p className="mt-1 text-sm text-white/50">{item.type}</p>
                </div>
                <span className="status-pill">{item.confidence}</span>
                <span className="status-pill">{item.status}</span>
              </div>
              <p className="mt-4 max-w-4xl text-white/68">{item.source}</p>
              <p className="mt-2 text-sm text-white/60">Source check: {item.nextCheck}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Beginner ranking</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Held. A beginner ranking needs early-game effect and unlock-cost data before it can be fair.</p>
        </article>
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Farming ranking</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Held. Farming ranking needs Cash impact, rune effects, and Upgrade Tree values.</p>
        </article>
        <article className="content-card">
          <h3 className="text-lg font-bold text-white">Late-game ranking</h3>
          <p className="mt-2 text-sm leading-6 text-white/66">Held. Late-game ranking needs Ascend and Big Rune evidence.</p>
        </article>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/codes" className="button-secondary">Get codes</Link>
        <Link href="/calculator" className="button-secondary">Use the calculator</Link>
        <Link href="/wiki" className="button-secondary">Open wiki</Link>
        <Link href="/guides" className="button-secondary">Read guides</Link>
        <Link href="/sources" className="button-secondary">Check sources</Link>
      </div>
    </main>
  );
}
