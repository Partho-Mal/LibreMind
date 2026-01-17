from pydantic import BaseModel, Field
from typing import Literal, Optional

# 1. Enforce Role constraints (prevents typos like "usr" or "bot")
RoleType = Literal["user", "assistant", "system"]

class ChatMessage(BaseModel):
    role: RoleType
    content: str

# 2. Request only needs the NEW input
class ChatRequest(BaseModel):
    session_id: str
    message: str  # <--- Just the new prompt, not the whole history
    
    # Optional: Allow passing history if you specifically need to override Redis
    # messages: Optional[List[ChatMessage]] = None 

class ChatResponse(BaseModel):
    session_id: str
    reply: str