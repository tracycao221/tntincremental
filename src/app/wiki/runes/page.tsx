import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

const runes = ["Basic Rune", "Fire Rune", "Gem Rune", "Mining Rune"];

export const metadata: Metadata = {
  title: "TNT Incremental Runes Wiki (June 2026)",
  description: "Track confirmed TNT Incremental rune names: Basic, Fire, Gem and Mining, with effects and odds held until tested.",
  alternates: { canonical: `${siteConfig.domain}/wiki/runes` }
};

export default function RunesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Runes", href: "/wiki/runes" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Runes", href: "/wiki/runes" }]} />
      <PageIntro eyebrow="Confirmed names" title="TNT Incremental Runes" description="The official Roblox page confirms Basic, Fire, Gem and Mining runes. Effects, odds, rarity and best use are held until tested." />
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
    </main>
  );
}
