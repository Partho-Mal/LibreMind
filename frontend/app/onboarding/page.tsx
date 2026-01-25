"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const router = useRouter();

  const [language, setLanguage] = useState("English");
  const [panic, setPanic] = useState<string | null>(null);

  const handleContinue = () => {
    // later you can save onboarding data here (API / localStorage)
    router.push("/avatar");
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-black via-gray-950 to-black px-4 py-24 flex justify-center">
      <div className="w-full max-w-xl">

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8">

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold text-white">
              Let’s begin gently
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Answer only what feels comfortable. You can skip anytime.
            </p>
          </div>

          <div className="space-y-6">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-300">
                What should we call you?{" "}
                <span className="text-gray-500">(optional)</span>
              </label>
              <input
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-green-500"
              />
            </div>

            {/* Language */}
            <div>
              <label className="text-sm text-gray-300">
                Preferred language
              </label>
              <div className="mt-2 grid grid-cols-2 gap-3">
                {["English", "Hindi"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`rounded-xl px-4 py-3 text-sm transition
                      ${
                        language === lang
                          ? "bg-green-500 text-black"
                          : "bg-white/5 text-gray-300 border border-white/10"
                      }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Feeling */}
            <div>
              <label className="text-sm text-gray-300">
                How are you feeling right now?
              </label>
              <select
                className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-green-500"
              >
                <option value="">Select</option>
                <option>Calm</option>
                <option>Stressed</option>
                <option>Anxious</option>
                <option>Low</option>
                <option>Overwhelmed</option>
              </select>
            </div>

            {/* Panic */}
            <div>
              <label className="text-sm text-gray-300">
                Have you experienced panic attacks recently?
              </label>
              <div className="mt-2 grid grid-cols-2 gap-3">
                {["Yes", "No"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setPanic(v)}
                    className={`rounded-xl px-4 py-3 text-sm transition
                      ${
                        panic === v
                          ? "bg-green-500 text-black"
                          : "bg-white/5 text-gray-300 border border-white/10"
                      }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Medical */}
            <div>
              <label className="text-sm text-gray-300">
                Any medical condition we should be aware of?
              </label>
              <select
                className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-green-500"
              >
                <option value="">Select</option>
                <option>None</option>
                <option>Blood Pressure</option>
                <option>Diabetes</option>
                <option>Other</option>
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="text-sm text-gray-300">
                How long have you been feeling this way?
              </label>
              <select
                className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-green-500"
              >
                <option value="">Select</option>
                <option>Few days</option>
                <option>Few weeks</option>
                <option>Several months</option>
                <option>Longer</option>
              </select>
            </div>

            {/* Support */}
            <div>
              <label className="text-sm text-gray-300">
                What kind of support are you hoping for right now?
              </label>
              <select
                className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-green-500"
              >
                <option value="">Select</option>
                <option>Someone to talk to</option>
                <option>Stress management</option>
                <option>Emotional understanding</option>
                <option>Guided exercises</option>
              </select>
            </div>

            {/* Emergency */}
            <div>
              <label className="text-sm text-gray-300">
                Emergency contact number{" "}
                <span className="text-gray-500">(optional)</span>
              </label>
              <input
                placeholder="+91 XXXXX XXXXX"
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-green-500"
              />
            </div>

            {/* CTA */}
            <button
              onClick={handleContinue}
              className="mt-4 w-full rounded-xl bg-green-500 py-3 text-sm font-medium text-black transition hover:bg-green-400"
            >
              Continue →
            </button>

            <p className="text-center text-xs text-gray-500">
              🔒 Your answers are private and help personalize your care
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
