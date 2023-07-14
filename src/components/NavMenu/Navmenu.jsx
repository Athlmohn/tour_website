import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {FaFacebook,FaTwitter,FaGooglePlusG,FaInstagram,FaBars} from 'react-icons/fa'
import {MdExitToApp} from 'react-icons/md'

function Navmenu() {

    const nav_items = [
        {
        path:"/",display:"Home"
    },
        {
        path:"/gallery",display:"Gallery"
    },
        {
        path:"/contact",display:"Contact"
    },
];

const [open, setOpen] = useState(false);

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/60'>
        <ul className='hidden sm:flex px-4'>
            {
                nav_items.map((item)=>(
                    <li><Link to={item.path}>{item.display}</Link></li>
                ))
            }
        </ul>
        <div className='flex justify-between'>
            <FaFacebook size={20} className='mx-4 cursor-pointer'/>
            <FaTwitter size={20} className='mx-4 cursor-pointer'/>
            <FaGooglePlusG size={20} className='mx-4 cursor-pointer'/>
            <FaInstagram size={20} className='mx-4 cursor-pointer'/>
        </div>
        <div className='sm:hidden z-10'>
           { open ? <MdExitToApp size={20} className='mr-4 cursor-pointer' onClick={()=>setOpen(!open)}/>:<FaBars size={20} className='mr-4 cursor-pointer' onClick={()=>setOpen(!open)}/>}
        </div>
        {open && <div className={'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 top-0 left-0 w-full h-screen  bg-black/90 px-4 py-7 flex flex-col items-center'}>
            <ul className='w-full h-full text-center py-12'>
            {
                nav_items.map((item)=>(
                    <li className='text-2xl py-8 hover:text-[var(--secondary-color)]'><Link to={item.path}>{item.display}</Link></li>
                ))
            }
            </ul>
        </div>}
    </div>
  )
}

export default Navmenu