import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Instagram, ShoppingBag, Users } from 'lucide-react';
import ImageCarousel3D from "../components/ImageCarousel3D";

const Home = () => {
  const collections = [
    {
      title: "Men's Collection",
      image: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800",
      description: "Sophisticated styles for the modern gentleman",
      link: "/men"
    },
    {
      title: "Women's Collection",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
      description: "Elegant designs for the contemporary woman",
      link: "/women"
    }
  ];

  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Hand-picked fabrics and meticulous craftsmanship"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Exclusive Designs",
      description: "Unique pieces that stand out from the crowd"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "Dedicated support for a seamless experience"
    }
  ];

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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-20 left-10 w-80 h-80 bg-primary-400 rounded-full blur-md"></div>
          <div className="absolute bottom-20 right-10 w-100 h-100 bg-accent-400 rounded-full blur-md"></div>
        </div>

        <div className="relative section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <div className="inline-block">
              <span className="text-primary-600 uppercase tracking-wide text-lg font-bold mb-4 inline-block">
                Welcome to Rithaara Fashions
              </span>
            </div>

            <h1 className="heading-primary text-4xl font-extrabold leading-tight">
              Where Style Meets
              <span className="block text-gradient mt-2 text-5xl">Elegance</span>
            </h1>

            <p className="text-accent-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Discover our curated collection of premium fashion for men and women.
              Each piece tells a story of craftsmanship, quality, and timeless style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <a
                href="https://www.instagram.com/rithaara_fashions/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2 px-6 py-3 transition-all duration-300 transform hover:scale-105"
              >
                <Instagram className="w-5 h-5" />
                <span>Shop on Instagram</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/contact" className="btn-outline px-6 py-3">
                Get in Touch
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-accent-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-accent-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-8 rounded-lg hover:bg-primary-50 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full text-primary-600 mb-4 group-hover:bg-primary-200 transition-colors shadow-md">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-accent-900">
                {feature.title}
              </h3>
              <p className="text-accent-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Collections Section */}
      <section className="section-container bg-gradient-to-b from-white to-primary-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4 text-3xl font-semibold">
            Explore Our Collections
          </h2>
          <p className="text-accent-600 text-lg max-w-2xl mx-auto">
            Discover fashion that speaks to your unique style and personality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-display text-3xl font-bold text-white mb-2">
                  {collection.title}
                </h3>
                <p className="text-white/90 mb-4">
                  {collection.description}
                </p>
                <Link
                  to={collection.link}
                  className="inline-flex items-center space-x-2 text-white font-semibold group-hover:text-primary-300 transition-colors"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="section-container bg-gradient-to-b from-white to-primary-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4 text-3xl font-semibold">
            Follow Us on Instagram
          </h2>
          <p className="text-accent-600 text-lg">
            Stay updated with our latest collections and style inspiration
          </p>
          <a
            href="https://www.instagram.com/rithaara_fashions/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-600 font-semibold mt-4 hover:text-primary-700 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>@rithaara_fashions</span>
          </a>
        </motion.div>

        <div className="instagram-grid grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((image, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/rithaara_fashions/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative overflow-hidden group aspect-square"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>
      
      {/* 3D Image Carousel Section */}
      <section className="section-container bg-gradient-to-b from-white to-primary-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="heading-secondary mb-4 text-3xl font-semibold">
            Best Selling Collections
          </h2>
          <p className="text-accent-600 text-lg max-w-2xl mx-auto">
            Our most loved styles, chosen by customers just like you
          </p>
          <ImageCarousel3D />
        </motion.div>

      </section>

      {/* CTA Section */}
      {/* <section className="section-container bg-gradient-to-br from-accent-900 via-accent-800 to-accent-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-secondary text-white mb-6 text-3xl font-semibold">
            Ready to Elevate Your Style?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join thousands of satisfied customers who trust Rithaara Fashions for their wardrobe needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/rithaara_fashions/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-accent-900 font-medium tracking-wide uppercase text-sm hover:bg-primary-50 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <Instagram className="w-5 h-5" />
              <span>Start Shopping</span>
            </a>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-white text-white font-medium tracking-wide uppercase text-sm hover:bg-white hover:text-accent-900 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section> */}
    </div>
  );
}

export default Home;
