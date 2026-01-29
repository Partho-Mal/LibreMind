// frontend/app/dashboard/(main)/page.tsx

export const dynamic = "force-dynamic";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Activity, Calendar } from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { data: dbUser } = await supabase
    .from("users")
    .select("onboarding_completed, full_name")
    .eq("id", user.id)
    .single();

  if (!dbUser || !dbUser.onboarding_completed) {
    redirect("/dashboard/onboarding");
  }

  // Helper to get first name
  const firstName = dbUser.full_name?.split(" ")[0] || "Friend";

  return (
    <div className="space-y-12">
      
      {/* 1. HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs text-[#dbf26e] uppercase tracking-widest mb-2 block">
            [ Overview ]
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
            Good afternoon, <br/> 
            <span className="text-[#666]">{firstName}.</span>
          </h1>
        </div>

        <Link 
          href="/dashboard/chat"
          className="group flex items-center gap-3 bg-[#dbf26e] text-black px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 active:scale-95"
        >
          <span>New Session</span>
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
        </Link>
      </div>

      {/* 2. BENTO GRID STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Activity */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 transition-colors hover:border-white/20">
          <div className="flex items-start justify-between mb-8">
            <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white">
               <Activity className="h-5 w-5" />
            </div>
            <span className="text-xs font-mono text-[#666] uppercase">Real-time</span>
          </div>
          <div>
            <div className="text-3xl font-medium text-white mb-1">Stable</div>
            <div className="text-sm text-[#888]">Current mood trend</div>
          </div>
          {/* Decorative Graph Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#dbf26e] to-transparent opacity-50" />
        </div>

        {/* Card 2: History */}
        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 transition-colors hover:border-white/20">
          <div className="flex items-start justify-between mb-8">
             <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white">
               <Calendar className="h-5 w-5" />
            </div>
             <span className="text-xs font-mono text-[#666] uppercase">Streak</span>
          </div>
          <div>
            <div className="text-3xl font-medium text-white mb-1">3 Days</div>
            <div className="text-sm text-[#888]">Keep the momentum</div>
          </div>
        </div>

        {/* Card 3: Quick Tip (Matcha Accent) */}
        <div className="rounded-3xl bg-[#dbf26e] p-8 flex flex-col justify-between text-black">
          <div>
             <span className="font-mono text-xs uppercase tracking-widest opacity-60">Daily Insight</span>
             <p className="mt-4 text-lg font-medium leading-snug">
               "Silence isn't empty. It's full of answers."
             </p>
          </div>
          <div className="mt-6 flex justify-between items-center border-t border-black/10 pt-4">
             <span className="text-xs font-bold uppercase">Read More</span>
             <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

      </div>

      {/* 3. RECENT SECTION (Placeholder for list) */}
      <div className="border-t border-white/5 pt-8">
        <h3 className="text-lg font-medium text-white mb-6">Recent Sessions</h3>
        
        {/* Empty State / Placeholder Item */}
        <div className="rounded-2xl border border-white/5 bg-[#0A0A0A] p-4 flex items-center justify-between group hover:border-white/10 transition-colors cursor-pointer">
           <div className="flex items-center gap-4">
             <div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center text-[#666]">
               <span className="font-mono text-xs">01</span>
             </div>
             <div>
               <div className="text-white font-medium">Evening Reflection</div>
               <div className="text-xs text-[#666]">Yesterday • 14 mins</div>
             </div>
           </div>
           <ArrowUpRight className="h-4 w-4 text-[#444] group-hover:text-white transition-colors" />
        </div>

      </div>

    </div>
  );
}