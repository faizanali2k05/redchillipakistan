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
      description: 'We ship wholesale orders to Karachi, Lahore, Islamabad, Peshawar, Multan, and other major cities.',
    },
    {
      icon: FaUsers,
      title: 'Trusted Clients',
      description: 'Serving retailers, restaurants, caterers, and bulk buyers with consistent quality and clear communication.',
    },
    {
      icon: FaAward,
      title: 'Premium Quality',
      description: 'Products are selected for color, aroma, grain quality, and dependable performance in commercial kitchens.',
    },
    {
      icon: FaLeaf,
      title: 'Natural Products',
      description: 'Clean spices and pantry staples sourced from trusted suppliers and prepared for repeat orders.',
    },
  ]

  const features = [
    {
      title: 'Wide Product Range',
      description: 'From red chili and turmeric to rice, lentils, chickpeas, and tea, the catalog covers daily trade demand.',
      image: 'https://images.pexels.com/photos/33396802/pexels-photo-33396802.jpeg?auto=compress&cs=tinysrgb&w=1000',
    },
    {
      title: 'Wholesale Prices',
      description: 'Competitive bulk rates for shop owners, restaurants, and repeat supply customers with flexible quantities.',
      image: 'https://images.pexels.com/photos/12624838/pexels-photo-12624838.jpeg?auto=compress&cs=tinysrgb&w=1000',
    },
    {
      title: 'Fast Delivery',
      description: 'Reliable dispatch and order updates so stock arrives when your business needs it.',
      image: 'https://images.pexels.com/photos/21838827/pexels-photo-21838827.jpeg?auto=compress&cs=tinysrgb&w=1000',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#fffaf2] border-b border-orange-100">
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
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-spice-lg transition-all duration-300 border border-stone-100"
                >
                  <div className="w-14 h-14 bg-[#18120f] rounded-lg flex items-center justify-center mb-4">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-spice-lg transition-all duration-300 bg-white border border-stone-100"
              >
                <div className="overflow-hidden h-56">
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
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/15157959/pexels-photo-15157959.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Bags filled with spices in a market"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#18120f]/78"></div>
        <div className="relative max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Restock With Confidence?
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Browse the catalog and request a wholesale quote for your next order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="px-8 py-4 bg-white text-gray-950 font-bold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Browse Products
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
