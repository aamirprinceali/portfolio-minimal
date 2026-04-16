# Portfolio Minimal — App Overview

## What This Is
Aamir Ali's recruiter-facing portfolio website. A single-page, magazine/book editorial experience built in React + Vite + TypeScript. Visitors arrive from the space portfolio after choosing "Professional" — they land on a book cover that opens, revealing chapter-by-chapter content.

## The Concept
**Fortune/Bloomberg editorial profile.** The site behaves like a premium hardcover book/magazine feature about Aamir. Each section is a "chapter." The cover opens with a cinematic split animation. Chapters reveal with page-fold transitions.

## Design System
- **Palette:** Ivory #FDFCF8, Ink #0F0F0E, Gold #C9A84C, Surface #F5F2EA, Border #E2DCCF
- **Fonts:** Cormorant Garamond (chapter titles/display), Lora (body text — serif, reads like print), DM Sans (UI labels, captions, nav)
- **Tagline:** "Not a resume. A record."

## Architecture
- Single route `/` — everything is on one scroll
- No React Router separate pages
- Book cover (BookCover.tsx) → Chapter nav (ChapterNav.tsx) → 5 chapters
- Scroll-snap with Framer Motion page-fold reveal on each chapter
- CV is Chapter 04 (embedded, not a separate page)
- Work With Me is Chapter 05 (embedded, not a separate page)

## Chapter Structure
| # | Chapter | Content |
|---|---|---|
| Cover | — | Book cover opening animation + "Not a resume. A record." |
| — | In This Issue | Table of contents — click any chapter |
| 01 | The Background | About / bio |
| 02 | The Toolkit | AI & automation tools |
| 03 | The Work | Projects |
| 04 | The Record | Full CV — career timeline, experience, skills sidebar |
| 05 | Work With Me | Services, process, contact form |

## External Links
- GitHub: https://github.com/aamirprinceali/portfolio-minimal
- Web3Forms key: 61182368-6cdc-4631-9ac8-be2a5293d520
- This site will be linked FROM the space portfolio (portfolio-site) as the "Professional" option
