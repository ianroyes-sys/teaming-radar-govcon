import { ProfileForm } from "@/components/profile-form";
export const metadata = { title: "Capability profile" };
export default function OnboardingPage() { return <div className="workspace shell form-shell"><header className="workspace-header"><div><span className="eyebrow">CAPABILITY PROFILE · STEP 1 OF 1</span><h1>Tell the radar what is real.</h1><p>A narrow, provable profile produces better teaming paths than a long capability list.</p></div></header><ProfileForm /></div>; }
