import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { getCurrentMonthYear } from "@/lib/site-date";

const monthYear = getCurrentMonthYear();

const faqItems = [
  {
    q: "What is the latest verified TNT Incremental update?",
    a: "The current source-backed update signal is the official Roblox page text, which highlights Open Runes and the confirmed progression systems. Patch-note style claims stay off this page unless they come from Roblox, Discord, or in-game checks."
  },
  {
    q: "Does this page use unofficial TNT Incremental update leaks?",
    a: "No. Update notes should come from the official Roblox page, in-game checks, or clearly attributed creator-owned channels."
  },
  {
    q: "Is Choi Games used as an update source here?",
    a: "No. The confirmed official source for this TNT Incremental project is the OG Incrementals Roblox page only."
  }
];

const verifiedSignals = [
  {
    label: "Official Roblox page",
    status: "Confirmed source",
    detail: "The project source of record is the OG Incrementals Roblox page for place 79903287408965."
  },
  {
    label: "Core page description",
    status: "Confirmed mechanics",
    detail: "The official page description confirms Drop TNT, Buy Upgrades, Rebirth, Upgrade Tree, Runes, Ascend, and Leaderboards. The current page art highlights Open Runes."
  },
  {
    label: "Code mention",
    status: "Confirmed code signal",
    detail: "Release is the only code mention captured from the official page evidence."
  }
];

const heldSignals = [
  "No patch-note timeline is published here without a source date.",
  "No event schedule is listed unless Roblox, Discord, or in-game checks support it.",
  "No Trello board is treated as official unless creator-owned evidence appears.",
  "No same-name third-party page is treated as the official game source."
];

export const metadata: Metadata = {
  title: `TNT Incremental Updates (${monthYear}) - Verified Status`,
  description: "Track source-backed TNT Incremental update signals without fake changelog entries. Official Roblox evidence stays the source of record.",
  alternates: { canonical: `${siteConfig.domain}/updates` },
  openGraph: {
    title: `TNT Incremental Updates (${monthYear})`,
    description: "Verified TNT Incremental update status and source boundaries.",
    url: `${siteConfig.domain}/updates`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `TNT Incremental Updates (${monthYear})`,
    description: "Source-backed TNT Incremental update status.",
    images: ["/opengraph-image"]
  }
};

export default function UpdatesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Updates", href: "/updates" }]} />
      <FaqJsonLd items={faqItems} />
      <Breadcrumbs items={[{ label: "Updates", href: "/updates" }]} />

      <PageIntro
        eyebrow="Update status"
        title={`TNT Incremental Updates (${monthYear})`}
        description="Use this page to separate official TNT Incremental update signals from community reports. The OG Incrementals Roblox page remains the source of record for core game facts."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Verified signals"
          title="What the current evidence supports"
          copy="These items are safe to mention because they come from the confirmed official Roblox page or project evidence tied to that page."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {verifiedSignals.map((signal) => (
            <article key={signal.label} className="content-card">
              <span className="status-pill">{signal.status}</span>
              <h2 className="mt-4 text-xl font-extrabold text-white">{signal.label}</h2>
              <p className="mt-3 text-sm leading-6 text-white/65">{signal.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Editorial rules"
            title="What stays out of the changelog"
            copy="This keeps the page useful without turning community chatter into fake patch notes."
          />
          <ul className="mt-5 grid gap-3 text-white/70">
            {heldSignals.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Next checks"
            title="Where to verify updates"
            copy="When update-sensitive claims appear, check source ownership first and keep unsupported details out of launch pages."
          />
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="button-secondary" href="/sources">Review official source</Link>
            <Link className="button-secondary" href="/trello">Check Trello status</Link>
            <Link className="button-secondary" href="/codes">Check codes</Link>
            <a className="button-primary" href="https://www.roblox.com/games/79903287408965/TNT-Incremental" rel="nofollow noopener noreferrer" target="_blank">
              Open Roblox page
            </a>
          </div>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="FAQ" title="TNT Incremental update questions" />
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {faqItems.map((item) => (
            <article key={item.q} className="content-card">
              <h2 className="text-lg font-bold text-white">{item.q}</h2>
              <p className="mt-3 text-sm leading-6 text-white/65">{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
