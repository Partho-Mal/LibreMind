// frontend/sections/HeroSection.tsx
'use client';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center px-6 pt-32 pb-20 overflow-hidden">
      
      {/* Background Grid */}
      <div className="swiss-grid">
        <div className="grid-line opacity-10" />
        <div className="grid-line hidden opacity-10 md:block" />
        <div className="grid-line hidden opacity-10 lg:block" />
        <div className="grid-line opacity-10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">
        
        {/* Top Tag */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dbf26e] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#dbf26e]"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-gray-300">
              Live 3D Companion • Online
            </span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[0.95] mb-6">
            Meet the AI that <br/>
            <span className="text-[#888888]">really listens.</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg text-[#A1A1AA]">
            A private, judgment-free space. Talk to your 3D companion, 
            track your mood, and find clarity in the digital quiet.
          </p>
        </div>

        {/* THE VIEWPORT */}
        <div className="relative mx-auto mb-16 h-[400px] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] shadow-2xl group">
            
            {/* 3D Context */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-64 w-64 transition-transform duration-700 group-hover:scale-105">
                    <div className="absolute inset-0 rounded-full bg-[#dbf26e] blur-[120px] opacity-10 animate-pulse" />
                    <div className="absolute inset-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center">
                       <span className="font-mono text-xs text-[#dbf26e] tracking-widest animate-pulse">
                         [ LISTENING... ]
                       </span>
                    </div>
                </div>
            </div>
            
            {/* Fake UI Elements */}
            <div className="absolute top-6 left-6 flex gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            
            {/* FIXED AUDIO WAVEFORM (No Hydration Error) */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-[#000000]/60 px-6 py-4 backdrop-blur-md">
                <div className="flex gap-1 items-end h-4">
                  {/* We use specific numbers instead of Math.random() to prevent hydration mismatch */}
                  {[40, 75, 55, 90, 30].map((height, i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-[#dbf26e] animate-pulse" 
                      style={{ 
                        height: `${height}%`, 
                        animationDelay: `${i * 0.1}s` 
                      }} 
                    />
                  ))}
                </div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  Secure Connection
                </div>
            </div>
        </div>

        {/* PRIMARY CTA */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          <a
            href="/auth/signup"
            className="group relative inline-flex h-14 min-w-[200px] items-center justify-center gap-2 overflow-hidden rounded-full bg-[#dbf26e] px-8 text-base font-bold text-black transition-all hover:bg-white hover:scale-105"
          >
            <span>Start Free Session</span>
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a
            href="/about"
            className="inline-flex h-14 min-w-[160px] items-center justify-center rounded-full border border-white/10 bg-transparent px-8 text-base font-medium text-white transition-colors hover:bg-white/10 hover:border-white/30"
          >
            How it works
          </a>
        </div>

      </div>
    </section>
  );
}