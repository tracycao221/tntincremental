import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, PageIntro, SectionHeader } from "@/components/ui/content";

export const metadata: Metadata = {
  title: "TNT Incremental Potions Wiki (June 2026)",
  description: "TNT Incremental Potions are confirmed as the Release code reward, but potion effects and types still need verification.",
  alternates: { canonical: `${siteConfig.domain}/wiki/potions` }
};

export default function PotionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Wiki", href: "/wiki" }, { name: "Potions", href: "/wiki/potions" }]} />
      <Breadcrumbs items={[{ label: "Wiki", href: "/wiki" }, { label: "Potions", href: "/wiki/potions" }]} />
      <PageIntro eyebrow="Code reward" title="TNT Incremental Potions" description="The official page says code Release gives free Potions. Potion types, durations and effects are still not verified." />
      <section className="mt-10">
        <SectionHeader eyebrow="Status" title="Potion data gaps" />
        <div className="content-card mt-6">
          <p className="text-white/70">Confirmed: Potions exist as a Release code reward. Needs verification: potion types, effects, duration, stacking and best timing.</p>
        </div>
      </section>
    </main>
  );
}
