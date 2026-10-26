"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { pursuits } from "@/lib/data";
import { PursuitCard } from "./pursuit-card";
import { ArrowIcon, BookmarkIcon } from "./icons";
import { readWatchlist } from "./watch-button";

export function WatchlistView() {
  const [slugs, setSlugs] = useState<string[] | null>(null);
  useEffect(() => { const update = () => setSlugs(readWatchlist()); update(); window.addEventListener("teaming-radar-watchlist", update); return () => window.removeEventListener("teaming-radar-watchlist", update); }, []);
  if (slugs === null) return <div className="loading-inline" role="status">Loading local watchlist…</div>;
  const watched = pursuits.filter((p) => slugs.includes(p.slug));
  if (!watched.length) return <div className="empty-state"><span className="empty-icon"><BookmarkIcon /></span><h2>No pursuits on watch.</h2><p>Add a signal from the radar. It stays in this browser—no account or database required.</p><Link className="button primary" href="/radar">Scan pursuits <ArrowIcon /></Link></div>;
  return <div className="results standalone">{watched.map((p, i) => <PursuitCard key={p.slug} pursuit={p} rank={i + 1} />)}</div>;
}
