// app/dashboard/onboarding/layout.tsx

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Set global background to Obsidian */}
      <body className="bg-[#050505] selection:bg-[#dbf26e] selection:text-black">
        {children}
      </body>
    </html>
  );
}