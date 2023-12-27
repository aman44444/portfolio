import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BiLogoGmail } from 'react-icons/bi';
import '../app/globals.css';

function Footer() {
  const style = { margin: '0.5rem' };

  return (
    <div className='w-full bottom-4 flex items-center justify-center absolute '>
      <a href='https://github.com/aman44444' target='_blank' rel='noopener noreferrer'>
        <BsGithub style={style} className='text-gray-500 hover:text-black text-2xl' />
      </a>
      <a>
        <BsTwitter style={style} className='text-gray-500 hover:text-black text-2xl' />
      </a>
      <a href='mailto:amancorp04@gmail.com'>
        <BiLogoGmail style={style} className='text-gray-500 hover:text-black text-3xl' />
      </a>
    </div>
  );
}

export default Footer;
