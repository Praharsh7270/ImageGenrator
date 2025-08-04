import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Descrip = () => {
  return (
    <motion.div 
      className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
        {/* Animated heading */}
        <motion.h1 
          className='text-3xl sm:text-4xl font-semibold text-center mb-4'
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.02,
            color: "#3b82f6"
          }}
        >
          Create Stunning Images from Text
        </motion.h1>

        {/* Animated description */}
        <motion.p 
          className='text-gray-600 mb-12 text-center max-w-2xl text-lg'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Transform your ideas into visual masterpieces with our AI-powered image generator.
        </motion.p>

        {/* Main content container */}
        <motion.div 
          className='flex flex-col lg:flex-row gap-12 items-center justify-center w-full max-w-6xl'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
            {/* Animated image */}
            <motion.div
              className='relative'
              initial={{ opacity: 0, x: -100, rotateY: 45 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
              }}
            >
              {/* Decorative elements */}
              <motion.div 
                className='absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl'
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <motion.img 
                src={assets.sample_img_1} 
                alt="" 
                className='relative w-80 xl:w-96 rounded-2xl shadow-2xl border-4 border-white'
                whileHover={{ rotate: [0, -2] }}
                transition={{ 
                  duration: 0.6,
                  rotate: {
                    repeat: 2,
                    repeatType: "reverse",
                    duration: 0.3
                  }
                }}
              />

              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className='absolute w-2 h-2 bg-blue-400 rounded-full'
                  style={{
                    top: `${20 + i * 30}%`,
                    right: `-${10 + i * 5}px`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </motion.div>

            {/* Animated text content */}
            <motion.div 
              className='flex-1 max-w-2xl'
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              viewport={{ once: true }}
            >
                <motion.h2 
                  className='text-3xl xl:text-4xl font-semibold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  Introduction to AI powered Text to Image
                </motion.h2>

                {/* First paragraph */}
                <motion.p 
                  className='text-gray-600 mb-6 text-lg leading-relaxed'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  viewport={{ once: true }}
                  whileHover={{ color: "#374151" }}
                >
                  Discover how our AI technology can turn your text prompts into beautiful images. Simply describe what you want to see, and our advanced machine learning algorithms will create stunning visuals that match your imagination. From realistic portraits to abstract art, the possibilities are endless.
                </motion.p>

                {/* Second paragraph */}
                <motion.p 
                  className='text-gray-600 mb-8 text-lg leading-relaxed'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  viewport={{ once: true }}
                  whileHover={{ color: "#374151" }}
                >
                  Our platform uses cutting-edge artificial intelligence to understand your text descriptions and generate high-quality images in seconds. Whether you're a designer, content creator, or just someone with creative ideas, this tool makes it easy to bring your vision to life without any artistic skills required.
                </motion.p>

          
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Descrip