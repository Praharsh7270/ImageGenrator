import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center text-center my-20'>
            <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border-neutral-500'>
              <p>Best text to image generator</p>
              <img src={assets.star_icon} alt="" />
            </div>
        </div>

        <h1 className='text-4xl max-w-[300px] sm:text-7xl mx-auto mt-10 text-center'>Turn Text to <span className='text-blue-400'>Image</span></h1>

        <p className='text-center max-w-xl mx-auto mt-5'>Generate stunning images from your text prompts using our advanced AI technology.</p>

        <button className='sm:text-lg text-white w-auto mt-8 px-12 py-2.5 flex items-center gap-2 bg-blue-500 rounded-full mx-auto'>
          Generate Image <img className='h-7' src={assets.star_group} alt="" />
        </button>

        <div className='flex flex-wrap justify-center mt-16 gap-3'>
          {Array(6).fill("").map((item,index)=>(
            <img src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2} alt="" key={index} width={70} className='rounded hover:scale-105 transition duration-300 cursor-pointer max-sm:w-10'/>
))}
        </div>

        <p className='text-center max-w-xl mx-auto mt-5'>Explore the possibilities of AI-generated images and bring your ideas to life.</p>
    </div>
  )
}

export default Header