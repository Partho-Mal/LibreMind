BLOCKLIST = [
    "kill myself",
    "suicide",
    "harm myself",
    "end my life",
]


def contains_blocked_content(text: str) -> bool:
    lowered = text.lower()
    return any(phrase in lowered for phrase in BLOCKLIST)
