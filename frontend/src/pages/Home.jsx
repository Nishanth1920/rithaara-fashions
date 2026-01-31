import { motion } from "framer-motion";
import {
  Instagram,
  ArrowRight,
  Sparkles,
  Award,
  TrendingUp,
  Heart,
  Star,
  Package,
  Zap,
  Users,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";
import ImageCarousel3D from "../components/ImageCarousel3D";

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Quality",
      desc: "Hand-selected fabrics with flawless finishing",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Exclusive Designs",
      desc: "Unique collections you won't find elsewhere",
      gradient: "from-fuchsia-400 to-rose-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer First",
      desc: "Loved by customers across Tamil Nadu",
      gradient: "from-rose-400 to-red-500",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers", icon: <Users className="w-4 h-4" /> },
    { number: "500+", label: "Unique Designs", icon: <Sparkles className="w-4 h-4" /> },
    { number: "5★", label: "Average Rating", icon: <Star className="w-4 h-4" /> },
    { number: "24/7", label: "Support", icon: <Zap className="w-4 h-4" /> },
  ];

  // High-quality fashion images from Unsplash
  const instagramPosts = [
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400",
    "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400",
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400"
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Absolutely love the quality! The sarees are gorgeous and the service is exceptional.",
      rating: 5,
      location: "Chennai"
    },
    {
      name: "Ananya Kumar",
      text: "Best fashion boutique in Chennai. Unique designs and amazing customer care.",
      rating: 5,
      location: "Coimbatore"
    },
    {
      name: "Divya Reddy",
      text: "The kurtis are so elegant and comfortable. Highly recommend Rithaara!",
      rating: 5,
      location: "Madurai"
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (integrate with your backend)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section id="home" className=" pt-20 sm:pt-28 md:pt-32 relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 left-10 w-48 h-48 bg-rose-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 right-10 w-56 h-56 bg-fuchsia-500 rounded-full blur-3xl"
        />

      {/* Content */}
      <div className="relative section-container text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-primary-600 uppercase tracking-wide text-lg font-bold mb-4 inline-block"
          >
            Welcome to Rithaara Fashions
          </motion.span>

          {/* Main Heading */}
          <motion.h1
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Where Style Meets
            <motion.span 
              className="block mt-2 text-5xl md:text-6xl bg-gradient-to-r from-rose-500 to-fuchsia-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Elegance
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-accent-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Discover our curated collection of premium fashion for men and women.
            Each piece tells a story of craftsmanship, quality, and timeless style.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
                href="https://www.instagram.com/rithaara_fashions/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-4 py-2.5 sm:px-7 sm:py-3.5 bg-gradient-to-r from-neutral-900 to-neutral-900 text-white rounded-full font-semibold shadow-lg flex items-center gap-2.5 overflow-hidden text-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-700 to-fuchsia-700 opacity-0 " />
                <Instagram className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">Shop on Instagram</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.a>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop - 80,
                      behavior: 'smooth'
                    });
                  }
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-4 py-2.5 sm:px-7 sm:py-3.5 bg-gradient-to-r from-neutral-900 to-neutral-900 text-white rounded-full font-semibold shadow-lg flex items-center gap-2.5 overflow-hidden text-sm"
              >
                Get in Touch
                <Phone className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-0" />
    </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-16 px-6 bg-white relative overflow-hidden scroll-mt-20">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-rose-100 to-transparent rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-fuchsia-100 to-transparent rounded-full blur-3xl opacity-40 translate-x-1/2 translate-y-1/2" />

        <div className="max-w-6xl mx-auto relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-100 rounded-full mb-4">
              <Award className="w-3.5 h-3.5 text-rose-600" />
              <span className="text-xs font-semibold text-rose-700 uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Crafted with Excellence
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Experience the difference that quality and care make
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative h-full bg-white border border-gray-200 rounded-2xl p-6 hover:border-transparent hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} rounded-full blur-xl`} />
                  </div>

                  <div className="relative mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>

                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEST SELLERS SECTION */}
      <section id="collections" className="py-16 relative overflow-hidden scroll-mt-20">
        {/* <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div> */}

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-rose-200 rounded-full mb-4 shadow-sm">
              <TrendingUp className="w-3.5 h-3.5 text-rose-600" />
              <span className="text-xs font-semibold text-rose-700 uppercase tracking-wider">
                Most Popular
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Best Selling Collections
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Our most loved designs, chosen by customers just like you
            </p>
          </motion.div>

          <ImageCarousel3D />
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-16 px-6 bg-white relative overflow-hidden scroll-mt-20">
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 rounded-full mb-4">
              <Star className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                Customer Reviews
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Loved by Our Customers
            </h2>
            <p className="text-base text-gray-600">Real experiences from real people</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-rose-200 transition-all duration-500 h-full">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 text-6xl text-rose-100 font-serif leading-none opacity-50 group-hover:text-rose-200 transition-colors">
                    "
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM SECTION */}
      <section id="instagram" className="py-16 px-6 relative overflow-hidden scroll-mt-20">
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-rose-100 to-fuchsia-100 rounded-full mb-4">
              <Instagram className="w-3.5 h-3.5 text-rose-600" />
              <span className="text-xs font-semibold bg-gradient-to-r from-rose-600 to-fuchsia-600 bg-clip-text text-transparent uppercase tracking-wider">
                Follow Our Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Follow Us on Instagram
            </h2>
            <p className="text-base text-gray-600 mb-6">
              Stay updated with our latest collections and style inspiration
            </p>

            <motion.a
              href="https://www.instagram.com/rithaara_fashions/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 sm:px-7 sm:py-3.5 bg-gradient-to-r from-neutral-900 to-neutral-900 text-white rounded-full font-semibold shadow-lg hover:shadow-xl text-sm"
            >
              <Instagram className="w-4 h-4" />
              <span>@rithaara_fashions</span>
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {instagramPosts.map((image, idx) => (
              <motion.a
                key={idx}
                href="https://www.instagram.com/rithaara_fashions/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative group aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={image}
                  alt={`Fashion collection ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-rose-600/90 via-fuchsia-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                  <Instagram className="w-10 h-10 text-white mb-2" />
                  <span className="text-white font-semibold text-sm">View on Instagram</span>
                </div>

                <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-white/40 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 px-6 bg-white relative overflow-hidden scroll-mt-20">
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-rose-100 rounded-full mb-4">
              <Mail className="w-3.5 h-3.5 text-rose-600" />
              <span className="text-xs font-semibold text-rose-700 uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Contact Us
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Have a question or want to learn more? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-rose-50 rounded-2xl p-8 border border-gray-200 shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-2.5 sm:px-7 sm:py-3.5 bg-gradient-to-r from-neutral-900 to-neutral-900 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className=" px-3 py-2.5 sm:px-7 sm:py-3.5 bg-gradient-to-br from-rose-50 to-fuchsia-50 rounded-2xl p-6 border border-rose-200 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-fuchsia-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 text-sm">+91 98765 43210</p>
                    <p className="text-gray-500 text-xs mt-1">Mon-Sat, 10 AM - 8 PM</p>
                  </div>
                </div>
              </div>

              <div className="px-3 py-2.5 sm:px-7 sm:py-3.5 bg-gradient-to-br from-rose-50 to-fuchsia-50 rounded-2xl p-6 border border-rose-200 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-fuchsia-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">info@rithaarafashions.com</p>
                    <p className="text-gray-500 text-xs mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="px-3 py-2.5 sm:px-7 sm:py-3.5 bg-gradient-to-br from-rose-50 to-fuchsia-50 rounded-2xl p-6 border border-rose-200 shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-fuchsia-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-600 text-sm">Vagaiyadi North, E Car St, Kottar, Nagercoil, Tamil Nadu 629002</p>
                    <p className="text-gray-500 text-xs mt-1">Visit us by appointment</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-fuchsia-50 rounded-2xl p-6 border border-rose-200">
                <h3 className="font-bold text-gray-900 mb-3">Follow Us</h3>
                <a
                  href="https://www.instagram.com/rithaara_fashions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:bg-gray-50 transition-all group"
                >
                  <Instagram className="w-5 h-5 text-rose-600" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Instagram</div>
                    <div className="text-xs text-gray-500">@rithaara_fashions</div>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-auto text-gray-400 group-hover:text-rose-600 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0" />

        {/* <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        /> */}

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 left-10 w-48 h-48 bg-rose-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 right-10 w-56 h-56 bg-fuchsia-500 rounded-full blur-3xl"
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 1 }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 bg-dark/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
              <Sparkles className="w-8 h-8 text-dark" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-dark mb-4"
          >
            Ready to Elevate Your Style?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-dark/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of satisfied customers who trust Rithaara Fashions for their wardrobe needs.
            Experience fashion that tells your story.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="https://www.instagram.com/rithaara_fashions/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
className="group px-4 py-2.5 sm:px-7 sm:py-3.5 bg-neutral-900 text-white font-bold rounded-full hover:bg-neutral-800 shadow-xl flex items-center gap-2.5 text-sm"
            >
              <Instagram className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Start Shopping</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2.5 sm:px-7 sm:py-3.5 border-2 border-dark text-dark font-bold rounded-full hover:bg-dark hover:text-dark text-sm"
            >
              Contact Us
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-dark/80"
          >
            {[
              { icon: <Award className="w-4 h-4" />, text: "Premium Quality" },
              { icon: <Package className="w-4 h-4" />, text: "Secure Delivery" },
              { icon: <Users className="w-4 h-4" />, text: "10K+ Customers" },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div>{badge.icon}</div>
                <span className="text-xs font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;