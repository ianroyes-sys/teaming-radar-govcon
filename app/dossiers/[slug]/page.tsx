import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, ExternalIcon } from "@/components/icons";
import { ConfidenceBadge, EvidenceBadge } from "@/components/status";
import { WatchButton } from "@/components/watch-button";
import { getPursuit, pursuits } from "@/lib/data";

export function generateStaticParams() { return pursuits.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const p = getPursuit(slug); return { title: p?.title ?? "Dossier" }; }

export default async function DossierPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = getPursuit(slug); if (!p) notFound();
  return <div className="dossier shell">
    <Link href="/radar" className="back-link">← Back to radar</Link>
    <header className="dossier-head"><div><div className="card-kicker"><EvidenceBadge state={p.state} /><ConfidenceBadge confidence={p.confidence} /></div><h1>{p.title}</h1><p>{p.agency} · {p.place}</p></div><div className="decision-box"><span>WEIGHTED FIT</span><strong>{p.score}<small>/100</small></strong><b>{p.recommendation}</b><WatchButton slug={p.slug} /></div></header>
    <div className="dossier-grid">
      <div className="dossier-main">
        <section className="intel-section"><span className="eyebrow">EXECUTIVE READ</span><h2>The working thesis</h2><p className="big-copy">{p.synopsis}</p><div className="move-box"><span>NEXT BEST TEAMING MOVE</span><p>{p.teamingMove}</p></div></section>
        <section className="intel-section"><span className="eyebrow">FIT MODEL</span><h2>Why it ranked here</h2><div className="factor-list">{p.factors.map((factor) => <div className="factor" key={factor.label}><div className="factor-label"><b>{factor.label}</b><span>{factor.weight}% weight</span></div><div className="factor-track"><i style={{ width: `${factor.score}%` }} /></div><strong>{factor.score}</strong><p>{factor.reason}</p></div>)}</div></section>
        <section className="intel-section"><span className="eyebrow">PROVENANCE</span><h2>Evidence ledger</h2>{p.sources.map((source) => <article className="source-row" key={source.label}><div><EvidenceBadge state={source.state} /><h3>{source.label}</h3><p>{source.publisher} · Checked {source.checked}</p></div><div><ConfidenceBadge confidence={source.confidence} />{source.url.startsWith("http") ? <a href={source.url} target="_blank" rel="noreferrer">Open source <ExternalIcon /></a> : <span className="no-link">Internal note</span>}</div></article>)}</section>
      </div>
      <aside className="dossier-side">
        <section><span>RESPONSE SIGNAL</span><b>{p.responseDate}</b><small>{p.daysLeft} days from demo snapshot</small></section>
        <section><span>CONTRACT LANE</span><b>{p.size}</b><small>{p.vehicle}</small></section>
        <section><span>NAICS SIGNALS</span><div className="tag-row">{p.naics.map((n) => <em key={n}>{n}</em>)}</div></section>
        <section><span>OPEN QUESTIONS</span><ol>{p.openQuestions.map((q) => <li key={q}>{q}</li>)}</ol></section>
        <div className="caution"><b>Decision-support only</b><p>Confirm dates, scope, eligibility, and contracting path with the official notice and buyer.</p></div>
      </aside>
    </div>
  </div>;
}
