### Mental Wellness AI Chatbot

A full stack system built with Next.js, FastAPI, Supabase, Redis, and Docker. It provides real time emotional support through a 3D AI chatbot and an admin dashboard for mental wellness counselors.

---

### Overview

This system consists of three main components:

1. **Frontend** using Next.js and Typescript. Contains the chat UI, dashboards, authentication, and 3D rendering.
2. **Backend** using FastAPI. Handles LLM responses, risk scoring, caching, session storage, and all API logic.
3. **Cloud Services** using Supabase for authentication and database, and Upstash Redis for temporary memory.

---

### Tech Stack

**Frontend:** Next.js, Typescript, Supabase JS, React Three Fiber, Tailwind CSS

**Backend:** FastAPI, Supabase Python SDK, Redis, Uvicorn, httpx, aiohttp, Loguru, Pydantic

**Infrastructure:** Docker, Railway (or AWS/Oracle), Vercel

**Cloud:** Supabase Postgres, Supabase Auth, Upstash Redis

---

### Project Goals

* Provide students with a 3D AI chatbot for emotional support.
* Detect and score risk levels (including self harm signals).
* Provide mental wellness counselors with an admin dashboard.
* Build a scalable backend suitable for Docker deployment.
* Demonstrate modern web, backend, cloud, and safety engineering.

---

### Safety and Compliance Requirements

A mental wellness chatbot must follow strict safety rules. Evaluators expect these features.

#### Safety Prompt

Defines how the AI should behave. Implemented in **llm_service.py**.
Ensures:

* Supportive and empathetic responses
* No medical or diagnostic claims
* Neutral and safe language

#### Self Harm Escalation Plan

Implemented in **risk_service.py**.
Must:

* Detect high risk language
* Provide safe responses
* Direct users to crisis resources
* Flag conversations for counselors

#### Disclaimers

Displayed in **SessionStart.tsx**.
Must inform users:

* AI cannot diagnose or treat
* Not a replacement for therapists
* For emergencies, contact local services

#### Rule Based Filters

Implemented in **filters.py**.
Used to:

* Remove harmful instructions
* Sanitize extreme content
* Prevent misuse of the model

All of these are mandatory for responsible mental wellness AI.

---

### Environment Variables

Both frontend and backend require environment variables.

#### Backend `.env` (placed in `backend/`)

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_service_role_key
REDIS_URL=your_upstash_redis_url
LLM_API_KEY=your_openai_or_gemini_key
```

Purpose:

* `SUPABASE_URL` and `SUPABASE_KEY` authenticate database reads and writes.
* `REDIS_URL` connects FastAPI to Upstash Redis for caching and memory.
* `LLM_API_KEY` is used by your LLM provider.

#### Frontend `.env.local` (placed in `frontend/`)

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

Purpose:

* Frontend uses **anon** key only (safe for client side).
* Backend URL switches to production API when deployed.

---

### Docker Support

The backend supports Docker for deployment on Railway, AWS, Oracle, etc.

**Dockerfile (placed inside backend/):**

```
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
ENV PYTHONUNBUFFERED=1
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Run locally:

```
docker build -t wellness-backend .
docker run -p 8000:8000 wellness-backend
```

---

### Frontend Structure (Linux Tree Style With Short Comments)

```
frontend/
├── eslint.config.mjs            # lint config
├── next.config.ts               # Next.js config
├── next-env.d.ts                # TS env types
├── package.json                 # dependencies
├── package-lock.json            # lock file
├── postcss.config.mjs           # PostCSS config
├── public
│   ├── logo.png                 # logo
│   └── models
│       ├── avatar_female.glb    # 3D model
│       └── avatar_male.glb      # 3D model
├── README.md                    # project readme
├── src
│   ├── app
│   │   ├── admin
│   │   │   ├── dashboard
│   │   │   │   └── page.tsx      # admin dashboard
│   │   │   ├── login
│   │   │   │   └── page.tsx      # admin login
│   │   │   └── sessions
│   │   │       ├── [id]
│   │   │       │   └── page.tsx  # admin view session
│   │   │       └── page.tsx      # admin session list
│   │   ├── chat
│   │   │   ├── Avatar3D.tsx       # 3D avatar
│   │   │   ├── ChatBox.tsx        # chat messages UI
│   │   │   ├── helpers.ts         # chat utilities
│   │   │   ├── page.tsx           # chat page
│   │   │   ├── selectors.ts       # local state
│   │   │   └── SessionStart.tsx   # start screen
│   │   ├── components
│   │   │   ├── AdminRoute.tsx     # admin guard
│   │   │   ├── LoadingSpinner.tsx # loader
│   │   │   ├── MessageBubble.tsx  # chat bubble
│   │   │   ├── ProtectedRoute.tsx # auth guard
│   │   │   └── RiskTag.tsx        # risk badge
│   │   ├── dashboard
│   │   │   └── page.tsx           # student dashboard
│   │   ├── favicon.ico            # icon
│   │   ├── globals.css            # global styles
│   │   ├── hooks
│   │   │   ├── useChatSession.ts  # chat state
│   │   │   ├── useRealtimeSupabase.ts # live updates
│   │   │   └── useUser.ts         # auth hook
│   │   ├── layout.tsx             # root layout
│   │   ├── login
│   │   │   └── page.tsx           # student login
│   │   ├── page.tsx               # landing page
│   │   ├── signup
│   │   │   └── page.tsx           # signup
│   │   └── styles
│   │       └── chat.css           # chat styling
│   └── lib
│       ├── api.ts                 # backend API helper
│       ├── authHelpers.ts         # auth helpers
│       ├── constants.ts           # constants
│       └── supabaseClient.ts      # supabase client
└── tsconfig.json                  # TS config
```

---

### Backend Structure (Linux Tree Style With Short Comments)

```
backend/
├── config.py                     # config/env loader
├── logs
│   └── server.log                # logs
├── main.py                       # FastAPI entry
├── redis_client.py               # redis connection
├── requirements.txt              # dependencies
├── routers
│   ├── admin.py                  # admin endpoints
│   ├── chat.py                   # chat flow
│   └── sessions.py               # session logs
├── schemas
│   ├── chat_schemas.py           # chat models
│   └── session_schemas.py        # session models
├── services
│   ├── cache_service.py          # redis caching
│   ├── filters.py                # rule based filters
│   ├── escalation_plan.py        # self harm escalation
│   ├── safety_prompt.py          # AI safety prompt
│   ├── llm_service.py            # LLM logic
│   ├── risk_service.py           # risk scoring
│   └── session_service.py        # logging
├── supabase_client.py            # supabase connection
├── tests
│   ├── test_chat.py              # chat tests
│   ├── test_risk.py              # risk tests
│   └── test_sessions.py          # session tests
└── utils
    ├── auth.py                   # token validation
    └── formatters.py             # helpers
```

---

### System Workflow

**Student Flow**

1. Student signs up or logs in using Supabase.
2. Student dashboard loads previous sessions.
3. Student starts a chat.
4. FastAPI receives message.
5. Redis stores short term memory.
6. LLM generates response.
7. Risk score calculated.
8. Session saved to Supabase.

**Admin Flow**

1. Admin logs in.
2. Sees session list ordered by risk.
3. Opens transcript for review.

---

### Local Development Setup

**Backend:**

```
cd backend
python3 -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install fastapi uvicorn[standard] python-dotenv
pip install supabase redis httpx pydantic aiohttp loguru
pip freeze > requirements
```
