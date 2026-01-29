// frontend/app/dashboard/(main)/layout.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, MessageSquare, User, Settings } from "lucide-react";

// Import the new Sidebar Component
import { Sidebar } from "@/components/dashboard/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: Home },
    { name: "Chat Session", href: "/dashboard/chat", icon: MessageSquare },
    { name: "My Profile", href: "/dashboard/profile", icon: User },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#050505] text-white overflow-hidden">
      
      {/* 1. DESKTOP SIDEBAR (Component) */}
      <Sidebar />

      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="flex flex-1 flex-col overflow-hidden relative">
        
        {/* Mobile Header (Only visible on small screens) */}
        <header className="flex h-16 items-center justify-between border-b border-white/10 bg-[#050505] px-6 md:hidden z-20">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#dbf26e]" />
            <span className="font-bold text-white">LibreMind</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6 text-white" />
          </button>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-[#050505] p-6 md:hidden animate-in slide-in-from-right">
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-white">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-4 rounded-xl p-4 text-base font-medium
                    ${pathname === item.href ? "bg-[#dbf26e] text-black" : "text-white bg-white/5"}
                  `}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Page Content Scroll Area */}
        <main className="flex-1 overflow-y-auto bg-[#050505] relative">
            {/* Ambient Background Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
            />
            
            <div className="relative z-10 p-6 md:p-12 max-w-7xl mx-auto">
              {children}
            </div>
        </main>
      </div>
    </div>
  );
}