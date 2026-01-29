// frontend/app/(site)/features/page.tsx
import { Mic, Lock, Box, Zap, Activity, Globe } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      title: "Spatial Presence",
      desc: "LibreMind isn't a text box. It is a 3D entity that occupies digital space, providing a sense of 'being there' that text alone cannot achieve.",
      icon: Box,
    },
    {
      title: "Tone Analysis",
      desc: "Our audio engine doesn't just transcribe words; it detects hesitation, speed, and volume to understand *how* you are feeling, not just what you say.",
      icon: Mic,
    },
    {
      title: "Local-First Memory",
      desc: "Your conversation history is encrypted and stored locally on your device by default. We cannot read your deep secrets, and we don't want to.",
      icon: Lock,
    },
    {
      title: "Real-Time Latency",
      desc: "Built on an edge network to ensure conversation flows naturally, with response times under 200ms for a lifelike cadence.",
      icon: Zap,
    },
    {
      title: "Biometric Sync",
      desc: "(Coming Soon) Connect with Apple Health or Google Fit to correlate your mood patterns with sleep and heart rate data.",
      icon: Activity,
    },
    {
      title: "Offline Mode",
      desc: "The core emotional support model can run directly in the browser, allowing you to find support even without an internet connection.",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      
      {/* 1. Header */}
      <div className="max-w-[1200px] mx-auto mb-24">
        <span className="font-mono text-xs text-[#dbf26e] uppercase tracking-widest mb-4 block">
          [ System Capabilities ]
        </span>
        <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-tight">
          More than code. <br />
          <span className="text-[#666]">A digital entity.</span>
        </h1>
      </div>

      {/* 2. Feature Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {features.map((item, i) => (
          <div key={i} className="group border-t border-white/10 pt-8 transition-colors hover:border-[#dbf26e]">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-[#dbf26e] transition-transform group-hover:scale-110 group-hover:bg-[#dbf26e] group-hover:text-black">
              <item.icon size={24} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#dbf26e] transition-colors">
              {item.title}
            </h3>
            <p className="text-[#888] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}