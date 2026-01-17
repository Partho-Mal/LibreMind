class SessionService:
    def __init__(self, cache):
        self.cache = cache

    def get_session(self, session_id: str):
        return None

    def save_session(self, session_id: str, data: dict):
        pass
