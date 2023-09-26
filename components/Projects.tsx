import React from 'react'
import Image from 'next/image'
import Card from './Card'

function Project({ isProjectVisible, onClose }) {
    if (!isProjectVisible) return null

    // const handleClick = (e: { target: { id: string } }) => {
    //     if(e.target.id === 'wrapper') onClose()
    // }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper'>
            <div className='w-3/4 h-3/4 bg-white  rounded-xl absolute'>
                <div className='bg-gray-200 w-full h-1/4 rounded-t-xl text-3xl flex items-center '>
                    <h2 className='absolute left-12 font-semibold'>Projects</h2>
                    <button className='text-black text-sm place-self-end absolute right-3 font-bold bg-white top-3 rounded-full h-8 w-8' onClick={() => onClose()}>X</button>
                </div>
                <div className=' h-3/4 flex flex-wrap w-full gap-6 justify-center
                items-center '>
                    <div className='h-40 w-1/4 bg-black right-10 flex flex-wrap items-end rounded-xl
                    
'
style={{
    backgroundImage: `url('/assets/images/images.png')`,
    
    backgroundRepeat: "no-repeat",
    backgroundSize:" contain",
    
    }}>
                      
                       
                        <Card title="WordleXkbc"
                            description="This is the card description. It expands when hovered." />
                    </div>

                    <div className='h-40 w-1/4 bg-black right-10 flex flex-wrap items-end rounded-xl'>
                        <Card title=""
                            description="This is the card description. It expands when hovered." />
                    </div>
                    <div className='h-40 w-1/4 bg-black right-10 flex flex-wrap items-end rounded-xl'>
                        <Card title="Card Title"
                            description="This is the card description. It expands when hovered." />
                    </div>
                      
                    <div className='h-40 w-1/4 bg-black right-10 flex flex-wrap items-end rounded-xl'>
                        <Card title="Card Title"
                            description="This is the card description. It expands when hovered." />
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Project;