import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 sm:pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-spice opacity-90"></div>
      <div className="absolute inset-0 bg-texture-spice opacity-10"></div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 sm:top-20 right-5 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-orange-300 rounded-full opacity-20 blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-red-400 rounded-full opacity-15 blur-3xl"
      ></motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
        >
          Magsi Traders
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-2xl lg:text-3xl text-orange-50 mb-3 sm:mb-4 font-light"
        >
          Premium Spices & Commodities Supplier
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-base sm:text-lg lg:text-xl text-orange-100 mb-6 sm:mb-8"
        >
          Nationwide delivery with trusted quality
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <Link
            to="/products"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-spice-600 font-bold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
          >
            View Products
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-spice-600 transition-all duration-300 text-sm sm:text-base"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 sm:mt-16 pt-8 sm:pt-16 border-t border-white border-opacity-20"
        >
          <div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">500+</p>
            <p className="text-orange-100 text-xs sm:text-base">Satisfied Clients</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">20+</p>
            <p className="text-orange-100 text-xs sm:text-base">Product Types</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">100%</p>
            <p className="text-orange-100 text-xs sm:text-base">Quality Assured</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="text-white opacity-70">
          <p className="text-sm mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroSection
