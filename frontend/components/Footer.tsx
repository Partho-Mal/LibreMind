import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-linear-to-b from-black to-gray-950 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* ================= TOP ================= */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Libre<span className="text-green-400">Mind</span>
            </h3>
            <p className="mt-3 max-w-sm text-sm text-gray-400">
              A calm, supportive space to reflect, talk, and care for your mental well-being.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="transition hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="transition hover:text-green-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="transition hover:text-green-400">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="transition hover:text-green-400">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">
              Resources
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/help" className="hover:text-green-400 transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-green-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-green-400 transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© {currentYear} LibreMind. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-green-400 transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-green-400 transition">
              Terms
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 max-w-4xl text-xs leading-relaxed text-gray-500">
          LibreMind is not a replacement for professional mental health care.
          If you are in immediate danger, please contact your local emergency services
          or a trusted crisis helpline.
        </p>

      </div>
    </footer>
  );
}
