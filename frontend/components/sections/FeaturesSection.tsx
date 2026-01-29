// frontend/sections/FeaturesSection.tsx
'use client';

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-[#050505] px-6 py-32 relative">
      
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-between max-w-[1400px] mx-auto px-6 opacity-10">
        <div className="w-px h-full bg-white/20" />
        <div className="w-px h-full bg-white/20 hidden md:block" />
        <div className="w-px h-full bg-white/20 hidden lg:block" />
        <div className="w-px h-full bg-white/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        
        {/* Header */}
        <div className="mb-24 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start gap-6">
          <span className="text-xs font-mono text-[#dbf26e] uppercase tracking-widest">
            [ 001 — Capabilities ]
          </span>
          <h2 className="max-w-xl text-4xl font-medium tracking-tighter text-white md:text-5xl">
            Designed to feel less like software, and more like <span className="text-[#666]">space.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2 h-auto md:h-[600px]">
          
          {/* Card 1: 3D Companion Visualizer */}
          <div className="group relative col-span-1 md:col-span-2 row-span-2 overflow-hidden rounded-3xl border border-white/5 bg-[#0A0A0A] p-10 transition hover:border-white/10">
            <div className="relative z-10 mb-8">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/5 px-3 py-1 text-xs text-white backdrop-blur-md border border-white/5">
                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-[#dbf26e] animate-pulse" />
                Active Listening Core
              </div>
              <h3 className="text-3xl font-medium text-white tracking-tight">The 3D Companion</h3>
              <p className="mt-4 max-w-sm text-[#888]">
                Most chat apps feel flat. LibreMind renders a subtle 3D presence 
                that reacts to your tone, grounding you in the moment.
              </p>
            </div>
            
             <div className="relative mt-auto h-64 w-full overflow-hidden rounded-2xl border border-white/5 bg-[#050505]">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2)' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-24 w-24">
                        <div className="absolute inset-0 rounded-full bg-[#dbf26e] blur-[60px] opacity-20 animate-pulse" />
                        <div className="absolute inset-0 rounded-full border border-[#dbf26e]/30 bg-[#dbf26e]/5 backdrop-blur-sm flex items-center justify-center">
                             <div className="h-16 w-16 rounded-full border border-[#dbf26e]/50 bg-transparent animate-[spin_10s_linear_infinite]" />
                        </div>
                    </div>
                </div>
                 <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-1 pb-8 opacity-50">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-2 rounded-t-full bg-gradient-to-t from-transparent to-[#dbf26e]/50" style={{ height: `${20 + Math.random() * 60}%`, animation: `pulse 1.5s ease-in-out infinite ${i * 0.1}s alternate` }} />
                    ))}
                </div>
            </div>
          </div>

          {/* Card 2: Encrypted Vault */}
          <div className="relative col-span-1 rounded-3xl bg-[#111] p-8 border border-white/5 transition hover:bg-[#151515] group">
            <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:text-[#dbf26e] group-hover:scale-110 transition-all">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h3 className="text-xl font-medium text-white">Encrypted Vault</h3>
            <p className="mt-2 text-sm text-[#888]">
              Your thoughts stay on your device. We use local-first storage protocols.
            </p>
          </div>

          {/* Card 3: Matcha Accent Stat */}
          <a 
            href="/auth/signup"
            className="relative col-span-1 rounded-3xl bg-[#dbf26e] p-8 flex flex-col justify-center text-black cursor-pointer block group transition-colors"
          >
            <h3 className="text-5xl font-semibold tracking-tighter">14k+</h3>
            <p className="text-sm font-medium opacity-80">
              Sessions this month.
            </p>
            
            <div className="mt-auto pt-6 border-t border-black/10 flex justify-between items-center text-xs font-medium uppercase tracking-wider transition-colors text-neutral-800 group-hover:text-black group-hover:border-black/30">
               
               {/* TEXT: Slides slightly right (translate-x-1) */}
               <span className="transition-transform duration-300 group-hover:translate-x-1">
                 Join the movement
               </span>
               
               {/* ARROW: Slides further right (translate-x-2) */}
               <span className="transition-transform duration-300 group-hover:translate-x-2">
                 →
               </span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}