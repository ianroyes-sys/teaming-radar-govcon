import { WatchlistView } from "@/components/watchlist-view";
export const metadata = { title: "Watchlist" };
export default function WatchlistPage() { return <div className="workspace shell narrow"><header className="workspace-header"><div><span className="eyebrow">LOCAL WATCHLIST</span><h1>Signals worth watching</h1><p>Saved only in this browser for the zero-cost MVP.</p></div></header><WatchlistView /></div>; }
