from app.services.safety_prompt import SAFETY_RESPONSE


class EscalationPlan:
    def should_escalate(self, risk_level: str) -> bool:
        return risk_level == "high"

    def response_message(self) -> str:
        return SAFETY_RESPONSE
