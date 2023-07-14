import React from 'react'
import {AiOutlineAntDesign,AiFillPhone,AiOutlineClockCircle} from 'react-icons/ai'
function Navbar() {
  return (
    <div className='flex justify-between px-4 py-2'>
        <div className='flex items-center gap-2'>
            <AiOutlineAntDesign size={30} className='text-[var(--primary-color)]'/>
            <h2 className='text-xl font-bold text-gray-700'>TRAVEL LUST</h2>
        </div>
        <div className='flex'>
           <div className='hidden md:flex items-center gap-2 px-4'>
            <AiOutlineClockCircle size={30} className='text-[var(--primary-color)]'/>
            <p className='text-sm text-gray-700'>5AM - 9PM</p>
           </div>
           <div className='hidden md:flex items-center gap-2 px-4'> 
            <AiFillPhone size={30} className='text-[var(--primary-color)]'/>
            <p className='text-sm text-gray-700'>+1800 5884 321</p>
           </div>
           <button className='px-4 py-2 border text-white bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]'>Get a Free Quote</button>
        </div>
    </div>
  )
}

export default Navbar