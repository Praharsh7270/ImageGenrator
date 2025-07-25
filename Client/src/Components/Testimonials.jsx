import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {
    return (
        <div className='flex flex-col items-center justify-center my-20 py-12 '>
            <h1 className='text-3xl sm:text-4xl font-semibold '>Customer Testimonials</h1>
            <p className='text-gray-600 mb-12'>What our customers are saying</p>

            <div className='flex flex-wrap gap-6 '>
                {testimonialsData.map((item, index) => (
                    <div key={index} className='max-w-sm bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-transform duration-300 ease-in-out'>
                        <img src={item.image} alt={item.name} className='w-16 h-16 rounded-full mb-4 mx-auto' />
                        <h2 className='text-xl font-semibold text-center mb-2'>{item.name}</h2>
                        <p className='text-gray-600 text-center mb-4'>{item.role}</p>
                        <p className='text-gray-600 text-center mb-4'>{item.text}</p>
                        <div className='flex justify-center'>
                            {Array(item.stars).fill().map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27z" />
                                </svg>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials