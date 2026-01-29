// frontend/app/auth/login/page.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { routes } from "@/constants/routes";
import { supabase } from "@/lib/supabase/client";
import SocialLogin from "@/components/auth/SocialLogin";
import { X, Eye, EyeOff } from "lucide-react"; // Import Eye icons

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false); // State for toggle

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
    } else {
      router.push("/onboarding");
      router.refresh();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]">
      
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="mx-auto flex h-full max-w-[1400px] justify-between px-6">
            <div className="w-px h-full bg-white/20" />
            <div className="w-px h-full bg-white/20 hidden md:block" />
            <div className="w-px h-full bg-white/20 hidden lg:block" />
            <div className="w-px h-full bg-white/20" />
        </div>
      </div>

      <div className="relative w-full max-w-md overflow-hidden bg-[#0A0A0A] p-10 shadow-2xl sm:p-12 border border-white/5 md:rounded-3xl">
        
        <button
          type="button"
          onClick={() => router.push("/")}
          className="absolute right-6 top-6 text-[#666] transition-colors hover:text-white"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <div className="mb-12">
          <span className="mb-4 block font-mono text-xs text-[#dbf26e] uppercase tracking-widest">
            [ Access Terminal ]
          </span>
          <h1 className="text-3xl font-medium tracking-tighter text-white sm:text-4xl">
            Resume <span className="text-[#666]">Session.</span>
          </h1>
        </div>

        {error && (
          <div className="mb-6 border-l-2 border-red-500 bg-red-500/5 p-4 text-sm text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="group">
            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
              // FIXED: Added autofill shadow hack
              className="w-full border-b border-white/10 bg-transparent py-4 text-lg text-white placeholder-[#333] transition-all focus:border-[#dbf26e] focus:outline-none [&:-webkit-autofill]:shadow-[0_0_0_1000px_#0A0A0A_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
            />
          </div>

          {/* Password Field with Eye Toggle */}
          <div className="group relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"} // Dynamic type
              placeholder="Password"
              required
              // FIXED: Added autofill shadow hack
              className="w-full border-b border-white/10 bg-transparent py-4 text-lg text-white
              placeholder-[#333] transition-all focus:border-[#dbf26e] focus:outline-none
              [color-scheme:dark]
              [&:-webkit-autofill]:shadow-[0_0_0_1000px_#0A0A0A_inset]
              [&:-webkit-autofill]:-webkit-text-fill-color-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-5 text-[#666] hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full rounded-full bg-[#dbf26e] py-4 text-sm font-bold text-black transition-all hover:bg-white hover:scale-[1.02] disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Enter Space"}
          </button>
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/5" />
          <span className="font-mono text-xs text-[#444]">OR</span>
          <div className="h-px flex-1 bg-white/5" />
        </div>

        <div className="opacity-80 transition-opacity hover:opacity-100">
          <SocialLogin />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-[#666]">
            New user? &nbsp; {" "}
            <Link
              href={routes.SIGNUP}
              className="font-medium text-white transition-colors hover:text-[#dbf26e] hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}