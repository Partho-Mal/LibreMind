# Crisis Escalation Plan

## Trigger Conditions
1.  User explicitly mentions suicide or self-harm.
2.  AI classifies User Sentiment as `CRITICAL` for 3 consecutive turns.
3.  User reports "Immediate Danger" via UI button.

## Automated Workflow (The "Red Protocol")
1.  **Immediate Interruption:** The chat interface is locked.
2.  **Resource Override:** The 3D Avatar is replaced/overlaid with a static "Get Help" card containing:
    * National Suicide Prevention Hotline.
    * Campus Security Number (if Institutional Mode).
3.  **Logging:** A `SafetyEvent` is created in Supabase with `severity: 'critical'`.
4.  **Notification:**
    * *Self Mode:* No external notification (Privacy preservation).
    * *Institutional Mode:* Email/SMS sent to designated University Staff (Counselor).