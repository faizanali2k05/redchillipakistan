import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const phoneNumber = '923001234567'
  const message = 'Hi Magsi Traders, I am interested in your products.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </motion.a>
  )
}

export default WhatsAppButton
