import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Fotter = () => {
  return (
    <motion.div 
      className='flex items-center justify-between gap-4 py-8 mt-20 relative overflow-hidden border-t border-gray-100'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
        {/* Animated background gradient */}
        <motion.div 
          className='absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-blue-50/30'
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "linear" 
          }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-blue-400/30 rounded-full'
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 20)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.4
            }}
          />
        ))}

        {/* Animated logo */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            rotate: {
              repeat: 2,
              repeatType: "reverse",
              duration: 0.3
            }
          }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.05,
            rotate: [0, -2]
          }}
          className='relative z-10'
        >
          <motion.img 
            src={assets.logo} 
            alt="" 
            width={150}
            animate={{ 
              filter: [
                "drop-shadow(0 0 0px rgba(59, 130, 246, 0))",
                "drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))",
                "drop-shadow(0 0 0px rgba(59, 130, 246, 0))"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Animated copyright text */}
        <motion.p 
          className='text-sm text-gray-500 relative z-10'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ 
            color: "#3b82f6",
            scale: 1.05
          }}
          animate={{
            opacity: [0.7, 1, 0.7]
          }}
        >
          © 2025 ImageGenrator. All rights reserved.
        </motion.p>

        {/* Decorative elements */}
        <motion.div 
          className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400'
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ 
            duration: 1.5, 
            delay: 0.6,
            opacity: {
              duration: 2,
              repeat: Infinity
            }
          }}
          viewport={{ once: true }}
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
        />
    </motion.div>
  )
}

export default Fotter