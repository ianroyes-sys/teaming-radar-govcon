import { PursuitCard } from "@/components/pursuit-card";
import { RadarVisual } from "@/components/radar-visual";
import { companyProfile, pursuits } from "@/lib/data";

export const metadata = { title: "Pursuit radar" };

export default function RadarPage() {
  return <div className="workspace shell">
    <header className="workspace-header"><div><span className="eyebrow"><span className="pulse" /> RADAR ONLINE · CURATED MVP DATA</span><h1>Pursuit radar</h1><p>Ranked against {companyProfile.name}&apos;s current capability profile.</p></div><div className="profile-summary"><span>PROFILE</span><b>{companyProfile.capabilities.length} capabilities</b><small>{companyProfile.location}</small></div></header>
    <div className="radar-layout">
      <aside className="radar-panel"><div className="mini-instrument"><RadarVisual /></div><dl><div><dt>Signals tracked</dt><dd>{pursuits.length}</dd></div><div><dt>Strong fit</dt><dd>{pursuits.filter((p) => p.score >= 85).length}</dd></div><div><dt>Verified notices</dt><dd>0</dd></div></dl><div className="warning-note"><b>Research mode</b><p>Current opportunities are curated analyst/demo records. Verify a primary notice before outreach.</p></div></aside>
      <section className="results" aria-labelledby="result-title"><div className="results-head"><div><span className="eyebrow">RANKED RESULTS</span><h2 id="result-title">Best paths first</h2></div><span>Sorted by weighted fit</span></div>{pursuits.map((p, i) => <PursuitCard key={p.slug} pursuit={p} rank={i + 1} />)}</section>
    </div>
  </div>;
}
