// frontend/app/dashboard/(main)/settings/page.tsx

"use client";

import { useState } from "react";
import { Bell, Lock, Moon, Trash2, Shield, Eye } from "lucide-react";

export default function SettingsPage() {
  // Mock states for UI demo
  const [toggles, setToggles] = useState({
    notifications: true,
    dataCollection: false,
    darkMode: true,
  });

  const toggle = (key: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-16 pb-20">
      
      {/* Header */}
      <div>
        <span className="font-mono text-xs text-[#dbf26e] uppercase tracking-widest mb-2 block">
            [ System Config ]
        </span>
        <h1 className="text-4xl font-medium text-white tracking-tight">Settings</h1>
      </div>

      {/* Section 1: Preferences */}
      <section className="space-y-6">
        <h2 className="text-lg font-medium text-white border-b border-white/10 pb-4">
          Preferences
        </h2>
        
        <div className="space-y-4">
          <SettingItem 
            icon={Bell} 
            title="Notifications" 
            desc="Receive daily check-in reminders."
            isOn={toggles.notifications}
            onToggle={() => toggle('notifications')}
          />
          <SettingItem 
            icon={Moon} 
            title="Dark Mode" 
            desc="Always use the obsidian theme."
            isOn={toggles.darkMode}
            onToggle={() => toggle('darkMode')}
          />
        </div>
      </section>

      {/* Section 2: Privacy (Crucial) */}
      <section className="space-y-6">
         <h2 className="text-lg font-medium text-white border-b border-white/10 pb-4">
          Privacy & Security
        </h2>

        <div className="space-y-4">
          <SettingItem 
            icon={Shield} 
            title="Local-Only Storage" 
            desc="Keep chat logs strictly on this device."
            isOn={true} // Hardcoded for demo
            onToggle={() => {}}
            disabled
          />
           <SettingItem 
            icon={Eye} 
            title="Usage Analysis" 
            desc="Allow anonymous usage data to improve the AI."
            isOn={toggles.dataCollection}
            onToggle={() => toggle('dataCollection')}
          />
        </div>
      </section>

      {/* Section 3: Danger Zone */}
      <section className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
            <Trash2 size={20} />
          </div>
          <div>
            <h3 className="text-red-500 font-medium">Delete Account</h3>
            <p className="text-red-400/60 text-sm mt-1">
              Permanently remove your account and all associated chat history. This action cannot be undone.
            </p>
          </div>
        </div>
        <div className="pt-2">
           <button className="px-4 py-2 rounded-lg border border-red-500/30 text-red-500 text-sm hover:bg-red-500 hover:text-white transition-colors">
             Delete my account
           </button>
        </div>
      </section>

    </div>
  );
}

// Helper Component for List Items
function SettingItem({ icon: Icon, title, desc, isOn, onToggle, disabled = false }: any) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg bg-white/5 text-[#888]">
          <Icon size={20} />
        </div>
        <div>
          <h3 className="text-white font-medium">{title}</h3>
          <p className="text-sm text-[#666]">{desc}</p>
        </div>
      </div>
      
      {/* Custom Switch Toggle */}
      <button 
        onClick={onToggle}
        disabled={disabled}
        className={`
          relative h-6 w-11 rounded-full transition-colors duration-200 ease-in-out focus:outline-none
          ${isOn ? 'bg-[#dbf26e]' : 'bg-[#333]'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        <span
          className={`
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-black shadow ring-0 transition duration-200 ease-in-out mt-1
            ${isOn ? 'translate-x-6' : 'translate-x-1'}
          `}
        />
      </button>
    </div>
  );
}