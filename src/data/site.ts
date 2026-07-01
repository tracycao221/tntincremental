import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `Check ${gameConfig.name} codes, the Release code for free Potions, beginner guide, Runes, Rebirth, Ascend, wiki notes, and a manual Roblox calculator.`,
  valueProposition: `Start with the confirmed Release code for free Potions, then use the TNT Incremental guide, wiki, Runes, Rebirth, Ascend, upgrades, and calculator pages without fake rewards or invented stats.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-06-30",
  freshnessLabel: "Release code, free Potions, guide, Runes, Rebirth, and Ascend notes checked",
  keywords: [
    `${gameConfig.name}`,
    `${gameConfig.name} codes`,
    `${gameConfig.name} tier list`,
    `${gameConfig.name} trello`,
    `${gameConfig.name} discord`,
    `${gameConfig.name} wiki`,
    `${gameConfig.name} official wiki`,
    `${gameConfig.name} guide`,
    `${gameConfig.name} calculator`,
    "Roblox codes",
    "Roblox tier list"
  ],
  navGroups: [
    {
      label: "Home",
      href: "/",
      items: []
    },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Release Code", href: "/codes", description: "Official Release code for free Potions plus separated community reports." },
        { label: "Updates", href: "/updates", description: "Verified update signals without unconfirmed changelog claims." },
        { label: "Sources", href: "/sources", description: "Where code and update claims should be checked." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Rankings", href: "/tier-list", description: "Confirmed mechanics and held ranking criteria." },
        { label: "Calculator", href: "/calculator", description: "Manual planner for Cash, Rebirth, Upgrade Tree, and Ascend goals." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Runes, Potions, Rebirth, Ascend, and progression systems." },
        { label: "Guides", href: "/guides", description: "Release code next steps, Rebirth, Upgrade Tree, Runes, and Ascend paths." },
        { label: "Updates", href: "/updates", description: "Source-backed update and event status." },
        { label: "Trello/Discord", href: "/trello", description: "Official board, Discord, and wiki status." }
      ]
    },
    {
      label: "About",
      href: "/disclosure",
      items: [
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status and source boundaries." },
        { label: "Contact", href: "/contact", description: "Corrections and editorial contact path." },
        { label: "Privacy", href: "/privacy", description: "Privacy and ad disclosure." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Release code" },
  { href: "/guides", label: "TNT Incremental guide" },
  { href: "/wiki/runes", label: "Runes wiki" },
  { href: "/calculator", label: "Cash calculator" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Official code", value: "Release", note: "Listed on the Roblox page for free Potions" },
  { label: "Core guide", value: "Upgrades", note: "Cash, Rebirth, Tree, Runes, Ascend" },
  { label: "Source model", value: "Split", note: "Official facts and community reports stay separate" },
  { label: "Wiki focus", value: "Runes", note: "Basic, Fire, Gem, Mining tracked separately" }
];

export const activeCodes: GameCode[] = [
  { code: "Release", reward: "Free Potions", status: "Verified", addedDate: "Official Roblox page" },
  { code: "UPDATE", reward: "Community-reported reward", status: "Unverified", addedDate: "Test in-game before relying on it" },
  { code: "WELCOME", reward: "Community-reported reward", status: "Unverified", addedDate: "Community watchlist" },
  { code: "THANKS", reward: "Community-reported reward", status: "Unverified", addedDate: "Community watchlist" }
];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Upgrade Tree",
    tier: "Hold",
    role: "Global boosts",
    reason: "The official page confirms Tree Crystals and global boosts, but node costs and boost values are not public enough for hard ranking.",
    confidence: "Source-backed",
    bestFor: ["planning", "long-term progression"],
    sourceNote: "Confirmed as a system on the official Roblox page.",
    teamNote: "Rank exact nodes only after cost and effect data is tested."
  },
  {
    name: "Runes",
    tier: "Hold",
    role: "Boost system",
    reason: "Basic, Fire, Gem, and Mining runes are confirmed; effects and odds are held from ranking until tested.",
    confidence: "Source-backed",
    bestFor: ["boosts", "Ascend planning"],
    sourceNote: "Rune names are listed in the official Roblox page description.",
    teamNote: "Avoid best-rune claims until effect data is available."
  },
  {
    name: "Ascend",
    tier: "Hold",
    role: "Advanced reset",
    reason: "Ascend is confirmed for Big Rune and Cash boosts, but requirements and boost numbers are not published here as facts.",
    confidence: "Source-backed",
    bestFor: ["late game", "reset planning"],
    sourceNote: "Confirmed by the official Roblox page.",
    teamNote: "Use the calculator in manual mode for personal timing estimates."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Cash Calculator for Rebirth and Ascend`,
    href: "/calculator",
    eyebrow: "Primary tool",
    description: "Manual planner for Cash goals, upgrade targets, Rebirth timing, Rune planning, and Ascend preparation."
  },
  {
    title: `${gameConfig.name} Tier List`,
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Ranking-status page for Runes, Upgrade Tree priorities, Rebirth value, and Ascend planning."
  },
  {
    title: `${gameConfig.name} Release Code and Free Potions`,
    href: "/codes",
    eyebrow: "Codes",
    description: "Tracks the official Release code for free Potions and keeps community-reported codes clearly separated."
  },
  {
    title: `${gameConfig.name} Trello & Discord`,
    href: "/trello",
    eyebrow: "Community status",
    description: "Clarifies the official Roblox source, Discord invite status, Trello search intent, and wiki boundaries."
  },
  {
    title: `${gameConfig.name} Updates`,
    href: "/updates",
    eyebrow: "Updates",
    description: "Tracks verified update signals without inventing changelog entries."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: `${gameConfig.name} beginner guide`,
    href: "/guides",
    eyebrow: "Guide",
    description: "Start with Drop TNT, Cash, upgrades, Rebirth, Upgrade Tree, Runes, Ascend, and Leaderboards."
  },
  {
    title: `${gameConfig.name} Upgrade Tree and Rebirth guide`,
    href: "/guides/upgrade-tree",
    eyebrow: "Guide",
    description: "Understand Tree Crystals and global boosts without fake node values."
  },
  {
    title: `${gameConfig.name} Runes and Ascend guide`,
    href: "/guides/ascend",
    eyebrow: "Guide",
    description: "Plan Ascend around Big Rune and Cash boosts with conservative timing notes."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Runes`,
    href: "/wiki/runes",
    eyebrow: "Wiki",
    description: "Basic, Fire, Gem, and Mining rune names from the official Roblox page."
  },
  {
    title: `${gameConfig.name} Potions`,
    href: "/wiki/potions",
    eyebrow: "Wiki",
    description: "Potion reward notes tied to the official Release code mention."
  },
  {
    title: `${gameConfig.name} Leaderboards`,
    href: "/wiki/leaderboards",
    eyebrow: "Wiki",
    description: "Leaderboard status without invented categories, ranks, or rewards."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Source of record for title, creator, core mechanics, Release code, and the community-server mention."
  },
  {
    title: "Trello, Discord, and board status",
    href: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? gameConfig.dataSources.trello : (gameConfig.dataSources.discord && gameConfig.dataSources.discord !== "#" ? gameConfig.dataSources.discord : "/trello"),
    eyebrow: "Community",
    description: "Check the Discord invite and the current no-official-Trello status before trusting update claims."
  },
  {
    title: "Source checklist",
    href: "/sources",
    eyebrow: "Editorial",
    description: "Documents official facts, community reports, held topics, and rejected script/cheat intent."
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Freshness first",
    body: "Official codes, community-reported codes, guide notes, and held rankings are labeled separately so searchers land on the right page."
  },
  {
    title: "Entity coverage",
    body: "Rune, Potion, Leaderboard, Rebirth, Upgrade Tree, and Ascend pages cover the confirmed loop without inventing values."
  },
  {
    title: "Fan-site clarity",
    body: "This fan site points back to Roblox and clearly separates Discord/community signals from official game facts."
  }
];

export const videoGuides: LinkCard[] = [
  {
    title: "Community videos",
    href: "/sources",
    eyebrow: "Source note",
    description: "Use videos as player experience signals only; do not treat them as official patch notes."
  },
  {
    title: "Discord checks",
    href: "/trello",
    eyebrow: "Community",
    description: "The official Roblox page mentions a community server; verify Discord announcements before copying update claims."
  },
  {
    title: "Code trackers",
    href: "/codes",
    eyebrow: "Codes",
    description: "Community code reports can be useful, but the page keeps the official Release code separate."
  }
];

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: `What is ${gameConfig.name} Wiki?`,
      a: `${gameConfig.name} Wiki is a fan-made Roblox resource for codes, upgrades, Rebirth, Runes, Ascend, calculators, guides, and source-backed progression help.`
    },
    {
      q: `Is this the official ${gameConfig.name} website?`,
      a: "No. This is an unofficial fan site. Use the official Roblox page and creator-owned channels for official support, purchases, moderation, and account issues."
    },
    {
      q: `What ${gameConfig.name} code gives free Potions?`,
      a: "The official Roblox page currently mentions Release for free Potions. Community-reported codes should be tested in game before being treated as active."
    },
    {
      q: `Where should I start after the ${gameConfig.name} Release code?`,
      a: "Start with the Release code for free Potions, then use the guide hub for upgrades, Rebirth, Runes, and Ascend. Use the calculator for manual Cash and target-cost planning."
    },
    {
      q: `What is the confirmed ${gameConfig.name} Release code reward?`,
      a: "The official Roblox page says Release gives free Potions. This site does not add extra reward amounts or new code claims unless a source supports them."
    },
    {
      q: `Which ${gameConfig.name} guide should I open after codes?`,
      a: "Open the TNT Incremental guide for the full loop, then use the Upgrade Tree, Rebirth, Runes, Ascend, and calculator pages when you need more specific planning."
    },
    {
      q: `What pages should be expanded first?`,
      a: "Start with codes, updates, source status, calculator, Rebirth, Upgrade Tree, Ascend, Runes, Potions, and Leaderboards."
    }
  ],
  codes: [
    {
      q: `Where do ${gameConfig.name} codes come from?`,
      a: "Use the official Roblox page first, then creator-owned Discord announcements and dated community trackers as secondary signals."
    },
    {
      q: "Why are some codes marked community reported?",
      a: "Community-reported codes may be useful, but they are not listed as official unless they appear on the Roblox page or are confirmed in game."
    },
    {
      q: "What should I check after the Release code?",
      a: "Use the guide, upgrades, Rebirth, Runes, Ascend, and calculator pages to plan next steps without relying on unverified code rewards."
    }
  ],
  tierList: [
    {
      q: "How should the tier list be updated?",
      a: "Keep confirmed mechanics visible, hold exact rune and upgrade rankings until effect data is available, and record source notes on every ranking change."
    }
  ],
  calculator: [
    {
      q: "Is the calculator exact?",
      a: "No. It is a manual planner that uses your own Cash and rate inputs because exact TNT Incremental formulas are not published here as official facts."
    },
    {
      q: "Can the calculator help with upgrades, Rebirth, Runes, and Ascend?",
      a: "Yes. Use it as a manual planning aid beside the guide pages; it does not invent hidden formulas, probabilities, or boost values."
    }
  ]
};
