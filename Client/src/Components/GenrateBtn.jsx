import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'  
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext.jsx'
import { useNavigate } from 'react-router-dom'

const GenrateBtn = () => {

  const {user, setShowLogin} = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if(user){ 
      navigate("/result");
    }
    else{
      setShowLogin(true);
    }
  }
  return (
    <motion.div 
      className='pb-16 text-center relative overflow-hidden'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
        {/* Animated background elements */}
        <motion.div 
          className='absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-3xl pointer-events-none'
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-blue-400/40 rounded-full pointer-events-none'
            style={{
              top: `${20 + (i * 10)}%`,
              left: `${10 + (i * 10)}%`,
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

        {/* Animated heading with magical effects */}
        <motion.h1 
          className='text-2xl font-bold md:text-3xl lg:text-4xl mt-4 py-6 md:py-16 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent relative z-10'
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            type: "spring",
            bounce: 0.4,
            backgroundPosition: {
              duration: 3,
              repeat: Infinity
            }
          }}
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 30px rgba(59, 130, 246, 0.6)"
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
        >
          See the Magic Happen
        </motion.h1>

        {/* Epic animated button */}
        <motion.div
          className='relative inline-block z-20'
          initial={{ opacity: 0, y: 50, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1, 
            delay: 0.8,
            type: "spring",
            bounce: 0.6
          }}
          viewport={{ once: true }}
        >
          {/* Glowing ring effect */}
          <motion.div 
            className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 blur-xl pointer-events-none'
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />

          {/* Main button */}
          <motion.button 
            className='relative inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl shadow-2xl border-2 border-white/20 overflow-hidden cursor-pointer z-30'
            onClick={onClickHandler}
            style={{ pointerEvents: 'auto' }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 25px 50px rgba(59, 130, 246, 0.5)",
              borderColor: "rgba(255,255,255,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 10px 30px rgba(59, 130, 246, 0.3)",
                "0 20px 40px rgba(139, 92, 246, 0.4)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          >
            {/* Animated background shimmer */}
            <motion.div 
              className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none'
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />

            {/* Button text */}
            <motion.span
              className='relative z-10'
              whileHover={{ color: "#f0f9ff" }}
            >
              Generate Images
            </motion.span>

            {/* Animated star icon */}
            <motion.img 
              src={assets.star_group} 
              alt="" 
              className='w-8 h-8 relative z-10' 
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: {
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "linear"
                },
                scale: {
                  duration: 2,
                  repeat: Infinity
                }
              }}
              whileHover={{ scale: 1.3 }}
            />

            {/* Sparkle effects */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className='absolute w-1 h-1 bg-white rounded-full pointer-events-none'
                style={{
                  top: `${25 + (i * 15)}%`,
                  right: `${10 + (i * 20)}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.button>

          {/* Ripple effect on hover */}
          <motion.div 
            className='absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 pointer-events-none'
            whileHover={{
              scale: [1, 1.5],
              opacity: [0.5, 0]
            }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Magic wand effect */}
        <motion.div
          className='absolute top-1/2 left-1/4 w-8 h-1 bg-gradient-to-r from-yellow-400 to-transparent rotate-45 pointer-events-none'
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 1.5],
            x: [0, 100],
            y: [0, -50]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
        />
    </motion.div>
  )
}

export default GenrateBtn