import React from "react";

export default function CTASection() {
  return (
    <section className="w-full px-4 py-14 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-5xl">

        {/* ================= CTA CARD ================= */}
        <div
          className="
            relative overflow-hidden rounded-2xl
            bg-linear-to-b from-green-500/20 to-green-950
            border border-green-500/30
            p-6 md:p-10
            flex flex-col md:flex-row
            items-center md:items-center
            justify-between
            gap-6
            backdrop-blur-sm
          "
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <div className="absolute left-1/4 top-1/4 h-40 w-40 rounded-full bg-green-500/30 blur-3xl" />
          </div>

          {/* ================= TEXT ================= */}
          <div className="relative z-10 text-center md:text-left max-w-3xl">

            <h2
              className="
                text-2xl font-semibold leading-tight
                md:text-[46px] md:leading-[3.5rem]
                bg-linear-to-r from-white to-green-400
                text-transparent bg-clip-text
              "
            >
              Start caring for your mental well-being today
            </h2>

            <p
              className="
                mt-3 text-sm md:text-lg
                bg-linear-to-r from-white to-green-400
                text-transparent bg-clip-text
              "
            >
              Talk freely, track your mood, practice daily exercises, or connect
              with a real therapist — all in one safe, private space.
            </p>

            {/* Trust indicators (desktop inline, mobile grid) */}
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-300 md:flex md:gap-6">
              {[
                "Free to start",
                "Private & Secure",
                "No judgment",
                "Available 24/7",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= CTA BUTTON ================= */}
          <div className="relative z-10 flex-shrink-0">
            <a
              href="/signup"
              className="
                inline-flex items-center gap-2
                rounded-full bg-green-500
                px-10 py-3
                text-sm font-medium text-black
                transition hover:bg-green-400
                md:px-12
              "
            >
              Begin Your Journey
              <span>→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
