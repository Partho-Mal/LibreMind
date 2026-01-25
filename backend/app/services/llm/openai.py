import time
from openai import OpenAI
from app.services.llm.base import BaseLLM
from app.core.config import OPENAI_API_KEY


class OpenAILLM(BaseLLM):
    def __init__(
        self,
        model: str = "gpt-4o-mini",
        max_retries: int = 2,
    ):
        self.model = model
        self.max_retries = max_retries
        self.client = OpenAI(api_key=OPENAI_API_KEY)

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
