import React from 'react'
import { motion } from 'framer-motion'
import { FaShoppingCart } from 'react-icons/fa'

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-spice-lg transition-all duration-300 border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-40 sm:h-48 bg-gray-100">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute top-2 right-2 bg-spice-500 text-white px-3 py-1 rounded-full text-xs font-bold">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-5">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <span className="text-lg sm:text-2xl font-bold text-spice-600">
            {product.price}
          </span>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 bg-gradient-spice text-white py-2 px-3 sm:px-4 rounded-lg font-medium hover:shadow-spice-md transition-all duration-300 text-sm sm:text-base"
        >
          <FaShoppingCart /> Add to Cart
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ProductCard
