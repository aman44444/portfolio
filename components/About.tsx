import React from 'react'
import Image from 'next/image'
import { MdLocationOn } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'

function About({ isVisible, onClose }) {
    if (!isVisible) return null

    // const handleClick = (e: { target: { id: string } }) => {
    //     if(e.target.id === 'wrapper') onClose()
    // }
    const style = { borderRadius: '50%', marginInline: '2.5rem', marginTop: '2rem' }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper'>
            <div className='w-3/4 h-3/4 bg-white  rounded-xl absolute'>
                <div className='bg-gray-200 w-full h-1/4 rounded-t-xl text-3xl flex items-center '>
                    <h2 className='absolute left-12 font-semibold'>About</h2>
                    <button className='text-black text-sm place-self-end absolute right-3 font-bold bg-white top-3 rounded-full h-8 w-8' onClick={() => onClose()}>X</button>
                </div>
                <div className='bg-white rounded'>
                    <Image
                        src='/assets/images/IMG_kge6dq-removebg-preview.jpg'
                        alt="Profile pic"
                        width={100}
                        height={100}
                        style={style}
                    />
                    <div className='m-8 font-semibold'>
                        <h3>Aman</h3>
                        <p className='text-gray-400 text-xs flex'> <MdLocationOn className='text-black text-xl' /> Bhopal ,Madhaya Pradesh</p>
                        <div className='flex gap-3'>
                            <BsGithub />
                            <BsTwitter />
                            <BiLogoGmail />
                        </div>

                    </div>
                    <div className='m-8 font-extralight '>
                        <h3 >Description</h3>
                        <p className='text-gray-400 '>I'm btech graduate major in electronical and electromincs
                         im currently doing openspirce contribution and working on my projects 
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About