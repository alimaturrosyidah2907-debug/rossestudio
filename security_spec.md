# RosseStudio Firestore Security Specification

## 1. Data Invariants
1. Public portfolio collections (`hero_settings`, `hero_socials`, `about_settings`, `educations`, `experiences`, `achievements`, `certificates`, `skills`, `expertise_categories`, `portfolio_items`, `app_projects`, `designs`, `tutorials`, `books`, `journals`, `testimonials`, `faqs`, `footer_contacts`, `site_themes`) are publicly readable (`get`, `list`) for landing page rendering, and writable **strictly** by verified RosseAdmin (`alimaturrosyidah2907@gmail.com`, `email_verified == true`).
2. `users`, `admins`, and `contact_messages` collections contain private/account/visitor inquiry data and MUST NEVER be readable (`get`, `list`) by unauthenticated or non-admin users.
3. Every `portfolio_items` creation and update MUST reference an existing `expertise_categories` document via `exists()`.
4. All document IDs (`{docId}`, etc.) MUST satisfy `isValidId(id)` (`^[a-zA-Z0-9_\-]+$`, max 128 chars).
5. All `createdAt` / `updatedAt` timestamps MUST equal `request.time`, and `createdAt` MUST remain immutable on updates.
6. Every collection write enforces `keys().hasAll(...)` and `keys().hasOnly(...)` (no shadow/ghost fields allowed) and `affectedKeys().hasOnly(...)` on updates.
7. `journals.status` MUST belong strictly to `['Dalam Proses', 'Terpublikasi']`.

## 2. Dirty Dozen Adversarial Payloads (Must Return PERMISSION_DENIED)
1. Unauthenticated write to `/hero_settings/main` or `/app_projects/{id}`.
2. Non-admin authenticated user attempting to create `/admins/{uid}` self-privilege escalation.
3. Email spoofing attack: user with admin email where `request.auth.token.email_verified == false`.
4. Shadow field injection on `/educations/{eduId}` or `/designs/{designId}` adding `{ isVerified: true }`.
5. Orphaned write on `/portfolio_items/{itemId}` with non-existent `category_id: "fake_cat_999"`.
6. Resource poisoning with oversized `docId` (>128 chars) or invalid characters (`../../etc/passwd`).
7. Client-forged `createdAt` timestamp not equal to `request.time`.
8. Mutating immutable `createdAt` during an `update` on `/faqs/{faqId}` or `/books/{bookId}`.
9. Invalid `kategori_pengalaman: "Hobi"` on `/experiences/{expId}` (outside `['Organisasi', 'Profesional']`).
10. Invalid `status: "Draft"` on `/journals/{journalId}` (outside `['Dalam Proses', 'Terpublikasi']`).
11. Unauthenticated `get` or `list` attempt on `/users/{userId}` or `/contact_messages/{msgId}` (PII leak guard).
12. Over-sized string payload (>1.03MB) in `media_visual`, `file_lampiran`, `foto_kegiatan`, `foto_prestasi`, or `cv_file` fields.

