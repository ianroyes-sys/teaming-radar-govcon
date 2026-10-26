export type EvidenceState = "verified" | "analyst" | "demo";
export type Confidence = "high" | "medium" | "low";

export type Factor = {
  label: string;
  score: number;
  weight: number;
  reason: string;
};

export type Source = {
  label: string;
  publisher: string;
  url: string;
  checked: string;
  state: EvidenceState;
  confidence: Confidence;
};

export type Pursuit = {
  slug: string;
  title: string;
  agency: string;
  vehicle: string;
  noticeType: string;
  place: string;
  responseDate: string;
  daysLeft: number;
  score: number;
  confidence: Confidence;
  state: EvidenceState;
  synopsis: string;
  recommendation: string;
  size: string;
  naics: string[];
  capabilities: string[];
  factors: Factor[];
  sources: Source[];
  openQuestions: string[];
  teamingMove: string;
};
