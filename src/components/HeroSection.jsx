import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle, FaTruck } from 'react-icons/fa'

const heroImage =
  'https://images.unsplash.com/photo-1759064716219-ba8c60a7ce07?auto=format&fit=crop&fm=jpg&q=80&w=1800'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 flex items-center">
      <img
        src={heroImage}
        alt="Bowls of dried spices and herbs at a market stall"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#18120f]/95 via-[#18120f]/72 to-[#18120f]/25"></div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.75fr] gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 border border-white/20 text-orange-50 text-xs sm:text-sm font-semibold backdrop-blur"
            >
              <FaCheckCircle className="text-orange-300" />
              Trusted wholesale supply across Pakistan
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
            >
              Magsi Traders
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mt-5 max-w-2xl text-lg sm:text-2xl text-orange-50 leading-relaxed"
            >
              Premium spices, rice, lentils, tea, and commodities sourced for retailers,
              restaurants, and bulk buyers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-gray-950 font-bold rounded-lg hover:bg-orange-50 hover:shadow-2xl transition-all duration-300"
              >
                View Products
                <FaArrowRight size={14} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-deepRed text-white font-bold rounded-lg hover:bg-red-700 hover:shadow-2xl transition-all duration-300"
              >
                Request Wholesale Quote
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="bg-white/[0.92] backdrop-blur rounded-lg p-5 sm:p-6 shadow-2xl border border-white/50"
          >
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.svg" alt="Magsi Traders logo" className="w-12 h-12 rounded-lg" />
              <div>
                <p className="text-xs uppercase tracking-wide font-bold text-spice-600">
                  Supply Snapshot
                </p>
                <h2 className="text-xl font-extrabold text-gray-950">Ready for bulk orders</h2>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { number: '15+', label: 'Products' },
                { number: '1000+', label: 'Clients' },
                { number: '24/7', label: 'Support' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg bg-stone-50 p-3 text-center border border-stone-100">
                  <p className="text-2xl font-extrabold text-deepRed">{stat.number}</p>
                  <p className="text-xs font-semibold text-stone-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-lg bg-[#18120f] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-spice-500 flex items-center justify-center">
                  <FaTruck />
                </div>
                <div>
                  <p className="font-bold">Nationwide delivery</p>
                  <p className="text-sm text-stone-300">Karachi, Lahore, Islamabad, Multan, Peshawar, and more.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
