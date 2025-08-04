import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div 
      className='flex flex-col items-center justify-center my-32' 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }} 
      viewport={{ once: true }}
    >
        {/* Animated heading */}
        <motion.h1 
          className='text-3xl sm:text-4xl font-semibold mb-2'
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          How it Works
        </motion.h1>

        {/* Animated description */}
        <motion.p 
          className='text-lg text-gray-600 mb-8'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Transform your text into stunning images in just a few simple steps.
        </motion.p>

        <div className='space-y-6 w-full max-w-4xl'> 
            {stepsData.map((item,index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + (index * 0.2),
                    type: "spring",
                    bounce: 0.4
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    y: -5
                  }}
                  className='relative'
                >
                    {/* Step number badge */}
                    <motion.div 
                      className='absolute -left-4 -top-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10'
                      initial={{ scale: 0, rotate: 180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
                      viewport={{ once: true }}
                      whileHover={{ rotate: 360 }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Main step card */}
                    <motion.div 
                      className='flex items-center gap-6 p-8 px-10 bg-white/80 backdrop-blur-sm shadow-xl border border-gray-100 rounded-2xl cursor-pointer relative overflow-hidden'
                      whileHover={{ backgroundColor: "rgba(255,255,255,0.95)" }}
                    >
                        {/* Animated background gradient */}
                        <motion.div 
                          className='absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-0'
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />

                        {/* Icon container */}
                        <motion.div 
                          className='relative z-10'
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", bounce: 0.6 }}
                        >
                          <img src={item.icon} alt="" className='w-16 h-16' />
                        </motion.div>

                        {/* Content */}
                        <div className='relative z-10 flex-1'>
                          <motion.h2 
                            className='text-2xl font-semibold mb-3 text-gray-800'
                            whileHover={{ color: "#3b82f6" }}
                          >
                            {item.title}
                          </motion.h2>
                          <motion.p 
                            className='text-gray-600 text-lg leading-relaxed'
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {item.description}
                          </motion.p>
                        </div>

                        {/* Decorative arrow for flow */}
                        {index < stepsData.length - 1 && (
                          <motion.div 
                            className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-blue-400'
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            animate={{ y: [0, 5, 0] }}
                            transition={{ 
                              opacity: { delay: 1.2 + (index * 0.2) },
                              y: { duration: 2, repeat: Infinity }
                            }}
                            viewport={{ once: true }}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 16l-6-6h12l-6 6z"/>
                            </svg>
                          </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    </motion.div>
  )
}

export default Steps