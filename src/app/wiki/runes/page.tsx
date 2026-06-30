import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const runes = ["Basic Rune", "Fire Rune", "Gem Rune", "Mining Rune"];

export const metadata: Metadata = {
  title: "TNT Incremental Runes Wiki - Basic, Fire, Gem & Mining",
  description: "Track confirmed TNT Incremental Runes: Basic, Fire, Gem and Mining, with effects, odds, rarity, Ascend ties, and best-use claims held until tested.",
  alternates: { canonical: `${siteConfig.domain}/wiki/runes` }
};

export default function RunesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Runes", href: "/wiki/runes" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Runes", href: "/wiki/runes" }]} />
      <PageIntro eyebrow="Confirmed names" title="TNT Incremental Runes Wiki" description="The official Roblox page confirms Basic, Fire, Gem and Mining runes. Effects, odds, rarity, Ascend ties and best use are held until tested." />
      <section className="mt-10">
        <SectionHeader eyebrow="Rune tracker" title="Known rune categories" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {runes.map((rune) => (
            <article key={rune} className="content-card">
              <span className="status-pill">Source-backed existence</span>
              <h2 className="mt-4 text-2xl font-bold text-white">{rune}</h2>
              <p className="mt-3 text-white/65">Effect, odds, rarity and best-use data are held until tested.</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mt-10">
        <SectionHeader
          eyebrow="Next steps"
          title="Use runes with upgrades, Rebirth, and Ascend planning"
          copy="Rune claims should stay tied to tested effects. These routes help keep planning separate from unverified rankings."
        />
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="button-secondary" href="/tier-list">Rune ranking status</Link>
          <Link className="button-secondary" href="/guides/rebirth">Rebirth guide</Link>
          <Link className="button-secondary" href="/guides/ascend">Ascend guide</Link>
          <Link className="button-secondary" href="/calculator">Use calculator</Link>
        </div>
      </section>
    </main>
  );
}
