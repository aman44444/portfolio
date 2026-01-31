import Image from "next/image"
import React from "react"

const Body = () => {
    return (
        <main className="w-screen min-h-screen flex items-center justify-center flex-col ">
          <div className=" font-bold text-center">
          <h1 className="text-[41px] md:text-6xl font-sans font-bold text-gray-700">Hi, I&apos;m Aman</h1>
          </div>
            <div className="my-6">
                <Image
                src='/assets/images/profilepicture.jpg'
                alt="Profile picture"
                width={250}
                height={250}
                className="rounded-full"
                priority
            />
            </div>
            <p className="text-[11px] md:text-base lg:text-lg font-semibold text-gray-500">Frontend developer | Open Source Contributor </p>
        </main>

    )
}

export default Body