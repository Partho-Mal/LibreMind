// frontend/components/onboarding/ProgressBar.tsx

export function ProgressBar({ current, total }: { current: number; total: number }) {
  const progressPercent = ((current + 1) / total) * 100;

  return (
    <div className="mb-16 w-full">
      <div className="flex justify-between font-mono text-[10px] text-[#dbf26e] mb-3 uppercase tracking-widest">
        <span>Step 0{current + 1} / 0{total}</span>
        <span>{Math.round(progressPercent)}%</span>
      </div>
      <div className="h-1 w-full bg-white/10 overflow-hidden">
        <div 
          className="h-full bg-[#dbf26e] transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]" 
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}