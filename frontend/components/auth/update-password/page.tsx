"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function UpdatePassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const handleUpdate = async () => {
    // This updates the password for the active session (from the email link)
    const { error } = await supabase.auth.updateUser({ password });

    if (!error) {
      router.push("/dashboard"); // Success! They are logged in now.
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md p-8 bg-white/5 rounded-2xl border border-white/10">
        <h1 className="text-2xl font-bold mb-4">Set New Password</h1>
        <input
          type="password"
          placeholder="New Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-xl bg-black/40 border border-white/10 mb-4"
        />
        <button 
          onClick={handleUpdate}
          className="w-full bg-green-500 text-black py-3 rounded-xl font-bold"
        >
          Update Password
        </button>
      </div>
    </div>
  );
}