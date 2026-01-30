import time
from google import genai
from app.services.llm.base import BaseLLM
from app.core.config import settings # <--- UPDATED IMPORT

class GeminiLLM(BaseLLM):
    def __init__(
        self,
        # Updated default to a currently valid model (change back if you have access to 3)
        model: str = "gemini-2.0-flash", 
        # model: str = "gemini-3-flash-preview", 
        max_retries: int = 2,
    ):
        self.model = model
        self.max_retries = max_retries
        # <--- UPDATED: Use settings.GEMINI_API_KEY
        # self.client = genai.Client(api_key=settings.GEMINI_API_KEY)

        # FIX: Provide a dummy key if settings.GEMINI_API_KEY is None.
        # This prevents the "ValueError: Missing key" crash during tests.
        api_key = settings.GEMINI_API_KEY or "dummy_key_for_tests"
        self.client = genai.Client(api_key=api_key)

    def generate_reply(self, prompt: str) -> str:
        last_exc = None

        for attempt in range(self.max_retries + 1):
            try:
                response = self.client.models.generate_content(
                    model=self.model,
                    contents=prompt,
                )
                if not response or not response.text:
                    raise RuntimeError("Empty Gemini response")
                return response.text
            except Exception as exc:
                last_exc = exc
                if attempt == self.max_retries:
                    break
                time.sleep(1)

        raise RuntimeError("Gemini failed") from last_exc