import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # App Config
    ENV: str = "local"
    LOG_LEVEL: str = "INFO"
    
    # Infrastructure
    REDIS_URL: str = "redis://redis:6379/0"
    
    # LLM Config
    LLM_PROVIDER: str = "gemini"
    GEMINI_API_KEY: str | None = None
    OPENAI_API_KEY: str | None = None
    GROK_API_KEY: str | None = None
    
    # Supabase / Auth
    SUPABASE_URL: str | None = None
    SUPABASE_KEY: str | None = None
    # CRITICAL: This was missing but required by your auth.py
    SUPABASE_JWT_SECRET: str = "super-secret-jwt-key-for-testing" 

    model_config = {
            "env_file": ".env",
            "extra": "ignore"
        }
    
# Create the instance that other files import
settings = Settings()