import React from 'react'
import { BsGithub } from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs'
import {BiLogoGmail} from 'react-icons/bi'
import '../app/globals.css'

function Footer() {
    const style ={ margin:'0.5rem'};
  return (
    <div className='w-full bottom-4 flex items-center justify-center absolute '>
        <BsGithub  style={style}
             className='text-gray-500 hover:text-black text-2xl'
        />
        <BsTwitter style={style} className='text-gray-500 hover:text-black text-2xl'/>
        <BiLogoGmail style={style} className='text-gray-500 hover:text-black text-3xl'/>
    </div>
  )
}

export default Footer