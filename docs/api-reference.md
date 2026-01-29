# API Reference

## Edge Functions

### `POST /api/chat`
* **Auth:** Bearer Token (User)
* **Body:** `{ "message": "string", "sessionId": "uuid" }`
* **Response:** Stream of text + `[SENTIMENT]` tag.
* **Logic:** Handles RAG lookup, Safety Check, and LLM generation.

### `POST /api/generate-summary`
* **Auth:** Service Role (Cron Job)
* **Body:** `{ "sessionId": "uuid" }`
* **Logic:** Reads last session messages -> Generates summary -> Embeds -> Stores in `conversation_summaries`.

### `GET /api/user-config`
* **Auth:** Bearer Token (User)
* **Response:** `{ "avatar": {...}, "theme": "dark" }`
* **Logic:** Fetches `user_3d_state`.