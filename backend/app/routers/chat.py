from fastapi import APIRouter
from app.schemas.chat_schemas import ChatRequest, ChatResponse

router = APIRouter(prefix="/chat", tags=["chat"])

@router.post("/message", response_model=ChatResponse)
def chat_message(payload: ChatRequest):
    return ChatResponse(
        session_id=payload.session_id,
        reply="This is a mocked LLM response"
    )