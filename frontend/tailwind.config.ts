// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      colors: {
        // "Obsidian" - A warm, rich black (not #000000)
        obsidian: "#050505", 
        charcoal: "#0F0F11",
        
        // "Electric Matcha" - The "Human" accent color
        matcha: {
          DEFAULT: "#dbf26e", // The main pop color
          dim: "#bcca5e",
          glow: "rgba(219, 242, 110, 0.15)",
        },
        
        // "Stone" - For text, warmer than Gray
        stone: {
          100: "#F5F5F4",
          400: "#A8A29E",
          800: "#292524",
        }
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')", // Adds the texture
        'glass-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)',
      },
      letterSpacing: {
        tighter: '-0.04em', // Crucial for that "Editorial" look
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
};
export default config;