from supabase import create_client
from app.core.config import SUPABASE_URL, SUPABASE_KEY

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)


def save_escalation(session_id: str, content: str, risk_level: str):
    supabase.table("escalations").insert(
        {
            "session_id": session_id,
            "content": content,
            "risk_level": risk_level,
        }
    ).execute()
