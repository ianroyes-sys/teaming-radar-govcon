import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { EvidenceBadge } from "@/components/status";
import { pursuits } from "@/lib/data";
export const metadata = { title: "Weekly brief" };
export default function BriefPage() { const top = pursuits.slice(0, 3); return <div className="workspace shell narrow"><header className="brief-mast"><span>WEEKLY SIGNAL BRIEF · PREVIEW</span><h1>Three conversations<br />to earn this week.</h1><p>For Royz Media Group LLC · Huntsville defense market · Week of August 24</p></header><div className="brief-list">{top.map((p, i) => <article key={p.slug}><span className="brief-number">0{i + 1}</span><div><EvidenceBadge state={p.state} /><h2>{p.title}</h2><p>{p.teamingMove}</p><Link href={`/dossiers/${p.slug}`}>Open evidence dossier <ArrowIcon /></Link></div><strong>{p.score}<small>FIT</small></strong></article>)}</div><div className="brief-note"><b>Preview mode</b><p>Email delivery is intentionally disconnected. Use this page as the weekly research agenda until a verified sending domain and opt-in list exist.</p></div></div>; }
