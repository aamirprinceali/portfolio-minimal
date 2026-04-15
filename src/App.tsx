import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import CustomCursor from './components/layout/CustomCursor'
import Home from './pages/Home'
import CV from './pages/CV'
import WorkWithMe from './pages/WorkWithMe'

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
