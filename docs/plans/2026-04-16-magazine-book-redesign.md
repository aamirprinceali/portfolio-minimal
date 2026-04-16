# Portfolio Minimal — Magazine/Book Redesign Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a Fortune/Bloomberg editorial magazine portfolio that opens as a hardcover book and scrolls as chapters with page-fold transitions.

**Architecture:** Single route `/`. No React Router separate pages. BookCover intro → ChapterNav (table of contents) → 5 scrollable chapters (About, Tools, Projects, CV, Work With Me) using CSS scroll-snap + Framer Motion page-fold reveals. CV is embedded as Chapter 04. Work With Me is Chapter 05.

**Tech Stack:** React 18, Vite, TypeScript, Tailwind v4 (CSS @theme), Framer Motion, Lucide React, shadcn/ui, Google Fonts (Cormorant Garamond + Lora + DM Sans)

**Design:** Fortune/Bloomberg editorial. Ivory paper #FDFCF8, ink black #0F0F0E, gold #C9A84C. Feels like reading a premium hardcover magazine profile about Aamir Ali.

**Tagline:** "Not a resume. A record."

**Foundation already built (do not redo):**
- React+Vite+TS scaffold ✅
- Tailwind v4 with @theme ✅
- shadcn/ui installed ✅
- Framer Motion + Lucide installed ✅
- Navbar, Footer, ScrollProgress, CustomCursor ✅
- Reveal + SectionHeader utilities ✅

---

## Task A: Update Design Tokens + Add Lora Font

**Files:**
- Modify: `src/index.css`
- Modify: `index.html`

**Step 1: Replace @theme in src/index.css with Fortune palette**

```css
@import "tailwindcss";

@theme {
  /* Fortune/Bloomberg editorial palette */
  --color-paper: #FDFCF8;
  --color-ink: #0F0F0E;
  --color-gold: #C9A84C;
  --color-gold-dark: #A88A2E;
  --color-surface: #F5F2EA;
  --color-border: #E2DCCF;
  --color-muted: #7A7060;
  --color-cover: #0F0F0E;

  /* Keep compatibility aliases */
  --color-background: #FDFCF8;
  --color-primary: #0F0F0E;
  --color-secondary: #7A7060;
  --color-accent: #C9A84C;
  --color-accent-light: #A88A2E;

  /* Fonts */
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-body: "Lora", Georgia, serif;
  --font-sans: "DM Sans", system-ui, sans-serif;

  --max-width-container: 1100px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background-color: #FDFCF8;
  color: #0F0F0E;
  font-family: 'Lora', Georgia, serif;
  -webkit-font-smoothing: antialiased;
}

/* Scroll progress — gold */
#scroll-progress {
  position: fixed;
  top: 0; left: 0;
  height: 2px;
  background-color: #C9A84C;
  z-index: 100;
  transition: width 0.1s linear;
}

/* Scroll snap container */
.chapters-container {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;
}

.chapter-section {
  scroll-snap-align: start;
  min-height: 100vh;
}

/* Mobile responsive nav */
@media (max-width: 768px) {
  .hidden-mobile { display: none !important; }
  .show-mobile { display: block !important; }
  .hero-stats { display: none !important; }
}

/* Print styles for CV chapter */
@media print {
  .no-print { display: none !important; }
  .chapter-section { min-height: auto; page-break-inside: avoid; }
}
```

**Step 2: Update index.html — add Lora font**

Add to <head> (replace existing Google Fonts link):
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=Lora:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap" rel="stylesheet" />
<title>Aamir Ali — Not a resume. A record.</title>
```

**Step 3: TypeScript check**
```bash
cd ~/Desktop/dev/portfolio-minimal && npx tsc --noEmit 2>&1 | head -10
```

**Step 4: Commit**
```bash
git add -A && git commit -m "feat: update design tokens to Fortune palette, add Lora editorial font"
```

---

## Task B: BookCover Component — The Cinematic Opening

This is the most important component. The site opens as a full-screen black hardcover book. The cover splits from the center and opens, revealing the chapter nav underneath.

**Files:**
- Create: `src/components/sections/BookCover.tsx`
- Modify: `src/pages/Home.tsx`

**The visual design:**
- Full-screen, near-black (#0F0F0E) background
- "AAMIR ALI" centered in large gold Cormorant Garamond (responsive: clamp 4rem–9rem)
- Thin gold horizontal rule above and below the name
- "Not a resume. A record." in small gold Lora italic below the rule
- Very bottom: "Open →" in small DM Sans, gold, with a subtle bounce animation
- When triggered: left half slides off-screen left, right half slides off-screen right
- Reveal the chapter nav page underneath

**Implementation:**

```tsx
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BookCoverProps {
  onOpen: () => void
}

export default function BookCover({ onOpen }: BookCoverProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)

  const handleOpen = () => {
    if (hasOpened) return
    setHasOpened(true)
    setIsOpen(true)
    // Notify parent after animation completes
    setTimeout(onOpen, 1400)
  }

  // Allow scroll OR click to open
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 20) handleOpen()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === ' ' || e.key === 'Enter') handleOpen()
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
    }
  }, [hasOpened])

  const panelVariants = {
    closed: { x: 0 },
    open: (direction: number) => ({
      x: direction * '110vw',
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      }
    })
  }

  // Shared panel styles
  const panelStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '50%',
    backgroundColor: '#0F0F0E',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <AnimatePresence>
      {!isOpen || hasOpened ? (
        <div
          onClick={handleOpen}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: '#0F0F0E',
            cursor: 'pointer',
            overflow: 'hidden',
          }}
        >
          {/* Left panel */}
          <motion.div
            custom={-1}
            variants={panelVariants}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            style={{ ...panelStyle, left: 0 }}
          />

          {/* Right panel */}
          <motion.div
            custom={1}
            variants={panelVariants}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
            style={{ ...panelStyle, right: 0 }}
          />

          {/* Cover content — centered, fades out as cover opens */}
          <motion.div
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'relative',
              zIndex: 20,
              textAlign: 'center',
              padding: '48px',
              userSelect: 'none',
            }}
          >
            {/* Top gold rule */}
            <div style={{
              width: '60px',
              height: '1px',
              backgroundColor: '#C9A84C',
              margin: '0 auto 32px',
            }} />

            {/* Name */}
            <h1 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(3.5rem, 10vw, 8rem)',
              fontWeight: 600,
              color: '#C9A84C',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              lineHeight: 0.9,
            }}>
              Aamir<br />Ali
            </h1>

            {/* Bottom gold rule */}
            <div style={{
              width: '60px',
              height: '1px',
              backgroundColor: '#C9A84C',
              margin: '32px auto 24px',
            }} />

            {/* Tagline */}
            <p style={{
              fontFamily: '"Lora", Georgia, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
              color: 'rgba(201,168,76,0.75)',
              letterSpacing: '0.04em',
            }}>
              Not a resume. A record.
            </p>

            {/* Open prompt */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              style={{
                marginTop: '64px',
                fontSize: '0.7rem',
                fontFamily: '"DM Sans", system-ui, sans-serif',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.5)',
              }}
            >
              Scroll or click to open
            </motion.div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
```

**Step: Update src/pages/Home.tsx**

```tsx
import { useState } from 'react'
import BookCover from '@/components/sections/BookCover'
import ChapterNav from '@/components/sections/ChapterNav'

export default function Home() {
  const [bookOpen, setBookOpen] = useState(false)

  return (
    <>
      <BookCover onOpen={() => setBookOpen(true)} />

      <div style={{
        opacity: bookOpen ? 1 : 0,
        transition: 'opacity 0.6s ease 0.3s',
        pointerEvents: bookOpen ? 'auto' : 'none',
      }}>
        <ChapterNav />
        {/* Chapters added in subsequent tasks */}
      </div>
    </>
  )
}
```

**Commit:**
```bash
git add -A && git commit -m "feat: build BookCover cinematic split-open animation"
```

---

## Task C: ChapterNav — "In This Issue" Table of Contents

After the cover opens, the first thing users see is the chapter contents page — like the inside front page of a magazine.

**Files:**
- Create: `src/components/sections/ChapterNav.tsx`

```tsx
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const chapters = [
  { num: '01', title: 'The Background', subtitle: 'Where it started', href: '#chapter-background' },
  { num: '02', title: 'The Toolkit', subtitle: 'What I work with', href: '#chapter-toolkit' },
  { num: '03', title: 'The Work', subtitle: 'What I\'ve built', href: '#chapter-work' },
  { num: '04', title: 'The Record', subtitle: 'The full career history', href: '#chapter-record' },
  { num: '05', title: 'Work With Me', subtitle: 'What we can build together', href: '#chapter-wwm' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function ChapterNav() {
  return (
    <section
      id="chapter-nav"
      className="chapter-section"
      style={{
        minHeight: '100vh',
        backgroundColor: '#FDFCF8',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Header */}
          <motion.div variants={item} style={{ marginBottom: '64px' }}>
            <div style={{
              fontSize: '0.65rem',
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '16px',
            }}>
              Profile Edition · 2026
            </div>
            <h2 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 600,
              color: '#0F0F0E',
              lineHeight: 1,
            }}>
              In This Issue
            </h2>
          </motion.div>

          {/* Chapter list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {chapters.map(({ num, title, subtitle, href }) => (
              <motion.a
                key={num}
                href={href}
                variants={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '32px',
                  padding: '24px 0',
                  borderTop: '1px solid #E2DCCF',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  group: 'chapter-link',
                }}
                whileHover={{ x: 8 }}
              >
                {/* Chapter number */}
                <span style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1rem',
                  color: '#C9A84C',
                  fontStyle: 'italic',
                  minWidth: '32px',
                }}>
                  {num}
                </span>

                {/* Title + subtitle */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                    fontWeight: 600,
                    color: '#0F0F0E',
                    lineHeight: 1.1,
                  }}>
                    {title}
                  </div>
                  <div style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: '0.8rem',
                    color: '#7A7060',
                    marginTop: '4px',
                    letterSpacing: '0.02em',
                  }}>
                    {subtitle}
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight size={16} color="#C9A84C" />
              </motion.a>
            ))}

            {/* Last border */}
            <div style={{ borderTop: '1px solid #E2DCCF' }} />
          </div>

          {/* Scroll hint */}
          <motion.div
            variants={item}
            style={{
              marginTop: '48px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div style={{ width: '32px', height: '1px', backgroundColor: '#E2DCCF' }} />
            <span style={{
              fontSize: '0.65rem',
              fontFamily: '"DM Sans", system-ui, sans-serif',
              color: '#7A7060',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
              Scroll to begin · or select a chapter above
            </span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
```

**Commit:**
```bash
git add -A && git commit -m "feat: build ChapterNav In This Issue table of contents page"
```

---

## Task D: Chapter Wrapper + Page-Fold System

Create a reusable ChapterSection component that gives every chapter the page-fold reveal animation and consistent editorial layout.

**Files:**
- Create: `src/components/ui/ChapterSection.tsx`
- Create: `src/components/ui/ChapterHeader.tsx`

**ChapterSection.tsx:**
```tsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ChapterSectionProps {
  id: string
  children: React.ReactNode
  backgroundColor?: string
}

export default function ChapterSection({
  id,
  children,
  backgroundColor = '#FDFCF8',
}: ChapterSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-10%' })

  return (
    <motion.section
      ref={ref}
      id={id}
      className="chapter-section"
      style={{
        minHeight: '100vh',
        backgroundColor,
        position: 'relative',
        overflow: 'hidden',
      }}
      initial={{ opacity: 0, rotateX: -6, y: 40, transformPerspective: 1400 }}
      animate={inView
        ? { opacity: 1, rotateX: 0, y: 0, transformPerspective: 1400 }
        : { opacity: 0, rotateX: -6, y: 40, transformPerspective: 1400 }
      }
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}
```

**ChapterHeader.tsx:**
```tsx
interface ChapterHeaderProps {
  number: string      // "01"
  chapter: string     // "The Background"
  headline: string    // Large display heading (may have <br/>)
  deck?: string       // Magazine "deck" — one sentence below headline
}

export default function ChapterHeader({ number, chapter, headline, deck }: ChapterHeaderProps) {
  return (
    <div style={{ marginBottom: '64px' }}>
      {/* Chapter label row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '32px',
      }}>
        <span style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '0.9rem',
          fontStyle: 'italic',
          color: '#C9A84C',
        }}>
          Chapter {number}
        </span>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#E2DCCF' }} />
        <span style={{
          fontSize: '0.65rem',
          fontFamily: '"DM Sans", system-ui, sans-serif',
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#7A7060',
        }}>
          {chapter}
        </span>
      </div>

      {/* Headline */}
      <h2
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 600,
          color: '#0F0F0E',
          lineHeight: 1.05,
          letterSpacing: '-0.01em',
        }}
        dangerouslySetInnerHTML={{ __html: headline }}
      />

      {/* Deck */}
      {deck && (
        <p style={{
          marginTop: '20px',
          fontFamily: '"Lora", Georgia, serif',
          fontStyle: 'italic',
          fontSize: '1.15rem',
          color: '#7A7060',
          maxWidth: '640px',
          lineHeight: 1.65,
        }}>
          {deck}
        </p>
      )}
    </div>
  )
}
```

**Commit:**
```bash
git add -A && git commit -m "feat: add ChapterSection page-fold wrapper and ChapterHeader editorial component"
```

---

## Task E: Chapter 01 — The Background (About)

**Files:**
- Create: `src/components/sections/ChapterBackground.tsx`
- Modify: `src/pages/Home.tsx`

Magazine two-column article layout. Left column: bio paragraphs in Lora serif (magazine article style). Right column: pull quote in gold italic + skills sidebar.

**Layout:**
```
┌─────────────────────────┬──────────────────┐
│  Chapter header          │                  │
│                          │  "I lead with    │
│  Body paragraph 1 (Lora) │  empathy, take   │
│                          │  accountability   │
│  Body paragraph 2        │  seriously."      │
│                          │                  │
│  Body paragraph 3        │  ── Skills ──    │
│                          │  [tag] [tag]      │
│  Body paragraph 4        │  [tag] [tag]      │
└─────────────────────────┴──────────────────┘
```

All text from the original index.html About section bio paragraphs.

Pull quote: *"I lead with empathy, take accountability seriously, and genuinely care about the people I work with."*

Skills sidebar: same 10 tags from original — styled as small bordered pills.

Below the two columns: 4 highlight cards in a row (HeartHandshake, Settings, Bot, BarChart3 Lucide icons) — editorial style, minimal, clean.

---

## Task F: Chapter 02 — The Toolkit (AI & Tools)

**Files:**
- Create: `src/components/sections/ChapterToolkit.tsx`

8 tools from original tools section. Magazine editorial grid — 4 cols desktop, 2 cols mobile.
Each card: tool name in Cormorant Garamond, category as small uppercase DM Sans, description in Lora.
Gold left-edge accent on hover. Subtle ink-wash background (#F5F2EA surface).

---

## Task G: Chapter 03 — The Work (Projects)

**Files:**
- Create: `src/components/sections/ChapterWork.tsx`
- Create: `src/data/projects.ts`

6 projects from js/projects.js converted to TypeScript.
Magazine feature layout — numbered like articles, each card has project headline, one-line deck, stack tags, status badge, GitHub link.
Hover: gold left-edge accent reveal.

---

## Task H: Chapter 04 — The Record (CV, embedded inline)

**Files:**
- Create: `src/components/sections/ChapterRecord.tsx`

This is the full CV embedded as Chapter 04. Replaces cv.html entirely.

Sub-sections:
1. Chapter header (Chapter 04 — The Record)
2. Summary paragraph
3. Career timeline — editorial vertical timeline (4 positions, animated dots)
4. Two-column: Experience (left, main) + Skills sidebar (right)
5. Education
6. Print button (window.print() — triggers print CSS)

All content from cv.html. Styled as a print-quality editorial layout.

---

## Task I: Chapter 05 — Work With Me

**Files:**
- Create: `src/components/sections/ChapterWorkWithMe.tsx`

Sub-sections:
1. Chapter header
2. 9 service cards (Lucide icons, replacing all emojis)
3. 4-step process (01–04)
4. Contact form (Web3Forms key: 61182368-6cdc-4631-9ac8-be2a5293d520) + contact links

---

## Task J: Final Assembly + Polish

**Files:**
- Modify: `src/pages/Home.tsx` — assemble all chapters
- Modify: `src/components/layout/Navbar.tsx` — chapter-aware navigation
- Modify: `src/index.css` — final polish

1. Wire all chapters into Home.tsx
2. Update Navbar: chapter links scroll to anchors (no separate routes), show chapter name in corner
3. Chapter indicator dot in bottom-right corner showing which chapter is visible
4. Grain texture overlay in CSS
5. `vercel.json` with SPA rewrite rules
6. `npm run build` — zero TypeScript errors
7. Push to GitHub

---

## Content Reference

### Projects (from js/projects.js)
1. NextRound — Job Hunt HQ (React, TypeScript, Vite, CRM) — In Progress
2. Managr — Sober Living Ops (Next.js, Supabase, Tailwind, Healthcare) — In Progress
3. HomeBase — Family Command Center (React Native, Expo, Firebase, Mobile) — In Progress
4. HelloHero — Scheduling System (Next.js, TypeScript, Zustand, Scheduling) — In Progress
5. Clinician Dashboard (Next.js, TypeScript, Healthcare, Dashboard) — In Progress
6. Lead Scraping Automation (n8n, Puppeteer, Automation, CRM) — In Progress

### Contact
- Email: aamirali1211@gmail.com
- Phone: (972) 214-4380
- LinkedIn: linkedin.com/in/aamirnali
- GitHub: github.com/aamirprinceali
- Web3Forms key: 61182368-6cdc-4631-9ac8-be2a5293d520
