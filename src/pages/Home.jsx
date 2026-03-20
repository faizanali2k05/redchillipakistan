import React from 'react'
import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import { Link } from 'react-router-dom'
import { FaTruck, FaUsers, FaAward, FaLeaf } from 'react-icons/fa'

const Home = () => {
  const highlights = [
    {
      icon: FaTruck,
      title: 'Nationwide Delivery',
      description: 'We deliver to all corners of Pakistan - Karachi, Lahore, Islamabad, Peshawar, Multan, and more with reliable and fast shipping.',
    },
    {
      icon: FaUsers,
      title: 'Trusted Clients',
      description: 'Serving over 1,000+ satisfied clients since 2010 with consistent quality and exceptional service.',
    },
    {
      icon: FaAward,
      title: 'Premium Quality',
      description: 'High-quality products sourced directly from the finest suppliers across Pakistan and certified.',
    },
    {
      icon: FaLeaf,
      title: 'Natural Products',
      description: 'Pure, natural, and organic spices & commodities with no additives or preservatives.',
    },
  ]

  const features = [
    {
      title: 'Wide Product Range',
      description: 'From traditional spices to essential commodities, we have everything you need for your kitchen or wholesale needs. 15+ premium products available.',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23c97c37%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2245%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dy=%22.3em%22 font-weight=%22bold%22 font-family=%22Arial%22%3E15+ Premium%3C/text%3E%3Ctext x=%2250%25%22 y=%2255%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dy=%22.3em%22 font-weight=%22bold%22 font-family=%22Arial%22%3EProducts%3C/text%3E%3C/svg%3E',
    },
    {
      title: 'Wholesale Prices',
      description: 'Get competitive wholesale prices for bulk orders. Special discounts on orders above 50kg. Perfect for retailers and restaurants.',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23ff7b42%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2245%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dy=%22.3em%22 font-weight=%22bold%22 font-family=%22Arial%22%3EBest%3C/text%3E%3Ctext x=%2250%25%22 y=%2255%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dy=%22.3em%22 font-weight=%22bold%22 font-family=%22Arial%22%3EPrices%3C/text%3E%3C/svg%3E',
    },
    {
      title: 'Fast Delivery',
      description: 'Quick and reliable delivery to your doorstep. Same-day delivery in Karachi. 2-3 business days to other cities nationwide.',
      image: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23d63031%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2245%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dy=%22.3em%22 font-weight=%22bold%22 font-family=%22Arial%22%3E2-3 Days%3C/text%3E%3Ctext x=%2250%25%22 y=%2255%25%22 font-size=%2224%22 fill=%22white%22 text-anchor=%22middle%22 dy=%22.3em%22 font-weight=%22bold%22 font-family=%22Arial%22%3EDelivery%3C/text%3E%3C/svg%3E',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-gray-200">
        <div className="px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: '15+', label: 'Premium Products' },
              { number: '1000+', label: 'Happy Customers' },
              { number: '100%', label: 'Quality Assured' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deepRed mb-2">
                  {stat.number}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Magsi Traders?
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Your trusted partner for premium spices and commodities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-spice-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-spice rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Complete solutions for your trading needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-spice-lg transition-all duration-300"
              >
                <div className="overflow-hidden h-48">
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-spice">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Browse our premium products and place your order today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="px-8 py-4 bg-white text-spice-600 font-bold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Shop Now
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-spice-600 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
