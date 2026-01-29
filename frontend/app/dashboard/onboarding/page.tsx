// frontend/app/dashboard/onboarding/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { ArrowRight } from "lucide-react";

// Configuration
import { ONBOARDING_STEPS } from "./steps";

// Atomic Components
import { ProgressBar } from "@/components/onboarding/ProgressBar";
import { QuestionHeader } from "@/components/onboarding/QuestionHeader";
import { StepInputs } from "@/components/onboarding/StepInputs";
import { NavigationFooter } from "@/components/onboarding/NavigationFooter";

export default function OnboardingPage() {
  const router = useRouter();
  
  // --- State ---
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.user_metadata?.full_name) {
        setFormData((prev) => ({ ...prev, name: user.user_metadata.full_name }));
      }
    };
    fetchUser();
  }, []);

  // --- Handlers ---
  const triggerAnimation = (callback: () => void) => {
    setIsAnimating(true);
    setTimeout(() => {
      callback();
      setIsAnimating(false);
    }, 300);
  };

  const handleNext = async (manualValue?: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    const currentStepObj = ONBOARDING_STEPS[currentStep];
    const currentStepId = currentStepObj.id;
    let nextIndex = currentStep + 1;

    const valueToCheck = manualValue || formData[currentStepId];

    if (currentStepId === "feeling" && valueToCheck === "Calm") {
      nextIndex += 1; 
    }

    if (nextIndex < ONBOARDING_STEPS.length) {
      triggerAnimation(() => setCurrentStep(nextIndex));
    } else {
      await handleSubmit();
    }
  };

  const handleBack = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    
    let prevIndex = currentStep - 1;

    if (prevIndex >= 0) {
      const prevStepId = ONBOARDING_STEPS[prevIndex].id;
      if (prevStepId === "duration" && formData["feeling"] === "Calm") {
        prevIndex -= 1;
      }
      triggerAnimation(() => setCurrentStep(prevIndex));
    }
  };

  const handleChange = (val: string) => {
    setFormData((prev) => ({ ...prev, [ONBOARDING_STEPS[currentStep].id]: val }));
  };

  const handleSelectOption = (val: string) => {
    handleChange(val);
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!val.startsWith("Other")) {
      timerRef.current = setTimeout(() => {
        handleNext(val); 
      }, 250);
    }
  };

  // --- Database Actions ---
  const handleSkip = async () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setLoading(true);
    
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      const { error } = await supabase.from("users").upsert({
        id: user.id,
        full_name: formData.name || user.user_metadata?.full_name || "Friend",
        onboarding_completed: true,
        support_mode: 'self',
        updated_at: new Date().toISOString(),
      });

      if (!error) {
        router.refresh();
        setTimeout(() => router.push("/dashboard"), 300);
      } else {
        setLoading(false);
      }
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      const { name, ...surveyAnswers } = formData;

      const { error } = await supabase.from("users").upsert({
        id: user.id,
        full_name: formData.name,
        onboarding_completed: true,
        support_mode: 'self',
        updated_at: new Date().toISOString(),
        profile_data: surveyAnswers
      });

      if (!error) {
        router.refresh();
        setTimeout(() => router.push("/dashboard"), 300);
      } else {
        setLoading(false);
      }
    }
  };

  const step = ONBOARDING_STEPS[currentStep];
  const value = formData[step.id] || "";
  const isValid = !step.required || (value.trim() !== "" && value !== "Other");

  let displayQuestion = step.question;
  if (step.question.includes("{feeling}")) {
    const userFeeling = formData["feeling"] || "this way";
    displayQuestion = step.question.replace("{feeling}", userFeeling.toLowerCase());
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#050505] text-white font-sans relative overflow-hidden">
      
      {/* 1. BACKGROUND GRID (The Swiss Grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="mx-auto flex h-full max-w-[1400px] justify-between px-6">
            <div className="w-px h-full bg-white/20" />
            <div className="w-px h-full bg-white/20 hidden md:block" />
            <div className="w-px h-full bg-white/20 hidden lg:block" />
            <div className="w-px h-full bg-white/20" />
        </div>
      </div>
      
      {/* 2. SKIP CAPSULE */}
      <div className="absolute top-8 right-8 z-20">
        <button 
          onClick={handleSkip}
          disabled={loading}
          className="
            group flex items-center gap-2 
            rounded-full border border-white/10 bg-[#0A0A0A]
            px-4 py-2 text-xs font-medium text-[#666] font-mono uppercase tracking-wider
            transition-all hover:border-[#dbf26e]/50 hover:text-[#dbf26e]
            disabled:opacity-50
          "
        >
          <span>Skip initialization</span>
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      <div className="w-full max-w-2xl px-6 relative z-10">
        
        {/* 3. Progress Bar */}
        <ProgressBar current={currentStep} total={ONBOARDING_STEPS.length} />

        {/* 4. Main Content */}
        <div 
          className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
            isAnimating ? "opacity-0 translate-y-4 blur-sm" : "opacity-100 translate-y-0 blur-0"
          }`}
        >
          <QuestionHeader 
            question={displayQuestion} 
            subtext={step.subtext} 
          />
          
          <StepInputs 
            step={step}
            value={value}
            onChange={handleChange}
            onSelectOption={handleSelectOption}
            onEnter={() => handleNext()} 
          />
        </div>

        {/* 5. Footer */}
        <NavigationFooter 
          onBack={handleBack}
          onNext={() => handleNext()} 
          isFirstStep={currentStep === 0}
          isLastStep={currentStep === ONBOARDING_STEPS.length - 1}
          isValid={isValid}
          isOptional={!step.required}
          loading={loading}
        />

      </div>
    </div>
  );
}