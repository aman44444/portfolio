/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import React from "react"
import Card from "./Card"



function Body() {
    const style = { borderRadius: '50%',marginTop:'2rem' }
    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col ">
          <div className=" font-bold">
          <p className="text-6 m-0.5   text-6xl font-sans font-bold text-gray-700 ">Hi,I'm Aman</p>
          
          </div>
            <Image
                src='/assets/images/front.jpg'
                alt="Profile pic"
                width={250}
                height={250}
                style={style}
            />
            <p className="mt-5 text-xl font-semibold font-lato text-gray-500">Frontend developer | Open Source </p>
       
        </div>

    )
}

export default Body