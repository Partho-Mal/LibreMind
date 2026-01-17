from fastapi import FastAPI, Request
from app.routers.chat import router as chat_router
from app.core.logging import setup_logging
import uuid

setup_logging()

app = FastAPI(title="Backend API")

@app.middleware("http")
async def request_id_middleware(request: Request, call_next):
    request_id = str(uuid.uuid4())
    request.state.request_id = request_id
    response = await call_next(request)
    response.headers["X-Request-ID"] = request_id
    return response

@app.get("/health")
def health():
    return {"status": "ok"}

app.include_router(chat_router, prefix="/api/v1")
