# backend/app/main.py
from fastapi import FastAPI, Request
from app.routers.chat import router as chat_router
from app.core.logging import setup_logging
import uuid

# 1. Setup Logging
setup_logging()

# 2. Initialize App
app = FastAPI(title="LibreMind API")

# 3. Add Middleware (Good for debugging)
@app.middleware("http")
async def request_id_middleware(request: Request, call_next):
    request_id = str(uuid.uuid4())
    request.state.request_id = request_id
    response = await call_next(request)
    response.headers["X-Request-ID"] = request_id
    return response

# 4. Health Check
@app.get("/health")
def health_check():
    return {"status": "ok"}

# 5. Include Router
# CRITICAL: We do NOT use a prefix here. 
# This ensures the endpoint is at "/chat", matching your Next.js Proxy and Pytest.
app.include_router(chat_router)