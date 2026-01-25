import time
from google import genai
from app.services.llm.base import BaseLLM
from app.core.config import GEMINI_API_KEY


class GeminiLLM(BaseLLM):
    def __init__(
        self,
        model: str = "gemini-3-flash-preview",
        max_retries: int = 2,
    ):
        self.model = model
        self.max_retries = max_retries
        self.client = genai.Client(api_key=GEMINI_API_KEY)

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
