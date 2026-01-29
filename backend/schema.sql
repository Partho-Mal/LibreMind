-- =============================================
-- 0. CLEANUP (RESET)
-- =============================================
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP TRIGGER IF EXISTS on_safety_event_created ON public.safety_events;
DROP FUNCTION IF EXISTS public.handle_new_user;
DROP FUNCTION IF EXISTS public.hydrate_safety_event;

-- Drop tables with CASCADE to remove dependencies
DROP TABLE IF EXISTS public.safety_events CASCADE;
DROP TABLE IF EXISTS public.legal_consent_logs CASCADE;
DROP TABLE IF EXISTS public.user_3d_state CASCADE;
DROP TABLE IF EXISTS public.conversation_summaries CASCADE;
DROP TABLE IF EXISTS public.messages CASCADE;
DROP TABLE IF EXISTS public.sessions CASCADE;
DROP TABLE IF EXISTS public.assignments CASCADE;
DROP TABLE IF EXISTS public.staff CASCADE;
DROP TABLE IF EXISTS public.users CASCADE;
DROP TABLE IF EXISTS public.institutions CASCADE;

-- =============================================
-- 1. SETUP & EXTENSIONS
-- =============================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS vector;

-- =============================================
-- 2. TABLE DEFINITIONS
-- =============================================

-- 2.1 INSTITUTIONS
CREATE TABLE public.institutions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    type TEXT CHECK (type IN ('school', 'college', 'university', 'private_practice')),
    contact_email TEXT NOT NULL,
    subscription_tier TEXT DEFAULT 'free',
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2.2 PUBLIC USERS
CREATE TABLE public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    
    -- [ADDED] Flexible storage for onboarding survey answers (feelings, history, etc.)
    profile_data JSONB DEFAULT '{}'::jsonb, 
    
    onboarding_completed BOOLEAN DEFAULT FALSE,
    current_onboarding_step TEXT DEFAULT 'welcome' CHECK (current_onboarding_step IN ('welcome', 'consent', 'avatar', 'assessment', 'complete')),
    
    -- IMPROVEMENT 1: NOT NULL constraint for reliability
    support_mode TEXT NOT NULL DEFAULT 'self' CHECK (support_mode IN ('self', 'institutional')),
    
    institution_id UUID REFERENCES public.institutions(id), 
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'banned')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2.3 STAFF
CREATE TABLE public.staff (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    role TEXT CHECK (role IN ('admin', 'moderator', 'therapist', 'counselor')),
    institution_id UUID REFERENCES public.institutions(id),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, institution_id)
);

-- 2.4 ASSIGNMENTS
CREATE TABLE public.assignments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    staff_id UUID REFERENCES public.staff(id) ON DELETE CASCADE,
    assigned_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(student_id, staff_id)
);

-- 2.5 SESSIONS
CREATE TABLE public.sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    title TEXT,
    started_at TIMESTAMPTZ DEFAULT NOW(),
    ended_at TIMESTAMPTZ,
    flagged BOOLEAN DEFAULT FALSE,
    
    -- IMPROVEMENT 2: Enforced bounds for analytics safety
    risk_score INT DEFAULT 0 CHECK (risk_score >= 0 AND risk_score <= 100),
    
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2.6 MESSAGES
CREATE TABLE public.messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES public.sessions(id) ON DELETE CASCADE,
    sender TEXT CHECK (sender IN ('user', 'ai', 'system')),
    content TEXT NOT NULL,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2.7 CONVERSATION SUMMARIES
CREATE TABLE public.conversation_summaries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    session_id UUID REFERENCES public.sessions(id) ON DELETE CASCADE,
    summary_text TEXT NOT NULL,
    topics_discussed TEXT[], 
    embedding vector(1536),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2.8 USER 3D STATE
CREATE TABLE public.user_3d_state (
    user_id UUID PRIMARY KEY REFERENCES public.users(id) ON DELETE CASCADE,
    avatar_config JSONB NOT NULL DEFAULT '{}',
    environment_id TEXT DEFAULT 'cozy_room_day',
    camera_settings JSONB DEFAULT '{}',
    theme_mode TEXT DEFAULT 'light',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2.9 SAFETY EVENTS
CREATE TABLE public.safety_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    -- IMPROVEMENT 3: SET NULL ensures audit logs survive session deletion
    session_id UUID REFERENCES public.sessions(id) ON DELETE SET NULL,
    
    severity TEXT CHECK (severity IN ('low', 'medium', 'high', 'critical')),
    detected_by TEXT CHECK (detected_by IN ('model', 'rule', 'manual')),
    action_taken TEXT NOT NULL,
    institution_id UUID REFERENCES public.institutions(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2.10 LEGAL CONSENT LOG
CREATE TABLE public.legal_consent_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.users(id),
    terms_version TEXT NOT NULL,
    consent_type TEXT CHECK (consent_type IN ('terms', 'privacy', 'crisis_protocol')),
    ip_address INET, 
    agreed_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- IMPROVEMENT 4: Prevent duplicate consent records
    UNIQUE (user_id, terms_version, consent_type)
);

-- =============================================
-- 3. INDEXES
-- =============================================
CREATE INDEX idx_messages_session_id ON public.messages(session_id);
CREATE INDEX idx_sessions_user_id ON public.sessions(user_id);
CREATE INDEX idx_safety_institution ON public.safety_events(institution_id);

-- =============================================
-- 4. AUTOMATION & TRIGGERS
-- =============================================

-- IMPROVEMENT 5: Added 'SET search_path = public' for security
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS trigger 
LANGUAGE plpgsql 
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.users (id, support_mode, onboarding_completed)
  VALUES (new.id, 'self', false); 
  
  INSERT INTO public.user_3d_state (user_id)
  VALUES (new.id);
  
  RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- IMPROVEMENT 5: Added 'SET search_path = public' for security
CREATE OR REPLACE FUNCTION public.hydrate_safety_event()
RETURNS trigger 
LANGUAGE plpgsql 
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  UPDATE public.safety_events
  SET institution_id = (
      SELECT u.institution_id 
      FROM public.sessions s
      JOIN public.users u ON u.id = s.user_id
      WHERE s.id = NEW.session_id
  )
  WHERE id = NEW.id;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_safety_event_created
  AFTER INSERT ON public.safety_events
  FOR EACH ROW EXECUTE PROCEDURE public.hydrate_safety_event();


-- =============================================
-- 5. ROW LEVEL SECURITY (RLS)
-- =============================================

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.institutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.conversation_summaries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_3d_state ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.safety_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assignments ENABLE ROW LEVEL SECURITY;

-- 5.1 USER PROFILE

-- Allow users to view their own profile
CREATE POLICY "Users can view own profile" ON public.users
    FOR SELECT USING (auth.uid() = id);

-- [NEW] Allow users to create their own profile (Critical for Onboarding Upsert)
CREATE POLICY "Users can insert own profile" ON public.users
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile" ON public.users
    FOR UPDATE USING (auth.uid() = id);

-- 5.2 SESSIONS & MESSAGES
CREATE POLICY "Users view own sessions" ON public.sessions
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users create sessions" ON public.sessions
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users view own messages" ON public.messages
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM public.sessions WHERE sessions.id = messages.session_id AND sessions.user_id = auth.uid())
    );

CREATE POLICY "Users send messages" ON public.messages
    FOR INSERT WITH CHECK (
        EXISTS (SELECT 1 FROM public.sessions WHERE sessions.id = session_id AND sessions.user_id = auth.uid())
    );

-- 5.3 SAFETY EVENTS
CREATE POLICY "Staff view institutional safety events" ON public.safety_events
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.staff s
            WHERE s.user_id = auth.uid() 
            AND s.institution_id = public.safety_events.institution_id
        )
    );

-- 5.4 STAFF & ASSIGNMENTS
CREATE POLICY "Staff view own role" ON public.staff
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Staff view assigned students" ON public.users
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.assignments a
            JOIN public.staff s ON s.id = a.staff_id
            WHERE a.student_id = public.users.id
            AND s.user_id = auth.uid()
        )
    );