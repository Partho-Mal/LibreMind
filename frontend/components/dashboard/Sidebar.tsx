// frontend/components/dashboard/Sidebar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  MessageSquare,
  Settings,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { supabase } from "@/lib/supabase/client";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
    router.push("/");
  };

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: Home },
    { name: "Chat Session", href: "/dashboard/chat", icon: MessageSquare },
    { name: "My Profile", href: "/dashboard/profile", icon: User },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <aside
      className={`
        relative hidden md:flex flex-col
        border-r border-white/5 bg-[#050505]
        transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]
        ${isCollapsed ? "w-20" : "w-72"}
      `}
    >
      {/* FULL HEIGHT EDGE TOGGLE STRIP */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        className="
          absolute right-0 top-0 z-40
          h-full w-3
          cursor-ew-resize
          bg-transparent
          group/edge
        "
      >
        <span
          className="
            pointer-events-none
            absolute right-1 top-1/2 -translate-y-1/2
            flex h-8 w-5 items-center justify-center
            rounded-md
            bg-[#0A0A0A]
            text-[#666]
            opacity-0
            transition-all duration-200
            group-hover/edge:opacity-100
            group-hover/edge:text-[#dbf26e]
            group-hover/edge:shadow-[0_0_12px_rgba(219,242,110,0.25)]
          "
        >
          {isCollapsed ? (
            <ChevronRight size={14} strokeWidth={2.5} />
          ) : (
            <ChevronLeft size={14} strokeWidth={2.5} />
          )}
        </span>
      </button>

      {/* HEADER */}
      <div
        className={`
          flex h-20 items-center border-b border-white/5
          ${isCollapsed ? "justify-center" : "px-8"}
        `}
      >
        <Link
          href="/dashboard"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >

        <div
        className={`
            relative
            ${isCollapsed ? "ml-2 mt-1" : ""}
        `}
        >
        {isCollapsed && (
            <span
            className="
                pointer-events-none
                absolute left-1/2 top-1/2
                h-4 w-4
                -translate-x-1/2 -translate-y-1/2
                rounded-full
                bg-[#dbf26e]/30
                animate-[ping_1.6s_ease-out_infinite]
            "
            />
        )}

        <div
            className={`
            relative rounded-full
            bg-[#dbf26e]
            shadow-[0_0_8px_#dbf26e]
            transition-all duration-300
            ${isCollapsed ? "h-4 w-4" : "h-2 w-2"}
            `}
        />
        </div>

          {/* <div
            className={`
              rounded-full bg-[#dbf26e]
              shadow-[0_0_8px_#dbf26e]
              transition-all duration-300
              ${isCollapsed ? "h-4 w-4 ml-2 mt-1" : "h-2 w-2"}
            `}
          /> */}

          <span
            className={`
              text-sm font-semibold tracking-tight text-white
              whitespace-nowrap overflow-hidden
              transition-all duration-300
              ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
            `}
          >
            LibreMind
          </span>
        </Link>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 space-y-2 py-8 px-3">
        <div
          className={`
            mb-4 px-3 font-mono text-[10px]
            uppercase tracking-widest text-[#444]
            overflow-hidden whitespace-nowrap
            transition-all duration-300
            ${isCollapsed ? "h-0 opacity-0" : "h-auto opacity-100"}
          `}
        >
          Main Menu
        </div>

        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              title={isCollapsed ? item.name : ""}
              className={`
                group flex items-center rounded-lg py-3
                transition-all duration-200
                ${isCollapsed ? "justify-center px-0" : "px-3 gap-3"}
                ${
                  isActive
                    ? "bg-[#dbf26e]/10 text-[#dbf26e]"
                    : "text-[#888] hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <item.icon
                size={18}
                strokeWidth={2}
                className={`
                  transition-colors
                  ${
                    isActive
                      ? "text-[#dbf26e]"
                      : "text-[#666] group-hover:text-white"
                  }
                `}
              />

              <span
                className={`
                  text-sm font-medium whitespace-nowrap overflow-hidden
                  transition-all duration-300
                  ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
                `}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className="border-t border-white/5 p-4">
        <button
          onClick={handleSignOut}
          className={`
            group flex w-full items-center rounded-lg py-3
            transition-all duration-200
            ${isCollapsed ? "justify-center" : "gap-3 px-3"}
            text-[#666] hover:bg-[#111] hover:text-white
          `}
          title="Sign Out"
        >
          <LogOut
            size={18}
            strokeWidth={2}
            className="transition-colors group-hover:text-white"
          />

          <span
            className={`
              text-sm font-medium whitespace-nowrap overflow-hidden
              transition-all duration-300
              ${isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"}
            `}
          >
            Sign Out
          </span>
        </button>
      </div>
    </aside>
  );
}
