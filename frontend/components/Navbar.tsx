"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { routes } from "@/constants/routes";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // background change
      setScrolled(currentScrollY > 20);

      // hide / show on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-4 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 transition-all duration-300
        ${hidden ? "-translate-y-32 opacity-0" : "translate-y-0 opacity-100"}
      `}
    >
      {/* Pill Navbar */}
      <nav
        className={`flex items-center justify-between rounded-full border px-6 py-3 backdrop-blur-xl transition-all duration-300
          ${
            scrolled
              ? "border-white/10 bg-black/70 shadow-lg"
              : "border-green-500/30 bg-green-950/40"
          }
        `}
      >
        {/* Logo */}
        <Link
          href={routes.HOME}
          className="text-lg font-bold tracking-wide text-white"
        >
          LIBRE
          <span className="bg-linear-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            MIND
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <Link href={routes.HOME} className="hover:text-white transition">
            Home
          </Link>
          <Link href="#features" className="hover:text-white transition">
            Features
          </Link>
          <Link href={routes.LOGIN} className="hover:text-white transition">
            Login
          </Link>

          <Link
            href={routes.SIGNUP}
            className="rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-green-400"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center rounded-full border border-white/10 p-2 text-white"
        >
          {menuOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-3 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6 text-sm text-white/80">
            <Link href={routes.HOME} onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </Link>
            <Link href={routes.LOGIN} onClick={() => setMenuOpen(false)}>
              Login
            </Link>
            <Link
              href={routes.SIGNUP}
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-green-500 px-5 py-2 text-center font-semibold text-black"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
