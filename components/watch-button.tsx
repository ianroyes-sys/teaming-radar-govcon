"use client";

import { useEffect, useState } from "react";
import { BookmarkIcon } from "./icons";

const KEY = "teaming-radar-watchlist-v1";

export function readWatchlist(): string[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(KEY) || "[]") as string[]; } catch { return []; }
}

export function WatchButton({ slug, compact = false }: { slug: string; compact?: boolean }) {
  const [watched, setWatched] = useState(false);
  useEffect(() => setWatched(readWatchlist().includes(slug)), [slug]);
  function toggle() {
    const current = readWatchlist();
    const next = current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
    localStorage.setItem(KEY, JSON.stringify(next));
    setWatched(next.includes(slug));
    window.dispatchEvent(new Event("teaming-radar-watchlist"));
  }
  return <button type="button" className={`watch-button ${watched ? "is-watched" : ""}`} onClick={toggle} aria-pressed={watched} aria-label={`${watched ? "Remove from" : "Add to"} watchlist`}><BookmarkIcon />{compact ? null : watched ? "Watching" : "Watch pursuit"}</button>;
}
