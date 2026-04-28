import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = [
    'All',
    'Spices',
    'Commodities',
    'Beverages',
  ]

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-[#fffaf2] pb-16 pt-20">
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/7164535/pexels-photo-7164535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Spices displayed in sacks at a market"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#18120f]/76"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-bold uppercase tracking-wide text-orange-200 mb-3">
              Wholesale Catalog
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4">
              Our Products
            </h1>
            <p className="text-lg sm:text-xl text-orange-50">
              Premium spices and commodities sourced for shops, restaurants, caterers, and bulk buyers across Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        {/* Header */}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12 bg-white rounded-lg shadow-md border border-stone-100 p-3"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gray-950 text-white shadow-spice-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-spice-500 hover:text-spice-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-12"
          >
            <p className="text-lg text-gray-600">
              No products found in this category.
            </p>
          </motion.div>
        )}

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-16 border-t border-gray-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_.8fr] gap-8 bg-white rounded-lg p-6 sm:p-8 shadow-md border border-stone-100 overflow-hidden">
            <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Wholesale Ordering
            </h2>
            <p className="text-gray-600 mb-4">
              We specialize in wholesale supply of premium spices and commodities. All our
              products are sourced from the finest suppliers and are guaranteed for quality.
            </p>
            <p className="text-gray-600">
              For bulk orders or special inquiries, please contact our sales team directly.
            </p>
            </div>
            <img
              src="https://images.pexels.com/photos/33396802/pexels-photo-33396802.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Assortment of spices in market sacks"
              className="w-full h-64 lg:h-full object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Products
