from fastapi import APIRouter
from app.schemas.chat_schemas import ChatRequest, ChatResponse
from app.services.risk_service import RiskService
from app.services.escalation_plan import EscalationPlan
from app.services.llm.factory import get_llm
from app.infra.supabase_client import save_escalation

router = APIRouter(prefix="/chat", tags=["chat"])

risk_service = RiskService()
escalation_plan = EscalationPlan()
llm = get_llm()


@router.post("/message", response_model=ChatResponse)
def chat_message(payload: ChatRequest):
    user_text = payload.messages[-1].content

    risk_level = risk_service.assess(user_text)

    if escalation_plan.should_escalate(risk_level):
        save_escalation(
            session_id=payload.session_id,
            content=user_text,
            risk_level=risk_level,
        )

        return ChatResponse(
            session_id=payload.session_id,
            reply=escalation_plan.response_message(),
        )

    reply = llm.generate_reply(user_text)

    return ChatResponse(
        session_id=payload.session_id,
        reply=reply,
    )
