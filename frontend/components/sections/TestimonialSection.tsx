// frontend/sections/TestimonialSection.tsx
'use client';
export default function TestimonialSection() {
  return (
    <section className="relative w-full border-t border-white/5 bg-[#050505] py-32 px-6">
      
       {/* Grid Lines */}
       <div className="absolute inset-0 pointer-events-none z-0 flex justify-between max-w-[1400px] mx-auto px-6 opacity-10">
        <div className="w-px h-full bg-white/20" />
        <div className="w-px h-full bg-white/20 hidden md:block" />
        <div className="w-px h-full bg-white/20 hidden lg:block" />
        <div className="w-px h-full bg-white/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <span className="mb-12 block font-mono text-xs text-[#dbf26e] uppercase tracking-widest">
          [ 002 — Community ]
        </span>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {[
            { text: "It doesn't try to fix me. It just sits with me. That distinction changed everything.", id: "8922" },
            { text: "The first AI that feels like a quiet room, not a search engine.", id: "4401" },
            { text: "I use it between meetings to decompress. My digital sanctuary.", id: "1209" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col justify-between border-l border-white/10 pl-8 h-full group transition-colors hover:border-[#dbf26e]/50">
               <p className="text-xl leading-relaxed text-[#A1A1AA] group-hover:text-white transition-colors">
                 "{item.text}"
               </p>
               <div className="mt-8 flex items-center gap-4">
                 {/* Tech Avatar */}
                 <div className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-[#dbf26e]" />
                 </div>
                 <span className="text-xs font-mono text-[#666]">
                   USER_ID_{item.id}
                 </span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}