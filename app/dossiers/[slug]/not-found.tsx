import Link from "next/link";
export default function NotFound() { return <div className="shell state-page"><span>404 · SIGNAL LOST</span><h1>This dossier is outside the current range.</h1><p>The record may have moved or the link is incomplete.</p><Link className="button primary" href="/radar">Return to radar</Link></div>; }
