'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [openFAQ, setOpenFAQ] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full bg-linear-to-b from-gray-950 to-black px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">

       
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-6 py-2 text-lg text-green-400">
            Contact
          </div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            We’re here to <span className="text-green-400">listen</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Questions, feedback, or just need help getting started?  
            Reach out anytime — we’ll respond with care. 
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

    
          <div className="space-y-8">

            <div className="space-y-4">

       
              <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="h-10 w-10 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-sm text-gray-400">support@libremind.com</p>
                  <p className="text-xs text-gray-500">Response within 24 hours</p>
                </div>
              </div>

              <button
                onClick={() => setOpenFAQ(!openFAQ)}
                className="w-full text-left flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-green-500/30"
              >
                <div className="h-10 w-10 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center">
                  ?
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-white">Help Center</h4>
                    <span className="text-green-400">
                      {openFAQ ? '−' : '+'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">Browse FAQs & guides</p>
                </div>
              </button>

            
              {openFAQ && (
                <div className="ml-4 space-y-3 border-l border-white/10 pl-4">
                  {[
                    {
                      q: 'Is LibreMind free to use?',
                      a: 'Yes, you can start using LibreMind for free with basic features.',
                    },
                    {
                      q: 'Are my conversations private?',
                      a: 'Absolutely. Your conversations are encrypted and never shared.',
                    },
                    {
                      q: 'Can I talk anytime?',
                      a: 'Yes, LibreMind is available 24/7 whenever you need support.',
                    },
                  ].map((faq, i) => (
                    <div key={i}>
                      <p className="text-sm font-medium text-white">
                        {faq.q}
                      </p>
                      <p className="text-xs text-gray-400">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              )}

            </div>

          
            <div className="rounded-xl border border-orange-500/30 bg-orange-500/10 p-5">
              <p className="text-sm text-orange-200">
                <strong className="text-orange-400">Crisis support:</strong>  
                This is not an emergency service. If you’re in immediate danger,
                please contact your local emergency number or crisis hotline.
              </p>
            </div>
          </div>

          
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">

            <form className="space-y-5">
              {[
                { label: 'Your Name', name: 'name', type: 'text', placeholder: 'Libre' },
                { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Libre@example.com' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="mb-1 block text-sm text-gray-300">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20"
                  />
                </div>
              ))}

              <div>
                <label className="mb-1 block text-sm text-gray-300">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us how we can help…"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-green-500 py-3 text-sm font-medium text-black transition hover:bg-green-400"
              >
                Send Message →
              </button>

              <p className="text-center text-xs text-gray-500">
                🔒 Your data is private & secure
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

    