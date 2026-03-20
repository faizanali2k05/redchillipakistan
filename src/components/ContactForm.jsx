import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-500 rounded-lg p-4 flex items-center gap-3"
        >
          <FaCheckCircle className="text-green-500 text-xl" />
          <div>
            <p className="font-bold text-green-900">Message Sent Successfully!</p>
            <p className="text-green-700 text-sm">We'll get back to you soon.</p>
          </div>
        </motion.div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-spice-500 focus:border-transparent transition text-sm sm:text-base"
          placeholder="Enter your full name"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-spice-500 focus:border-transparent transition text-sm sm:text-base"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-spice-500 focus:border-transparent transition text-sm sm:text-base"
          placeholder="+92 300 1234567"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-spice-500 focus:border-transparent transition resize-none text-sm sm:text-base"
          placeholder="Type your message here..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-2 sm:py-3 px-6 bg-gradient-spice text-white font-bold rounded-lg hover:shadow-spice-lg transition-all duration-300 text-sm sm:text-base ${
          loading ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </motion.button>
    </form>
  )
}

export default ContactForm
