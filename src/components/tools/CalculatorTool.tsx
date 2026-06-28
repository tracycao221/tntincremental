"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/ui/content";

export function CalculatorTool() {
  const [cash, setCash] = useState(0);
  const [cashPerMinute, setCashPerMinute] = useState(100);
  const [targetCost, setTargetCost] = useState(1000);
  const [mode, setMode] = useState<"upgrade" | "rebirth" | "ascend">("upgrade");

  const result = useMemo(() => {
    const remaining = Math.max(targetCost - cash, 0);
    const minutes = cashPerMinute > 0 ? remaining / cashPerMinute : 0;
    const roundedMinutes = Math.ceil(minutes);
    const label = mode === "upgrade" ? "upgrade" : mode === "rebirth" ? "Rebirth checkpoint" : "Ascend checkpoint";

    if (remaining <= 0) {
      return {
        headline: `You can check this ${label} now.`,
        detail: "Your current Cash already meets the target you entered. Verify the in-game requirement before spending or resetting."
      };
    }

    return {
      headline: `${roundedMinutes} min to your ${label}`,
      detail: "This estimate uses your manual Cash/min value. Exact TNT Incremental formulas, boosts, rune effects, and potion effects are still marked as needs verification."
    };
  }, [cash, cashPerMinute, targetCost, mode]);

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="content-card">
        <SectionHeader eyebrow="Estimated inputs" title="Plan your next TNT step" />
        <div className="mt-6 grid gap-5">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Current Cash</span>
            <input value={cash} onChange={(event) => setCash(Number(event.target.value) || 0)} type="number" min="0" className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Observed Cash per minute</span>
            <input value={cashPerMinute} onChange={(event) => setCashPerMinute(Number(event.target.value) || 0)} type="number" min="0" className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Target cost or checkpoint</span>
            <input value={targetCost} onChange={(event) => setTargetCost(Number(event.target.value) || 0)} type="number" min="0" className="rounded-lg border border-white/10 bg-[#111113] px-3 py-3 text-white" />
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(["upgrade", "rebirth", "ascend"] as const).map((item) => (
              <button key={item} type="button" className={mode === item ? "button-primary" : "button-secondary"} onClick={() => setMode(item)}>
                {item === "upgrade" ? "Upgrade" : item === "rebirth" ? "Rebirth" : "Ascend"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="content-card">
        <SectionHeader eyebrow="Estimated output" title="Progress estimate" />
        <p className="mt-6 text-3xl font-extrabold leading-10 text-white">{result.headline}</p>
        <p className="mt-5 text-sm leading-6 text-white/70">{result.detail}</p>
        <p className="mt-5 text-sm leading-6 text-white/60">
          Confirmed mechanics: Drop TNT, Cash, Upgrades, Rebirth, Upgrade Tree, Runes and Ascend. Missing data: exact costs, multipliers, rune effects, potion effects and reset formulas.
        </p>
      </div>
    </div>
  );
}
