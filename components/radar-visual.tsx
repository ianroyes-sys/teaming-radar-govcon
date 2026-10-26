import { pursuits } from "@/lib/data";

export function RadarVisual() {
  return <div className="radar-visual" aria-label="Four pursuits plotted by fit and confidence">
    <span className="radar-axis axis-x" /><span className="radar-axis axis-y" /><span className="radar-sweep" />
    {pursuits.map((p, index) => <span key={p.slug} className={`radar-blip blip-${index + 1}`} title={`${p.title}: ${p.score}% fit`}><i />{index === 0 ? <b>{p.score}</b> : null}</span>)}
    <span className="radar-center" /><small className="radar-label label-fit">HIGH FIT</small><small className="radar-label label-signal">SIGNAL RANGE</small>
  </div>;
}
