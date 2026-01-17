import os

ENV = os.getenv("ENV", "local")
LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO")

REDIS_URL = os.getenv("REDIS_URL", "redis://redis:6379/0")
