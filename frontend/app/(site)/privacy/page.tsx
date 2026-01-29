// frontend/app/(site)/privacy/page.tsx
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, Database } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT: Navigation & Summary */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
          <Link href="/" className="inline-flex items-center gap-2 text-[#666] hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-6 space-y-6">
             <div className="flex items-center gap-3 text-[#dbf26e]">
               <Shield size={24} />
               <span className="font-mono text-xs uppercase tracking-widest">Privacy Core</span>
             </div>
             <p className="text-sm text-[#888] leading-relaxed">
               This document explains how LibreMind handles your data. In short: 
               <strong className="text-white"> You own your thoughts. We encrypt them.</strong>
             </p>
             
             <div className="space-y-3 pt-4 border-t border-white/5">
                <SummaryItem icon={Lock} text="End-to-end Encrypted Sessions" />
                <SummaryItem icon={Database} text="Local-First Storage Option" />
                <SummaryItem icon={Eye} text="No Ad Targeting" />
             </div>
             
             <div className="pt-4 text-xs text-[#555] font-mono">
               Last Updated: January 30, 2026
             </div>
          </div>
        </div>

        {/* RIGHT: Legal Text */}
        <div className="lg:col-span-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">Privacy Policy</h1>
            <p className="text-xl text-[#888]">
              We treat your mental health data with the same security standards as financial records.
            </p>
          </div>

          <div className="space-y-12 text-[#A1A1AA] leading-relaxed">
            
            <Section title="1. Data Collection">
              <p>
                We minimize data collection by design. When you use LibreMind, we collect:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-[#dbf26e]">
                <li><strong>Account Info:</strong> Email address and hashed password (via Supabase Auth).</li>
                <li><strong>Profile Data:</strong> Name and onboarding preferences (e.g., "Reduce Anxiety") to personalize the AI.</li>
                <li><strong>Usage Metrics:</strong> Anonymous telemetry (session duration, feature usage) to improve system stability.</li>
              </ul>
            </Section>

            <Section title="2. Chat Data Handling">
              <p>
                Your conversations with the 3D AI are the core of our service. Here is how they are handled:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-[#dbf26e]">
                <li><strong>Encryption:</strong> All messages are encrypted in transit (TLS 1.3) and at rest (AES-256).</li>
                <li><strong>AI Processing:</strong> Anonymized text is sent to our inference engine to generate responses. We do <strong>not</strong> use your chat logs to train our general foundation models without your explicit "Opt-In" consent.</li>
                <li><strong>Data Sovereignty:</strong> You may request a "Local-Only" mode where chat history is stored in your browser's IndexedDB and never persists on our servers.</li>
              </ul>
            </Section>

            <Section title="3. Third-Party Sharing">
              <p>
                We do <strong>not</strong> sell, trade, or rent your personal identification information to others. We rely on the following trusted infrastructure providers:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-[#dbf26e]">
                <li><strong>Supabase:</strong> For authentication and encrypted database hosting (AWS/Fly.io infrastructure).</li>
                <li><strong>OpenAI / Anthropic (API):</strong> For LLM inference. Data sent via API is subject to strict zero-retention policies.</li>
              </ul>
            </Section>

            <Section title="4. Your Rights">
              <p>
                Under GDPR and CCPA, you have the right to:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-[#dbf26e]">
                <li>Access all data we hold about you.</li>
                <li>Request permanent deletion of your account (The "Kill Switch").</li>
                <li>Export your chat history in JSON format.</li>
              </ul>
            </Section>

            <Section title="5. Contact Us">
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br/>
                <a href="mailto:privacy@libremind.in" className="text-[#dbf26e] hover:underline mt-2 inline-block">privacy@libremind.in</a>
              </p>
            </Section>

          </div>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-medium text-white mb-4">{title}</h2>
      <div className="text-lg font-light">{children}</div>
    </section>
  );
}

function SummaryItem({ icon: Icon, text }: any) {
  return (
    <div className="flex items-center gap-3 text-sm text-[#AAA]">
      <Icon size={16} className="text-[#dbf26e]" />
      <span>{text}</span>
    </div>
  );
}