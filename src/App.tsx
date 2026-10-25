import { useEffect } from 'react'
import Lenis from 'lenis'
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'
import Nav from './components/site/Nav'
import Hero from './components/site/Hero'
import About from './components/site/About'
import Work from './components/site/Work'
import Agents from './components/site/Agents'
import Experience from './components/site/Experience'
import Practice from './components/site/Practice'
import Contact from './components/site/Contact'
import Footer from './components/site/Footer'

export default function App() {
  // Smooth, weighted scrolling. Skipped for anyone who asks their OS for
  // reduced motion, so they get plain native scrolling.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, anchors: { offset: -64 } })
    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  // Thin gold reading-progress bar along the top edge
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <motion.div id="scroll-progress" aria-hidden style={{ scaleX: progress, width: '100%' }} />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Agents />
        <Experience />
        <Practice />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
