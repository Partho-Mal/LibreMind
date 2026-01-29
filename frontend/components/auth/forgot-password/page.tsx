// frontend/components/auth/forgot-password/page.tsx
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // This sends a password reset link to the email
    // If the user signed up with Google, this allows them to 'set' a password for the first time
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/update-password`,
    });

    if (error) setMessage("Error: " + error.message);
    else setMessage("Check your email for the reset link!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 bg-white/5 rounded-2xl border border-white/10">
        <h1 className="text-2xl font-bold mb-4">Reset Password</h1>
        {message && <p className="mb-4 text-green-400">{message}</p>}
        
        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-black/40 border border-white/10"
            required
          />
          <button className="w-full bg-green-500 text-black py-3 rounded-xl font-bold">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}