import { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { menProducts, categories } from '../data/products'

const MenCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = selectedCategory === 'All'
    ? menProducts
    : menProducts.filter(product => product.category === selectedCategory)

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
              Men's Collection
            </h1>
            <p className="text-white/90 text-lg">
              Discover sophisticated styles and timeless elegance crafted for the modern man
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Filter Section */}
      <section className="section-container">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl font-semibold text-accent-900">
                  Categories
                </h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div className={`space-y-2 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {categories.men.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white font-medium'
                        : 'bg-primary-50 text-accent-700 hover:bg-primary-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Info Card */}
              <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
                <h3 className="font-display text-lg font-semibold mb-2 text-accent-900">
                  Need Help?
                </h3>
                <p className="text-accent-600 text-sm mb-4">
                  Our team is here to assist you with your fashion needs
                </p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-accent-900">
                  {selectedCategory}
                </h2>
                <p className="text-accent-600 mt-1">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-accent-600 text-lg">
                  No products found in this category
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-primary-50 rounded-2xl mx-4 sm:mx-6 lg:mx-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading-tertiary mb-4">
            Love What You See?
          </h2>
          <p className="text-accent-600 mb-6">
            Visit our Instagram to see more products and place your order
          </p>
          <a
            href="https://www.instagram.com/rithaara_fashions/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Shop on Instagram</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default MenCollection
