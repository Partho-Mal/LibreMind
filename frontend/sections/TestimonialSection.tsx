'use client';

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "I didn't want advice. I just wanted to be heard. LibreMind gave me space to talk without feeling judged.",
      author: "Sarah M.",
      role: "22, College Student",
      rating: 5
    },
    {
      text: "Some days I don't know how I'm feeling. Talking here helps me slow down and understand myself better.",
      author: "Michael R.",
      role: "29, Working Professional",
      rating: 5
    },
    {
      text: "It feels calm. There's no pressure to 'fix' anything. Just a space to breathe and reflect on my thoughts.",
      author: "Emily K.",
      role: "26, Designer",
      rating: 5
    },
    {
      text: "As someone with social anxiety, this is perfect. I can open up without the fear of being interrupted or misunderstood.",
      author: "James P.",
      role: "31, Software Engineer",
      rating: 5
    },
    {
      text: "The 3D avatar makes it feel so much more real than just typing into a text box. It's genuinely comforting.",
      author: "Priya S.",
      role: "24, Graduate Student",
      rating: 5
    },
    {
      text: "I've tried therapy apps before but this feels different. More personal, more understanding, less robotic.",
      author: "David L.",
      role: "35, Teacher",
      rating: 5
    },
    {
      text: "After a long day, I just need someone to listen. LibreMind is always there, no appointments needed.",
      author: "Rachel T.",
      role: "28, Nurse",
      rating: 5
    },
    {
      text: "The mood tracking helped me realize patterns I never noticed before. It's been genuinely eye-opening.",
      author: "Alex Chen",
      role: "27, Marketing Manager",
      rating: 5
    },
    {
      text: "I was skeptical at first, but the AI really does understand context. It picks up on things I don't even say directly.",
      author: "Jordan B.",
      role: "23, Artist",
      rating: 5
    },
    {
      text: "Having this available 24/7 has been a lifesaver during my late-night anxiety spirals. Thank you.",
      author: "Lisa M.",
      role: "30, Entrepreneur",
      rating: 4
    },
    {
      text: "It's like having a friend who never gets tired of listening. No judgment, just genuine support.",
      author: "Tom H.",
      role: "33, Photographer",
      rating: 5
    },
    {
      text: "The breathing exercises it suggests based on my mood have helped me more than I thought possible.",
      author: "Maya P.",
      role: "25, Content Creator",
      rating: 5
    }
  ];


  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="w-full overflow-hidden bg-linear-to-b from-black to-gray-950 px-6 py-2">
      <div className="mx-auto max-w-6xl">
        
        {/* Section heading */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full border border-green-500/40 bg-green-500/10 px-6 py-2 text-lg text-green-400">
            What People Are Saying
          </div>
          <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            A quiet space that's{' '}
            <span className="text-green-400">helped thousands</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-400 md:text-lg">
            Everyone's journey is different, but sometimes it helps to know
            you're not the only one finding comfort here.
          </p>
        </div>

        {/* Marquee container */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-gray-950 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-gray-950 to-transparent" />
          
          {/* First row - Left to right */}
          <div className="mb-6 overflow-hidden">
            <div className="flex animate-marquee gap-6 hover:[animation-play-state:paused]">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group min-w-100 shrink-0 rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:border-green-500/30 hover:bg-white/10 hover:scale-105"
                >
                  {/* Stars */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 fill-green-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="mb-4 text-sm leading-relaxed text-gray-300">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-sm font-semibold text-green-400">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-green-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          {/* Second row - Right to left */}
          <div className="overflow-hidden">
            <div className="flex animate-marquee-reverse gap-6 hover:[animation-play-state:paused]">
              {duplicatedTestimonials.reverse().map((testimonial, index) => (
                <div
                  key={index}
                  className="group min-w-100 shrink-0 rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-transparent p-6 backdrop-blur-sm transition-all duration-300 hover:border-green-500/30 hover:bg-white/10 hover:scale-105"
                >
                  {/* Stars */}
                  <div className="mb-4 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 fill-green-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="mb-4 text-sm leading-relaxed text-gray-300">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-sm font-semibold text-green-400">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-green-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 60s linear infinite;
        }
      `}</style>
    </section>
  );
}