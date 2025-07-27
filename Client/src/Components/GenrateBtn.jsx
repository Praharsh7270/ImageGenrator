import React from 'react'
import { assets } from '../assets/assets'

const GenrateBtn = () => {
  return (
    <div className='pb-16 text-center'>
        <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl mt-4 py-6 md:py-16'>See the Magic Happen</h1>
        <button className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out hover:from-blue-700 hover:to-purple-700 border-2 border-transparent hover:border-white/20'>
            Generate Images 
            <img src={assets.star_group} alt="" className='w-6 h-6' />
        </button>
    </div>
  )
}

export default GenrateBtn