import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: "/research" }, sitemap: "https://radar.royzmediagroup.com/sitemap.xml" }; }
