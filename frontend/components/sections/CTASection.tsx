// frontend/sections/CTASection.tsx
'use client';

export default function CTASection() {
  return (
    <section className="relative w-full border-t border-white/5 bg-[#050505] py-32 px-6">
       
       {/* Background Grid */}
       <div className="absolute inset-0 pointer-events-none z-0 flex justify-between max-w-[1400px] mx-auto px-6 opacity-10">
        <div className="w-px h-full bg-white/20" />
        <div className="w-px h-full bg-white/20 hidden md:block" />
        <div className="w-px h-full bg-white/20 hidden lg:block" />
        <div className="w-px h-full bg-white/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] rounded-3xl border border-white/10 bg-gradient-to-b from-[#111] to-[#000] p-12 text-center md:p-24 overflow-hidden">
        
        {/* Subtle Glow behind text */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none" />

        <span className="relative mb-8 block font-mono text-xs text-[#dbf26e] uppercase tracking-widest">
          [ 003 — Initialize ]
        </span>
        
        <h2 className="relative mb-6 text-5xl font-bold tracking-tighter text-white md:text-7xl">
          Your safe space <br />
          is waiting.
        </h2>
        
        <p className="relative mx-auto mb-10 max-w-lg text-lg text-[#888]">
          Join thousands who use LibreMind to decompress, reflect, 
          and heal. No credit card required.
        </p>

        <div className="relative flex flex-col items-center justify-center gap-4">
            <a 
            href="/auth/signup" 
            className="inline-flex h-16 items-center rounded-full bg-white px-10 text-lg font-bold text-black shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] transition-all hover:scale-105 hover:bg-[#dbf26e] hover:shadow-[0_0_40px_-10px_rgba(219,242,110,0.4)]"
            >
            Create Free Account
            </a>
            <span className="text-xs text-[#555] mt-4 font-mono uppercase tracking-wide">
                Encrypted • Private • Free Tier Available
            </span>
        </div>

      </div>
    </section>
  );
}