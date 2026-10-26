"use client";
export default function ErrorPage({ reset }: { reset: () => void }) { return <div className="shell state-page"><span>SIGNAL INTERRUPTED</span><h1>The operating picture did not load.</h1><p>Retry the local view. No saved pursuit data was changed.</p><button className="button primary" onClick={() => reset()}>Try again</button></div>; }
