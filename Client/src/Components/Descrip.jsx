import React from 'react'
import { assets } from '../assets/assets'

const Descrip = () => {
  return (
    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold '>Create Stunning Images from Text</h1>
        <p className='text-gray-600 mb-8'>Transform your ideas into visual masterpieces with our AI-powered image generator.</p>

        <div className='flex flex-col md:flex-row gap-8 items-center justify-center'>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg'/>
            <div>
                <h2 className='text-3xl font-medium max-w-lg'>Introduction to AI powered Text to Image</h2>
                <p className='text-gray-600 mb-4'>Discover how our AI technology can turn your text prompts into beautiful images. Simply describe what you want to see, and our advanced machine learning algorithms will create stunning visuals that match your imagination. From realistic portraits to abstract art, the possibilities are endless.</p>
               <p className='text-gray-600 mb-4'>
                Our platform uses cutting-edge artificial intelligence to understand your text descriptions and generate high-quality images in seconds. Whether you're a designer, content creator, or just someone with creative ideas, this tool makes it easy to bring your vision to life without any artistic skills required.
               </p>
            </div>
        </div>
    </div>
  )
}

export default Descrip