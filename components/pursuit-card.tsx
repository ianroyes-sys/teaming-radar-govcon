import Link from "next/link";
import type { Pursuit } from "@/lib/types";
import { ArrowIcon } from "./icons";
import { EvidenceBadge } from "./status";
import { WatchButton } from "./watch-button";

export function PursuitCard({ pursuit, rank }: { pursuit: Pursuit; rank: number }) {
  return <article className="pursuit-card">
    <div className="rank">{String(rank).padStart(2, "0")}</div>
    <div className="score-wrap"><div className="score-ring" style={{ "--score": `${pursuit.score * 3.6}deg` } as React.CSSProperties}><span>{pursuit.score}</span></div><small>FIT</small></div>
    <div className="pursuit-main">
      <div className="card-kicker"><EvidenceBadge state={pursuit.state} /><span>{pursuit.noticeType}</span><span>{pursuit.daysLeft} days</span></div>
      <h2><Link href={`/dossiers/${pursuit.slug}`}>{pursuit.title}</Link></h2>
      <p>{pursuit.agency} · {pursuit.place}</p>
      <div className="tag-row">{pursuit.capabilities.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div>
    </div>
    <div className="card-action"><WatchButton slug={pursuit.slug} compact /><Link href={`/dossiers/${pursuit.slug}`} aria-label={`Open dossier for ${pursuit.title}`}><ArrowIcon /></Link></div>
  </article>;
}
