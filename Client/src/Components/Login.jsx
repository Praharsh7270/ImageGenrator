import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react';

const Login = () => {

    const [state, setState] = useState();

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-sm bg-black/40 flex justify-center items-center'>
        <form className='relative bg-white p-10 rounded-2xl text-slate-500 w-96 shadow-2xl'>
            {/* Close button */}
            <img src={assets.cross_icon} alt="" className='absolute right-5 top-5 cursor-pointer w-5 h-5' />
            
            <h1 className='text-center text-2xl text-neutral-700 font-semibold mb-2'>Sign Up</h1>
            <p className='text-sm text-center mb-6'>Create your account to get started</p>

            {/* Full Name input */}
            <div className='border-2 border-gray-200 px-6 py-3 flex items-center gap-3 rounded-full mt-5 focus-within:border-blue-500 transition-colors'>
                <img src={assets.profile_icon} alt="" className='w-4 h-4' />
                <input type="text" placeholder='Full Name' required className='outline-none text-sm flex-1'/>
            </div>

            {/* Email input */}
            <div className='border-2 border-gray-200 px-6 py-3 flex items-center gap-3 rounded-full mt-4 focus-within:border-blue-500 transition-colors'>
                <img src={assets.email_icon} alt="" className='w-4 h-4' />
                <input type="email" placeholder='Email Address' required className='outline-none text-sm flex-1'/>
            </div>

            {/* Password input */}
            <div className='border-2 border-gray-200 px-6 py-3 flex items-center gap-3 rounded-full mt-4 focus-within:border-blue-500 transition-colors'>
                <img src={assets.lock_icon} alt="" className='w-4 h-4' />
                <input type="password" placeholder='Password' required className='outline-none text-sm flex-1'/>
            </div>

            {/* Terms and conditions */}
            <p className='text-xs text-gray-500 my-4 text-center'>
                By signing up, you agree to our 
                <span className='text-blue-600 cursor-pointer hover:underline ml-1'>Terms & Conditions</span>
            </p>

            {/* Sign up button */}
            <button className='bg-blue-600 hover:bg-blue-700 text-white w-full py-3 rounded-full font-medium transition-colors'>
                Create Account
            </button>

            {/* Login link */}
            <p className='text-center text-sm mt-5'>
                Already have an account?
                <span className='text-blue-600 cursor-pointer hover:underline ml-1'>Log in</span>
            </p>
        </form>
    </div>
  )
}

export default Login