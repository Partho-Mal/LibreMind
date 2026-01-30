import redis
# OLD: from app.core.config import REDIS_URL
# NEW:
from app.core.config import settings

def get_redis():
    return redis.from_url(settings.REDIS_URL)