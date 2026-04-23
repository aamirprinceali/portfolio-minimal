# Features — Portfolio Minimal

Last updated: 2026-04-23

## Built & Complete ✅

### Book Cover Opening
- Full-screen black book cover on load
- "AAMIR ALI" stamps in letter by letter with stagger animation
- Gold underline draws left → right beneath the name
- "Operations & Customer Success Professional" types itself out with blinking cursor
- "Every chapter, earned." tagline fades in after
- Cinematic center-split animation (left panel slides left, right slides right)
- Trigger: scroll, click, tap, keyboard (space/enter/arrow down)

### Chapter Navigation
- "In This Issue" table of contents (ChapterNav.tsx)
- Chapter-aware navbar — highlights which chapter is currently visible
- Smooth anchor scroll to any chapter

### Page-Fold Transitions
- Framer Motion 3D perspective fold reveals per chapter on scroll-in
- Staggered child animations within each chapter

### Chapter 01: The Background
- Two-column magazine layout (bio + skills sidebar)
- Lora body text reads like print magazine
- 4 highlight cards with Tilt3D hover + gold glow
- Skills tag cloud

### Chapter 02: The Stack
- 8 flip cards — click to reveal a second tool on back face
- Front/back pairs: ChatGPT→Codex, Claude→Claude Code, Gemini→Google Cloud, n8n→Zapier, Blotato→HubSpot, Gamma→Zoho CRM, Notion→Supabase, Canva→Twilio
- Editorial hint: "click any card to reveal more of the stack"
- Footer: "These are just some of the tools in rotation — the stack keeps growing."

### Chapter 03: The Work
- 6 project cards — magazine feature layout
- Gold hover accent, Tilt3D effect
- Project #, status badge, stack tags, GitHub links

### Chapter 04: The Record (CV)
- Career timeline with gold shimmer on vertical line
- Current role dot has pulsing gold ring animation
- All timeline dots are gold
- Full experience, skills sidebar (sticky), education, certifications
- Print / Download PDF button

### Chapter 05: Work With Me
- 9 service cards with gold glow hover
- 4 How It Works step cards with Tilt3D 3D hover effect
- Web3Forms contact form (key: 61182368-6cdc-4631-9ac8-be2a5293d520)
- Contact links: email, phone, LinkedIn, GitHub

### Global UI
- Grain/noise texture overlay on the entire page (editorial feel)
- Custom cursor (dot + trailing ring)
- Scroll progress bar (gold, 2px top)
- Chapter-aware navbar with gold active underline
- Footer with chapter links

## Planned / Ideas Backlog

### Ready to build next session
- Vercel deployment (5 min job — just needs to be done)
- Link from space portfolio / gateway once Vercel URL is known

### Ideas for future sessions
- Animated stats strip below book cover: "5+ years · 4 apps shipped · 3 certifications"
- "Download the Record" button styled as magazine CTA in Chapter 04
- Mobile responsive polish: 2x2 highlight cards → 1x1, contact section stacking
- Chapter label in navbar showing current chapter name (e.g. "Chapter 02 — The Stack")
