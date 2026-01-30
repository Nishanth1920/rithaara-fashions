import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react'
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await axios.post('/api/contact', formData)
      setStatus({
        type: 'success',
        message: 'Thank you for contacting us! We will get back to you soon.'
      })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.message || 'Something went wrong. Please try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Madurai, Tamil Nadu, India",
      link: "https://maps.google.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "info@rithaarafashions.com",
      link: "mailto:info@rithaarafashions.com"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      content: "Chat with us",
      link: "https://wa.me/919876543210"
    }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-900 to-accent-800 text-white py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-primary text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-white/90 text-lg">
              Have a question or need assistance? We're here to help you find your perfect style
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-container -mt-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : '_self'}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full text-primary-600 mb-4 group-hover:bg-primary-200 transition-colors">
                {info.icon}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-accent-900">
                {info.title}
              </h3>
              <p className="text-accent-600 group-hover:text-primary-600 transition-colors">
                {info.content}
              </p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-tertiary mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-accent-700 font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-accent-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-accent-700 font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-accent-700 font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="input-field resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center space-x-3 ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{status.message}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="heading-tertiary mb-6">
                Why Contact Us?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-accent-900 mb-1">
                      Product Inquiries
                    </h3>
                    <p className="text-accent-600">
                      Have questions about our products, sizes, or availability? We're here to help.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-accent-900 mb-1">
                      Custom Orders
                    </h3>
                    <p className="text-accent-600">
                      Looking for something specific? Let us know and we'll do our best to accommodate.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-accent-900 mb-1">
                      Style Consultation
                    </h3>
                    <p className="text-accent-600">
                      Need fashion advice? Our styling experts are ready to guide you.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-accent-900 mb-1">
                      Feedback & Suggestions
                    </h3>
                    <p className="text-accent-600">
                      We value your input and continuously strive to improve our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-4 text-accent-900">
                Prefer Instant Chat?
              </h3>
              <p className="text-accent-600 mb-6">
                Connect with us on WhatsApp for quick responses and real-time assistance
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-accent-50 p-8 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-4 text-accent-900">
                Business Hours
              </h3>
              <div className="space-y-2 text-accent-700">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                </div>
              </div>
              <p className="text-accent-600 text-sm mt-4">
                * Response time may vary during holidays
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-container bg-primary-50 rounded-2xl mx-4 sm:mx-6 lg:mx-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading-tertiary mb-4">
            Visit Our Store
          </h2>
          <p className="text-accent-600 mb-8">
            Experience our collections in person at our Madurai location
          </p>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.144849576147!2d78.11908631478463!3d9.925201893029965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rithaara Fashions Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
