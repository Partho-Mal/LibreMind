# System Architecture

## Overview
This platform is a privacy-first, 3D interactive mental wellness application. It decouples the **Experience Layer** (Frontend/3D) from the **Intelligence Layer** (AI/Vector Memory) using **Supabase** as the secure orchestrated backend.

## The Stack
* **Frontend:** Next.js + Three.js (via React Three Fiber) for the 3D Avatar.
* **Backend:** Supabase (PostgreSQL, Auth, Realtime, Edge Functions).
* **AI Engine:** OpenAI `gpt-4o` (Reasoning) + `text-embedding-3-small` (Memory).
* **Vector DB:** `pgvector` (Internal Supabase extension).

## Data Flow Pipeline
1.  **Input:** User types message -> Frontend secures it -> Sends to Supabase Edge Function.
2.  **Safety Check:** Edge Function runs regex/classifier against `filters-and-guardrails.md`.
    * *If Unsafe:* Triggers `escalation-plan.md` immediately.
3.  **Context Retrieval (RAG):**
    * System embeds current query.
    * Queries `conversation_summaries` via cosine similarity.
    * Retrieved "memories" are injected into the System Prompt.
4.  **Generation:** LLM generates text + Sentiment Tag (e.g., `[HAPPY]`).
5.  **Rendering:** Frontend parses Sentiment Tag -> Triggers Avatar Animation (e.g., Smile) -> Displays text.