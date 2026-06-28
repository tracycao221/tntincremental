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
    status: "Official page mention",
    addedDate: "Last verified: June 28, 2026",
    source: "Official Roblox page description"
  }
];

const expiredCodes: { code: string; note: string }[] = [];

const faqItems = [
  {
    q: "What TNT Incremental code is confirmed?",
    a: "Release is the only code currently recorded from the official OG Incrementals Roblox page evidence for this project."
  },
  {
    q: "Why are there not more TNT Incremental codes here?",
    a: "Extra codes are not listed until they are verified from the official Roblox page, an in-game check, or another reliable source."
  },
  {
    q: "What if the Release code does not work?",
    a: "Check spelling, server freshness, and whether the code expired. The exact in-game redemption path still needs verification before final launch copy."
  },
  {
    q: "Is this the official TNT Incremental codes page?",
    a: "No. This is an unofficial fan-made tracker that links back to the official OG Incrementals Roblox page as the source of record."
  }
];

const buildFaqSchema = faqItems;

export const metadata: Metadata = {
  title: `TNT Incremental Codes (${monthYear}) - Release Code`,
  description: "Track TNT Incremental codes with source notes. Release is the confirmed official-page code mention for free Potions; other codes need verification.",
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
        eyebrow="Last verified: June 28, 2026"
        title={`TNT Incremental Codes (${monthYear})`}
        description="Use this page for source-checked TNT Incremental codes. Release is the only confirmed code in the current official-page evidence; everything else stays off the active list until verified."
      />

      <section className="mt-10">
        <SectionHeader
          eyebrow="Active codes"
          title="Current best-known codes"
          copy="Codes are freshness-sensitive. This page starts with official-page evidence and avoids unverified extras."
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
            copy="The exact in-game redemption location still needs verification. Use these safe checks before launch copy is finalized."
          />
          <ol className="mt-5 grid gap-3 text-white/70">
            <li>1. Open TNT Incremental from the official OG Incrementals Roblox page.</li>
            <li>2. Join a fresh server if a code was just released.</li>
            <li>3. Look for a Codes, Rewards, Shop, Settings, or community-server code panel.</li>
            <li>4. Paste the code exactly and check whether Potions are granted.</li>
          </ol>
        </article>
        <article className="content-card">
          <SectionHeader
            eyebrow="Use your rewards well"
            title="Why these codes matter"
            copy="Potions can affect early progression, but potion types and effects are not verified yet. Spend rewards carefully and check the source notes before relying on exact values."
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
          eyebrow="Expired codes"
          title="Expired and unverified codes"
          copy="No expired TNT Incremental codes are confirmed in the current project evidence."
        />
        <div className="mt-6 grid gap-3">
          {expiredCodes.map((code) => (
            <article key={code.code} className="content-card">
              <h2 className="font-mono text-xl font-bold text-white">{code.code}</h2>
              <p className="mt-2 text-white/60">{code.note}</p>
            </article>
          ))}
          {expiredCodes.length === 0 ? (
            <p className="content-card text-white/70">No expired codes are source-backed yet. Unverified community claims stay out of the table.</p>
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
