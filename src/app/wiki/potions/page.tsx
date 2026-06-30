import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: "TNT Incremental Potions Wiki - Release Code Reward",
  description: "TNT Incremental Potions are confirmed as the Release code reward, with potion types, durations, effects, upgrades, and Rebirth use held until tested.",
  alternates: { canonical: `${siteConfig.domain}/wiki/potions` }
};

export default function PotionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Potions", href: "/wiki/potions" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Potions", href: "/wiki/potions" }]} />
      <PageIntro eyebrow="Code reward" title="TNT Incremental Potions Wiki" description="The official page says code Release gives free Potions. Potion types, durations, effects, stacking, upgrades and Rebirth use are held until tested." />
      <section className="mt-10">
        <SectionHeader eyebrow="Status" title="Potion data gaps" />
        <div className="content-card mt-6">
          <p className="text-white/70">Confirmed: Potions exist as a Release code reward. Held for testing: potion types, effects, duration, stacking and best timing.</p>
        </div>
      </section>
      <section className="mt-10">
        <SectionHeader
          eyebrow="Planning links"
          title="Use Potions with codes and progression pages"
          copy="Keep Potion planning tied to the source-checked code page and manual calculator until exact effects are tested."
        />
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="button-secondary" href="/codes">Get Release code</Link>
          <Link className="button-secondary" href="/calculator">Use calculator</Link>
          <Link className="button-secondary" href="/guides/rebirth">Rebirth guide</Link>
          <Link className="button-secondary" href="/guides/upgrade-tree">Upgrade Tree guide</Link>
        </div>
      </section>
    </main>
  );
}
