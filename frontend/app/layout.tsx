// app/layout.tsx
import { Manrope } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap", 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-obsidian font-sans text-white antialiased selection:bg-matcha selection:text-obsidian">
        
        {/* The Texture Overlay */}
        <div className="bg-noise" />
        
        {/* Smooth Scroll Wrapper */}
        <SmoothScroll>
          {children}
        </SmoothScroll>
        
      </body>
    </html>
  );
}