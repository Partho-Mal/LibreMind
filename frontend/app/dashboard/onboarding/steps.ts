// frontend/app/dashboard/onboarding/steps.ts

export type QuestionType = "text" | "select" | "phone";

export interface Step {
  id: string;
  question: string;
  subtext?: string;
  type: QuestionType;
  options?: string[];
  required: boolean;
  placeholder?: string;
}


export const ONBOARDING_STEPS: Step[] = [
  {
    id: "name",
    question: "What should we call you?",
    subtext: "This is how your AI companion will address you.",
    type: "text",
    required: true,
    placeholder: "Type your name...",
  },
  {
    id: "language",
    question: "Which language are you most comfortable with?",
    type: "select",
    options: ["English", "Hindi", "Hinglish", "Marathi"],
    required: true,
  },
  // --- FEELING GROUP ---
  {
    id: "feeling",
    question: "How are you feeling right now?",
    type: "select",
    options: ["Calm", "Stressed", "Anxious", "Low", "Overwhelmed"],
    required: true,
  },
  {
    id: "duration",
    // We use a placeholder token {feeling} to replace dynamically
    question: "How long have you been feeling {feeling}?", 
    type: "select",
    options: ["Few days", "Few weeks", "Several months", "Longer", "Just today"],
    required: true,
  },
  {
    id: "panic",
    question: "Have you experienced panic attacks recently?",
    type: "select",
    options: ["Yes", "No", "Not sure"],
    required: true,
  },
  // --- CONTEXT GROUP ---
  {
    id: "medical",
    question: "Any medical conditions we should consider?",
    type: "select",
    options: ["None", "Blood Pressure", "Diabetes", "Other", "Prefer not to say"],
    required: true,
  },
  {
    id: "support",
    question: "What kind of support are you hoping for?",
    type: "select",
    options: [
      "Someone to talk to",
      "Stress management",
      "Emotional understanding",
      "Guided exercises",
    ],
    required: true,
  },
  {
    id: "emergency",
    question: "Emergency contact number",
    subtext: "Just in case. We respect your privacy.",
    type: "text",
    required: false,
    placeholder: "+91 XXXXX XXXXX",
  },
];