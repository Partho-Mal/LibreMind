# Production-Ready Entity Model  
## 3D AI Mental Wellness Chatbot System

This document defines the complete, production-ready entity model for a 3D AI Mental Wellness Chatbot designed for:

- independent self-help users
- institutional users (school, college, university)
- therapists and counselors
- moderators and administrators

The model is suitable for academic submission and real-world deployment after graduation.

---

## Design Principles

- Ethical by design (consent, safety, auditability)
- Scalable from solo users to institutions
- Clear separation of responsibility
- Persistent 3D experience
- Long-term AI memory without high cost
- Legal and compliance readiness

---

## Entity Overview

Total entities: **15**

---

## 1. User

Represents any end user of the system.

Includes:
- independent users
- institutional users (students)

Fields:
- id  
- auth_id  
- support_mode (`self | institutional`)  
- institution_id (nullable)  
- status (`active | suspended | banned`)  
- created_at  

A simple user is defined as:
- `support_mode = self`
- `institution_id = NULL`

---

## 2. Institution

Represents an educational institution.

Fields:
- id  
- name  
- type (`school | college | university`)  
- contact_email  
- active  

Only exists for institutional deployments.

---

## 3. Staff

Represents people with authority in the system.

Includes:
- admin
- moderator
- therapist
- counselor

Fields:
- id  
- auth_id  
- role  
- institution_id (nullable)  
- is_active  

Admins may be global. Therapists and counselors are institution scoped.

---

## 4. Session

A bounded interaction window between user and AI.

Fields:
- id  
- user_id  
- started_at  
- ended_at  
- flagged  

Used for review, safety checks, and therapy follow-ups.

---

## 5. Message

Immutable conversation record.

Fields:
- id  
- session_id  
- sender (`user | ai | system`)  
- content  
- created_at  

Messages are append-only and never edited.

---

## 6. Emotional State

Structured emotional signals extracted from conversations.

Fields:
- id  
- session_id  
- emotion  
- intensity  
- source (`model | self_report`)  
- recorded_at  

Used for trend analysis and therapist insight.

---

## 7. Conversation Summary

Long-term AI memory and context.

Fields:
- id  
- user_id  
- session_id  
- summary_text  
- embedding_id  
- topics_discussed  

Used to inject context into LLM prompts instead of raw message history.

---

## 8. Intervention

Any therapeutic or safety action taken by the system.

Fields:
- id  
- session_id  
- intervention_type  
- trigger_reason  
- approved_by (nullable staff_id)  
- created_at  

Includes grounding exercises, breathing prompts, or escalations.

---

## 9. Safety Event

Represents detected risk or crisis situations.

Fields:
- id  
- session_id  
- severity (`low | medium | high | critical`)  
- detected_by (`model | rule`)  
- action_taken  
- notified_staff_id (nullable)  

Critical for ethical responsibility and legal safety.

---

## 10. Therapist Assignment

Maps users to therapists or counselors.

Fields:
- id  
- user_id  
- staff_id  
- assigned_at  
- active  

Exists only for institutional or explicit opt-in users.

---

## 11. Account Action

Moderation and account state history.

Fields:
- id  
- target_user_id  
- action (`ban | suspend | unban | warn`)  
- reason  
- performed_by (staff_id)  
- timestamp  

Ensures transparent and auditable moderation.

---

## 12. Audit Log

System-wide record of sensitive actions.

Fields:
- id  
- actor_id  
- actor_role  
- action  
- entity_type  
- entity_id  
- timestamp  
- ip_address  

Mandatory for compliance and accountability.

---

## 13. User Preference / 3D State

Persistent 3D and UI configuration.

Fields:
- user_id  
- avatar_config (JSON)  
- environment_id  
- camera_settings (JSON)  
- theme_mode  

Ensures the 3D experience does not reset between sessions.

---

## 14. Legal Consent Log

Proof of informed user consent.

Fields:
- user_id  
- terms_version  
- consent_type (`terms | privacy | crisis_protocol`)  
- ip_address  
- agreed_at  

Required for mental wellness and health-adjacent systems.

---

## 15. Permission (Optional for MVP)

Granular permission control for staff.

Fields:
- staff_id  
- permission_name  
- granted_at  

For MVP, this can be replaced with role-based access using `Staff.role`.

---

## Summary

This entity model:

- supports both self-help and institutional users
- enables therapist and counselor oversight with consent
- ensures ethical AI operation
- provides legal and audit protection
- makes the 3D experience persistent and meaningful
- is suitable for real-world production deployment

This is the minimum viable architecture for a serious mental wellness system.
