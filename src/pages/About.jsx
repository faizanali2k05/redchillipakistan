import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaHandshake, FaGlobe, FaStar } from 'react-icons/fa'

const About = () => {
  const whyChooseUs = [
    {
      icon: FaCheckCircle,
      title: 'Quality Assurance',
      description: 'Every product is carefully selected, tested, and verified for purity and quality before reaching you.',
    },
    {
      icon: FaHandshake,
      title: 'Strong Relationships',
      description: 'We believe in building long-term relationships with our clients and partners through reliability.',
    },
    {
      icon: FaGlobe,
      title: 'Nationwide Service',
      description: 'Serving customers across all of Pakistan including Karachi, Lahore, Islamabad with reliable delivery.',
    },
    {
      icon: FaStar,
      title: 'Best Pricing',
      description: 'Competitive wholesale prices without compromising on quality. Special discounts on bulk orders.',
    },
  ]

  const stats = [
    { number: '1000+', label: 'Satisfied Clients' },
    { number: '15+', label: 'Premium Products' },
    { number: '10+', label: 'Years Experience' },
    { number: '100%', label: 'Quality Guaranteed' },
  ]

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-spice text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About Magsi Traders
            </h1>
            <p className="text-xl text-orange-50 max-w-3xl mx-auto">
              Your trusted partner in premium spices and commodities since inception
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Magsi Traders is a leading wholesale trading company specializing in premium
                spices and commodities across Pakistan. We have built our reputation on quality,
                reliability, and customer satisfaction.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                With over a decade of experience, we understand the unique needs of our clients
                and strive to provide the best products at competitive prices.
              </p>
              <p className="text-gray-600 text-lg">
                From traditional spices to essential commodities, we source everything from the
                finest suppliers to ensure our customers receive only the best.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22500%22 height=%22400%22%3E%3Crect fill=%22%23c97c37%22 width=%22500%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2240%22 fill=%22white%22 text-anchor=%22middle%22 dy=%22.3em%22 font-weight=%22bold%22%3EMagsi Traders%3C/text%3E%3C/svg%3E"
                alt="Magsi Traders"
                className="w-full rounded-xl shadow-spice-lg"
              />
              <div className="absolute inset-0 bg-gradient-spice opacity-20 rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-spice-600 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600">
              We're committed to excellence in every aspect
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-spice-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-spice rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-gradient-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-orange-300">Integrity</h3>
                <p className="text-gray-300">
                  We conduct business with honesty and transparency.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-orange-300">Excellence</h3>
                <p className="text-gray-300">
                  We strive for the highest quality in everything we do.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-orange-300">Trust</h3>
                <p className="text-gray-300">
                  Building lasting relationships with our valued clients.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
