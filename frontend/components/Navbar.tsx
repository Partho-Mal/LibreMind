// frontend/components/Navbar.tsx
'use client';
import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { name: 'Features', href: '/features' },
    { name: 'Method', href: '/method' },
    { name: 'Privacy', href: '/privacy' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      {/* Floating Island Container 
          - bg-[#050505]/80: Explicit dark obsidian with opacity
      */}
      <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-[#050505]/80 p-2 backdrop-blur-xl shadow-2xl shadow-black/50">
        
        {/* Logo Section */}
        <Link 
          href="/" 
          className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 transition hover:bg-white/10"
        >
          {/* Matcha Dot with Glow */}
          <div className="h-2 w-2 rounded-full bg-[#dbf26e] shadow-[0_0_8px_#dbf26e]" />
          <span className="text-sm font-semibold tracking-tight text-white">LibreMind</span>
        </Link>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden items-center px-4 sm:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-medium text-[#888] transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Separator Line */}
        <div className="hidden h-4 w-[1px] bg-white/10 sm:block" />

        {/* Right Actions */}
        <div className="flex items-center gap-2 pl-2">
          <Link
            href="/auth/login"
            className="hidden px-3 text-xs font-medium text-white transition hover:text-[#dbf26e] sm:block"
          >
            Log in
          </Link>
          
          <Link
            href="/auth/signup"
            className="rounded-full bg-[#dbf26e] px-5 py-2 text-xs font-bold text-black transition-all hover:bg-white hover:scale-105"
          >
            Get Started
          </Link>
        </div>

      </nav>
    </div>
  );
}