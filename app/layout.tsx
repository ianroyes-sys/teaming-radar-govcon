import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  metadataBase: new URL("https://radar.royzmediagroup.com"),
  title: { default: "Teaming Radar — Huntsville pursuit intelligence", template: "%s · Teaming Radar" },
  description: "Transparent, source-aware teaming intelligence for small businesses in the Redstone ecosystem.",
  openGraph: { title: "Teaming Radar", description: "See where your capabilities fit before the window closes.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Nav /><main id="main">{children}</main><footer><div><span className="brand-footer">TEAMING RADAR</span><p>Decision support for the Huntsville mission ecosystem.</p><nav className="footer-links" aria-label="Legal"><a href="mailto:contact@royzmediagroup.com">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></nav></div><p className="legal">Independent research product by Royz Media Group LLC. Not affiliated with the U.S. government. Records may include analyst hypotheses or demonstrations and never imply an award guarantee.</p></footer></body></html>;
}
