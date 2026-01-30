# backend/app/infra/supabase_client.py

from supabase import create_client, Client
from supabase.client import ClientOptions
from app.core.config import settings  # <--- FIX: Import settings, not specific vars

# Initialize Supabase client
# We add a check to prevent crashing if keys are missing (common in CI/Test environments)
if settings.SUPABASE_URL and settings.SUPABASE_KEY:
    supabase: Client = create_client(
        settings.SUPABASE_URL,
        settings.SUPABASE_KEY,
        options=ClientOptions(
            postgrest_client_timeout=5,
            storage_client_timeout=5,
            schema="public",
        ),
    )
else:
    # Handle the case where credentials are missing (e.g. during testing)
    print("Warning: Supabase credentials missing. Client set to None.")
    supabase = None

# Helper function to ensure safety when using the client
def get_supabase() -> Client:
    return supabase

def save_escalation(session_id: str, user_id: str, content: str, risk_level: str):
    if not supabase:
        print("Skipping DB save: No Supabase client.")
        return
        
    try:
        data = {
            "session_id": session_id,
            "user_id": user_id,
            "content": content,
            "risk_level": risk_level
        }
        supabase.table("escalations").insert(data).execute()
    except Exception as e:
        print(f"Failed to save escalation: {e}")
