import React from 'react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      detail: '+92 (300) 1234567 / +92 (21) 35123456',
      link: 'tel:+923001234567',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      detail: 'info@magsitraders.pk | orders@magsitraders.pk',
      link: 'mailto:info@magsitraders.pk',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      detail: 'Karachi, Sindh, Pakistan - Wholesale Market',
      link: '#',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      detail: '+92 300 1234567 (Chat & Order)',
      link: 'https://wa.me/923001234567?text=Hi%20Magsi%20Traders%20-%20I%20want%20to%20place%20an%20order',
    },
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-gradient-spice text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-orange-50">
              We'd love to hear from you. Reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 sm:py-12 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-spice-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-gradient-spice rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {info.title}
                </h3>
                <p className="text-gray-600 hover:text-spice-600 transition-colors">
                  {info.detail}
                </p>
              </motion.a>
            )
          })}
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <ContactForm />
          </motion.div>

          {/* Business Hours & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Business Hours */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-spice rounded-lg flex items-center justify-center">
                  <FaClock className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-4">
                {businessHours.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                    <span className="text-gray-700 font-medium">{item.day}</span>
                    <span className="text-spice-600 font-bold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white p-8 rounded-xl shadow-md overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Location
              </h3>
              <div className="w-full h-64 bg-gradient-spice rounded-lg overflow-hidden flex items-center justify-center text-white">
                <div className="text-center p-4">
                  <p className="text-3xl mb-2">📍</p>
                  <p className="text-2xl font-bold mb-2">Karachi, Pakistan</p>
                  <p className="text-orange-100">Serving nationwide with fast delivery</p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-spice p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
              <p className="text-orange-50 mb-6">
                Need immediate assistance? Call or chat with us now.
              </p>
              <div className="flex gap-3">
                <a
                  href="tel:+923001234567"
                  className="flex-1 py-3 bg-white text-spice-600 font-bold rounded-lg hover:shadow-lg transition-all text-center"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-green-500 text-white font-bold rounded-lg hover:shadow-lg transition-all text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 mt-12 sm:mt-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What is your minimum order quantity?',
                answer: 'We accept wholesale orders starting from 10kg for most products. Bulk orders (50kg+) qualify for special discounts. Contact us for custom quantities.',
              },
              {
                question: 'Do you offer delivery across Pakistan?',
                answer: 'Yes, we deliver nationwide with fast and reliable shipping to all provinces including Karachi, Lahore, Islamabad, Peshawar, Multan, and more.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept bank transfers, online payment (JazzCash, Easypaisa), and cash on delivery for orders within Karachi. Credit facilities available for bulk orders.',
              },
              {
                question: 'How can I track my order?',
                answer: 'Once your order is confirmed, we provide a tracking reference number via SMS or WhatsApp. Updates are sent at each stage of delivery.',
              },
              {
                question: 'Are your products organic?',
                answer: 'Our products are sourced from trusted suppliers and meet quality standards. We can provide certifications for bulk orders.',
              },
              {
                question: 'Do you offer packaging for retail purposes?',
                answer: 'Yes! We offer custom packaging options for retail businesses. Minimum order quantities and pricing differ. Contact our team for details.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-spice-500 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
