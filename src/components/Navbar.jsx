import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-lg backdrop-blur-xl' : 'bg-white/90 backdrop-blur-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/logo.svg"
              alt="Magsi Traders logo"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg shadow-spice-md"
            />
            <span className="font-bold text-base sm:text-xl text-gray-950 whitespace-nowrap">
              Magsi Traders
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm lg:text-base font-semibold transition-colors duration-200 ${
                    isActive ? 'text-deepRed' : 'text-gray-700 hover:text-spice-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            to="/contact"
            className="hidden md:block px-4 lg:px-6 py-2 bg-gray-950 text-white rounded-lg font-semibold hover:bg-deepRed hover:shadow-spice-lg transition-all duration-300 text-sm lg:text-base"
          >
            Request Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-gray-200"
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block px-4 py-2 text-gray-700 hover:bg-spice-50 hover:text-spice-600 font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-4 py-2 m-2 bg-gray-950 text-white rounded-lg font-semibold text-center hover:shadow-spice-lg transition-all"
              onClick={() => setIsOpen(false)}
            >
              Request Quote
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
