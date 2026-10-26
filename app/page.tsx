import Link from "next/link";
import { ArrowIcon, CheckIcon, RadarIcon } from "@/components/icons";
import { RadarVisual } from "@/components/radar-visual";
import { pursuits } from "@/lib/data";

export default function Home() {
  return <>
    <section className="hero shell">
      <div className="hero-copy">
        <div className="eyebrow"><span className="pulse" /> PURSUIT INTELLIGENCE · HUNTSVILLE, AL</div>
        <h1>Find your way<br />into the <em>mission.</em></h1>
        <p className="hero-lede">Teaming Radar turns fragmented public signals into ranked, explainable pursuit paths for small businesses around Redstone.</p>
        <div className="hero-actions"><Link className="button primary" href="/radar">Open pursuit radar <ArrowIcon /></Link><Link className="button text-button" href="/onboarding">Set capability profile</Link></div>
        <div className="trust-strip"><span><CheckIcon /> Source provenance</span><span><CheckIcon /> Transparent fit scoring</span><span><CheckIcon /> No award promises</span></div>
      </div>
      <div className="hero-instrument">
        <div className="instrument-head"><span>LOCAL SIGNAL MAP</span><span>26 AUG 2026 · DEMO DATA</span></div>
        <RadarVisual />
        <div className="instrument-foot"><span><i className="key-dot verified-dot" /> Verified</span><span><i className="key-dot analyst-dot" /> Analyst</span><span><i className="key-dot demo-dot" /> Demo</span><b>{pursuits.length} SIGNALS</b></div>
      </div>
    </section>
    <section className="process shell">
      <header className="section-head"><div><span className="eyebrow">THE OPERATING PICTURE</span><h2>Signal is not certainty.<br />That distinction is the product.</h2></div><p>Every recommendation shows what came from a primary source, what an analyst inferred, and what still needs to be verified.</p></header>
      <div className="process-grid">
        <article><span className="step-icon"><RadarIcon /></span><h3>Detect</h3><p>Organize public acquisition signals around your actual capabilities and geography.</p><small>INPUT · PUBLIC SOURCES</small></article>
        <article><span className="step-line" /><h3>Score</h3><p>Rank fit with visible factors: capability, proximity, access, timing, and evidence quality.</p><small>OUTPUT · EXPLAINABLE FIT</small></article>
        <article><span className="step-line" /><h3>Move</h3><p>Turn a noisy signal into one clear teaming conversation and a list of unanswered questions.</p><small>ACTION · HUMAN-LED OUTREACH</small></article>
      </div>
    </section>
    <section className="disclaimer-band"><div className="shell"><b>BUILT FOR PRE-CAPTURE DISCIPLINE</b><p>Teaming Radar does not replace SAM.gov, counsel, a contracting officer, or your judgment. It helps you decide where to look next.</p><Link href="/research">See the research standard <ArrowIcon /></Link></div></section>
    <section className="process shell" aria-labelledby="brief-offer">
      <header className="section-head">
        <div><span className="eyebrow">FOUNDING RESEARCH BRIEF</span><h2 id="brief-offer">One public-source question.<br />One accountable answer.</h2></div>
        <p>$250 flat fee for one scoped opportunity or teaming question. Delivered as a concise PDF within two business days after payment and scope confirmation, with one revision included.</p>
      </header>
      <div className="offer-grid" aria-label="Brief terms">
        <article><b>DELIVERABLE</b><p>A 3–5 page PDF with an executive answer, linked public sources, labeled hypotheses, confidence notes, gaps, and a recommended next verification step.</p></article>
        <article><b>TURNAROUND</b><p>Two business days after the invoice is paid and the question is confirmed in scope. If the question is not a fit, payment is refunded.</p></article>
        <article><b>TERMS</b><p>One reasonable revision requested within five calendar days is included. Additional research or a new question is quoted separately.</p></article>
      </div>
      <div className="hero-actions">
        <Link className="button primary" href="/request">Buy the $250 brief <ArrowIcon /></Link>
        <Link className="button text-button" href="/research">Review the publication gate</Link>
      </div>
      <p className="offer-fineprint">The delivery clock begins after payment and scope confirmation. Public, approved information only—never submit CUI, export-controlled material, credentials, or proprietary customer data. No outcome or award is guaranteed.</p>
    </section>
  </>;
}
