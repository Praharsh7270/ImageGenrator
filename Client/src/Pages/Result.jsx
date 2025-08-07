import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react';
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext.jsx'


const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1); // Default image
  const [isLoading, setIsLoading] = useState(false);

  const {genrateImage} = useContext(AppContext);

  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true);

    if (input){
      const generatedImage = await genrateImage(input);
      if (generatedImage) {
        setImage(generatedImage);
      }
    }
    setIsLoading(false);
  }

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className='flex flex-col items-center justify-center gap-8 mt-10 relative'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
    >
      {/* Background animation */}
      <motion.div 
        className='absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-3xl blur-3xl'
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Image display section */}
      <motion.div
        className='relative z-10'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
      >
        <motion.div 
          className='relative group'
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", bounce: 0.6 }}
        >
          {/* Glowing border effect */}
          <motion.div 
            className='absolute -inset-2 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-xl blur-lg'
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.02, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <motion.img 
            src={image} 
            alt="" 
            className='max-w-sm rounded relative z-10 shadow-2xl border-2 border-white/50'
            initial={{ opacity: 0, rotateY: 45 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ 
              delay: 0.5, 
              duration: 1,
              rotateY: {
                repeat: 2,
                repeatType: "reverse",
                duration: 0.3
              }
            }}
            whileHover={{ 
              rotateY: [0, -5],
              boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
            }}
          />
          
          {/* Loading progress bar */}
          <motion.span 
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b transition-all duration-300 ${isLoading ? "w-full transition-all duration-[10s]": "w-0"}`}
            initial={{ width: 0 }}
            animate={{ width: isLoading ? "100%" : "0%" }}
            transition={{ duration: isLoading ? 10 : 0.3 }}
          />

          {/* Floating sparkles during loading */}
          {isLoading && [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-yellow-400 rounded-full'
              style={{
                top: `${10 + (i * 15)}%`,
                left: `${-10 + (i * 20)}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>

        {/* Loading text with typing animation */}
        <motion.p 
          className={`text-center mt-4 text-lg font-medium text-blue-600 ${!isLoading ? "hidden" : ""}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isLoading ? 1 : 0, y: isLoading ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Creating your masterpiece
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
          >
            ...
          </motion.span>
        </motion.p>
      </motion.div>

      {/* Input section with animation */}
      {!isLoading && image === assets.sample_img_1 &&
        <motion.div 
          className='flex w-full max-w-xl bg-neutral-500 rounded-full relative overflow-hidden z-10'
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6, type: "spring", bounce: 0.4 }}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}
        >
          {/* Shimmer effect */}
          <motion.div 
            className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent'
            animate={{ x: ["-100%", "100%"] }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatDelay: 2 
            }}
          />
          
          <motion.input 
            onChange={e => setInput(e.target.value)} 
            value={input} 
            type="text" 
            placeholder='Describe what you want to generate' 
            className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 text-white placeholder-gray-300 relative z-10' 
            whileFocus={{ scale: 1.01 }}
            transition={{ type: "spring", bounce: 0.6 }}
          />
          
          <motion.button 
            type='submit' 
            className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white relative overflow-hidden'
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#1f2937",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.4 }}
          >
            {/* Button shimmer */}
            <motion.div 
              className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent'
              animate={{ x: ["-100%", "100%"] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 3 
              }}
            />
            <span className='relative z-10'>Generate</span>
          </motion.button>
        </motion.div>
      }

      {/* Action buttons with staggered animation */}
      {!isLoading && image !== assets.sample_img_1 &&
        <motion.div 
          className='flex gap-4 flex-wrap justify-center text-sm mt-10 z-10'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.button 
            className='bg-transparent border-2 border-zinc-300 px-8 py-3 rounded-full cursor-pointer text-black relative overflow-hidden'
            onClick={() => {setImage(assets.sample_img_1); setInput("");}}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              borderColor: "#a1a1aa",
              backgroundColor: "#f9fafb",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button glow effect */}
            <motion.div 
              className='absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full opacity-0'
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className='relative z-10'>Generate Another</span>
          </motion.button>

          <motion.a 
            href={image} 
            download 
            className='bg-zinc-900 px-8 py-3 rounded-full cursor-pointer text-white relative overflow-hidden inline-block'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#374151",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Download shimmer effect */}
            <motion.div 
              className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent'
              animate={{ x: ["-100%", "100%"] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                repeatDelay: 4 
              }}
            />
            <span className='relative z-10'>Download</span>
          </motion.a>
        </motion.div>
      }
    </motion.form>

  )
}

export default Result