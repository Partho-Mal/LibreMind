# backend/app/services/escalation_service.py

from app.infra.supabase_client import supabase


def save_escalation(session_id: str, content: str, risk_level: str):
    return (
        supabase
        .table("escalations")
        .insert(
            {
                "session_id": session_id,
                "content": content,
                "risk_level": risk_level,
            }
        )
        .execute()
    )
