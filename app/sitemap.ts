import type { MetadataRoute } from "next";
import { pursuits } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://radar.royzmediagroup.com"; return ["", "/radar", "/watchlist", "/brief", "/onboarding", "/request", "/privacy", "/terms", ...pursuits.map((p) => `/dossiers/${p.slug}`)].map((path) => ({ url: `${base}${path}`, lastModified: new Date("2026-08-31"), changeFrequency: "weekly" as const })); }
