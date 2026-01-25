from abc import ABC, abstractmethod

class BaseLLM(ABC):
    @abstractmethod
    def generate_reply(self, prompt: str) -> str:
        pass
