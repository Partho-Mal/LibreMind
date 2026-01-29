// frontend/app/dashboard/(main)/profile/page.tsx

import { createClient } from "@/lib/supabase/server";
import { User, Clock, Zap, BrainCircuit } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/auth/login");

  // Fetch full profile
  const { data: profile } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();

  const joinedDate = new Date(profile?.created_at).toLocaleDateString("en-US", { month: "long", year: "numeric" });

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      
      {/* 1. Header */}
      <div className="flex items-end justify-between border-b border-white/5 pb-8">
        <div>
          <span className="font-mono text-xs text-[#dbf26e] uppercase tracking-widest mb-2 block">
            [ Identity ]
          </span>
          <h1 className="text-4xl font-medium text-white tracking-tight">
            {profile?.full_name}
          </h1>
          <p className="mt-2 text-[#666] font-mono text-xs">
            ID: {user.id.slice(0, 8)}... • Joined {joinedDate}
          </p>
        </div>
        <div className="h-16 w-16 rounded-full border border-white/10 bg-[#111] flex items-center justify-center text-[#dbf26e]">
          <User size={32} />
        </div>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Sessions", value: "12", icon: Zap, color: "text-[#dbf26e]" },
          { label: "Time Spoken", value: "4.2 hrs", icon: Clock, color: "text-blue-400" },
          { label: "Mental Clarity", value: "85%", icon: BrainCircuit, color: "text-purple-400" },
        ].map((stat, i) => (
          <div key={i} className="p-8 rounded-3xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-xs text-[#666] font-mono uppercase tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* 3. The "Memory Core" (Mockup) */}
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-white">Neural Pattern Memory</h3>
        <div className="rounded-3xl border border-white/5 bg-[#0A0A0A] p-8">
            <p className="text-[#888] mb-6 max-w-2xl">
              LibreMind abstractly remembers key themes from your conversations to provide better support. This data is encrypted and stored locally.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {["Work Stress", "Creative Anxiety", "Sleep Patterns", "Goal Setting", "Mindfulness"].map((tag, i) => (
                <div key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-[#AAA] hover:text-white hover:border-[#dbf26e]/50 transition-colors cursor-default">
                  {tag}
                </div>
              ))}
            </div>
        </div>
      </div>

    </div>
  );
}