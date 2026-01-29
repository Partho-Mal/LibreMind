// frontend/app/auth/signup/page.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { routes } from "@/constants/routes";
import { supabase } from "@/lib/supabase/client";
import SocialLogin from "@/components/auth/SocialLogin";
import { X, Eye, EyeOff } from "lucide-react"; // Import Eye icons

export default function SignupPage() {
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
    const name = formData.get("name") as string;

    const { error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    router.push("/onboarding");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]">
      
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

        <div className="mb-10">
          <span className="mb-4 block font-mono text-xs text-[#dbf26e] uppercase tracking-widest">
            [ New Signal ]
          </span>
          <h1 className="text-3xl font-medium tracking-tighter text-white sm:text-4xl">
            Create your <br/> <span className="text-[#666]">private space.</span>
          </h1>
        </div>

        {error && (
          <div className="mb-6 border-l-2 border-red-500 bg-red-500/5 p-4 text-sm text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="group">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              className="w-full border-b border-white/10 bg-transparent py-4 text-lg text-white placeholder-[#333] transition-all focus:border-[#dbf26e] focus:outline-none [&:-webkit-autofill]:shadow-[0_0_0_1000px_#0A0A0A_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
            />
          </div>

          <div className="group">
            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
              className="w-full border-b border-white/10 bg-transparent py-4 text-lg text-white placeholder-[#333] transition-all focus:border-[#dbf26e] focus:outline-none [&:-webkit-autofill]:shadow-[0_0_0_1000px_#0A0A0A_inset] [&:-webkit-autofill]:-webkit-text-fill-color-white"
            />
          </div>

          <div className="group relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Create Password"
              required
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
            {loading ? "Processing..." : "Initialize Account"}
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

        <div className="mt-8 text-center text-sm text-[#666]">
          <p>
            Already have an ID? &nbsp; {" "}
            <Link href={routes.LOGIN} className="font-medium text-white transition-colors hover:text-[#dbf26e] hover:underline">
              Login
            </Link>
          </p>
        </div>

        <p className="mt-8 text-center font-mono text-[10px] text-[#333] uppercase tracking-wider">
          End-to-end encrypted environment
        </p>
      </div>
    </div>
  );
}