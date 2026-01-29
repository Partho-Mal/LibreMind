// frontend/sections/ContactSection.tsx
'use client';

export default function ContactSection() {
  return (
    <section className="relative w-full border-t border-white/5 bg-[#050505] py-32 px-6">
      
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-between max-w-[1400px] mx-auto px-6 opacity-10">
        <div className="w-px h-full bg-white/20" />
        <div className="w-px h-full bg-white/20 hidden md:block" />
        <div className="w-px h-full bg-white/20 hidden lg:block" />
        <div className="w-px h-full bg-white/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Column: Heading & Info */}
        <div className="lg:col-span-5">
           <span className="mb-6 block font-mono text-xs text-[#dbf26e] uppercase tracking-widest">
            [ 004 — Transmission ]
          </span>
          <h2 className="mb-8 text-5xl font-medium tracking-tighter text-white leading-none">
            We’re here to <br/>
            <span className="text-[#666]">listen.</span>
          </h2>
          <p className="mb-12 text-lg text-[#888] leading-relaxed max-w-md">
            Whether you have a feature request, a privacy question, or just want to share your story — direct lines are open.
          </p>
          
          <div className="flex flex-col gap-4">
            <a href="mailto:support@libremind.in" className="group flex items-center gap-3 text-white transition-colors hover:text-[#dbf26e]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-[#dbf26e] group-hover:bg-[#dbf26e] group-hover:text-black">
                @
              </div>
              <span className="text-lg">support@libremind.in</span>
            </a>
            
            <div className="mt-8 flex gap-8">
               {['Twitter', 'Instagram', 'LinkedIn'].map((link) => (
                 <a key={link} href="#" className="font-mono text-xs text-[#666] hover:text-white uppercase transition-colors">
                   {link}
                 </a>
               ))}
            </div>
          </div>
        </div>

        {/* Right Column: The "Editorial" Form */}
        <div className="lg:col-span-7">
          <form className="flex flex-col gap-12">
            
            {/* Email Input */}
            <div className="group relative">
              <label htmlFor="email" className="mb-2 block font-mono text-xs text-[#555] uppercase">
                Your Signal (Email)
              </label>
              <input 
                type="email" 
                id="email"
                placeholder="you@example.com" 
                className="w-full border-b border-white/20 bg-transparent py-4 text-2xl text-white placeholder-[#333] transition-all focus:border-[#dbf26e] focus:outline-none focus:placeholder-[#555]"
              />
            </div>

            {/* Message Input */}
            <div className="group relative">
              <label htmlFor="message" className="mb-2 block font-mono text-xs text-[#555] uppercase">
                Transmission (Message)
              </label>
              <textarea 
                id="message"
                rows={4}
                placeholder="Tell us what's on your mind..." 
                className="w-full resize-none border-b border-white/20 bg-transparent py-4 text-2xl text-white placeholder-[#333] transition-all focus:border-[#dbf26e] focus:outline-none focus:placeholder-[#555]"
              />
            </div>

            {/* Submit Action */}
            <div className="flex items-center justify-end pt-4">
              <button 
                type="submit"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-transform hover:bg-[#dbf26e] hover:scale-105"
              >
                <span>Send Message</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}