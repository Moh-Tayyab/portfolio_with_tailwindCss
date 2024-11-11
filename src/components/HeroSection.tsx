'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Social from './SocialLink';
import { TextGenerateEffect } from './ui/text-generate-effect';
import Image from 'next/image';
import Link from 'next/link';

const words = "Frontend developer and UI/UX designer focused on creating engaging and responsive web experiences.";

interface BubbleProps {
  size: string;
  left: string;
  top: string;
  animationDuration: string;
  animationDelay: string;
}

export default function Hero() {
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]); // Specify type BubbleProps[]

  // Generate random bubble properties on the client side
  useEffect(() => {
    const generateRandomBubbles = () => {
      const randomBubbles: BubbleProps[] = []; // Type the array as BubbleProps[]
      for (let i = 0; i < 15; i++) {
        const size = Math.random() * (80 - 30) + 30; // Bubble size between 30px and 80px
        const left = Math.random() * 100 + '%'; // Random horizontal position
        const top = Math.random() * 100 + '%'; // Random vertical position
        const animationDuration = Math.random() * (15 - 8) + 8 + 's'; // Duration between 8s and 15s
        const animationDelay = Math.random() * 5 + 's'; // Delay up to 5s

        randomBubbles.push({
          size: `${size}px`,
          left,
          top,
          animationDuration,
          animationDelay,
        });
      }
      setBubbles(randomBubbles);
    };

    generateRandomBubbles();
  }, []);

  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>

      <section className="relative overflow-hidden bg-gray-900 text-gray-600 body-font">
        {/* Background and Bubbles Animation */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-900 opacity-60" />
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {bubbles.map((bubble, index) => (
              <div
                key={index}
                className="bubble"
                style={{
                  backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.6)`,
                  width: bubble.size,
                  height: bubble.size,
                  left: bubble.left,
                  top: bubble.top,
                  animationDuration: bubble.animationDuration,
                  animationDelay: bubble.animationDelay,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto flex flex-col px-10 py-32 items-center relative z-10 md:flex-row">
          <motion.div
            className="lg:flex-grow md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left mb-16 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="title-font sm:text-8xl text-6xl mb-4 font-bold text-gray-200 font-poppins">
              Hi, 👋🏻
            </h1>
            <h1 className="title-font sm:text-8xl text-6xl mb-8 font-bold text-gray-200 font-poppins hover:text-pink-800">
              It&apos;s me, Muhammad
              <span className='text-teal-400'> Tayyab</span>
            </h1>

            <TextGenerateEffect words={words} />

            {/* Social Links and Hire Me Button */}
            <div className="flex flex-col xl:flex-row items-center gap-8 mt-3">
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-teal-400 rounded-full hover:bg-teal-400 flex justify-center items-center text-teal-600 text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
              <Link
                href=""
                className="px-8 py-3 bg-gradient-to-r border border-teal-500 text-teal-400 rounded-lg text-xl font-semibold transform transition-transform duration-300 hover:scale-105 shadow-md"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="lg:max-w-4xl lg:w-1/2 md:w-2/3 w-full mx-auto flex justify-end items-center mt-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ rotateY: 15, rotateX: -15, scale: 1.1 }}
          >
            <Image
              className="neon-circle object-cover object-center sm:w-[450px] rounded-[50%] shadow-2xl shadow-teal-400 w-[320px] h-auto pt-10 md:w-[350px] lg:w-[400px] xl:w-[450px] bg-teal-400"
              alt="profile image"
              src="/myProfile.png"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .neon-circle {
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.7), 0 0 40px rgba(0, 255, 255, 0.5);
          transition: transform 0.5s ease;
        }

        .bubble {
          border-radius: 50%;
          position: absolute;
          animation: floatBubbles 10s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        @keyframes floatBubbles {
          0% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(-40px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
