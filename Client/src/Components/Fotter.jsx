import React from 'react'
import { assets } from '../assets/assets'

const Fotter = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20 '>
        <img src={assets.logo} alt="" width={150}/>
        <p className='text-sm text-gray-500'>© 2025 ImageGenrator. All rights reserved.</p>
    </div>
  )
}

export default Fotter