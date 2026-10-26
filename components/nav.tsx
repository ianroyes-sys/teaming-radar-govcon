import Link from "next/link";
import { RadarIcon } from "./icons";

export function Nav() {
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="Teaming Radar home"><span className="brand-mark"><RadarIcon /></span><span>TEAMING <b>RADAR</b></span></Link>
    <nav aria-label="Primary navigation">
      <Link href="/radar">Radar</Link><Link href="/watchlist">Watchlist</Link><Link href="/brief">Brief</Link><Link href="/research">Research</Link>
    </nav>
    <Link className="profile-link" href="/onboarding">Royz Media <span className="profile-dot" /></Link>
  </header>;
}
