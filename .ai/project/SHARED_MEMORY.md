# Shared Memory — Portfolio Minimal

Last updated: 2026-04-23

## Current State
React + Vite + TypeScript app. All 5 chapters built. Latest features pushed to GitHub.
Running at localhost:5175 (when Prospect + Clarity are also running).
**Status: Ready for Vercel deploy.**

## Design Direction (FINAL — do not change without Aamir approval)
- Fortune/Bloomberg editorial magazine/book concept
- Site opens as a book cover (black, gold text, cinematic split-open animation)
- Chapters revealed one by one as user scrolls
- Page-fold Framer Motion transitions between chapters
- Everything on ONE page — CV and Work With Me are chapters, not separate pages

## Color Palette
- Background/paper: #FDFCF8
- Ink/text: #0F0F0E
- Gold accent: #C9A84C
- Surface/card: #F5F2EA
- Border: #E2DCCF
- Book cover: #0F0F0E (near-black)
- Dark chapters (02, 05): #0F0F0E background
- Light chapters (01, 03, 04): #FDFCF8 background

## Typography
- Cormorant Garamond: chapter headings, display text, book cover name
- Lora: body text (reads like a print magazine)
- DM Sans: UI labels, nav, captions, tags

## Key Content Decisions
- Cover tagline: "Every chapter, earned."
- Role: "Operations & Customer Success Professional"
- No emoji icons — Lucide React only
- No terminal intro, no neofetch card, no space canvas
- Chapters: 01 Background, 02 The Stack, 03 The Work, 04 The Record (CV), 05 Work With Me
- Chapter 02 formerly called "The Craft" — now "The Stack" everywhere

## Technical Architecture
- Single route / (no React Router separate pages)
- BookCover.tsx: full-screen intro, split-open + letter stamp + typewriter animations
- ChapterNav.tsx: "In This Issue" table of contents
- Each chapter: scroll-snap aligned, Framer Motion page-fold reveal on scroll-in
- Tilt3D.tsx: reusable 3D hover tilt component — used on toolkit cards, highlight cards, how-it-works steps
- Contact form: Web3Forms key 61182368-6cdc-4631-9ac8-be2a5293d520

## Flip Card Pairings (Chapter 02)
Front → Back:
- ChatGPT → Codex
- Claude → Claude Code
- Gemini → Google Cloud (GCP)
- n8n → Zapier
- Blotato → HubSpot CRM
- Gamma → Zoho CRM
- Notion → Supabase
- Canva → Twilio

## What's Linked Where
- This site is linked FROM portfolio-site (space portfolio) as the "Professional" option
- GitHub: https://github.com/aamirprinceali/portfolio-minimal
- Run: cd ~/Desktop/dev/portfolio-minimal && npm run dev → localhost:5175
