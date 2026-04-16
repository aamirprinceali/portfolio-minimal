import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollProgress from './components/layout/ScrollProgress'
import CustomCursor from './components/layout/CustomCursor'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}
