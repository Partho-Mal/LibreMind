from app.services.filters import contains_blocked_content


class RiskService:
    def assess(self, text: str) -> str:
        if contains_blocked_content(text):
            return "high"
        return "low"
