import type { Confidence, EvidenceState } from "@/lib/types";

export function EvidenceBadge({ state }: { state: EvidenceState }) {
  const labels = { verified: "Verified fact", analyst: "Analyst hypothesis", demo: "Demo record" };
  return <span className={`badge badge-${state}`}>{labels[state]}</span>;
}

export function ConfidenceBadge({ confidence }: { confidence: Confidence }) {
  return <span className="confidence">{confidence} confidence</span>;
}
