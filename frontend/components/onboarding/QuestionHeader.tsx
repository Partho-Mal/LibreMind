// frontend/components/onboarding/QuestionHeader.tsx
interface Props {
  question: string;
  subtext?: string;
}

export function QuestionHeader({ question, subtext }: Props) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl md:text-5xl font-medium text-white leading-[1.1] tracking-tight">
        {question}
      </h1>
      {subtext && (
        <p className="mt-4 text-[#888] text-lg leading-relaxed max-w-lg">
          {subtext}
        </p>
      )}
    </div>
  );
}