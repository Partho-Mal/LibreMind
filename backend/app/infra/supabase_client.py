# backend/app/infra/supabase_client.py

from supabase import create_client, Client
from supabase.client import ClientOptions
from app.core.config import SUPABASE_URL, SUPABASE_KEY

supabase: Client = create_client(
    SUPABASE_URL,
    SUPABASE_KEY,
    options=ClientOptions(
        postgrest_client_timeout=5,
        storage_client_timeout=5,
        schema="public",
    ),
)

