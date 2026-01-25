"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";

export default function LoginPage() {
   const router = useRouter();
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  
  
      router.push("/onboarding");
    };
  
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center">

  
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl sm:p-10">

       
        <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-green-500/30 blur-3xl" />

        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            Welcome back 🌿
          </h1>
          <p className="mt-2 text-sm text-gray-300">
            Take your time. We’re glad you’re here.
          </p>
        </div>

      
        <form onSubmit={handleSubmit}  className="space-y-4">

          <div>
            <input
              type="email"
              placeholder="Email address"
              className="
                w-full rounded-xl border border-white/10 bg-black/40
                px-4 py-3 text-sm text-white placeholder-gray-400
                outline-none transition
                focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20
              "
            />
          </div>

        
          <div>
            <input
              type="password"
              placeholder="Password"
              className="
                w-full rounded-xl border border-white/10 bg-black/40
                px-4 py-3 text-sm text-white placeholder-gray-400
                outline-none transition
                focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20
              "
            />
          </div>

      
          <button
            type="submit"
            className="
              mt-2 w-full rounded-full bg-green-500 py-3
              font-medium text-black
              transition hover:bg-green-400 hover:scale-[1.02]
            "
          >
            Log in
          </button>
        </form>

   
        <div className="mt-6 text-center text-sm text-gray-300">
          <p>
            Don’t have an account?{" "}
            <Link
              href={routes.SIGNUP}
              className="font-medium text-green-400 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
