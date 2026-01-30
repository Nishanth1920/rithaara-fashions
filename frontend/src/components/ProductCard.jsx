import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="product-card"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
          loading="lazy"
        />
        <div className="image-overlay flex items-center justify-center">
          <a
            href="https://www.instagram.com/rithaara_fashions/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center space-x-2"
          >
            <Instagram className="w-4 h-4" />
            <span>View on Instagram</span>
          </a>
        </div>
        {product.badge && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            {product.badge}
          </div>
        )}
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-display text-lg font-semibold text-accent-900 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-accent-600 text-sm uppercase tracking-wide">
          {product.category}
        </p>
        {product.price && (
          <p className="text-primary-600 font-semibold text-lg">
            ₹{product.price}
          </p>
        )}
        {product.description && (
          <p className="text-accent-600 text-sm line-clamp-2">
            {product.description}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default ProductCard
