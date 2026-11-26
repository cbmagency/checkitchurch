"use client";
import { useState } from "react";

/** Tap-to-copy value (account numbers, cashtags). */
export function Copy({ value, label }: { value: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className="copy"
      onClick={async () => {
        try { await navigator.clipboard.writeText(value); } catch {}
        setDone(true); setTimeout(() => setDone(false), 1600);
      }}
      aria-label={`Copy ${label ?? value}`}
    >
      <span className="v">{value}</span>
      <span className="t">{done ? "Copied" : "Copy"}</span>
    </button>
  );
}
