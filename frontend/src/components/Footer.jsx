import { Link } from 'react-router-dom'
import { Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">Rithaara Fashions</h3>
            <p className="text-accent-300 text-sm leading-relaxed">
              Your destination for premium fashion. Discover exclusive collections
              that blend traditional elegance with modern style.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/rithaara_fashions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-accent-300 hover:text-primary-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/men" className="text-accent-300 hover:text-primary-400 transition-colors text-sm">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/women" className="text-accent-300 hover:text-primary-400 transition-colors text-sm">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-accent-300 hover:text-primary-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-accent-300 hover:text-primary-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 text-sm text-accent-300">
              <li>Traditional Wear</li>
              <li>Casual Collection</li>
              <li>Formal Attire</li>
              <li>Party Wear</li>
              <li>Seasonal Specials</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-accent-300 text-sm">
                  Madurai, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <a
                  href="tel:+919876543210"
                  className="text-accent-300 hover:text-primary-400 transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <a
                  href="mailto:info@rithaarafashions.com"
                  className="text-accent-300 hover:text-primary-400 transition-colors text-sm"
                >
                  info@rithaarafashions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-700 mt-8 pt-8 text-center">
          <p className="text-accent-400 text-sm">
            &copy; {currentYear} Rithaara Fashions. All rights reserved.
          </p>
          <p className="text-accent-500 text-xs mt-2">
            Crafted with excellence | Designed for you
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
