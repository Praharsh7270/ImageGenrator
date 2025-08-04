import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
import { useContext } from 'react'
import { AppContext } from '../Context/AppContext.jsx'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const {showLogin , setShowLogin,user} = useContext(AppContext);
  const navigate = useNavigate();
  const onClickHandler = () =>{
    if(user){
      navigate("/result");
    }
    else{
      setShowLogin(true);
     
    }
  }
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
    >
        {/* Floating badge with bounce effect */}
        <motion.div 
          className='flex flex-col justify-center items-center text-center my-20' 
          initial={{ opacity: 0, y: -50, scale: 0.8 }} 
          animate={{ opacity: 1, y: 0, scale: 1 }} 
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            type: "spring",
            bounce: 0.4 
          }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }} 
          viewport={{ once: true }}
        >
            <motion.div 
              className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border-2 border-neutral-200 shadow-lg'
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                borderColor: "#3b82f6" 
              }}
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <p>Best text to image generator</p>
              <motion.img 
                src={assets.star_icon} 
                alt="" 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
        </motion.div>

        {/* Explosive text animation */}
        <motion.h1 
          className='text-4xl max-w-[300px] sm:text-7xl mx-auto mt-10 text-center font-bold' 
          initial={{ opacity: 0, scale: 0.5, rotateX: 90 }} 
          animate={{ opacity: 1, scale: 1, rotateX: 0 }} 
          transition={{ 
            duration: 1.5, 
            delay: 0.6,
            type: "spring",
            bounce: 0.3
          }} 
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }} 
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
          }}
        >
          Turn Text to <motion.span 
            className='text-blue-400'
            animate={{ 
              color: ["#60a5fa", "#1d4ed8"]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            Image
          </motion.span>
        </motion.h1>

        {/* Typewriter effect description */}
        <motion.p 
          className='text-center max-w-xl mx-auto mt-5 text-lg' 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 1.2 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
        >
          Generate stunning images from your text prompts using our advanced AI technology.
        </motion.p>

        {/* Glowing button with pulse effect */}
        <motion.button 
          className='sm:text-lg text-white w-auto mt-8 px-12 py-4 flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto font-semibold shadow-2xl cursor-pointer' 
           onClick={onClickHandler} 
          initial={{ 
            opacity: 0, 
            y: 50, 
            scale: 0.8,
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
          }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            boxShadow: [
              "0 0 20px rgba(59, 130, 246, 0.3)",
              "0 0 40px rgba(59, 130, 246, 0.5)"
            ]
          }} 
          transition={{ 
            duration: 1, 
            delay: 1.5,
            type: "spring",
            bounce: 0.4,
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }} 
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
            background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #3b82f6)",
            backgroundSize: "200% 200%"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Generate Image 
          <motion.img 
            className='h-7 cursor-pointer'
           

            src={assets.star_group} 
            alt="" 
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </motion.button>

        {/* Explosive image gallery */}
        <motion.div 
          className='flex flex-wrap justify-center mt-16 gap-3'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {Array(6).fill("").map((item,index)=>(
            <motion.img 
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2} 
              alt="" 
              key={index} 
              width={70} 
              className='rounded-lg shadow-lg cursor-pointer max-sm:w-10'
              initial={{ 
                opacity: 0, 
                scale: 0, 
                rotate: 180,
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100
              }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0,
                x: 0,
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 0.8, 
                delay: 2.2 + (index * 0.15),
                type: "spring",
                bounce: 0.6,
                y: {
                  duration: 2 + (index * 0.2),
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                },
                rotate: {
                  repeat: 2,
                  repeatType: "reverse",
                  duration: 0.3
                }
              }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.2, 
                rotate: [0, -10],
                zIndex: 10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                filter: "brightness(1.1)"
              }}
            />
          ))}
        </motion.div>

        {/* Floating final text */}
        <motion.p 
          className='text-center max-w-xl mx-auto mt-5 text-gray-600'
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1, 
            y: [0, -5, 0]
          }}
          transition={{ 
            duration: 1, 
            delay: 3.5,
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Explore the possibilities of AI-generated images and bring your ideas to life.
        </motion.p>
    </motion.div>
  )
}

export default Header