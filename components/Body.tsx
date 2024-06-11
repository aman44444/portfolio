/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import React from "react"

const Body = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col ">
          <div className=" font-bold text center">
          <p className="text-6 text-6xl font-sans font-bold text-gray-700 mb-4">Hi,I'm Aman</p>
          
          </div>
            <Image
                src='/assets/images/front.jpg'
                alt="Profile pic"
                width={250}
                height={250}
                className="rounded-full mt-8"
            />
            <p className="mt-5 text-lg font-semibold font-lato text-gray-500">Frontend developer | Open Source Contributor </p>
       
        </div>

    )
}

export default Body