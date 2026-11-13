# RosseStudio Firestore Security Specification

## 1. Data Invariants
1. Public portfolio collections (`hero_settings`, `about_settings`, `educations`, `experiences`, `achievements`, `certificates`, `skills`, `expertise_categories`, `portfolio_items`, `testimonials`, `faqs`, `footer_contacts`, `site_themes`) are publicly readable (`get`, `list`) for landing page rendering, and writable **strictly** by verified RosseAdmin users (`isAdmin()`).
2. `users` and `admins` collections contain account/authorization data and MUST NEVER be readable or writable by unauthenticated or non-admin users.
3. Every `portfolio_items` creation MUST reference an existing `expertise_categories` document via `exists()`.
4. All document IDs (`{docId}`, etc.) MUST satisfy `isValidId(id)` (`^[a-zA-Z0-9_\-]+$`, max 128 chars).
5. All `createdAt` / `updatedAt` timestamps MUST equal `request.time`, and `createdAt` MUST remain immutable on updates.
6. Every collection write enforces `keys().hasAll(...)` and `keys().hasOnly(...)` (no shadow/ghost fields allowed).

## 2. Dirty Dozen Adversarial Payloads (Must Return PERMISSION_DENIED)
1. Unauthenticated write to `/hero_settings/main`.
2. Non-admin authenticated user attempting to create `/admins/{uid}` self-privilege escalation.
3. Email spoofing attack: user with admin email where `request.auth.token.email_verified == false`.
4. Shadow field injection on `/educations/{eduId}` adding `{ isVerified: true }`.
5. Orphaned write on `/portfolio_items/{itemId}` with non-existent `category_id: "fake_cat_999"`.
6. Resource poisoning with oversized `docId` (>128 chars) or invalid characters (`../../etc/passwd`).
7. Client-forged `createdAt` timestamp not equal to `request.time`.
8. Mutating immutable `createdAt` during an `update` on `/faqs/{faqId}`.
9. Invalid `kategori_pengalaman: "Hobi"` on `/experiences/{expId}` (outside `['Organisasi', 'Profesional']`).
10. Invalid `active_theme_name: "neon-cyberpunk"` on `/site_themes/main`.
11. Unauthenticated `get` or `list` attempt on `/users/{userId}` (PII leak guard).
12. Over-sized string payload (>900KB) in `bio` or `title` fields.
