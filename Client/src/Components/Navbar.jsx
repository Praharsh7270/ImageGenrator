import React from 'react'
import { assets } from "../../src/assets/assets.js"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext.jsx'
import { useContext } from 'react'
const Navbar = () => {

    const {user , setShowLogin, credits, logout} = useContext(AppContext)
    const navigate = useNavigate();
    return (
        <motion.div 
            className='flex items-center justify-between py-4 relative'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.8, 
                type: "spring", 
                bounce: 0.4 
            }}
        >
            {/* Animated background bar */}
            <motion.div 
                className='absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 rounded-2xl'
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            />

            {/* Logo with hover animation */}
            <Link to="/">
                <motion.img 
                    src={assets.logo} 
                    alt="" 
                    className='w-28 sm:w-32 lg:w-40 relative z-10' 
                    whileHover={{ 
                        scale: 1.05,
                        rotate: [0, -2, 2],
                        filter: "drop-shadow(0 10px 20px rgba(59, 130, 246, 0.3))"
                    }}
                    transition={{ 
                        type: "spring", 
                        bounce: 0.6,
                        duration: 0.6,
                        rotate: {
                            repeat: 2,
                            repeatType: "reverse",
                            duration: 0.3
                        }
                    }}
                />
            </Link>

            <motion.div
                className='relative z-10'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                {user ? <motion.div 
                    className='flex items-center gap-4 sm:gap-3'
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, type: "spring", bounce: 0.4 }}
                >
                    {/* Animated credit button */}
                    <motion.button 
                        onClick={() => navigate("/buycredit")} 
                        className='flex items-center gap-4 sm:gap-3 bg-blue-100 px-4 py-2 sm:px-6 rounded-full relative overflow-hidden'
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "#dbeafe",
                            boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", bounce: 0.4 }}
                    >
                        {/* Shimmer effect */}
                        <motion.div 
                            className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent'
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                repeatDelay: 3 
                            }}
                        />
                        <motion.img 
                            className='w-5 relative z-10' 
                            src={assets.credit_star} 
                            alt="" 
                            animate={{ rotate: [0, 10] }}
                            transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                repeatType: "reverse",
                                repeatDelay: 1
                            }}
                        />
                        <p className='text-sm sm:text-sm text-gray-600 relative z-10'>Credit left : {credits}</p>
                    </motion.button>

                    {/* Animated greeting */}
                    <motion.p 
                        className='text-sm sm:text-sm text-gray-600'
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        whileHover={{ 
                            color: "#3b82f6",
                            scale: 1.05
                        }}
                    >
                        Hi {user?.name || 'User'}
                    </motion.p>

                    {/* Animated profile dropdown */}
                    <motion.div 
                        className='relative group'
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", bounce: 0.6 }}
                    >
                        <motion.img 
                            src={assets.profile_icon} 
                            alt="" 
                            className='w-10 drop-shadow cursor-pointer'
                            whileHover={{ 
                                filter: "drop-shadow(0 8px 16px rgba(59, 130, 246, 0.4))"
                            }}
                            animate={{
                                boxShadow: [
                                    "0 0 0 rgba(59, 130, 246, 0)",
                                    "0 0 20px rgba(59, 130, 246, 0.3)"
                                ]
                            }}
                            transition={{
                                boxShadow: {
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }
                            }}
                        />

                        {/* Animated dropdown */}
                        <motion.div 
                            className='absolute hidden group-hover:block top-0 right-0 z-20 text-black rounded pt-12'
                            initial={{ opacity: 0, scale: 0.8, y: -10 }}
                            whileHover={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <motion.ul 
                                className='list-none m-0 p-2 bg-white rounded-md border text-sm shadow-lg'
                                whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                            >
                                <motion.li 
                                    className='py-1 px-2 cursor-pointer pr-10 rounded'
                                    whileHover={{ 
                                        backgroundColor: "#f3f4f6",
                                        x: 5
                                    }}
                                    transition={{ type: "spring", bounce: 0.6 }}
                                    onClick={logout}
                                >
                                    Logout
                                </motion.li>
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                </motion.div> : <motion.div 
                    className='flex items-center gap-4 sm:gap-6 lg:gap-8'
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7, type: "spring", bounce: 0.4 }}
                >
                    {/* Animated pricing link */}
                    <motion.div 
                        onClick={() => navigate("/buycredit")} 
                        className='cursor-pointer relative'
                        whileHover={{ 
                            scale: 1.05,
                            color: "#3b82f6"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", bounce: 0.6 }}
                    >
                        Pricing
                        {/* Underline effect */}
                        <motion.div 
                            className='absolute bottom-0 left-0 h-0.5 bg-blue-500'
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    {/* Animated login button */}
                    <motion.button 
                        className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full cursor-pointer relative overflow-hidden'
                        onClick={() => setShowLogin(true)}
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "#374151",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", bounce: 0.4 }}
                    >
                        {/* Button shimmer effect */}
                        <motion.div 
                            className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent'
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                repeatDelay: 2 
                            }}
                        />
                        <span className='relative z-10'>Login</span>
                    </motion.button>
                </motion.div>}

            </motion.div>
        </motion.div>
    )
}

export default Navbar