import React from 'react'
import { testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <motion.div 
            className='flex flex-col items-center justify-center my-20 py-12 relative overflow-hidden'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            {/* Animated background elements */}
            <motion.div 
                className='absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30'
                animate={{ 
                    rotate: [0, 2],
                    scale: [1, 1.02]
                }}
                transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
            />

            {/* Floating testimonial icons */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className='absolute w-3 h-3 bg-yellow-400/30 rounded-full'
                    style={{
                        top: `${10 + (i * 15)}%`,
                        left: `${5 + (i * 15)}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.5, 1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 4 + (i * 0.5),
                        repeat: Infinity,
                        delay: i * 0.5
                    }}
                />
            ))}

            {/* Animated heading */}
            <motion.h1 
                className='text-3xl sm:text-4xl font-semibold mb-4 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent relative z-10'
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                    duration: 1, 
                    delay: 0.2,
                    type: "spring",
                    bounce: 0.4
                }}
                viewport={{ once: true }}
                whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
            >
                Customer Testimonials
            </motion.h1>

            {/* Animated description */}
            <motion.p 
                className='text-gray-600 mb-12 text-lg relative z-10'
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ color: "#3b82f6" }}
            >
                What our customers are saying
            </motion.p>

            {/* Testimonials grid */}
            <motion.div 
                className='flex flex-wrap gap-8 justify-center max-w-6xl relative z-10'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
            >
                {testimonialsData.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className='max-w-sm bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-8 border border-gray-100 relative overflow-hidden'
                        initial={{ 
                            opacity: 0, 
                            y: 100, 
                            rotateY: 45,
                            scale: 0.8
                        }}
                        whileInView={{ 
                            opacity: 1, 
                            y: 0, 
                            rotateY: 0,
                            scale: 1
                        }}
                        transition={{ 
                            duration: 0.8, 
                            delay: 0.8 + (index * 0.2),
                            type: "spring",
                            bounce: 0.4,
                            boxShadow: {
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }
                        }}
                        viewport={{ once: true }}
                        whileHover={{ 
                            scale: 1.05,
                            rotateY: 5,
                            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                            y: -10
                        }}
                        animate={{
                            boxShadow: [
                                "0 10px 30px rgba(0,0,0,0.1)",
                                "0 15px 40px rgba(59, 130, 246, 0.1)"
                            ]
                        }}
                    >
                        {/* Quote decoration */}
                        <motion.div 
                            className='absolute top-4 right-4 text-6xl text-blue-100 font-bold'
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 + (index * 0.2) }}
                            viewport={{ once: true }}
                        >
                            "
                        </motion.div>

                        {/* Animated gradient background */}
                        <motion.div 
                            className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0'
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Profile image with glow effect */}
                        <motion.div 
                            className='relative z-10 flex justify-center mb-6'
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", bounce: 0.6 }}
                        >
                            <motion.img 
                                src={item.image} 
                                alt={item.name} 
                                className='w-20 h-20 rounded-full border-4 border-white shadow-lg' 
                                animate={{
                                    boxShadow: [
                                        "0 0 20px rgba(59, 130, 246, 0.2)",
                                        "0 0 30px rgba(139, 92, 246, 0.3)"
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            />
                        </motion.div>

                        {/* Name with color animation */}
                        <motion.h2 
                            className='text-2xl font-bold text-center mb-2 relative z-10'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0 + (index * 0.2) }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                color: "#3b82f6",
                                scale: 1.05
                            }}
                        >
                            {item.name}
                        </motion.h2>

                        {/* Role */}
                        <motion.p 
                            className='text-gray-500 text-center mb-6 relative z-10'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 + (index * 0.2) }}
                            viewport={{ once: true }}
                            whileHover={{ color: "#6b7280" }}
                        >
                            {item.role}
                        </motion.p>

                        {/* Testimonial text */}
                        <motion.p 
                            className='text-gray-600 text-center mb-6 leading-relaxed relative z-10'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 + (index * 0.2) }}
                            viewport={{ once: true }}
                            whileHover={{ color: "#374151" }}
                        >
                            {item.text}
                        </motion.p>

                        {/* Animated stars */}
                        <motion.div 
                            className='flex justify-center space-x-1 relative z-10'
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.3 + (index * 0.2) }}
                            viewport={{ once: true }}
                        >
                            {Array(item.stars).fill().map((_, i) => (
                                <motion.svg 
                                    key={i} 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="w-6 h-6 text-yellow-500" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                    initial={{ opacity: 0, scale: 0, rotate: 180 }}
                                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ 
                                        delay: 1.4 + (index * 0.2) + (i * 0.1),
                                        type: "spring",
                                        bounce: 0.6,
                                        filter: {
                                            duration: 1,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            delay: i * 0.2
                                        },
                                        rotate: {
                                            repeat: 2,
                                            repeatType: "reverse",
                                            duration: 0.3
                                        }
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ 
                                        scale: 1.3,
                                        rotate: [0, -15],
                                        color: "#fbbf24"
                                    }}
                                    animate={{
                                        filter: [
                                            "drop-shadow(0 0 0px rgba(251, 191, 36, 0))",
                                            "drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))"
                                        ]
                                    }}
                                >
                                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z" />
                                </motion.svg>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Testimonials