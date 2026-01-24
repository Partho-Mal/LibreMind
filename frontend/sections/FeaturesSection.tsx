import React from 'react';

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full bg-linear-to-b from-gray-950 to-black px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-green-500/40 bg-green-500/10 px-6 py-2 text-lg text-green-400">
            Features
          </div>
          <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            Built to support your{' '}
            <span className="text-green-400">mental well-being</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-400 md:text-lg">
            Every part of LibreMind is designed with care — to help you reflect,
            feel understood, and grow emotionally in a safe environment.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              ),
              title: "Supportive Conversations",
              desc: "Talk freely with an AI companion trained to listen without judgment and respond with empathy and care.",
            },
            {
              icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "3D Emotional Presence",
              desc: "A calming 3D avatar that reacts gently, helping conversations feel more human and less isolating.",
            },
            {
              icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: "Mood Awareness",
              desc: "Track how you're feeling over time and gain simple insights into emotional patterns — at your own pace.",
            },
            {
              icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              title: "Privacy & Safety First",
              desc: "Your conversations are private and secure. You stay in control of your data, always.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-transparent p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 text-green-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-green-500/30">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-400">
                {feature.desc}
              </p>

              {/* Accent line */}
              <div className="mt-6 h-1 w-16 rounded-full bg-linear-to-r from-green-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Subtle glow effect */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-green-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}