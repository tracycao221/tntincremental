import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { getCurrentMonthYear } from "@/lib/site-date";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";
import { CopyButton } from "@/components/ui/CopyButton";

const monthYear = getCurrentMonthYear();

const codes = [
  {
    code: "Release",
    reward: "Free Potions",
    status: "Official Roblox page",
    addedDate: "Checked: June 29, 2026",
    source: "Official Roblox page description"
  }
];

const communityReportedCodes = [
  {
    code: "UPDATE",
    note: "Reported by community code trackers. Test in game before relying on the reward."
  },
  {
    code: "WELCOME",
    note: "Reported by community code trackers. Not listed on the official Roblox page."
  },
  {
    code: "THANKS",
    note: "Reported by community code trackers. Keep separate from official-page codes."
  }
];

const expiredCodes: { code: string; note: string }[] = [];

const faqItems = [
  {
    q: "What TNT Incremental code is confirmed?",
    a: "Release is the code currently confirmed from the official OG Incrementals Roblox page and is described as giving free Potions."
  },
  {
    q: "Why are community-reported codes separated?",
    a: "Community trackers can surface useful leads, but this page keeps them separate from official Roblox page codes until they are tested in game or confirmed by a creator-owned channel."
  },
  {
    q: "What if the Release code does not work?",
    a: "Check spelling, capitalization, and server freshness. If a code panel rejects it, treat it as expired or temporarily unavailable and check the official Roblox page or Discord for changes."
  },
  {
    q: "Is this the official TNT Incremental codes page?",
    a: "No. This is an unofficial fan-made tracker that links back to the official OG Incrementals Roblox page as the source of record."
  }
];

const buildFaqSchema = faqItems;

export const metadata: Metadata = {
  title: `TNT Incremental Codes (${monthYear}) - Release Code`,
  description: "Track TNT Incremental codes with source notes. Release is the confirmed official-page code for free Potions, with community-reported codes kept separate.",
  alternates: { canonical: `${siteConfig.domain}/codes` },
  openGraph: {
    title: `TNT Incremental Codes (${monthYear})`,
    description: "Release is the confirmed TNT Incremental code mention from the official OG Incrementals Roblox page.",
    url: `${siteConfig.domain}/codes`,
    images: ["/opengraph-image"]
  },
  twitter: {
    card: "summary_large_image",
    title: `TNT Incremental Codes (${monthYear})`,
    description: "Source-checked TNT Incremental codes and freshness notes.",
    images: ["/opengraph-image"]
  }
};

export default function CodesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Codes", href: "/codes" }]} />
      <FaqJsonLd items={buildFaqSchema} />
      <Breadcrumbs items={[{ label: "Codes", href: "/codes" }]} />

      <PageIntro
        eyebrow="Checked: June 29, 2026"
        title={`TNT Incremental Codes (${monthYear})`}
        description="Use this page for source-checked TNT Incremental codes. Release is the official-page code for free Potions; community-reported codes are listed separately so they do not look official."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Active codes"
          title="Official-page code"
          copy="The official Roblox page is the source of record. Codes from community trackers stay in their own watchlist until they are tested or creator-confirmed."
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {codes.map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-2xl font-extrabold text-[color:var(--accent)]">{code.code}</h2>
                <span className="status-pill">{code.status}</span>
              </div>
              <p className="mt-3 text-white/75">{code.reward}</p>
              <p className="mt-2 text-sm text-white/50">{code.addedDate}</p>
              <p className="mt-2 text-sm text-white/50">Source: {code.source}</p>
              <div className="mt-4">
                <CopyButton code={code.code} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-4 lg:grid-cols-2">
        <article className="content-card">
          <SectionHeader
            eyebrow="Redeem steps"
            title="How to redeem codes"
            copy="Roblox code panels often move between reward, settings, shop, or community buttons. These steps avoid claiming a specific menu path when the official page does not name one."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            <li>1. Open TNT Incremental from the official OG Incrementals Roblox page.</li>
            <li>2. Join a fresh server if a code was just released.</li>
            <li>3. Look for a Codes, Rewards, Shop, Settings, or community-server button.</li>
            <li>4. Paste the code exactly and check whether Potions are granted.</li>
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Use your rewards well"
            title="Why these codes matter"
            copy="The official page says Release gives free Potions. Potion effects can affect planning, so the calculator stays manual instead of inventing boost values."
          />
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="button-secondary" href="/calculator">Open calculator</Link>
            <Link className="button-secondary" href="/sources">Verify source</Link>
            <Link className="button-secondary" href="/tier-list">View ranking status</Link>
            <Link className="button-secondary" href="/updates">Check updates</Link>
          </div>
        </article>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Community reports"
          title="Codes to test in game"
          copy="These are not official-page codes. Keep them as a testing watchlist, especially after updates or server refreshes."
        />
        <div className="mt-6 grid gap-3">
          {communityReportedCodes.map((code) => (
            <article key={code.code} className="content-card">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="font-mono text-xl font-bold text-white">{code.code}</h2>
                <span className="status-pill">Community report</span>
              </div>
              <p className="mt-2 text-white/60">{code.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader
          eyebrow="Expired codes"
          title="Expired code log"
          copy="No expired TNT Incremental codes are source-backed enough to publish as a final expired table yet."
        />
        <div className="mt-6 grid gap-3">
          {expiredCodes.map((code) => (
            <article key={code.code} className="content-card">
              <h2 className="font-mono text-xl font-bold text-white">{code.code}</h2>
              <p className="mt-2 text-white/60">{code.note}</p>
            </article>
          ))}
          {expiredCodes.length === 0 ? (
            <p className="content-card text-white/70">The expired-code table is empty until a code is observed as rejected or a creator-owned source retires it.</p>
          ) : null}
        </div>
      </section>

      <section className="mt-10">
        <SectionHeader eyebrow="FAQ" title="TNT Incremental code questions" />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
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
