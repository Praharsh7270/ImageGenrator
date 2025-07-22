import React from 'react'
import { assets } from "../../src/assets/assets.js"
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext.jsx'
import { useContext } from 'react'

const Navbar = () => {

    const {user} = useContext(AppContext)
    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-between py-4'>
            <Link to="/">
                <img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40' />
            </Link>

            <div>
                {user ? <div className='flex items-center gap-4 sm:gap-3'>
                    <button onClick={() =>{
                        navigate("/buycredit")
                    }} className='flex items-center gap-4 sm:gap-3 bg-blue-100 px-4 py-2 sm:px-6 rounded-full hover:scale-105 transition-all duration-300 ease-in-out'>
                        <img className='w-5' src={assets.credit_star} alt="" />
                        <p className='text-sm sm:text-sm text-gray-600'>Credit left : 80</p>
                    </button>
                    <p className='text-sm sm:text-sm text-gray-600'>Hi User</p>
                    <div className='relative group'>
                        <img src={assets.profile_icon} alt="" className='w-10 drop-shadow'/>

                         <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12' >
                            <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                            </ul>
                         </div>
                    </div>
                </div> : <div className='flex items-center gap-4 sm:gap-6 lg:gap-8'>
                    <p onClick={() =>{
                        navigate("/buycredit")
                    }} className='cursor-pointer '>Pricing</p>
                    <button className='bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full'>Login</button>
                </div>}


            </div>
        </div>
    )
}

export default Navbar