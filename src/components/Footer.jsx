import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', path: '/' },
        { label: 'Products', path: '/products' },
        { label: 'About Us', path: '/about' },
        { label: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Information',
      links: [
        { label: 'Privacy Policy', path: '#' },
        { label: 'Terms & Conditions', path: '#' },
        { label: 'FAQs', path: '#' },
        { label: 'Blog', path: '#' },
      ],
    },
  ]

  const socialLinks = [
    { icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/923001234567' },
  ]

  return (
    <footer className="bg-[#18120f] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo.svg" alt="Magsi Traders logo" className="w-12 h-12 rounded-lg" />
              <span className="font-bold text-xl">Magsi Traders</span>
            </div>
            <p className="text-stone-300 text-sm leading-6">
              Premium spices, rice, lentils, tea, and wholesale commodities delivered across Pakistan.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-bold text-lg mb-4 text-spice-400">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.path}
                    className="text-stone-300 hover:text-spice-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-4 text-spice-400">Contact</h3>
            <div className="space-y-3 text-stone-300 text-sm">
              <a
                href="tel:+923001234567"
                className="flex items-center space-x-2 hover:text-spice-400 transition-colors"
              >
                <FaPhone size={16} />
                <span>+92 300 1234567</span>
              </a>
              <a
                href="mailto:info@magsitraders.pk"
                className="flex items-center space-x-2 hover:text-spice-400 transition-colors"
              >
                <FaEnvelope size={16} />
                <span>info@magsitraders.pk</span>
              </a>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt size={16} />
                <span>Pakistan</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex justify-center items-center flex-wrap gap-4 sm:gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: '#c97c37' }}
                  className="text-stone-300 hover:text-spice-500 transition-colors duration-200"
                  title={social.label}
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8 text-center text-stone-400 text-sm">
          <p>&copy; {currentYear} Magsi Traders. All rights reserved.</p>
          <p className="mt-2">Designed & built with care for quality</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
