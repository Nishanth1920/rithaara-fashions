import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Instagram, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../public/home-images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Men', path: '/men' },
    { name: 'Women', path: '/women' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-blur shadow-lg py-3' : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={logo} alt="Rithaara Fashions Logo" className="w-12 h-12 text-primary-600 group-hover:text-primary-700 transition-colors" />
            <span className="font-display text-2xl md:text-3xl font-bold text-accent-900 tracking-tight">
              Rithaara
            </span>
            <span className="font-display text-2xl md:text-3xl font-light text-primary-600">
              Fashions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-sm tracking-wider uppercase transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-accent-700 hover:text-primary-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/rithaara_fashions/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 btn-primary"
            >
              <Instagram className="w-4 h-4" />
              <span>Shop</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-accent-900" />
            ) : (
              <Menu className="w-6 h-6 text-accent-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`font-medium text-sm tracking-wider uppercase py-2 transition-colors ${
                      location.pathname === link.path
                        ? 'text-primary-600 border-l-4 border-primary-600 pl-4'
                        : 'text-accent-700 hover:text-primary-600 hover:pl-4'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="https://www.instagram.com/rithaara_fashions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center space-x-2 w-full"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Shop on Instagram</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
