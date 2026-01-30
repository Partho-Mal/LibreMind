import logging
import sys
# OLD: from app.core.config import LOG_LEVEL
# NEW:
from app.core.config import settings

def setup_logging():
    # Use settings.LOG_LEVEL
    logging.basicConfig(
        level=settings.LOG_LEVEL,
        format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
        handlers=[
            logging.StreamHandler(sys.stdout)
        ]
    )