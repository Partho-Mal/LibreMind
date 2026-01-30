# backend/app/services/llm/openai.py
import time
from openai import OpenAI
from app.services.llm.base import BaseLLM
from app.core.config import settings # <--- UPDATED IMPORT

class OpenAILLM(BaseLLM):
    def __init__(
        self,
        model: str = "gpt-4o-mini",
        max_retries: int = 2,
    ):
        self.model = model
        self.max_retries = max_retries
       
       # FIX: Use dummy key if missing
        api_key = settings.OPENAI_API_KEY or "dummy_key_for_tests"
        self.client = OpenAI(api_key=api_key)

    def generate_reply(self, prompt: str) -> str:
        last_exc = None

        for attempt in range(self.max_retries + 1):
            try:
                response = self.client.chat.completions.create(
                    model=self.model,
                    messages=[{"role": "user", "content": prompt}],
                )
                return response.choices[0].message.content
            except Exception as exc:
                last_exc = exc
                if attempt == self.max_retries:
                    break
                time.sleep(1)

        raise RuntimeError("OpenAI failed") from last_exc