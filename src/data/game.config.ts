import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "TNT Incremental",
  slug: "tnt-incremental",
  domain: "https://tntincremental.org",
  theme: {
    primaryColor: "#FACC15",
    accentColor: "#38BDF8",
    surfaceColor: "#111113",
    style: "roblox-seo-hub"
  },
  currency: {
    name: "Cash",
    abbr: "CASH"
  },
  features: {
    hasCalculator: true,
    hasTierList: true,
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "Weekly checks",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/games/79903287408965/TNT-Incremental",
    discord: "https://discord.com/invite/cVFtzcFS6r",
    trello: "#"
  },
  ads: {
    publisher: "Adsterra + Google AdSense",
    usesRuntimeConfig: true
  }
};
