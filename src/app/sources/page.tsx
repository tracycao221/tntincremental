import type { Metadata } from "next";
import Link from "next/link";
import { officialLinks, siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `${siteConfig.gameName} Sources`,
  description: `Source and verification notes for ${siteConfig.gameName} codes, guides, wiki claims, and tier-list updates.`,
  alternates: { canonical: `${siteConfig.domain}/sources` }
};

export default function SourcesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Sources", href: "/sources" }]} />
      <Breadcrumbs items={[{ label: "Sources", href: "/sources" }]} />
      <PageIntro
        eyebrow="Verification"
        title={`${siteConfig.gameName} Sources`}
        description="Use this page to see where code, tier-list, update, Trello, Discord, wiki, and guide claims are checked. The official Roblox page wins when sources disagree."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Primary references"
          title="Where claims should be checked"
          copy="Start with official Roblox and creator-owned links, then use dated community references only when official details are unavailable."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {officialLinks.map((link) => {
            const content = (
              <>
                <span className="mini-label">{link.eyebrow}</span>
                <h2 className="mt-3 text-xl font-bold text-white">{link.title}</h2>
                <p className="mt-2 text-sm leading-6 text-white/65">{link.description}</p>
              </>
            );

            return link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href} className="content-card">
                {content}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="content-card" target="_blank" rel="noreferrer">
                {content}
              </a>
            );
          })}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-3">
        <article className="content-card">
          <span className="mini-label">Official facts</span>
          <h2 className="mt-3 text-xl font-bold text-white">What Roblox confirms</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">OG Incrementals, place 79903287408965, Drop TNT, Cash, Upgrades, Rebirth, Upgrade Tree, Basic/Fire/Gem/Mining Runes, Ascend, Leaderboards, and Release for free Potions.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Community reports</span>
          <h2 className="mt-3 text-xl font-bold text-white">Useful but secondary</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Discord, video, Reddit, and code-tracker claims can guide what to test, but they stay separate from official-page facts until verified.</p>
        </article>
        <article className="content-card">
          <span className="mini-label">Rejected intent</span>
          <h2 className="mt-3 text-xl font-bold text-white">Scripts and cheat pages</h2>
          <p className="mt-2 text-sm leading-6 text-white/65">Script, exploit, and cheat-adjacent keywords are not part of this site. The project focuses on legitimate play, guides, and source-backed progression help.</p>
        </article>
      </section>
    </main>
  );
}
