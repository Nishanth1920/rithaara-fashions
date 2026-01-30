import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import MenCollection from './pages/MenCollection'
import WomenCollection from './pages/WomenCollection'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<MenCollection />} />
            <Route path="/women" element={<WomenCollection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
