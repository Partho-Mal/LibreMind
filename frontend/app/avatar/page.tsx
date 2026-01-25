"use client";

import { useState } from "react";
import Link from "next/link";
import { routes } from "@/constants/routes";

export default function AvatarPage() {
  const [selected, setSelected] = useState<"he" | "she" | null>(null);

  return (
    <div className="min-h-screen px-4 py-24 flex items-center justify-center">
      <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
        
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-semibold mb-2">
          Choose your companion
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          Select the presence that feels most comfortable to talk with.
        </p>

        {/* Avatar options */}
        <div className="space-y-4">

          {/* HE */}
          <button
            onClick={() => setSelected("he")}
            className={`w-full rounded-xl border p-5 text-left transition ${
              selected === "he"
                ? "border-green-500 bg-green-500/10"
                : "border-white/10 bg-white/5 hover:bg-white/10"
            }`}
          >
            <h3
              className={`text-base font-medium ${
                selected === "he" ? "text-green-400" : "text-white"
              }`}
            >
              He
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Calm, supportive male presence with a steady and reassuring tone.
            </p>
          </button>

          {/* SHE */}
          <button
            onClick={() => setSelected("she")}
            className={`w-full rounded-xl border p-5 text-left transition ${
              selected === "she"
                ? "border-green-500 bg-green-500/10"
                : "border-white/10 bg-white/5 hover:bg-white/10"
            }`}
          >
            <h3
              className={`text-base font-medium ${
                selected === "she" ? "text-green-400" : "text-white"
              }`}
            >
              She
            </h3>
            <p className="mt-1 text-sm text-gray-400">
              Warm, empathetic female presence that listens and comforts.
            </p>
          </button>
        </div>

        {/* Continue */}
        <div className="mt-10 text-center">
          <Link
            href={routes.DASHBOARD}
            className={`inline-block rounded-full px-10 py-3 font-medium transition ${
              selected
                ? "bg-green-500 text-black hover:bg-green-400"
                : "bg-gray-600 text-gray-300 cursor-not-allowed"
            }`}
          >
            Continue
          </Link>

          <p className="mt-3 text-xs text-gray-500">
            You can change this anytime later.
          </p>
        </div>
      </div>
    </div>
  );
}
