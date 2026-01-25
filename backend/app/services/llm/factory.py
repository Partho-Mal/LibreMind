from app.core.config import LLM_PROVIDER
from app.services.llm.gemini import GeminiLLM
from app.services.llm.openai import OpenAILLM
from app.services.llm.grok import GrokLLM

def get_llm():
    if LLM_PROVIDER == "gemini":
        return GeminiLLM()
    if LLM_PROVIDER == "openai":
        return OpenAILLM()
    if LLM_PROVIDER == "grok":
        return GrokLLM()

    raise RuntimeError(f"Unsupported LLM_PROVIDER: {LLM_PROVIDER}")
