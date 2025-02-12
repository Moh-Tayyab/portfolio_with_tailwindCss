"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="bg-black w-full pt-32 flex flex-col-reverse md:flex-row items-center justify-around p-6"
    >
      {/* Image Section with a subtle hover scale effect */}
      <motion.div
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src="/myProfile.png"
          alt="Profile image of Muhammad Tayyab"
          width={400}
          height={400}
          className="rounded-full shadow-lg ring-4 ring-teal-500"
        />
      </motion.div>

      {/* Text Content Section */}
      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-white text-4xl lg:text-5xl font-extrabold">
          About Me
        </h1>
        <h2 className="text-teal-400 text-3xl lg:text-6xl font-bold mt-4">
          Front-End Developer
        </h2>
        <p className="text-white text-base lg:text-lg mt-6 leading-relaxed">
          My name is Muhammad Tayyab, and I&apos;m a passionate web developer. I have a strong
          foundation in web design and development. I&apos;ve worked on various projects, including
          websites, web applications, and mobile apps. I am currently open to new opportunities and
          collaborations. Feel free to reach out if you&apos;re interested in working together or have any
          projects in mind.
        </p>
        <div className="mt-8">
          <Link href="/Profile.pdf" download target="_blank" rel="noopener noreferrer">
            <button className="bg-transparent border-2 border-teal-400 text-teal-400 font-bold py-2 px-6 rounded-full hover:bg-teal-400 hover:text-black transition-colors duration-300">
              Download CV
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
