# Portfolio Minimal — React Rebuild Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild portfolio-minimal from static HTML into a polished React + Vite + TypeScript app with a minimalist, professional, elegant design that impresses business professionals and hiring managers.

**Architecture:** Single-page app with React Router handling 3 routes (`/`, `/cv`, `/work-with-me`). All content is preserved from the existing HTML files. The old `css/` and `js/` folders are replaced by Tailwind, Framer Motion, and React components. The existing HTML files (`index.html`, `cv.html`, `work-with-me.html`) remain in the root as legacy backups until the new app is complete.

**Tech Stack:** React 18, Vite, TypeScript, React Router v6, Tailwind CSS v4, shadcn/ui, Framer Motion, Lucide React, Google Fonts (Cormorant Garamond + DM Sans)

**Design Direction:**
- Background: `#F9F8F6` (warm parchment white)
- Text: `#121212` primary, `#6B6B6B` secondary
- Accent: `#1E3A5F` (deep navy)
- Surface: `#F0EFEB` (off-white card)
- Border: `#E5E4DF`
- Headings: Cormorant Garamond (Google Font)
- Body/UI: DM Sans (Google Font)

**Remove from old version:**
- `<canvas id="space-canvas">` — no space background
- `#terminal-intro` terminal boot screen — not appropriate for business audience
- `js/terminal.js` — goes with terminal intro
- `div.neofetch-card` — too technical/gimmicky
- `div.process-table-header` (PID/PROCESS NAME) — replace with clean section intro
- `// email`, `// phone` comment-style labels — replace with clean labels
- All emoji icons — replace with Lucide React icons

---

## Task 1: Scaffold the React + Vite Project

**Files:**
- Create: `src/` directory tree (full structure below)
- Create: `package.json` (via Vite scaffold)
- Create: `index.html` (Vite entry — different from old `index.html`, lives in root)
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `src/index.css` (global styles + Google Fonts)
- Create: `src/main.tsx`
- Create: `src/App.tsx`

**Step 1: Create the Vite app inside the project folder**

> NOTE: The existing `index.html` will be overwritten by Vite. That's fine — the old one is preserved in git. Run these commands from `~/Desktop/dev/portfolio-minimal`.

```bash
cd ~/Desktop/dev/portfolio-minimal

# Scaffold React+TS Vite app into a temp folder then merge
npm create vite@latest . -- --template react-ts
# When prompted "Current directory is not empty" → select "Ignore files and continue"
```

**Step 2: Install all dependencies**

```bash
npm install
npm install framer-motion lucide-react react-router-dom
npm install -D tailwindcss @tailwindcss/vite
```

**Step 3: Initialize shadcn/ui**

```bash
npx shadcn@latest init
```
When prompted:
- Style: Default
- Base color: Stone
- CSS variables: Yes

**Step 4: Verify dev server works**

```bash
npm run dev
```
Expected: Vite dev server starts at `http://localhost:5173`

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: scaffold React+Vite+TS with Tailwind, shadcn, Framer Motion"
```

---

## Task 2: Configure Tailwind, Fonts, and Design Tokens

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/index.css`
- Modify: `index.html` (add Google Fonts link)
- Modify: `vite.config.ts` (add @tailwindcss/vite plugin)

**Step 1: Update `vite.config.ts`**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
})
```

**Step 2: Update `tailwind.config.ts`**

```ts
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F9F8F6',
        surface: '#F0EFEB',
        border: '#E5E4DF',
        primary: '#121212',
        secondary: '#6B6B6B',
        accent: '#1E3A5F',
        'accent-light': '#2A527F',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1100px',
      },
    },
  },
  plugins: [],
} satisfies Config
```

**Step 3: Update `index.html` — add Google Fonts**

Add inside `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
<title>Aamir Ali — Operations & Systems</title>
```

**Step 4: Update `src/index.css`**

```css
@import "tailwindcss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #F9F8F6;
  color: #121212;
  font-family: 'DM Sans', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* Scroll progress bar */
#scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background-color: #1E3A5F;
  z-index: 100;
  transition: width 0.1s linear;
}
```

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: configure Tailwind tokens, Google Fonts, design system"
```

---

## Task 3: App Router + Core Layout

**Files:**
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`
- Create: `src/components/layout/Navbar.tsx`
- Create: `src/components/layout/Footer.tsx`
- Create: `src/components/layout/ScrollProgress.tsx`
- Create: `src/components/layout/CustomCursor.tsx`

**Step 1: Set up React Router in `src/main.tsx`**

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

**Step 2: Set up routes in `src/App.tsx`**

```tsx
import { Routes, Route } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/layout/ScrollProgress'
import CustomCursor from '@/components/layout/CustomCursor'
import Home from '@/pages/Home'
import CV from '@/pages/CV'
import WorkWithMe from '@/pages/WorkWithMe'

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/work-with-me" element={<WorkWithMe />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
```

**Step 3: Create `src/components/layout/ScrollProgress.tsx`**

```tsx
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      setWidth(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      id="scroll-progress"
      style={{ width: `${width}%` }}
    />
  )
}
```

**Step 4: Create `src/components/layout/CustomCursor.tsx`**

```tsx
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let ringX = 0, ringY = 0
    let mouseX = 0, mouseY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    animate()
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-multiply"
        style={{ transition: 'opacity 0.2s' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 border border-accent/40 rounded-full pointer-events-none z-[9999]"
        style={{ transition: 'transform 0.08s linear' }}
      />
    </>
  )
}
```

**Step 5: Create `src/components/layout/Navbar.tsx`**

```tsx
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/#about', label: 'About' },
    { to: '/#tools', label: 'AI & Automation' },
    { to: '/#projects', label: 'Projects' },
    { to: '/work-with-me', label: 'Work With Me' },
    { to: '/cv', label: 'CV' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-lg font-semibold tracking-wide text-primary">
          Aamir Ali
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Available badge */}
        <a
          href="/work-with-me"
          className="hidden md:flex items-center gap-2 text-xs font-medium text-accent border border-accent/30 rounded-full px-3 py-1.5 hover:bg-accent/5 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          available
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
```

**Step 6: Create `src/components/layout/Footer.tsx`**

```tsx
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm text-secondary">© {year} Aamir Ali. Built with intention.</span>
        <nav className="flex items-center gap-6">
          {[
            { href: '/#about', label: 'About' },
            { href: '/#tools', label: 'AI & Automation' },
            { href: '/#projects', label: 'Projects' },
            { href: '/work-with-me', label: 'Work With Me' },
            { href: '/cv', label: 'CV' },
          ].map(({ href, label }) => (
            <a key={href} href={href} className="text-sm text-secondary hover:text-primary transition-colors">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
```

**Step 7: Create placeholder page files so routing works**

Create `src/pages/Home.tsx`, `src/pages/CV.tsx`, `src/pages/WorkWithMe.tsx`:
```tsx
// src/pages/Home.tsx
export default function Home() { return <div className="pt-16">Home — coming soon</div> }

// src/pages/CV.tsx
export default function CV() { return <div className="pt-16">CV — coming soon</div> }

// src/pages/WorkWithMe.tsx
export default function WorkWithMe() { return <div className="pt-16">Work With Me — coming soon</div> }
```

**Step 8: Verify nav renders and routing works**

```bash
npm run dev
```
Navigate to `localhost:5173`, `/cv`, `/work-with-me` — each shows its placeholder. Nav shows with correct links. No console errors.

**Step 9: Commit**

```bash
git add -A
git commit -m "feat: add router, layout components (Navbar, Footer, ScrollProgress, CustomCursor)"
```

---

## Task 4: Shared Utilities — Reveal Animation Wrapper

This is a reusable component that wraps any section/element in a scroll-triggered fade-up reveal using Framer Motion. Build it once, use everywhere.

**Files:**
- Create: `src/components/ui/Reveal.tsx`
- Create: `src/components/ui/SectionHeader.tsx`

**Step 1: Create `src/components/ui/Reveal.tsx`**

```tsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'left' | 'none'
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 24 : 0,
      x: direction === 'left' ? -24 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

**Step 2: Create `src/components/ui/SectionHeader.tsx`**

This renders the editorial-style section heading with a thin ruled line.

```tsx
import Reveal from './Reveal'

interface SectionHeaderProps {
  label: string      // small uppercase label, e.g. "02 — About"
  title: string      // large display heading, may have <br/> tags
  subtitle?: string  // optional paragraph below heading
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-14">
      <Reveal>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-xs font-medium tracking-widest uppercase text-secondary">{label}</span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2
          className="font-display text-5xl md:text-6xl font-semibold text-primary leading-tight"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mt-4 text-lg text-secondary max-w-2xl leading-relaxed">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Reveal animation wrapper and SectionHeader component"
```

---

## Task 5: Hero Section

**Files:**
- Modify: `src/pages/Home.tsx`
- Create: `src/components/sections/Hero.tsx`

**Step 1: Create `src/components/sections/Hero.tsx`**

```tsx
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 pb-24"
    >
      <div className="max-w-container mx-auto px-6 w-full">
        <motion.div
          className="grid md:grid-cols-[1fr_auto] gap-12 items-end"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Left: name + tagline */}
          <div>
            <motion.div variants={item} className="flex items-center gap-2 mb-6">
              <MapPin size={14} className="text-secondary" />
              <span className="text-sm text-secondary tracking-wide">
                Plano, TX &nbsp;·&nbsp; Open to Remote
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-[clamp(4rem,12vw,9rem)] font-semibold text-primary leading-[0.9] tracking-tight mb-8"
            >
              Aamir<br />Ali
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-secondary max-w-xl leading-relaxed mb-10"
            >
              <span className="text-primary font-medium">Operations professional</span> — I build
              the systems that make teams move faster. AI is the tool I use to make those
              systems smarter.
            </motion.p>

            <motion.div variants={item} className="flex items-center gap-4 flex-wrap">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-accent-light transition-colors duration-200"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="/work-with-me"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary border border-border px-6 py-3 rounded-full hover:border-accent/40 hover:bg-surface transition-colors duration-200"
              >
                Work With Me
              </a>
            </motion.div>
          </div>

          {/* Right: stat block */}
          <motion.div
            variants={item}
            className="hidden md:block mb-4"
          >
            <div className="flex flex-col gap-8 text-right">
              {[
                { num: '5+', label: 'years in operations' },
                { num: '3', label: 'organizations built on' },
                { num: '100%', label: 'quality audit score' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-display text-5xl font-semibold text-accent">{num}</div>
                  <div className="text-sm text-secondary mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="w-8 h-px bg-border" />
          <span className="text-xs text-secondary tracking-widest uppercase">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Update `src/pages/Home.tsx`**

```tsx
import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      {/* More sections added below in future tasks */}
    </>
  )
}
```

**Step 3: Test in browser — verify hero looks correct**

```bash
npm run dev
```
Expected: Large "Aamir Ali" in Cormorant Garamond, stat block on right, CTA buttons visible. Staggered animation plays on load.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: build Hero section with Framer Motion stagger animation"
```

---

## Task 6: About Section

**Files:**
- Create: `src/components/sections/About.tsx`
- Modify: `src/pages/Home.tsx`

**Step 1: Create `src/components/sections/About.tsx`**

```tsx
import { HeartHandshake, Settings, Bot, BarChart3 } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const highlights = [
  {
    icon: HeartHandshake,
    title: 'Healthcare & Recovery Background',
    desc: '5+ years working across behavioral health, sober living, and enrollment ops — from frontline case management to leading teams.',
  },
  {
    icon: Settings,
    title: 'Systems & Process Builder',
    desc: 'I build SOPs, workflows, and operational frameworks at fast-growing startups where nothing exists yet and everything needs to scale.',
  },
  {
    icon: Bot,
    title: 'AI as a Force Multiplier',
    desc: 'I use AI tools daily to eliminate busywork, automate repetitive tasks, and make operational decisions faster and smarter.',
  },
  {
    icon: BarChart3,
    title: 'Custom Tools & Dashboards',
    desc: 'I build custom dashboards, internal tools, and automations that give teams real visibility into their operations.',
  },
]

const skills = [
  'Healthcare Operations', 'Behavioral Health', 'Addiction Recovery',
  'Enrollment Management', 'Team Leadership', 'Process & SOP Design',
  'AI & Automation', 'Customer Success', 'Content Creation', 'Website Building',
]

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          label="01 — About"
          title="People first.<br/>Systems second."
        />

        <div className="grid md:grid-cols-2 gap-16">
          {/* Bio */}
          <div className="space-y-5 text-secondary text-base leading-relaxed">
            {[
              `I've always been drawn to work that combines people, problem-solving, and impact. I started in recovery services, managing a sober living home and helping residents navigate major life transitions. That experience gave me a strong foundation in leadership, empathy, and accountability — qualities that still shape how I work today.`,
              `Since then, I've grown into operations, enrollment, and customer-facing leadership roles where I've worked closely with individuals, families, and cross-functional teams to improve experiences and drive better outcomes. I'm at my best where service and systems overlap — improving workflows, solving bottlenecks, and making complex processes feel simpler and more human.`,
              `I'm also deeply interested in AI and automation, and I've spent the past few years exploring ways to use modern tools to work more efficiently, reduce friction, and build smarter systems. I enjoy learning quickly, experimenting with new technology, and finding practical ways to make work better.`,
              `Outside of work, I enjoy spending time with my dog Casper, lifting weights, and working on personal projects that challenge me to keep learning and building.`,
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}

            {/* Skills tags */}
            <Reveal delay={0.4}>
              <div className="pt-4">
                <div className="text-xs font-medium tracking-widest uppercase text-secondary mb-3">Skills & Expertise</div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-primary bg-surface border border-border px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="flex gap-4 p-5 bg-surface rounded-xl border border-border hover:border-accent/30 hover:shadow-sm transition-all duration-200 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/15 transition-colors">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-medium text-primary text-sm mb-1">{title}</div>
                    <div className="text-sm text-secondary leading-relaxed">{desc}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add About to Home page**

```tsx
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  )
}
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add About section with reveal animations and highlight cards"
```

---

## Task 7: AI & Tools Section

**Files:**
- Create: `src/components/sections/Tools.tsx`
- Modify: `src/pages/Home.tsx`

**Step 1: Create `src/components/sections/Tools.tsx`**

```tsx
import { Brain, Sparkles, Gem, Shuffle, Share2, Presentation, BookOpen, Palette } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const tools = [
  { icon: Brain, name: 'ChatGPT', version: 'v4.0', category: 'LLM', desc: 'My go-to for drafting SOPs, brainstorming, rewriting communications, and research acceleration.' },
  { icon: Sparkles, name: 'Claude', version: 'v3.7', category: 'LLM', desc: 'Long-form analysis, document synthesis, complex reasoning, and building things like this site.' },
  { icon: Gem, name: 'Gemini', version: 'v2.0', category: 'LLM', desc: 'Google Workspace integration, data lookups, and quick research embedded in my daily tools.' },
  { icon: Shuffle, name: 'n8n', version: 'v1.0', category: 'Automation', desc: 'Open-source workflow automation — connecting apps, triggering actions, and removing manual steps.' },
  { icon: Share2, name: 'Blotato', version: 'latest', category: 'Content', desc: 'AI-powered content repurposing and social media automation across platforms.' },
  { icon: Presentation, name: 'Gamma', version: 'v2.1', category: 'Productivity', desc: 'AI-generated presentations and docs that actually look good without hours of design work.' },
  { icon: BookOpen, name: 'Notion', version: 'v3.0', category: 'Ops', desc: 'My operational home base — knowledge management, project tracking, team wikis, and SOPs.' },
  { icon: Palette, name: 'Canva', version: 'v4.0', category: 'Design', desc: 'Quick design work for presentations, social content, and visual assets without a designer.' },
]

const categoryColors: Record<string, string> = {
  LLM: 'bg-blue-50 text-blue-700 border-blue-100',
  Automation: 'bg-purple-50 text-purple-700 border-purple-100',
  Content: 'bg-orange-50 text-orange-700 border-orange-100',
  Productivity: 'bg-green-50 text-green-700 border-green-100',
  Ops: 'bg-stone-100 text-stone-700 border-stone-200',
  Design: 'bg-pink-50 text-pink-700 border-pink-100',
}

export default function Tools() {
  return (
    <section id="tools" className="py-28 bg-surface">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          label="02 — AI & Automation"
          title="AI & Automation<br/>in my daily stack."
          subtitle="These aren't just tools I've heard of — they're in my active workflow. I use them to get more done, move faster, and build things that used to require a whole team."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map(({ icon: Icon, name, version, category, desc }, i) => (
            <Reveal key={name} delay={i * 0.05}>
              <div className="bg-background rounded-xl border border-border p-5 hover:border-accent/30 hover:shadow-md transition-all duration-200 group h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center group-hover:bg-accent/5 transition-colors">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <span className="text-xs text-secondary font-mono">{version}</span>
                </div>
                <div className="font-medium text-primary mb-1">{name}</div>
                <p className="text-sm text-secondary leading-relaxed flex-1">{desc}</p>
                <div className="mt-4">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded border ${categoryColors[category] || 'bg-surface text-secondary border-border'}`}>
                    {category}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Add to Home page**

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Tools/AI section with category badges and hover cards"
```

---

## Task 8: Projects Section

**Files:**
- Create: `src/data/projects.ts` (extracted from old `js/projects.js`)
- Create: `src/components/sections/Projects.tsx`
- Modify: `src/pages/Home.tsx`

**Step 1: Create `src/data/projects.ts`**

Read the old `js/projects.js` file and extract the project array. Create a typed TypeScript version:

```ts
export interface Project {
  id: number
  name: string
  desc: string
  status: 'live' | 'in-progress' | 'archived'
  stack: string[]
  url?: string
}

export const projects: Project[] = [
  // Copy projects from js/projects.js — convert to TypeScript objects
  // Each project should have: id, name, desc, status, stack, url
]
```

> NOTE: Read `js/projects.js` to get the actual project data before writing this file.

**Step 2: Create `src/components/sections/Projects.tsx`**

```tsx
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'
import { projects } from '@/data/projects'

const statusStyles = {
  live: 'bg-green-50 text-green-700 border-green-100',
  'in-progress': 'bg-amber-50 text-amber-700 border-amber-100',
  archived: 'bg-stone-100 text-stone-600 border-stone-200',
}

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          label="03 — Projects"
          title="Projects"
          subtitle="Real problems. Real solutions. Each project is something I built or a workflow I designed that solved a specific need."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.07}>
              <div className="group relative bg-surface border border-border rounded-xl p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                {/* Left accent edge on hover */}
                <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start justify-between mb-3">
                  <span className="font-mono text-xs text-secondary">#{String(project.id).padStart(2, '0')}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded border ${statusStyles[project.status]}`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-secondary leading-relaxed flex-1">{project.desc}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs text-secondary bg-background border border-border px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
                  >
                    View project <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 3: Add to Home page**

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Projects section with typed data and card grid"
```

---

## Task 9: Contact Section

**Files:**
- Create: `src/components/sections/Contact.tsx`
- Modify: `src/pages/Home.tsx`

**Step 1: Install shadcn Input and Textarea**

```bash
npx shadcn@latest add input textarea button label
```

**Step 2: Create `src/components/sections/Contact.tsx`**

```tsx
import { useState, FormEvent } from 'react'
import { Mail, Phone, Linkedin, Github, FileText, ArrowRight, CheckCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Reveal from '@/components/ui/Reveal'
import SectionHeader from '@/components/ui/SectionHeader'

const contactLinks = [
  { icon: Mail, label: 'Email', value: 'aamirali1211@gmail.com', href: 'mailto:aamirali1211@gmail.com' },
  { icon: Phone, label: 'Phone', value: '(972) 214-4380', href: 'tel:+19722144380' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/aamirnali', href: 'https://linkedin.com/in/aamirnali' },
  { icon: Github, label: 'GitHub', value: 'github.com/aamirprinceali', href: 'https://github.com/aamirprinceali' },
  { icon: FileText, label: 'Resume', value: 'View full curriculum vitae →', href: '/cv' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data,
    })

    if (res.ok) {
      setSent(true)
      form.reset()
    }
    setSubmitting(false)
  }

  return (
    <section id="contact" className="py-28 bg-surface">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          label="04 — Contact"
          title="Let's connect<br/>and build."
          subtitle="Whether you need a custom dashboard, an automation that saves your team hours, an internal tool, or just want to talk operations — I'm happy to chat."
        />

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact links */}
          <div className="space-y-3">
            {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
              <Reveal key={label} delay={i * 0.08}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener"
                  className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border hover:border-accent/30 hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="w-9 h-9 bg-surface rounded-lg flex items-center justify-center group-hover:bg-accent/5 transition-colors flex-shrink-0">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-secondary">{label}</div>
                    <div className="text-sm font-medium text-primary group-hover:text-accent transition-colors">{value}</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Contact form */}
          <Reveal delay={0.2}>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-3 text-center py-12">
                <CheckCircle size={36} className="text-green-600" />
                <p className="font-medium text-primary">Message sent!</p>
                <p className="text-sm text-secondary">I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="access_key" value="61182368-6cdc-4631-9ac8-be2a5293d520" />
                <input type="hidden" name="subject" value="New message from your portfolio" />
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                <div>
                  <Label htmlFor="name" className="text-xs font-medium tracking-wide uppercase text-secondary mb-1.5 block">Your Name</Label>
                  <Input id="name" name="name" placeholder="Jane Smith" required className="bg-background border-border focus:border-accent" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-xs font-medium tracking-wide uppercase text-secondary mb-1.5 block">Your Email</Label>
                  <Input id="email" name="email" type="email" placeholder="jane@company.com" required className="bg-background border-border focus:border-accent" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-xs font-medium tracking-wide uppercase text-secondary mb-1.5 block">Your Message</Label>
                  <Textarea id="message" name="message" placeholder="What are you working on? How can I help?" required rows={5} className="bg-background border-border focus:border-accent resize-none" />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-accent hover:bg-accent-light text-white font-medium"
                >
                  {submitting ? 'Sending…' : 'Send Message'}
                  {!submitting && <ArrowRight size={16} className="ml-2" />}
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
```

**Step 3: Add to Home page, finalize Home.tsx**

```tsx
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Tools from '@/components/sections/Tools'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Contact />
    </>
  )
}
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Contact section with Web3Forms integration and shadcn form"
```

---

## Task 10: CV Page

**Files:**
- Modify: `src/pages/CV.tsx`
- Create: `src/components/sections/CVHeader.tsx`
- Create: `src/components/sections/Timeline.tsx`
- Create: `src/components/sections/CVBody.tsx`

**Step 1: Create `src/components/sections/CVHeader.tsx`**

```tsx
import { Mail, Phone, Linkedin, Github, Download, ArrowLeft, Printer } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '@/components/ui/Reveal'

export default function CVHeader() {
  return (
    <Reveal>
      <div className="py-16 border-b border-border">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="font-display text-6xl md:text-7xl font-semibold text-primary mb-2">Aamir Ali</h1>
              <div className="text-lg text-secondary mb-1">Enrollment Operations Manager · Healthcare · AI & Automation</div>
              <div className="text-sm text-secondary">Plano, TX · Open to Remote</div>
              <div className="flex items-center gap-3 mt-5 flex-wrap">
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-secondary border border-border px-4 py-2 rounded-full hover:border-accent/30 transition-colors">
                  <ArrowLeft size={14} /> Portfolio
                </Link>
                <button onClick={() => window.print()} className="inline-flex items-center gap-2 text-sm text-secondary border border-border px-4 py-2 rounded-full hover:border-accent/30 transition-colors">
                  <Printer size={14} /> Save as PDF
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-sm text-secondary md:text-right">
              <a href="mailto:aamirali1211@gmail.com" className="hover:text-accent transition-colors">aamirali1211@gmail.com</a>
              <a href="tel:+19722144380" className="hover:text-accent transition-colors">(972) 214-4380</a>
              <a href="https://linkedin.com/in/aamirnali" target="_blank" rel="noopener" className="hover:text-accent transition-colors">linkedin.com/in/aamirnali</a>
              <a href="https://github.com/aamirprinceali" target="_blank" rel="noopener" className="hover:text-accent transition-colors">github.com/aamirprinceali</a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
```

**Step 2: Create `src/components/sections/Timeline.tsx`**

Build the vertical timeline with all 4 career positions (from cv.html). Each `tv2-item` becomes a timeline entry with animated reveal.

Key structure:
```tsx
const timeline = [
  {
    period: 'Jun 2020 – May 2023',
    role: 'House Manager / Case Manager',
    company: 'Lighthouse Recovery · Dallas, TX',
    desc: '...',
  },
  // ... 3 more entries
]
```

Render as vertical timeline: date on left, animated dot in center, content on right.

**Step 3: Create `src/components/sections/CVBody.tsx`**

Two-column layout: main content (Summary, Experience, Education) + sidebar (skill groups with tags). Copy all content from cv.html.

**Step 4: Update `src/pages/CV.tsx`**

```tsx
import CVHeader from '@/components/sections/CVHeader'
import Timeline from '@/components/sections/Timeline'
import CVBody from '@/components/sections/CVBody'

export default function CV() {
  return (
    <div className="pt-16">
      <CVHeader />
      <div className="max-w-container mx-auto px-6 py-16">
        <Timeline />
        <CVBody />
      </div>
    </div>
  )
}
```

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: build CV page with timeline and two-column layout"
```

---

## Task 11: Work With Me Page

**Files:**
- Modify: `src/pages/WorkWithMe.tsx`
- Create: `src/components/sections/Services.tsx`
- Create: `src/components/sections/ProcessSteps.tsx`
- Create: `src/components/sections/WWMCta.tsx`

**Step 1: Services grid**

9 service cards from work-with-me.html. Replace emoji icons with Lucide icons. Each card: Lucide icon, title, description, tags, "Available" badge.

Lucide icon mapping:
- Automation Setup → `Workflow`
- Website Design → `Globe`
- AI Training → `Bot`
- Operations Consulting → `ClipboardList`
- Custom Tool Building → `Wrench`
- Content Creation → `PenLine`
- Resume Writing → `FileText`
- SOPs & Training Guides → `BookOpen`
- Script Writing → `Mic`

**Step 2: Process steps (01–04)**

Four numbered steps: Reach out → Talk it through → I do the work → You own it.
Render as 4-column grid with numbered dividers.

**Step 3: CTA block**

Clean centered section with heading "Ready when you are", two buttons (Email + Contact Form), and a book-a-call card.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: build Work With Me page with services, process, CTA"
```

---

## Task 12: Page Transitions + Final Polish

**Files:**
- Modify: `src/App.tsx` (add AnimatePresence)
- Create: `src/components/ui/PageTransition.tsx`

**Step 1: Add AnimatePresence to App.tsx for smooth page transitions**

```tsx
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

// Wrap <Routes> in <AnimatePresence mode="wait">
// Each page component should use PageTransition wrapper
```

**Step 2: Create `src/components/ui/PageTransition.tsx`**

```tsx
import { motion } from 'framer-motion'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

Wrap each page's return value in `<PageTransition>`.

**Step 3: Add grain texture overlay**

In `src/index.css` add:
```css
#grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 200;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,..."); /* subtle noise SVG */
}
```

**Step 4: Run final check**

```bash
npm run dev
```

Verify:
- [ ] All 3 pages load correctly
- [ ] Animations play on scroll
- [ ] Page transitions are smooth
- [ ] Nav scrolled state works
- [ ] Custom cursor tracks on desktop
- [ ] Contact form submits and shows success state
- [ ] Mobile responsive at 375px, 768px, 1280px
- [ ] No console errors

**Step 5: Build for production**

```bash
npm run build
```

Expected: No TypeScript errors, build succeeds in `dist/`

**Step 6: Final commit**

```bash
git add -A
git commit -m "feat: add page transitions, grain overlay, final polish — portfolio complete"
```

---

## Deploy to Vercel (Optional Task 13)

**Step 1: Install Vercel CLI**
```bash
npm i -g vercel
```

**Step 2: Deploy**
```bash
cd ~/Desktop/dev/portfolio-minimal
vercel --prod
```

When prompted:
- Scope: your account
- Link to existing project: No (or Yes if already set up)
- Build command: `npm run build`
- Output directory: `dist`

**Step 3: Set SPA routing** — create `vercel.json` in root:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

This ensures `/cv` and `/work-with-me` work on direct URL load.

---

## File Structure (Final)

```
portfolio-minimal/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   └── CustomCursor.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Tools.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── CVHeader.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── CVBody.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── ProcessSteps.tsx
│   │   │   └── WWMCta.tsx
│   │   └── ui/
│   │       ├── Reveal.tsx
│   │       ├── SectionHeader.tsx
│   │       ├── PageTransition.tsx
│   │       └── [shadcn components]
│   ├── data/
│   │   └── projects.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── CV.tsx
│   │   └── WorkWithMe.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── docs/
│   └── plans/
│       └── 2026-04-13-portfolio-react-rebuild.md
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── CLAUDE.md
```
