# backend/app/routers/chat.py
from fastapi import APIRouter, Depends, HTTPException
# 1. Imports for Security
from app.utils.auth import verify_token

# 2. Imports for Business Logic
from app.schemas.chat_schemas import ChatRequest, ChatResponse
from app.services.risk_service import RiskService
from app.services.escalation_plan import EscalationPlan
from app.services.llm.factory import get_llm
from app.infra.supabase_client import save_escalation

# Initialize Router
router = APIRouter()

# Initialize Services
risk_service = RiskService()
escalation_plan = EscalationPlan()
llm = get_llm()

# 3. Secure Endpoint Definition
@router.post("/chat", response_model=ChatResponse)
def chat_endpoint(
    payload: ChatRequest, 
    user_payload: dict = Depends(verify_token)
):
    """
    Secure chat endpoint.
    1. Verifies the Bearer Token.
    2. Assess risk of user input.
    3. Escalates or generates AI response.
    """
    # Extract User ID from the valid token
    user_id = user_payload.get("sub")
    
    # FIX: Access the single string directly (matches your Schema)
    user_text = payload.message 

    # --- Start Business Logic ---
    
    # 4. Risk Assessment
    risk_level = risk_service.assess(user_text)

    # 5. Escalation Check
    if escalation_plan.should_escalate(risk_level):
        save_escalation(
            session_id=payload.session_id,
            user_id=user_id, # Log WHO triggered the escalation
            content=user_text,
            risk_level=risk_level,
        )
        return ChatResponse(
            session_id=payload.session_id,
            reply=escalation_plan.response_message(),
        )

    # 6. AI Generation (Only runs if Safe)
    try:
        reply = llm.generate_reply(user_text)
    except Exception as e:
        # Fallback error handling if LLM fails
        raise HTTPException(status_code=502, detail="AI Service Unavailable")

    return ChatResponse(
        session_id=payload.session_id,
        reply=reply,
    )