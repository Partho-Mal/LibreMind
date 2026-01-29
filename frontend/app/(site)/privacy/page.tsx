// frontend/app/(site)/privacy/page.tsx

import { ShieldCheck, Server, Trash2, EyeOff } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
      
      {/* 1. Header */}
      <div className="max-w-[1200px] mx-auto mb-20 border-b border-white/10 pb-12">
        <h1 className="text-5xl md:text-6xl font-medium text-white tracking-tighter mb-6">
          Privacy Protocol
        </h1>
        <p className="text-xl text-[#888] max-w-2xl">
          Your mind is the last private place left. We intend to keep it that way.
          Here is exactly how we handle your data.
        </p>
      </div>

      {/* 2. Security Cards */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
        
        {/* Card 1 */}
        <div className="p-10 rounded-3xl bg-[#0A0A0A] border border-white/5">
          <ShieldCheck className="text-[#dbf26e] h-10 w-10 mb-6" />
          <h3 className="text-2xl text-white font-medium mb-4">End-to-End Encryption</h3>
          <p className="text-[#888] leading-relaxed">
            All chat sessions are encrypted in transit (TLS 1.3) and at rest (AES-256). 
            Even our engineers cannot view the content of your private sessions without your explicit consent key.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-10 rounded-3xl bg-[#0A0A0A] border border-white/5">
          <Server className="text-[#dbf26e] h-10 w-10 mb-6" />
          <h3 className="text-2xl text-white font-medium mb-4">Local Storage Option</h3>
          <p className="text-[#888] leading-relaxed">
            You can opt to store your chat history *only* on your device. 
            If you clear your browser cache, the memories are gone forever. We verify, we don't retain.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-10 rounded-3xl bg-[#0A0A0A] border border-white/5">
          <EyeOff className="text-[#dbf26e] h-10 w-10 mb-6" />
          <h3 className="text-2xl text-white font-medium mb-4">No Ad Targeting</h3>
          <p className="text-[#888] leading-relaxed">
            We do not sell your emotional data to advertisers. 
            We are a subscription-based product (Freemium). You are the customer, not the product.
          </p>
        </div>

        {/* Card 4 */}
        <div className="p-10 rounded-3xl bg-[#0A0A0A] border border-white/5">
          <Trash2 className="text-[#dbf26e] h-10 w-10 mb-6" />
          <h3 className="text-2xl text-white font-medium mb-4">The "Kill Switch"</h3>
          <p className="text-[#888] leading-relaxed">
            Delete your account at any time. This triggers a cascading delete across our databases. 
            Within 24 hours, all traces of your identity and history are scrubbed.
          </p>
        </div>

      </div>

      {/* 3. Footer Note */}
      <div className="max-w-[1200px] mx-auto text-center border-t border-white/10 pt-12">
        <p className="text-[#666] text-sm">
          Last updated: January 2026. <br/>
          Questions? Contact security@libremind.in
        </p>
      </div>

    </div>
  );
}