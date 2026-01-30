# Entity Relationship Diagram (ERD)
## 3D AI Mental Wellness Chatbot

This ER diagram is written using Mermaid JS.
It accurately reflects the production database schema (`schema.sql`).

---

```mermaid
erDiagram

    USERS {
        uuid id PK
        text support_mode
        uuid institution_id FK
        text status
        timestamptz created_at
        timestamptz updated_at
    }

    INSTITUTIONS {
        uuid id PK
        text name
        text type
        text contact_email
        boolean active
        timestamptz created_at
    }

    STAFF {
        uuid id PK
        uuid user_id FK
        text role
        uuid institution_id FK
        boolean is_active
        timestamptz created_at
    }

    SESSIONS {
        uuid id PK
        uuid user_id FK
        timestamptz started_at
        timestamptz ended_at
        boolean flagged
        int risk_score
    }

    MESSAGES {
        uuid id PK
        uuid session_id FK
        text sender
        text content
        timestamptz created_at
    }

    CONVERSATION_SUMMARIES {
        uuid id PK
        uuid user_id FK
        uuid session_id FK
        text summary_text
        text[] topics_discussed
        vector embedding
        timestamptz created_at
    }

    USER_3D_STATE {
        uuid user_id PK
        jsonb avatar_config
        text environment_id
        jsonb camera_settings
        text theme_mode
        timestamptz updated_at
    }

    SAFETY_EVENTS {
        uuid id PK
        uuid session_id FK
        text severity
        text detected_by
        text action_taken
        uuid notified_staff_id FK
        timestamptz created_at
    }

    LEGAL_CONSENT_LOGS {
        uuid id PK
        uuid user_id FK
        text terms_version
        text consent_type
        inet ip_address
        timestamptz agreed_at
    }

    %% Relationships

    INSTITUTIONS ||--o{ USERS : has
    INSTITUTIONS ||--o{ STAFF : employs

    USERS ||--o{ SESSIONS : starts
    USERS ||--o{ CONVERSATION_SUMMARIES : owns
    USERS ||--|| USER_3D_STATE : has
    USERS ||--o{ LEGAL_CONSENT_LOGS : signs
    USERS ||--o| STAFF : may_be

    SESSIONS ||--o{ MESSAGES : contains
    SESSIONS ||--o{ SAFETY_EVENTS : triggers
    SESSIONS ||--o| CONVERSATION_SUMMARIES : summarized_by

    STAFF ||--o{ SAFETY_EVENTS : reviews
```

---

## Notes

- This diagram matches the current production database schema.
- All relationships are enforced using foreign keys and Row Level Security (RLS).
- Staff visibility is restricted at the policy level, not represented directly in the ER diagram.
- Supports both self-help users and institutional users.
- Mermaid diagrams render automatically on GitHub and many Markdown viewers.

---

## Status

- ✔ Final
- ✔ Synced with `schema.sql`
- ✔ Production ready
- ✔ Viva friendly

---

## GitHub Rendering Tip

GitHub natively supports Mermaid diagrams.

If the diagram does not render in your local editor, view the file directly on GitHub or use a Markdown viewer with Mermaid support.

---

## Next Steps

Optional follow-up diagrams that can be added:

- Role and permission annotations for the ER diagram
- Sequence diagram for chatbot conversation flow
- System architecture diagram using Mermaid

Choose based on documentation needs.
