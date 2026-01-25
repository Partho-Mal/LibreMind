"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    router.push("/onboarding");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

     
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

    
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl sm:p-10">

        <h1 className="mb-2 text-2xl font-semibold text-white">
          Create your space 🌱
        </h1>
        <p className="mb-8 text-sm text-gray-300">
          This is a private space just for you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your name"
            required
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20"
          />

          <input
            type="email"
            placeholder="Email address"
            required
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-400 focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20"
          />

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-green-500 py-3 font-medium text-black transition hover:bg-green-400"
          >
            Continue
          </button>
        </form>

      
        <div className="mt-6 text-center text-sm text-gray-300">
          <p>
            Already have an account?{" "}
            <Link href={routes.LOGIN} className="text-green-400 hover:underline">
              Log in
            </Link>
          </p>
        </div>

      
        <p className="mt-6 text-center text-xs text-gray-500">
          We respect your privacy. Your information is kept secure and private.
        </p>

      </div>
    </div>
  );
}
