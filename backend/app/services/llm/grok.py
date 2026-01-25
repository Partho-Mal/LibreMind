from app.services.llm.base import BaseLLM

class GrokLLM(BaseLLM):
    def generate_reply(self, prompt: str) -> str:
        raise NotImplementedError("Grok integration not wired yet")
