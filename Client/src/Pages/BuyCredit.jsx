import React from 'react'
import { plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6'>Choose The Plan </h1>

      <div>
        {plans.map((plan, index) => (
          <div key={index} className='max-w-sm mx-auto mb-6 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 '>
            <h2 className='text-xl font-semibold mb-4'>{plan.name}</h2>
            <p className='text-gray-600 mb-4'>Price: ${plan.price}</p>
            <p className='text-gray-600 mb-4'>Credits: {plan.credits}</p>
            <p className='text-gray-600 mb-4'>Description: {plan.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit