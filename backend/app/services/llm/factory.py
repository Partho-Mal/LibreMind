# backend/app/services/llm/factory.py
# OLD (Delete this)
# from app.core.config import LLM_PROVIDER

# NEW (Add this)
from app.core.config import settings
from app.services.llm.base import BaseLLM
from app.services.llm.gemini import GeminiLLM
from app.services.llm.openai import OpenAILLM
# from app.services.llm.grok import GrokLLM (if you have it)

def get_llm() -> BaseLLM:
    # Use settings.LLM_PROVIDER here
    provider = settings.LLM_PROVIDER.lower()
    
    if provider == "gemini":
        return GeminiLLM()
    elif provider == "openai":
        return OpenAILLM()
    elif provider == "grok":
        # return GrokLLM()
        pass
        
    raise ValueError(f"Unknown LLM Provider: {provider}")