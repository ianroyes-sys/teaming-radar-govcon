"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowIcon, CheckIcon } from "./icons";

const defaults = ["AI workflow design", "digital modernization", "technical content", "rapid prototyping"];
export function ProfileForm() {
  const [saved, setSaved] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const data = new FormData(event.currentTarget); localStorage.setItem("teaming-radar-profile-v1", JSON.stringify(Object.fromEntries(data))); setSaved(true); }
  if (saved) return <div className="success-state"><span><CheckIcon /></span><h2>Profile staged.</h2><p>Your inputs are stored only in this browser. The demo radar still uses the curated Royz Media baseline until live persistence is connected.</p><Link className="button primary" href="/radar">Open ranked radar <ArrowIcon /></Link><button className="button text-button" onClick={() => setSaved(false)}>Edit profile</button></div>;
  return <form className="profile-form" onSubmit={submit}>
    <div className="field-grid"><label><span>Business name</span><input name="company" defaultValue="Royz Media Group LLC" required /></label><label><span>Target market</span><input name="market" defaultValue="Huntsville defense ecosystem" required /></label></div>
    <fieldset><legend>Capabilities</legend><p>Select what you can demonstrate today—not what you hope to offer later.</p><div className="check-grid">{[...defaults, "data engineering", "cybersecurity", "systems engineering", "program management"].map((c) => <label className="check-card" key={c}><input type="checkbox" name={`capability:${c}`} defaultChecked={defaults.includes(c)} /><span><CheckIcon />{c}</span></label>)}</div></fieldset>
    <fieldset><legend>Preferred role</legend><div className="radio-row"><label><input type="radio" name="role" value="subcontractor" defaultChecked /> Subcontractor</label><label><input type="radio" name="role" value="direct" /> Direct vendor</label><label><input type="radio" name="role" value="both" /> Both</label></div></fieldset>
    <label><span>Proof you can share publicly</span><textarea name="proof" placeholder="Example: Built an unclassified workflow prototype that reduced a 4-hour research task to 30 minutes." /></label>
    <div className="privacy-note"><b>Keep sensitive data out.</b> Do not enter CUI, export-controlled information, credentials, or non-public customer details.</div>
    <button className="button primary" type="submit">Save local profile <ArrowIcon /></button>
  </form>;
}
