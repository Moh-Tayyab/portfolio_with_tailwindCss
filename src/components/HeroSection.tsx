
"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
//npm install typed.js
import Typed from 'typed.js';
import Link from 'next/link';

export default function HeroSection() {
  useEffect(() => {
   const typed = new Typed('.multiple-text', {
      strings: ['Web Developer', 'Web Designer', 'Front-End Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      showCursor: true,
      backDelay: 1000
    });

    // Clean up Typed instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id='home' className='bg-bg w-[100%] h-auto pt-32 flex justify-around items-center flex-col p-3 md:flex-row '>
      <div>
        <h1 className='text-white text-[40px] font-extrabold lg:text-[50px]'>
          Hello It's Me
        </h1>
        <h2 className='text-white text-[40px] font-extrabold lg:text-[65px]'>
          Muhammad Tayyab
        </h2>
        <h2 className='text-white text-[25px] font-extrabold lg:text-[40px]'>
          and I am <span className='multiple-text text-color'></span>
        </h2>
        <p className='text-white text-[15px] pt-5 lg:text-[20px]'>
          I'm a passionate web developer, skilled in HTML, CSS, TypeScript and Next.js. <br /> I have a strong foundation in web design and development.
        </p>
        <Link href="#contact"><button  className='bg-black text-color text-lg border-2 border-color font-bold py-2 px-6 mt-5 rounded-[30px] hover:bg-color hover:text-black lg:text-xl '>
          Hire Me
        </button></Link>
      </div>
      <div>
        <Image
          src="/myProfile.png"
          alt="Hero image"
          width={400}
          height={300}
          className='rounded-[50%] shadow-2xl shadow-color w-[320px] h-auto pt-10 md:w-[350px] lg:w-[400px] xl:w-[450px]'
        /> 
      </div>
    </div>
  );
}
