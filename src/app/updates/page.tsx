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
    a: "This project has not captured a source-backed changelog entry beyond the official Roblox page evidence. New update claims stay pending until verified."
  },
  {
    q: "Does this page use unofficial TNT Incremental update leaks?",
    a: "No. Update notes should come from the official Roblox page, in-game verification, or clearly attributed creator-owned channels."
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
    detail: "The official page description confirms Drop TNT, Buy Upgrades, Rebirth, Upgrade Tree, Runes, Ascend, and Leaderboards."
  },
  {
    label: "Code mention",
    status: "Confirmed code signal",
    detail: "Release is the only code mention captured from the official page evidence."
  }
];

const heldSignals = [
  "No verified patch-note timeline has been captured.",
  "No verified event schedule has been captured.",
  "No verified Trello, Discord, or official wiki URL has been captured.",
  "No unofficial same-name page is treated as official evidence."
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
        description="Use this page to separate verified TNT Incremental update signals from unconfirmed changelog claims. The official OG Incrementals Roblox page remains the source of record for this launch."
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
            eyebrow="Held claims"
            title="Not enough evidence yet"
            copy="These topics can become update coverage later, but they should not be published as facts until verified."
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
