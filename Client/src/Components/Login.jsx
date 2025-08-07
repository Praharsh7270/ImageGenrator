import React, { useEffect } from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext.jsx'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const [state, setState] = useState("Login");
    const {setShowLogin, backendUrl, setToken, setUser, getUserCredits} = useContext(AppContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });

    }

    const onsubmitHandler = async (e) => {
        e.preventDefault();
        try{
          if(state === "Login") {
              const {data} = await axios.post(backendUrl +"/api/user/login", {
                email,
                password
              })
              if (data.success){
                setToken(data.token)
                setUser(data.user);
                localStorage.setItem("token", data.token);
                
                // Fetch user credits after successful login
                setTimeout(() => getUserCredits(), 500);
                
                toast.success("Login successful!");
                setShowLogin(false);
              }
              else{
                toast.error(data.message);
              }
          }
          else if(state === "Sign Up") {
              const {data} = await axios.post(backendUrl +"/api/user/register", {
                name,
                email,
                password
              })
              if (data.success){
                setToken(data.token)
                setUser(data.user);
                localStorage.setItem("token", data.token);
                
                // Fetch user credits after successful signup
                setTimeout(() => getUserCredits(), 500);
                
                toast.success("Account created successfully!");
                setShowLogin(false);
              }
              else{
                toast.error(data.message);
              }
          }

        }
        catch (error) {
            console.error("Error during form submission:", error);
            toast.error(error.response?.data?.message || "Something went wrong!");
        }
    }

    useEffect(() =>{
        document.body.style.overflow = "hidden";

        return () =>{
            document.body.style.overflow = "unset";
        }
    }, [])

  return (
    <motion.div 
      className='fixed top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-sm bg-black/40 flex justify-center items-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.target === e.currentTarget && setShowLogin(false)}
    >
    
        <motion.form 
          onSubmit={onsubmitHandler}
          className='relative bg-white p-10 rounded-2xl text-slate-500 w-96 shadow-2xl'
          initial={{ scale: 0.7, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.7, opacity: 0, y: 50 }}
          transition={{ 
            type: "spring", 
            bounce: 0.4, 
            duration: 0.6 
          }}
          onClick={(e) => e.stopPropagation()}
        >
            {/* Animated background gradient */}
            <motion.div 
              className='absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl'
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Close button with animation */}
            <motion.img 
              src={assets.cross_icon} 
              alt="" 
              className='absolute right-5 top-5 cursor-pointer w-5 h-5 z-10' 
              onClick={() => setShowLogin(false)}
              whileHover={{ 
                scale: 1.2, 
                rotate: 90,
                backgroundColor: "#fee2e2",
                borderRadius: "50%",
                padding: "2px"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.6 }}
            />

            {/* Animated title */}
            <motion.h1 
              className='text-center text-2xl text-neutral-700 font-semibold mb-2 relative z-10'
              key={state}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {state}
            </motion.h1>

            <motion.p 
              className='text-sm text-center mb-6 relative z-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {state === "Login" ? "Welcome back! Please sign in" : "Create your account to get started"}
            </motion.p>

            {/* Full Name input with animation */}
            <AnimatePresence>
              {state !== "Login" &&
                <motion.div 
                  className='border-2 border-gray-200 px-6 py-3 flex items-center gap-3 rounded-full mt-5 focus-within:border-blue-500 transition-colors relative z-10'
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 5px 15px rgba(59, 130, 246, 0.1)"
                  }}
                >
                  <motion.img 
                    src={assets.profile_icon} 
                    alt="" 
                    className='w-4 h-4' 
                    animate={{ rotate: [0, 10] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                  />
                  <motion.input 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text" 
                    placeholder='Full Name' 
                    required 
                    className='outline-none text-sm flex-1'
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>
              }
            </AnimatePresence>

            {/* Email input with animation */}
            <motion.div 
              className='border-2 border-gray-200 px-6 py-3 flex items-center gap-3 rounded-full mt-4 focus-within:border-blue-500 transition-colors relative z-10'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 5px 15px rgba(59, 130, 246, 0.1)"
              }}
            >
                <motion.img 
                  src={assets.email_icon} 
                  alt="" 
                  className='w-4 h-4' 
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                />
                <motion.input 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder='Email Address' 
                  required 
                  className='outline-none text-sm flex-1'
                  whileFocus={{ scale: 1.01 }}
                />
            </motion.div>

            {/* Password input with animation */}
            <motion.div 
              className='border-2 border-gray-200 px-6 py-3 flex items-center gap-3 rounded-full mt-4 focus-within:border-blue-500 transition-colors relative z-10'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 5px 15px rgba(59, 130, 246, 0.1)"
              }}
            >
                <motion.img 
                  src={assets.lock_icon} 
                  alt="" 
                  className='w-4 h-4' 
                  animate={{ rotate: [0, 5] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                />
                <motion.input 

                  type="password" 
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder='Password' 
                  required 
                  className='outline-none text-sm flex-1'
                  whileFocus={{ scale: 1.01 }}
                />
            </motion.div>

            {/* Terms and conditions with animation */}
            <motion.p 
              className='text-xs text-gray-500 my-4 text-center relative z-10'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
                By signing up, you agree to our 
                <motion.span 
                  className='text-blue-600 cursor-pointer hover:underline ml-1'
                  whileHover={{ color: "#1d4ed8", scale: 1.05 }}
                  transition={{ type: "spring", bounce: 0.6 }}
                >
                  Terms & Conditions
                </motion.span>
            </motion.p>

            {/* Sign up button with animation */}
            <motion.button 
              className='bg-blue-600 text-white w-full py-3 rounded-full font-medium relative overflow-hidden z-10'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: "#1d4ed8",
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Button shimmer effect */}
              <motion.div 
                className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                animate={{ x: ["-100%", "100%"] }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 3 
                }}
              />
              <span className='relative z-10'>
                {state === "Login" ? "Log In" : "Create Account"}
              </span>
            </motion.button>

            {/* Login/signup toggle with animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className='relative z-10'
            >
              {state === "Login" ? 
                <motion.p 
                  className='text-center text-sm mt-5'
                  key="login-toggle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Don't have an account?
                  <motion.span 
                    className='text-blue-600 cursor-pointer hover:underline ml-1' 
                    onClick={() => setState("Sign Up")}
                    whileHover={{ 
                      color: "#1d4ed8", 
                      scale: 1.05 
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", bounce: 0.6 }}
                  >
                    Sign up
                  </motion.span>
                </motion.p> : 
                <motion.p 
                  className='text-center text-sm mt-5'
                  key="signup-toggle"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Already have an account?
                  <motion.span 
                    className='text-blue-600 cursor-pointer hover:underline ml-1' 
                    onClick={() => setState("Login")}
                    whileHover={{ 
                      color: "#1d4ed8", 
                      scale: 1.05 
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", bounce: 0.6 }}
                  >
                    Log in
                  </motion.span>
                </motion.p>
              }
            </motion.div>
        </motion.form>
    </motion.div>
  )
}

export default Login