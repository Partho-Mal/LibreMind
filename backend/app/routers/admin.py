from fastapi import APIRouter
from app.infra.supabase_client import supabase

router = APIRouter(prefix="/admin", tags=["admin"])


@router.get("/escalations")
def list_escalations():
    result = supabase.table("escalations").select("*").execute()
    return result.data
