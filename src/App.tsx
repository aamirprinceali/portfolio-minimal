import { MotionConfig } from 'framer-motion'
import Nav from './components/site/Nav'
import Hero from './components/site/Hero'
import About from './components/site/About'
import Work from './components/site/Work'
import Projects from './components/site/Projects'
import Agents from './components/site/Agents'
import Experience from './components/site/Experience'
import Practice from './components/site/Practice'
import Contact from './components/site/Contact'
import Footer from './components/site/Footer'

// Page order: intro, about, experience, the four featured builds, the
// compact project and agent lists, the consulting practice, then contact.
// Native browser scrolling only; no smooth-scroll library or progress bar.
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Projects />
        <Agents />
        <Practice />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
