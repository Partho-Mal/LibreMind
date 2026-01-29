// frontend/app/dashboard/(main)/chat/page.tsx

"use client";

import { useState } from "react";
import { Mic, Send, Keyboard, MoreVertical, Volume2 } from "lucide-react";

export default function ChatPage() {
  const [inputMode, setInputMode] = useState<"voice" | "text">("voice");
  const [isListening, setIsListening] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col relative overflow-hidden rounded-3xl border border-white/5 bg-[#0A0A0A] shadow-2xl">
      
      {/* 1. HEADER: Session Info */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-3">
           <div className="h-2 w-2 rounded-full bg-[#dbf26e] animate-pulse" />
           <span className="font-mono text-xs uppercase tracking-widest text-[#666]">
             Live Session • 00:42
           </span>
        </div>
        <button className="text-[#666] hover:text-white transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* 2. THE 3D AVATAR STAGE (Centerpiece) */}
      <div className="relative flex-1 flex items-center justify-center">
        
        {/* Background Depth Grid */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: 'linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)', 
               backgroundSize: '40px 40px',
               maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
             }} 
        />

        {/* THE AI AVATAR PLACEHOLDER (Replace this div with <Spline /> later) */}
        <div className="relative z-10 h-64 w-64 md:h-96 md:w-96 flex items-center justify-center">
           {/* Outer Ring */}
           <div className={`absolute inset-0 rounded-full border border-[#dbf26e]/20 transition-all duration-1000 ${isListening ? "scale-110 opacity-50" : "scale-100 opacity-20"}`} />
           
           {/* Inner Core (The "Brain") */}
           <div className="relative h-40 w-40 rounded-full bg-[#dbf26e]/10 backdrop-blur-md flex items-center justify-center border border-[#dbf26e]/30 shadow-[0_0_60px_-10px_rgba(219,242,110,0.2)] animate-float">
              <div className="h-24 w-24 rounded-full bg-[#dbf26e] blur-[40px] opacity-40 animate-pulse" />
              {/* Fake Geometry */}
              <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
           </div>
        </div>

        {/* AI Status Text */}
        <div className="absolute bottom-32 text-center">
          <p className="font-mono text-xs text-[#666] tracking-[0.2em] uppercase">
            {isListening ? "Listening..." : "Waiting for input"}
          </p>
        </div>
      </div>

      {/* 3. CONTROL BAR (Floating HUD) */}
      <div className="relative z-20 pb-8 px-6 flex justify-center">
        <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#050505]/80 backdrop-blur-xl p-2 shadow-2xl flex items-center gap-2">
          
          {/* Mode Switcher */}
          <button 
            onClick={() => setInputMode(inputMode === "voice" ? "text" : "voice")}
            className="h-12 w-12 flex items-center justify-center rounded-xl text-[#666] hover:bg-white/5 hover:text-white transition-colors"
          >
            {inputMode === "voice" ? <Keyboard size={20} /> : <Volume2 size={20} />}
          </button>

          <div className="h-8 w-px bg-white/10 mx-1" />

          {/* INPUT AREA */}
          {inputMode === "voice" ? (
            // VOICE MODE
            <div className="flex-1 flex items-center justify-center py-2">
              <button 
                onClick={() => setIsListening(!isListening)}
                className={`
                  group relative flex items-center justify-center h-14 w-full rounded-xl transition-all duration-300
                  ${isListening ? "bg-red-500/10" : "hover:bg-white/5"}
                `}
              >
                <div className={`
                  h-10 w-10 rounded-full flex items-center justify-center transition-all
                  ${isListening ? "bg-red-500 text-white scale-110 shadow-[0_0_20px_rgba(239,68,68,0.4)]" : "bg-[#dbf26e] text-black group-hover:scale-105"}
                `}>
                  <Mic size={20} />
                </div>
                <span className="absolute bottom-1 text-[10px] font-mono text-[#666] opacity-0 group-hover:opacity-100 transition-opacity">
                  {isListening ? "Tap to Stop" : "Tap to Speak"}
                </span>
              </button>
            </div>
          ) : (
            // TEXT MODE
            <form 
              onSubmit={(e) => { e.preventDefault(); setInputValue(""); }}
              className="flex-1 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your thought..."
                className="w-full bg-transparent border-none text-white placeholder-[#444] focus:ring-0 px-4"
                autoFocus
              />
              <button 
                type="submit"
                disabled={!inputValue.trim()}
                className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#dbf26e] text-black disabled:opacity-50 disabled:bg-[#222] disabled:text-[#666] transition-all"
              >
                <Send size={18} />
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}