import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react';

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1); // Default image
  const [loading, setLoading] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
   
  }

  return (
    <form onSubmit={handleSubmit} action="" className='flex flex-col items-center justify-center gap-8 mt-10'>
      <div>
        <div className='relative'>
          <img src={image} alt="" className='max-w-sm rounded ' />
          <span className={`absolute bottom-0 left-0 h-1 w-full transition-all duration-300 ${isLoading ? "bg-blue-500 w-full transition-all duration-[10]": "w-0"}`}></span>
        </div>
        <p className={!isLoading ? "hidden":""}>Loading....</p>

      </div>
      {!loading &&
        <div className='flex w-full max-w-xl bg-neutral-500 ml-8 rounded-full'>
          <input onChange={e => setInput(e.target.value)} value={input} type="text" name="" id="" placeholder='Describe what you want to generate' className='flex-1  bg-transparent outline-none ml-8 max-sm:w-20 ' />
          <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full text-white'>Genrate</button>
        </div>
      }
      {loading &&
        <div className='flex gap-4 flex-wrap justify-center text-sm mt-10'>
          <button className='bg-transparent border-2 border-zinc-300 hover:border-zinc-400 px-8 py-3 rounded-full cursor-pointer text-black hover:bg-zinc-50 transition-all duration-300' onClick={() =>{
            setLoading(false);
            
          }}>Generate Another</button>
          <a href={image} download className='bg-zinc-900 hover:bg-zinc-800 px-8 py-3 rounded-full cursor-pointer text-white transition-all duration-300'>Download</a>
        </div>
      }
    </form>

  )
}

export default Result