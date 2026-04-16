# Shared Memory — Portfolio Minimal

Last updated: 2026-04-16

## Current State
React + Vite + TypeScript app scaffolded and running at localhost:5173.
Foundation complete (Tailwind, shadcn, Framer Motion, layout components, shared utilities).
Design direction pivoted to Fortune/Bloomberg editorial magazine/book concept.
Currently in the middle of building the new design.

## Design Direction (FINAL — do not change without Aamir approval)
- Fortune/Bloomberg editorial profile — like a premium magazine feature on Aamir
- Site opens as a book cover (black, gold text, cinematic split-open animation)
- Chapters revealed one by one as user scrolls
- Page-fold Framer Motion transitions between chapters
- Everything on ONE page (no routing) — CV and Work With Me are chapters, not separate pages

## Color Palette
- Background/paper: #FDFCF8
- Ink/text: #0F0F0E
- Gold accent: #C9A84C
- Surface/card: #F5F2EA
- Border: #E2DCCF
- Book cover: #0F0F0E (near-black)

## Typography
- Cormorant Garamond: chapter headings, display text, book cover name
- Lora: body text (makes it read like a real magazine article)
- DM Sans: UI labels, nav, captions, tags

## Key Content Decisions
- Title line: "Not a resume. A record."
- Role: "Operations & Customer Success Professional" (NOT "Operations Engineer")
- No emoji icons — Lucide React only
- No terminal intro, no neofetch card, no space canvas
- Chapters: 01 Background, 02 Toolkit, 03 Work, 04 Record (CV), 05 Work With Me

## Technical Architecture
- Single route / (no React Router separate pages)
- BookCover.tsx: full-screen intro, Framer Motion split-open animation
- ChapterNav.tsx: "In This Issue" table of contents after cover opens
- Each chapter: scroll-snap aligned, Framer Motion page-fold reveal on scroll-in
- Contact form: Web3Forms key 61182368-6cdc-4631-9ac8-be2a5293d520

## What's Linked Where
- This site is linked FROM portfolio-site (space portfolio) as the "Professional" option
- GitHub: https://github.com/aamirprinceali/portfolio-minimal
- Run: cd ~/Desktop/dev/portfolio-minimal && npm run dev → localhost:5173
