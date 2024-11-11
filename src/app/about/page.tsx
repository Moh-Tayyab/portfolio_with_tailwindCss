import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function about() {
  return (
    <div id='about' className='bg-bg w-[100%] h-auto pt-32 flex justify-around items-center flex-col-reverse p-3 md:flex-row bg-black'>
    <div>
      <Image
        src="/myProfile.png"
        alt="Hero image"
        width={400}
        height={300}
        className='rounded-[50%]  w-[320px] h-auto pt-10 md:w-[350px] lg:w-[400px] xl:w-[450px] '
      /> 
    </div>
    <div className='md:w-[50%] '>
      <h1 className='text-white text-[40px] font-extrabold lg:text-[50px] '>
          About Me
      </h1>
      <h2 className='text-teal-400 text-[30px] font-extrabold lg:text-[65px]'>
      Front-End Developer
      </h2>
      
      <p className='text-white text-[15px] pt-5 lg:text-[20px] flex flex-wrap'>
      My name is Muhammad Tayyab, and I&apos;m a passionate web developer.  I have a strong foundation in web design and development. I&apos;ve worked on various projects, including websites, web applications, and mobile apps.I am currently open to new opportunities and collaborations. Feel free to reach out if you&apos;re interested in working together or have any projects in mind.
      </p>


     <Link href="#" target='_blank'> <button className='bg-black text-color text-md border-2 border-color font-bold text-teal-400 py-2 px-6 mt-5 rounded-[30px] hover:bg-color hover:text-black lg:text-lg '>
          Download CV    
      </button></Link>
    </div>
  </div>
  )
}
