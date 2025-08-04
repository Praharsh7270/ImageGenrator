import React from 'react'
import { plans } from '../assets/assets'
import { motion } from 'framer-motion'

const BuyCredit = () => {
  return (
    <motion.div 
      className='min-h-[80vh] text-center pt-14 mb-10 relative'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <motion.div 
        className='absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-3xl blur-3xl'
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 bg-blue-400/40 rounded-full'
          style={{
            top: `${10 + (i * 15)}%`,
            left: `${5 + (i * 15)}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + (i * 0.5),
            repeat: Infinity,
            delay: i * 0.4
          }}
        />
      ))}

      {/* Animated badge */}
      <motion.button 
        className='border border-gray-400 px-10 py-2 rounded-full mb-6 relative overflow-hidden z-10'
        initial={{ opacity: 0, y: -30, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        whileHover={{ 
          scale: 1.05,
          borderColor: "#3b82f6",
          color: "#3b82f6",
          boxShadow: "0 5px 15px rgba(59, 130, 246, 0.2)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Shimmer effect */}
        <motion.div 
          className='absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent'
          animate={{ x: ["-100%", "100%"] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 3 
          }}
        />
        <span className='relative z-10'>Our Plans</span>
      </motion.button>

      {/* Animated title */}
      <motion.h1 
        className='text-center text-3xl font-medium mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent relative z-10'
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
        whileHover={{ 
          scale: 1.02,
          textShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
        }}
      >
        Choose The Perfect Plan 
      </motion.h1>

      {/* Animated plans grid */}
      <motion.div
        className='relative z-10'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {plans.map((plan, index) => (
          <motion.div 
            key={index} 
            className='max-w-sm mx-auto mb-6 p-6 bg-white rounded-lg shadow-md relative overflow-hidden group cursor-pointer'
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6 + (index * 0.1),
              type: "spring",
              bounce: 0.4
            }}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              borderColor: "#3b82f6"
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Animated background gradient */}
            <motion.div 
              className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100'
              transition={{ duration: 0.3 }}
            />

            {/* Floating sparkles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100'
                style={{
                  top: `${20 + i * 30}%`,
                  right: `${10 + i * 10}px`
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}

            {/* Plan name */}
            <motion.h2 
              className='text-xl font-semibold mb-4 relative z-10'
              whileHover={{ 
                color: "#3b82f6",
                scale: 1.05
              }}
              transition={{ type: "spring", bounce: 0.6 }}
            >
              {plan.name}
            </motion.h2>

            {/* Plan price */}
            <motion.p 
              className='text-gray-600 mb-4 text-2xl font-bold relative z-10'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + (index * 0.1) }}
              whileHover={{ 
                color: "#1f2937",
                scale: 1.1
              }}
            >
              <span className='text-3xl text-blue-600'>${plan.price}</span>
            </motion.p>

            {/* Plan credits */}
            <motion.p 
              className='text-gray-600 mb-4 relative z-10'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + (index * 0.1) }}
              whileHover={{ color: "#374151" }}
            >
              <span className='font-medium text-purple-600'>{plan.credits}</span> Credits
            </motion.p>

            {/* Plan description */}
            <motion.p 
              className='text-gray-600 mb-6 relative z-10'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + (index * 0.1) }}
              whileHover={{ color: "#374151" }}
            >
              {plan.desc}
            </motion.p>

            {/* Animated purchase button */}
            <motion.button
              className='w-full bg-blue-600 text-white py-3 rounded-full font-medium relative overflow-hidden'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + (index * 0.1) }}
              whileHover={{ 
                backgroundColor: "#1d4ed8",
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button shimmer */}
              <motion.div 
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                animate={{ x: ["-100%", "100%"] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 4 + index 
                }}
              />
              <span className='relative z-10'>Choose Plan</span>
            </motion.button>

            {/* Popular badge for middle plan */}
            {index === 1 && (
              <motion.div
                className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium'
                initial={{ opacity: 0, scale: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  boxShadow: [
                    "0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 20px rgba(59, 130, 246, 0.6)"
                  ]
                }}
                transition={{ 
                  delay: 1.2, 
                  type: "spring", 
                  bounce: 0.6,
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                }}
              >
                Most Popular
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default BuyCredit