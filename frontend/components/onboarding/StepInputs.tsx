// frontend/components/onboarding/StepInputs.tsx
import { Step } from "@/app/dashboard/onboarding/steps";

interface Props {
  step: Step;
  value: string;
  onChange: (val: string) => void;
  onSelectOption: (val: string) => void;
  onEnter: () => void;
}

export function StepInputs({ step, value, onChange, onSelectOption, onEnter }: Props) {
  
  // 1. EDITORIAL TEXT INPUT
  if (step.type === "text" || step.type === "phone") {
    return (
      <div className="space-y-6 pt-4">
        <input
          autoFocus
          type={step.type === "text" ? "text" : "tel"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onEnter()}
          placeholder={step.placeholder}
          className="w-full bg-transparent border-b border-white/20 pb-4 text-3xl md:text-4xl text-white placeholder-[#333] focus:border-[#dbf26e] focus:outline-none transition-colors"
        />
        {!step.required && !value && (
          <p className="font-mono text-xs text-[#666] uppercase tracking-wider">[ Enter ] to skip</p>
        )}
      </div>
    );
  }

  // 2. MODERN GRID SELECTION
  const isCustomEntry = value.startsWith("Other") && value.length > 5;
  const selectedOption = step.options?.find(opt => opt === value) || (value.startsWith("Other") ? "Other" : null);

  return (
    <div className="space-y-6 pt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {step.options?.map((option) => {
          const isSelected = selectedOption === option;
          return (
            <button
              key={option}
              onClick={() => onSelectOption(option)}
              className={`
                relative flex items-center justify-between p-6 text-left transition-all duration-200 group border
                ${isSelected 
                  ? "border-[#dbf26e] bg-[#dbf26e]/5" 
                  : "border-white/10 bg-transparent hover:border-white/30 hover:bg-white/5"
                }
              `}
            >
              <span className={`text-lg font-medium ${isSelected ? "text-[#dbf26e]" : "text-[#AAA] group-hover:text-white"}`}>
                {option}
              </span>
              
              {/* Minimalist Selection Dot */}
              <div className={`
                h-4 w-4 rounded-full border transition-colors
                ${isSelected 
                  ? "border-[#dbf26e] bg-[#dbf26e]" 
                  : "border-white/20 bg-transparent group-hover:border-white/50"
                }
              `} />
            </button>
          );
        })}
      </div>

      {/* 3. CONDITIONAL "OTHER" INPUT */}
      {selectedOption === "Other" && (
        <div className="pt-4 animate-in fade-in slide-in-from-top-2">
          <input
            autoFocus
            type="text"
            placeholder="Please specify details..."
            onChange={(e) => onChange(e.target.value ? `Other: ${e.target.value}` : "Other")}
            onKeyDown={(e) => e.key === "Enter" && onEnter()}
            className="w-full bg-[#0A0A0A] border border-white/20 p-4 text-white focus:border-[#dbf26e] focus:outline-none placeholder-[#444]"
          />
        </div>
      )}
    </div>
  );
}