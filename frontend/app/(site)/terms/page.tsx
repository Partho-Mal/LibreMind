// frontend/app/(site)/terms/page.tsx
import Link from "next/link";
import { ArrowLeft, AlertTriangle, FileText, CheckCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      
       <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT: Sidebar */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <Link href="/" className="inline-flex items-center gap-2 text-[#666] hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 space-y-6">
             <div className="flex items-center gap-3 text-[#dbf26e]">
               <FileText size={24} />
               <span className="font-mono text-xs uppercase tracking-widest">Agreement</span>
             </div>
             <p className="text-sm text-[#888] leading-relaxed">
               By using LibreMind, you agree to these terms. Please read the Medical Disclaimer carefully.
             </p>
             <div className="pt-4 text-xs text-[#555] font-mono">
               Effective: January 30, 2026
             </div>
          </div>
        </div>

        {/* RIGHT: Legal Text */}
        <div className="lg:col-span-8">
          
          {/* CRITICAL MEDICAL DISCLAIMER BOX */}
          <div className="mb-12 rounded-2xl border border-red-500/20 bg-red-900/10 p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-red-500 mt-1 shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-medium text-red-500 mb-2">Not a Medical Device</h3>
                <p className="text-red-200/80 leading-relaxed">
                  LibreMind is an AI wellness companion, <strong>not a doctor or licensed therapist</strong>. 
                  It cannot diagnose mental health conditions or prescribe medication. 
                  If you are in crisis or having thoughts of self-harm, please close this app and call emergency services immediately.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">Terms of Service</h1>
            <p className="text-xl text-[#888]">
              The rules of engagement for our digital space.
            </p>
          </div>

          <div className="space-y-12 text-[#A1A1AA] leading-relaxed">
            
            <Section title="1. Acceptance of Terms">
              <p>
                By creating an account or accessing LibreMind, you confirm that you are at least 18 years old and capable of entering into a binding contract. If you do not agree to these terms, you must not use our services.
              </p>
            </Section>

            <Section title="2. Acceptable Use">
              <p>
                You agree to use LibreMind only for lawful purposes. You represent, warrant, and agree that you will not:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-[#dbf26e]">
                <li>Use the service to generate hate speech, violence, or illegal content.</li>
                <li>Attempt to reverse engineer the 3D rendering engine or AI prompts.</li>
                <li>Use the service to provide medical advice to others.</li>
                <li>Share your account credentials with third parties.</li>
              </ul>
            </Section>

            <Section title="3. AI Limitations">
              <p>
                You acknowledge that:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-[#dbf26e]">
                <li>LibreMind is powered by Artificial Intelligence and may occasionally generate incorrect or "hallucinated" information.</li>
                <li>The AI's responses are generated based on patterns, not conscious thought or medical training.</li>
                <li>We are not liable for any actions you take based on advice provided by the AI.</li>
              </ul>
            </Section>

            <Section title="4. Intellectual Property">
              <p>
                The "LibreMind" name, the 3D avatar design, and the source code are the exclusive property of LibreMind Inc. 
                However, you retain full ownership of the text content of your personal chat history.
              </p>
            </Section>

            <Section title="5. Termination">
              <p>
                We reserve the right to suspend or terminate your account at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </Section>

            <Section title="6. Liability">
              <p>
                To the maximum extent permitted by law, LibreMind Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
            </Section>

          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-medium text-white mb-4">{title}</h2>
      <div className="text-lg font-light">{children}</div>
    </section>
  );
}