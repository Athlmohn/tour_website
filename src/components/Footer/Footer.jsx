import React from 'react'
import {AiOutlineAntDesign} from 'react-icons/ai'

function Footer() {
const year = new Date().getFullYear();

  return (
    <div className='w-full h-[100px] bg-gray-800 py-4 mx-auto text-white'>
        <div className='flex items-center justify-center gap-2'>
            <AiOutlineAntDesign size={30} className='text-[var(--primary-color)]'/>
            <h2>TRAVEL LUST</h2>
        </div>
        <div className='text-center pt-4 text-[12px]'>
            <p>&copy;  {year} Travel Lust ™. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer