// frontend/components/onboarding/NavigationFooter.tsx
import { ArrowRight, ArrowLeft, Loader2 } from "lucide-react";

interface Props {
  onBack: () => void;
  onNext: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isValid: boolean;
  loading: boolean;
  isOptional: boolean;
}

export function NavigationFooter({ 
  onBack, onNext, isFirstStep, isLastStep, isValid, loading, isOptional 
}: Props) {
  
  let buttonText = "Next Step";
  if (isLastStep) buttonText = "Complete Setup";
  else if (isOptional && !isValid) buttonText = "Skip";

  return (
    <div className="mt-16 flex items-center justify-between border-t border-white/5 pt-8">
      <button
        onClick={onBack}
        disabled={isFirstStep || loading}
        className={`
          flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors
          ${isFirstStep ? "opacity-0 pointer-events-none" : "text-[#666] hover:text-white"}
        `}
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      <button
        onClick={onNext}
        disabled={(!isValid && !isOptional) || loading}
        className={`
          flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95
          ${(isValid || isOptional)
            ? "bg-[#dbf26e] text-black shadow-[0_0_20px_-5px_rgba(219,242,110,0.3)] hover:bg-white" 
            : "bg-[#111] text-[#444] border border-white/5 cursor-not-allowed"
          }
        `}
      >
        {loading ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <>
            {buttonText}
            {!isLastStep && <ArrowRight className="h-5 w-5" />}
          </>
        )}
      </button>
    </div>
  );
}