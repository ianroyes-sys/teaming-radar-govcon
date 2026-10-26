import type { Pursuit } from "./types";

export const companyProfile = {
  name: "Royz Media Group LLC",
  location: "Huntsville, Alabama",
  capabilities: ["AI workflow design", "digital modernization", "technical content", "rapid prototyping"],
  targetRoles: ["subcontractor", "specialist partner"],
};

export const pursuits: Pursuit[] = [
  {
    slug: "missile-digital-engineering-support",
    title: "Missile digital engineering support",
    agency: "Army / Redstone ecosystem",
    vehicle: "Market research signal",
    noticeType: "Sources sought pattern",
    place: "Redstone Arsenal, AL",
    responseDate: "2026-09-18",
    daysLeft: 23,
    score: 92,
    confidence: "medium",
    state: "analyst",
    synopsis: "A plausible specialist teaming lane around knowledge workflows, model documentation, and AI-assisted engineering operations.",
    recommendation: "Pursue discovery",
    size: "Likely unrestricted prime; small-business teaming lane",
    naics: ["541330", "541512", "541715"],
    capabilities: ["Digital engineering", "MBSE", "AI workflows", "Technical documentation"],
    factors: [
      { label: "Capability overlap", score: 96, weight: 35, reason: "Three stated capabilities map to a support workstream." },
      { label: "Buyer proximity", score: 100, weight: 20, reason: "Likely performance footprint is in Huntsville." },
      { label: "Teaming access", score: 82, weight: 20, reason: "Multiple local incumbents could need a specialist partner." },
      { label: "Timing", score: 78, weight: 15, reason: "Market shaping appears possible before a formal solicitation." },
      { label: "Evidence quality", score: 66, weight: 10, reason: "Pattern is public, but this record is an analyst scenario." }
    ],
    sources: [
      { label: "SAM.gov Contract Opportunities", publisher: "U.S. General Services Administration", url: "https://sam.gov/content/opportunities", checked: "2026-08-26", state: "verified", confidence: "high" },
      { label: "Redstone contracting pattern synthesis", publisher: "Teaming Radar research desk", url: "#research-note", checked: "2026-08-26", state: "analyst", confidence: "medium" }
    ],
    openQuestions: ["Which prime owns the closest vehicle?", "Is CUI expected in the support workflow?", "What is the anticipated acquisition timeline?"],
    teamingMove: "Ask 3 local digital-engineering primes for a 20-minute capability-gap call; lead with workflow prototyping, not generic AI consulting."
  },
  {
    slug: "space-domain-data-operations",
    title: "Space domain data operations",
    agency: "Space and Missile Defense ecosystem",
    vehicle: "Forecasted requirement",
    noticeType: "Pipeline hypothesis",
    place: "Huntsville, AL",
    responseDate: "2026-10-02",
    daysLeft: 37,
    score: 87,
    confidence: "low",
    state: "demo",
    synopsis: "A demo pursuit showing how Teaming Radar evaluates a data-operations support need before verified notice data is attached.",
    recommendation: "Validate first",
    size: "Unknown",
    naics: ["541511", "541519"],
    capabilities: ["Data operations", "AI workflows", "Visualization", "Rapid prototyping"],
    factors: [
      { label: "Capability overlap", score: 91, weight: 35, reason: "Strong technical alignment with the current profile." },
      { label: "Buyer proximity", score: 95, weight: 20, reason: "Huntsville-based mission ecosystem." },
      { label: "Teaming access", score: 72, weight: 20, reason: "Access depends on identifying a funded prime." },
      { label: "Timing", score: 84, weight: 15, reason: "Early enough to shape a partner conversation." },
      { label: "Evidence quality", score: 35, weight: 10, reason: "Demo record; verify before action." }
    ],
    sources: [{ label: "Illustrative research record", publisher: "Teaming Radar", url: "#demo", checked: "2026-08-26", state: "demo", confidence: "low" }],
    openQuestions: ["Does a funded requirement exist?", "Which organization owns the mission need?", "What data sensitivity applies?"],
    teamingMove: "Use only as a research prompt until a primary source confirms the requirement."
  },
  {
    slug: "aviation-maintenance-knowledge-modernization",
    title: "Aviation maintenance knowledge modernization",
    agency: "Army aviation ecosystem",
    vehicle: "Incumbent-adjacent",
    noticeType: "Recompete signal",
    place: "Redstone Arsenal, AL",
    responseDate: "2026-09-11",
    daysLeft: 16,
    score: 81,
    confidence: "medium",
    state: "analyst",
    synopsis: "Potential subcontracting support for modernizing maintenance knowledge, search, and controlled technical-content workflows.",
    recommendation: "Map incumbents",
    size: "Mid-to-large prime opportunity",
    naics: ["541512", "541611"],
    capabilities: ["Knowledge systems", "Technical content", "Search workflows"],
    factors: [
      { label: "Capability overlap", score: 88, weight: 35, reason: "Technical content and workflow capabilities align." },
      { label: "Buyer proximity", score: 100, weight: 20, reason: "Local mission and contractor base." },
      { label: "Teaming access", score: 68, weight: 20, reason: "Incumbent map is incomplete." },
      { label: "Timing", score: 61, weight: 15, reason: "Near-term signal reduces shaping time." },
      { label: "Evidence quality", score: 63, weight: 10, reason: "Analyst synthesis awaiting primary-source linkage." }
    ],
    sources: [{ label: "Acquisition pattern research note", publisher: "Teaming Radar research desk", url: "#research-note", checked: "2026-08-25", state: "analyst", confidence: "medium" }],
    openQuestions: ["Who is the incumbent?", "Is the work a standalone task order?", "Can unclassified prototypes demonstrate value?"],
    teamingMove: "Build a one-page modernization concept and approach likely primes before the final requirement firms up."
  },
  {
    slug: "small-business-outreach-content-ops",
    title: "Small-business outreach content operations",
    agency: "Federal mission-support offices",
    vehicle: "Micro-purchase lane",
    noticeType: "Direct buyer hypothesis",
    place: "North Alabama",
    responseDate: "2026-10-16",
    daysLeft: 51,
    score: 74,
    confidence: "low",
    state: "demo",
    synopsis: "A low-complexity service wedge: event content, supplier communications, and accessible digital materials for outreach programs.",
    recommendation: "Test offer",
    size: "Possible simplified acquisition",
    naics: ["541613", "541810"],
    capabilities: ["Technical content", "Digital communications", "Rapid delivery"],
    factors: [
      { label: "Capability overlap", score: 94, weight: 35, reason: "Direct match to Royz Media Group delivery strengths." },
      { label: "Buyer proximity", score: 88, weight: 20, reason: "Dense local federal ecosystem." },
      { label: "Teaming access", score: 45, weight: 20, reason: "Buyer and contracting path are unverified." },
      { label: "Timing", score: 76, weight: 15, reason: "Can be offered year-round." },
      { label: "Evidence quality", score: 28, weight: 10, reason: "Demo hypothesis, not a live notice." }
    ],
    sources: [{ label: "Illustrative offer hypothesis", publisher: "Teaming Radar", url: "#demo", checked: "2026-08-26", state: "demo", confidence: "low" }],
    openQuestions: ["Which offices buy this directly?", "Does Royz need a SAM registration first?", "What past performance can support the offer?"],
    teamingMove: "Interview small-business liaison offices; do not represent this as an open procurement."
  }
];

export function getPursuit(slug: string) {
  return pursuits.find((p) => p.slug === slug);
}
