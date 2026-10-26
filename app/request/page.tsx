"use client";

import { FormEvent, useEffect, useState } from "react";

const inbox = "contact@royzmediagroup.com";
// Stripe Payment Link for the $250 brief; set NEXT_PUBLIC_STRIPE_BRIEF_LINK in .env.local
const checkout = process.env.NEXT_PUBLIC_STRIPE_BRIEF_LINK || "#checkout-not-configured";
const draftKey = "teaming-radar:brief-request:v1";
type Draft = { name: string; email: string; company: string; capability: string; question: string };
const emptyDraft: Draft = { name: "", email: "", company: "", capability: "", question: "" };
const body = (d: Draft) => `Name: ${d.name}\nEmail: ${d.email}\nCompany: ${d.company}\nCapability: ${d.capability}\n\nPublic opportunity or question:\n${d.question}\n\nI confirm this contains public, approved information only.`;

export default function RequestPage() {
  const [draft, setDraft] = useState<Draft>(emptyDraft);
  const [copied, setCopied] = useState(false);
  const [paid, setPaid] = useState(false);
  useEffect(() => {
    setPaid(new URLSearchParams(window.location.search).get("payment") === "success");
    try { const saved = localStorage.getItem(draftKey); if (saved) setDraft({ ...emptyDraft, ...JSON.parse(saved) }); } catch { /* optional browser storage */ }
  }, []);
  function update(field: keyof Draft, value: string) { const next = { ...draft, [field]: value }; setDraft(next); try { localStorage.setItem(draftKey, JSON.stringify(next)); } catch { /* non-blocking */ } }
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); window.location.href = `mailto:${inbox}?subject=${encodeURIComponent(`Teaming Radar brief scope — ${draft.company}`)}&body=${encodeURIComponent(body(draft))}`; }
  async function copyRequest() { await navigator.clipboard.writeText(`To: ${inbox}\nSubject: Teaming Radar brief scope — ${draft.company}\n\n${body(draft)}`); setCopied(true); }
  return <section className="workspace shell request-layout">
    <aside className="request-aside"><span className="eyebrow">FOUNDING RESEARCH BRIEF</span><h1>Bring one question. Leave with a sourced next move.</h1><p>Purchase securely, then send the public-source question that will define your brief.</p><div className="terms-list"><div><span>Flat fee</span><b>$250</b></div><div><span>Delivery</span><b>2 business days</b></div><div><span>Format</span><b>3–5 page PDF</b></div><div><span>Revision</span><b>One included</b></div></div></aside>
    <div>
      {paid && <div className="payment-success" role="status"><b>Payment completed.</b> Send the scope form below so we can confirm your question and start the delivery clock. A payment return alone does not transmit this form.</div>}
      <div className="checkout-box"><h2>Secure checkout</h2><p>Payment is processed by Stripe. If your question cannot be accepted as scoped, the $250 payment will be refunded.</p><a className="button primary" href={checkout}>Pay $250 securely</a></div>
      <form className="request-form" onSubmit={submit}>
        <span className="eyebrow">SCOPE YOUR BRIEF</span><p className="form-note"><b>Prefer to confirm fit before paying?</b> Send this form first. We reply by email; no research begins until payment and written scope confirmation.</p>
        <label><span>Your name</span><input required autoComplete="name" value={draft.name} onChange={(e) => update("name", e.target.value)} /></label>
        <label><span>Work email</span><input required type="email" autoComplete="email" value={draft.email} onChange={(e) => update("email", e.target.value)} /></label>
        <label><span>Company</span><input required autoComplete="organization" value={draft.company} onChange={(e) => update("company", e.target.value)} /></label>
        <label><span>Capability in one sentence</span><textarea required value={draft.capability} onChange={(e) => update("capability", e.target.value)} /></label>
        <label><span>One public opportunity or teaming question</span><textarea required value={draft.question} onChange={(e) => update("question", e.target.value)} placeholder="Include public links where useful. Do not paste non-public material." /></label>
        <label className="checkbox-line"><input required type="checkbox" /><span>I confirm this contains public, approved information only—no CUI, export-controlled material, credentials, or proprietary customer data.</span></label>
        <button className="button primary" type="submit">Open scope in email</button>
        <div className="fallback-box">Mail app did not open? Email <a href={`mailto:${inbox}`}><b>{inbox}</b></a> or <button type="button" onClick={copyRequest}>{copied ? "scope copied" : "copy the complete scope"}</button>. Your draft stays on this device. This page does not claim it was received until you send the email.</div>
      </form>
    </div>
  </section>;
}
