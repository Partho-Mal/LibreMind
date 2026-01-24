import React from 'react';

export default function HeroSection() {
  return (
    <section className="mt-6 relative flex min-h-[90vh] items-center justify-center px-6">
      <div className="mx-auto max-w-3xl text-center">
        
        {/* Subtle badge */}
        <div className=" mb-6 mx-auto inline-flex items-center justify-center rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm text-green-400 sm:px-6 sm:text-base md:px-10 md:text-lg lg:px-14 lg:text-xl">
          Your safe space to talk and heal
        </div>

        {/* Main heading */}
        <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-5xl">
          A Safe Space to Talk, Your
          <span className="text-green-400"> 3D Mental Health AI Companion</span>
        </h1>

        {/* Description */}
        <p className="mb-10 text-lg text-gray-400">
          LibreMind is a calm, human-like 3D Avatar designed to
          listen, support, and help you understand your emotions — at your own
          pace.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/signup"
            className="rounded-full bg-green-500 px-8 py-3 font-medium text-black hover:bg-green-400 transition"
          >
            Start Your Journey 
          </a>

          <a
            href="/login"
            className="rounded-full border border-white/20 px-8 py-3 font-medium text-white hover:bg-white/5 transition"
          >
            I already have an account
          </a>
        </div>

     
{/* Trust / highlights row */}
<div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-gray-300 md:text-base">
  
  <div className="flex items-center gap-2">
    <span className="text-green-400">✓</span>
    <span>Signup to keep your chat history</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-green-400">✓</span>
    <span>Private & secure conversations</span>
  </div>

  <div className="flex items-center gap-2">
    <span className="text-green-400">✓</span>
    <span>24/7 emotional support, anytime you need</span>
  </div>

</div>


      </div>
    </section>
  );
}