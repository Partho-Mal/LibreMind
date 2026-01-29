// frontend/app/(site)/method/page.tsx

export default function MethodPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      
      {/* 1. Manifesto Header */}
      <div className="max-w-3xl mx-auto text-center mb-24">
        <span className="inline-block rounded-full border border-[#dbf26e]/30 bg-[#dbf26e]/10 px-4 py-1.5 font-mono text-xs text-[#dbf26e] mb-8">
          The Philosophy
        </span>
        <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-8">
          We don't fix you. <br />
          We listen to you.
        </h1>
        <p className="text-xl text-[#888] leading-relaxed">
          Most mental health apps try to gamify your sadness. We took a different approach: Radical Presence.
        </p>
      </div>

      {/* 2. The Core Pillars */}
      <div className="max-w-[1000px] mx-auto space-y-32">
        
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
             <span className="text-8xl font-bold text-[#111] leading-none select-none">01</span>
          </div>
          <div className="md:w-2/3 pt-4">
             <h2 className="text-3xl text-white font-medium mb-6">The "Eliza" Effect, Modernized</h2>
             <p className="text-[#888] text-lg leading-relaxed">
               In the 1960s, a simple script named ELIZA proved that humans find comfort in merely being heard. LibreMind scales this concept using LLMs. We don't diagnose; we mirror your thoughts back to you, allowing you to find your own clarity through articulation.
             </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
             <span className="text-8xl font-bold text-[#111] leading-none select-none">02</span>
          </div>
          <div className="md:w-2/3 pt-4">
             <h2 className="text-3xl text-white font-medium mb-6">3D Visual Anchoring</h2>
             <p className="text-[#888] text-lg leading-relaxed">
               Anxiety often feels like floating in a void. By providing a 3D visual anchor (the Avatar) that breathes and moves, we give your mind a focal point. This technique, known as visual grounding, reduces the cognitive load of a panic attack.
             </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
             <span className="text-8xl font-bold text-[#111] leading-none select-none">03</span>
          </div>
          <div className="md:w-2/3 pt-4">
             <h2 className="text-3xl text-white font-medium mb-6">Sovereign Data</h2>
             <p className="text-[#888] text-lg leading-relaxed">
               You cannot heal if you are being watched. Our architecture ensures that your raw conversation logs remain encrypted. We train our global models on anonymous aggregates, never your personal story.
             </p>
          </div>
        </div>

      </div>

    </div>
  );
}