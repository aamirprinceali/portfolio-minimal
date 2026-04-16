# Decisions Log — Portfolio Minimal

## 2026-04-16 — Full design pivot to magazine/book concept

**Decision:** Scrapped warm parchment + navy minimalist design. New direction: Fortune/Bloomberg editorial profile. Site opens as a book, chapters scroll with page-fold transitions.

**Why:** Original design was generic. Aamir wanted something that would make business professionals and hiring managers feel like they're reading a premium magazine profile about him — distinctive, professional, and memorable without feeling like a tech portfolio.

**Tagline approved:** "Not a resume. A record."

**Palette changed to:**
- Paper: #FDFCF8
- Ink: #0F0F0E
- Gold: #C9A84C
- Surface: #F5F2EA
- Border: #E2DCCF

**Fonts changed:**
- Added Lora (editorial serif for body text — reads like a print magazine)
- Kept Cormorant Garamond for headings
- Kept DM Sans for labels/UI

## 2026-04-16 — Single-page vs. separate pages

**Decision:** Everything on ONE scroll. CV and Work With Me are chapters, not separate pages.

**Why:** Recruiters should not have to navigate away from the main page to find the CV. Having it as Chapter 04 means they naturally encounter it while scrolling. They can also click directly to it from the chapter nav. Zero friction.

## 2026-04-16 — Page-fold transition approach

**Decision:** Framer Motion + CSS 3D perspective transforms. No additional libraries.

**Why:** Framer Motion (already installed) handles the perspective rotation needed for a convincing page-fold. Keeping dependencies minimal. The fold is subtle (rotateX ~12 degrees with perspective) — not a literal 90-degree flip which would be too dramatic for professional context.

## 2026-04-16 — Book cover opening

**Decision:** Full-screen black cover splits open from center (left panel slides left, right panel slides right) on scroll or click.

**Why:** Pays off the "Professional" choice visitors made on the space portfolio. The opening says: you chose the serious one. Here it is.

## 2026-04-13 — "Operations Engineer" removed everywhere

**Decision:** Use "Operations & Customer Success Professional" — not "Operations Engineer."

**Why:** Operations Engineer implies an engineering/technical role. Aamir's background is operations management, enrollment, and customer-facing leadership — not software engineering. The original was misleading.
