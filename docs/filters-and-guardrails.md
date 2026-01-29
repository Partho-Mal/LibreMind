# Filters & Guardrails

## 1. Pre-LLM Regex Filters (Edge Layer)
Before sending data to the AI, the input is scanned for these patterns:
* `/(kill|hurt|end) (my|self|life)/i` -> Triggers **High Severity Event**.
* `/(bomb|shoot|weapon)/i` -> Triggers **Violence Protocol**.

## 2. Post-LLM Validation
The AI output is validated to ensure it does not hallucinate medical advice.
* *Forbidden phrases:* "I prescribe", "You should take [drug name]", "I diagnose you".

## 3. Rate Limiting
* **Rule:** Max 10 messages per minute per user.
* **Reason:** Prevents DoS attacks and discourages manic/spam behavior during a crisis.