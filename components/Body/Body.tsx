// "use client";
// import Image from "next/image";
// import React from "react";

// const Body = () => {
//   return (
//     <main className="w-screen min-h-screen flex items-center justify-center">
//       <div className="flex justify-center w-1/2">
//       <div className="my-6">
//         <Image
//           src="/assets/images/Profile/Profile.jpg"
//           alt="Profile picture"
//           width={250}
//           height={250}
//           className="rounded-md"
//           priority
//         />
//       </div>
//       <div className="flex flex-col flex-wrap mt-5 ml-3">
//         <h1 className="text-[41px] md:text-6xl font-sans font-bold text-gray-700">
//           Hi, I&apos;m Aman
//         </h1>
//          <p className="text-[11px] md:text-base lg:text-lg font-semibold text-gray-500">
//         Frontend developer | Open Source Contributor{" "}
//       </p>
//       <p className="text-[8px] md:text-base lg:text-md text-gray-400">
//         {" "}
//         I build scalable applications using React.js, Next.js, TypeScript, and
//         Tailwind CSS, with a strong emphasis on clean code and great user
//         experience.
//       </p>
//       </div>
//       </div>
     
//     </main>
//   );
// };

// export default Body;


"use client";

import Image from "next/image";
import React from "react";

const Body = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center px-6">
      <div className="flex w-full max-w-3xl flex-col items-center justify-center gap-6 md:flex-row md:gap-9">
        {/* Profile Image */}
        <div className="shrink-0">
          <Image
            src="/assets/images/Profile/Profile.jpg"
            alt="Aman"
            width={180}
            height={180}
            priority
            className="h-32 w-32 object-cover rounded-xl sm:h-36 sm:w-36 md:h-40 md:w-40"
          />
        </div>

        {/* Content */}
        <div className="flex max-w-lg flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Hi, I&apos;m Aman
          </h1>

          <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">
            Frontend Developer
            <span className="mx-2 text-slate-300">|</span>
            Open Source Contributor
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            I build scalable applications using React.js, Next.js, TypeScript,
            and Tailwind CSS, with a strong focus on clean code, thoughtful
            interfaces, and great user experience.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Body;