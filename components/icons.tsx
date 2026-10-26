import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
const base = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
export function RadarIcon(props: IconProps) { return <svg {...base} {...props}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12 19 7M12 3v2M21 12h-2M12 21v-2M3 12h2"/></svg>; }
export function ArrowIcon(props: IconProps) { return <svg {...base} {...props}><path d="M5 12h14M13 6l6 6-6 6"/></svg>; }
export function BookmarkIcon(props: IconProps) { return <svg {...base} {...props}><path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4Z"/></svg>; }
export function FileIcon(props: IconProps) { return <svg {...base} {...props}><path d="M6 3h8l4 4v14H6zM14 3v5h4M9 13h6M9 17h5"/></svg>; }
export function CheckIcon(props: IconProps) { return <svg {...base} {...props}><path d="m5 12 4 4L19 6"/></svg>; }
export function ExternalIcon(props: IconProps) { return <svg {...base} {...props}><path d="M14 4h6v6M20 4l-9 9M18 13v6H5V6h6"/></svg>; }
