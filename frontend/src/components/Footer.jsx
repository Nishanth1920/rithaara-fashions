import { useEffect, useState } from "react";
import { Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "features",
        "collections",
        "testimonials",
        "instagram",
        "contact",
      ];

      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 80,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Collections", id: "collections" },
    { name: "Reviews", id: "testimonials" },
    { name: "Instagram", id: "instagram" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display">
              Rithaara Fashions
            </h3>
            <p className="text-accent-300 text-sm">
              Premium fashion blending traditional elegance with modern style.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/rithaara_fashions/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center hover:bg-primary-500"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/919003456006"
                target="_blank"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-500"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">
              Quick Links
            </h4>
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`relative text-sm transition-colors text-accent-300 hover:text-rose-400`}
                  >
                    {link.name}
                    
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">
              Collections
            </h4>
            <ul className="space-y-2 text-sm text-accent-300">
              <li>Traditional Wear</li>
              <li>Casual Collection</li>
              <li>Formal Attire</li>
              <li>Party Wear</li>
              <li>Seasonal Specials</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-display">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-accent-300">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary-400" />
                Kottar, Nagercoil, Tamil Nadu
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-primary-400" />
                <a href="tel:+919003456006">+91 9003456006</a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-primary-400" />
                <a href="mailto:info@rithaarafashions.com">
                  info@rithaarafashions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-accent-700 mt-8 pt-4 text-center">
          <p className="text-accent-400 text-sm">
            © {currentYear} Rithaara Fashions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
