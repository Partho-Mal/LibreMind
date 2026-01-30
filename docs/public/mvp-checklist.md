## 1 WEEK MVP CHECKLIST — LibreMind (Strike as You Go)

---

## CURRENT STATE (ALREADY DONE)

* [x] Backend in Python
* [x] Frontend in React + Next.js
* [x] Supabase client setup
* [x] Redis client setup
* [x] LLM abstraction layer
* [x] Safety and escalation docs
* [x] Project docs structure
* [x] Docker setup
* [x] Tests scaffolded

---

## MVP GOAL (DO NOT EXPAND)

* [ ] User logs in
* [ ] User starts a session
* [ ] User chats with AI
* [ ] AI responds safely
* [ ] Session ends cleanly
* [ ] End to end demo works

---

## BACKEND TASKS

### Core

* [ ] Config loads environment correctly
* [ ] Logging works across services
* [ ] App boots without errors

### Infra

* [ ] Supabase connection verified
* [ ] Redis connection verified
* [ ] Redis used only for short lived cache
* [ ] Supabase used as source of truth

### Routers

* [ ] Chat endpoint works
* [ ] Session create works
* [ ] Session close works
* [ ] Admin routes protected or disabled

### Schemas

* [ ] Chat schema validates
* [ ] Session schema validates
* [ ] No optional fields blocking flow

### Services

* [ ] LLM service returns response
* [ ] Provider switching works
* [ ] Safety prompt injected on every call
* [ ] Risk service flags dangerous input
* [ ] Escalation plan triggers fallback
* [ ] Session service persists state
* [ ] Cache service does not break flow

### Utils

* [ ] Auth middleware works
* [ ] Output formatted safely for frontend

---

## AI BEHAVIOR (CRITICAL)

* [ ] Empathetic tone only
* [ ] No diagnosis language
* [ ] No medical advice
* [ ] Short responses
* [ ] Crisis keywords handled
* [ ] Safe refusal when required

---

## DATABASE (SUPABASE)

* [ ] Users table verified
* [ ] Sessions table exists
* [ ] Messages stored safely
* [ ] JSONB used where needed
* [ ] Row level security enabled
* [ ] User data isolation verified
* [ ] Easy delete per user

---

## FRONTEND TASKS

### Auth

* [ ] Login page works
* [ ] Signup page works
* [ ] Session persists
* [ ] Logout clears state

### Onboarding

* [ ] Simple intro flow
* [ ] Skip option present

### Chat

* [ ] Chat page renders
* [ ] Message send works
* [ ] AI reply renders
* [ ] Loading indicator shown
* [ ] Error state handled

### Avatar

* [ ] Avatar page loads
* [ ] Placeholder avatar acceptable
* [ ] Avatar reacts on AI reply

### Dashboard

* [ ] Active session visible
* [ ] Start new session
* [ ] End session button works

---

## INTEGRATION

* [ ] Frontend calls backend API
* [ ] Auth token passed correctly
* [ ] Session id maintained
* [ ] No hardcoded values
* [ ] Errors do not crash UI

---

## SAFETY AND COMPLIANCE

* [ ] Safety guidelines followed
* [ ] Escalation plan active
* [ ] Clear disclaimer text
* [ ] No therapy claims
* [ ] Session timeout exists

---

## TESTING

* [ ] Chat tests pass
* [ ] Risk tests pass
* [ ] Session tests pass
* [ ] Manual happy path tested
* [ ] Manual crisis path tested

---

## FINAL MVP POLISH

* [ ] Debug logs removed
* [ ] UI copy cleaned
* [ ] Calm color theme applied
* [ ] No broken routes
* [ ] No placeholder text

---

## DEMO READY

* [ ] App runs locally
* [ ] App runs via Docker
* [ ] Demo video recorded
* [ ] README updated
* [ ] Architecture doc accurate

---

## HARD STOP RULES

* [ ] No new features
* [ ] No refactors
* [ ] No redesigns
* [ ] Stability over perfection


---

# MVP Launch Checklist

## Phase 1: Foundation (Current Status)
- [x] Supabase Project Created
- [x] SQL Schema Deployed (Users, Sessions, RLS)
- [x] Vector Extension Enabled (`pgvector`)

## Phase 2: Core Features
- [ ] 3D Avatar rendering in Next.js (Canvas loaded)
- [ ] Chat UI connected to Edge Function
- [ ] "Streaming" text response implemented (for realism)

## Phase 3: Intelligence
- [ ] System Prompt refined (`llm-prompt.md`)
- [ ] Context Injection (RAG) pipeline working
- [ ] Safety Regex tested

## Phase 4: Launch Prep
- [ ] Legal Consent Modal (Terms of Service) on Sign-up
- [ ] Mobile Responsiveness Test
- [ ] Stress Test (Simulate 50 concurrent users)