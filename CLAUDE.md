# portfolio-minimal — CLAUDE.md

## What This Project Is
A second version of Aamir's personal portfolio — **same content, completely different design**.
The space/constellation theme lives in `~/Desktop/dev/portfolio-site` (branch: space-final).
This version is for **recruiters and hiring managers**: elegant, minimalist, premium, professional.
Aamir's words: "like a refined professional" — expensive-feeling but not flashy.

## GitHub
- Repo: https://github.com/aamirprinceali/portfolio-minimal
- Branch: main
- Run locally: open `index.html` directly in browser — no build step needed

## What Was Done Before This Chat
- All content (HTML) copied from portfolio-site's `space-final` branch
- Same 3 pages: `index.html`, `cv.html`, `work-with-me.html`
- Same CSS structure: `css/variables.css`, `css/reset.css`, `css/layout.css`, `css/components.css`
- Same JS: `js/cursor.js`, `js/main.js`, `js/projects.js`, `js/terminal.js`
- `js/space-bg.js` is present but should be REMOVED — no space background here
- `#space-canvas` in each HTML file should be REMOVED (or left empty — canvas produces nothing without space-bg.js being used)

## Design Direction — What To Build
Aamir wants:
- **Minimalist** — generous whitespace, clean typography, nothing cluttered
- **Elegant and premium** — feels expensive, like a senior-level candidate
- **Professional** — non-technical recruiters should feel confident, not confused
- **Still has animations** — subtle, refined. Entry reveals, smooth hover transitions
- **Not flashy** — no constellation canvas, no halo glow, no terminal intro

### Suggested aesthetic references
- Linear (dark, precise, product-quality)
- Vercel (clean, confident, high-trust)
- A high-end consulting or VC firm website
- Think: dark navy or pure black, white/off-white text, one accent color (not neon)

### Design options Aamir was considering (start with A and B):
**A — Section dividers with subtle motifs** — thin ruled lines or geometric marks between sections with the section name; no terminal commands  
**B — Card redesign** — tools and projects cards with breathing room, larger icons, left-edge accent line in a single brand color, clean hover lift  
**C — Hero redesign** — name fills the full left column, bold serif or elegant display font, minimal subtitle  
**D — Subtle section backgrounds** — each section gets a very faint wash in one tone  
**E — Typography scale-up** — dramatic heading scale, refined body text

## What NOT To Keep From space-final Version
Remove these artifacts that are still present in the copied HTML:
- `<canvas id="space-canvas">` elements in all 3 HTML files
- `js/space-bg.js` script tags in all 3 HTML files
- The signal transmission `#terminal-intro` section (the boot screen) in index.html — NOT appropriate for a professional recruiter-facing portfolio
- `js/terminal.js` script tag — goes with the intro
- The neofetch card (`div.neofetch-card`) in the hero section — too technical/gimmicky for this version
- The PID/PROCESS NAME process-table-header in projects section
- The `// email`, `// phone` comment-style contact labels (replace with clean labels)
- `js/stars.js` and `js/cv-timeline.js` — likely unused, can be removed

## What TO Keep
- All text content (about me, career history, services, skills)
- The 3-page structure (index, cv, work-with-me)
- Contact form (Web3Forms key: 61182368-6cdc-4631-9ac8-be2a5293d520)
- Projects list (6 projects — rendered by js/projects.js)
- Cursor animation (js/cursor.js) — keep but make cursor color match new palette
- Scroll reveal animations (js/main.js) — keep the `.reveal` system
- Scroll progress bar (#scroll-progress)

## About Me Text (approved final version)
> I've always been drawn to work that combines people, problem-solving, and impact. I started in recovery services, managing a sober living home and helping residents navigate major life transitions. That experience gave me a strong foundation in leadership, empathy, and accountability — qualities that still shape how I work today.
>
> Since then, I've grown into operations, enrollment, and customer-facing leadership roles where I've worked closely with individuals, families, and cross-functional teams to improve experiences and drive better outcomes. I'm at my best where service and systems overlap — improving workflows, solving bottlenecks, and making complex processes feel simpler and more human.
>
> I'm also deeply interested in AI and automation, and I've spent the past few years exploring ways to use modern tools to work more efficiently, reduce friction, and build smarter systems. I enjoy learning quickly, experimenting with new technology, and finding practical ways to make work better.
>
> Outside of work, I enjoy spending time with my dog Casper, lifting weights, and working on personal projects that challenge me to keep learning and building.

## Aamir's Contact Info
- Email: aamirali1211@gmail.com
- Phone: (972) 214-4380
- LinkedIn: linkedin.com/in/aamirnali
- GitHub: github.com/aamirprinceali
- Location: Plano, TX — Open to Remote

## How to Run
```bash
cd ~/Desktop/dev/portfolio-minimal
open index.html        # Mac — opens in default browser
# or drag index.html into browser
```

## Session Start Checklist
1. Read this file fully
2. Read `index.html`, `cv.html`, `work-with-me.html` to see current state
3. Remove `canvas#space-canvas`, space-bg.js, terminal intro before doing any design work
4. Ask Aamir for a one-sentence vibe if he hasn't given one yet
5. Start with Options A and B (described above), show one section at a time
