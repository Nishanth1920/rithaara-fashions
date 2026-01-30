import { motion } from 'framer-motion'
import { Award, Heart, Sparkles, Users, TrendingUp, Shield } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "We source the finest fabrics and materials to ensure every piece meets our high standards of excellence."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer Satisfaction",
      description: "Your happiness is our priority. We go above and beyond to ensure you love every purchase."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Exclusive Designs",
      description: "Our in-house designers create unique pieces that help you stand out and express your individuality."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Fashion Forward",
      description: "We stay ahead of trends while respecting timeless classics, offering the perfect blend of both."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Focused",
      description: "Building lasting relationships with our customers and supporting local artisans and craftspeople."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Transparency",
      description: "Honest pricing, genuine products, and transparent communication in every interaction."
    }
  ]

  const milestones = [
    { year: "2020", achievement: "Founded Rithaara Fashions" },
    { year: "2021", achievement: "Launched Online Presence" },
    { year: "2022", achievement: "10,000+ Happy Customers" },
    { year: "2023", achievement: "Expanded Product Range" },
    { year: "2024", achievement: "Award-Winning Service" }
  ]

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-accent-900 text-white py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-primary text-white mb-6">
              Our Story
            </h1>
            <p className="text-white/95 text-lg leading-relaxed">
              Rithaara Fashions was born from a passion for creating beautiful, quality clothing 
              that empowers individuals to express their unique style. We believe that fashion 
              is more than just clothing—it's a form of self-expression, confidence, and art.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Mission & Vision */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 font-semibold text-sm uppercase tracking-wide rounded-full">
              Our Mission
            </div>
            <h2 className="heading-tertiary">
              Empowering Through Fashion
            </h2>
            <p className="text-accent-600 text-lg leading-relaxed">
              Our mission is to provide exceptional fashion that combines quality, style, and 
              affordability. We strive to make premium clothing accessible to everyone while 
              maintaining the highest standards of craftsmanship and design.
            </p>
            <p className="text-accent-600 leading-relaxed">
              We are committed to sustainable practices, supporting local artisans, and creating 
              a positive impact in the fashion industry. Every piece we create is a testament to 
              our dedication to excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-block px-4 py-2 bg-accent-100 text-accent-700 font-semibold text-sm uppercase tracking-wide rounded-full">
              Our Vision
            </div>
            <h2 className="heading-tertiary">
              Leading Fashion Forward
            </h2>
            <p className="text-accent-600 text-lg leading-relaxed">
              We envision Rithaara Fashions as a leading name in the fashion industry, recognized 
              for innovation, quality, and customer satisfaction. Our goal is to expand our reach 
              while staying true to our core values.
            </p>
            <p className="text-accent-600 leading-relaxed">
              Through continuous improvement and adaptation to changing trends, we aim to be your 
              trusted fashion partner for life—offering timeless pieces that transcend seasons and 
              trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-container bg-gradient-to-b from-white to-primary-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Our Core Values
          </h2>
          <p className="text-accent-600 text-lg max-w-2xl mx-auto">
            The principles that guide everything we do at Rithaara Fashions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full text-primary-600 mb-6 group-hover:bg-primary-200 transition-colors">
                {value.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-accent-900">
                {value.title}
              </h3>
              <p className="text-accent-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Our Journey
          </h2>
          <p className="text-accent-600 text-lg max-w-2xl mx-auto">
            Key milestones in our growth and evolution
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center mb-8 last:mb-0"
            >
              <div className="flex-1 text-right pr-8">
                {index % 2 === 0 && (
                  <div>
                    <h3 className="font-display text-3xl font-bold text-primary-600 mb-2">
                      {milestone.year}
                    </h3>
                    <p className="text-accent-700 font-medium">
                      {milestone.achievement}
                    </p>
                  </div>
                )}
              </div>
              <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-primary-200 flex-shrink-0"></div>
              <div className="flex-1 pl-8">
                {index % 2 !== 0 && (
                  <div>
                    <h3 className="font-display text-3xl font-bold text-primary-600 mb-2">
                      {milestone.year}
                    </h3>
                    <p className="text-accent-700 font-medium">
                      {milestone.achievement}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-container bg-gradient-to-br from-accent-900 to-accent-800 text-white rounded-2xl mx-4 sm:mx-6 lg:mx-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-secondary text-white mb-6">
            Why Choose Rithaara Fashions?
          </h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white/90 text-lg">
                <strong className="text-white">Quality Assurance:</strong> Every product undergoes 
                rigorous quality checks to ensure you receive only the best.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white/90 text-lg">
                <strong className="text-white">Unique Designs:</strong> Our exclusive collections 
                feature pieces you won't find anywhere else.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white/90 text-lg">
                <strong className="text-white">Customer Support:</strong> Dedicated team ready to 
                assist you with styling advice and order queries.
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-white/90 text-lg">
                <strong className="text-white">Value for Money:</strong> Premium quality at 
                competitive prices, ensuring great value for every purchase.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading-tertiary mb-4">
            Ready to Experience Rithaara?
          </h2>
          <p className="text-accent-600 mb-8">
            Join our growing community of fashion enthusiasts and discover your perfect style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/rithaara_fashions/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Explore Collections
            </a>
            <a
              href="/contact"
              className="btn-outline"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
