import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaWhatsapp } from 'react-icons/fa'

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-spice-lg transition-all duration-300 border border-stone-100 h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-44 sm:h-52 bg-stone-100">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute top-2 right-2 bg-white/90 text-deepRed px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mt-auto mb-3 sm:mb-4">
          <span className="text-lg sm:text-2xl font-bold text-spice-600">
            {product.price}
          </span>
          {product.sourceUrl && (
            <a
              href={product.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-stone-400 hover:text-spice-600"
            >
              {product.sourceName}
              <FaExternalLinkAlt size={10} />
            </a>
          )}
        </div>

        {/* WhatsApp Order Button */}
        <motion.a
          href={`https://wa.me/923001234567?text=${encodeURIComponent(`Hi Magsi Traders, I want a quote for ${product.name}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-2 bg-gray-950 text-white py-2 px-3 sm:px-4 rounded-lg font-semibold hover:bg-deepRed hover:shadow-spice-md transition-all duration-300 text-sm sm:text-base"
        >
          <FaWhatsapp /> Ask for Quote
        </motion.a>
      </div>
    </motion.div>
  )
}

export default ProductCard
