'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Social from './SocialLink';
import { TextGenerateEffect } from './ui/text-generate-effect';
import Image from 'next/image';
import Link from 'next/link';
import About from '@/app/about/page';
import Services from '@/app/services/page';
import Skills from '@/app/skills/page';
import Project from '@/app/projects/page';
import ContactForm from '@/app/contact/page';
import Slider from './Slider';

const heroDescription =
  'Frontend developer and UI/UX designer focused on creating engaging and responsive web experiences.';

interface BubbleProps {
  size: string;
  left: string;
  top: string;
  animationDuration: string;
  animationDelay: string;
  color: string;
}

export default function Hero() {
  const [bubbles, setBubbles] = useState<BubbleProps[]>([]);

  useEffect(() => {
    const generateRandomBubbles = () => {
      const randomBubbles: BubbleProps[] = [];
      for (let i = 0; i < 15; i++) {
        const sizeValue = Math.random() * (80 - 30) + 30; // size between 30px and 80px
        const size = `${sizeValue}px`;
        const left = `${Math.random() * 100}%`;
        const top = `${Math.random() * 100}%`;
        const animationDuration = `${Math.random() * (15 - 8) + 8}s`; // duration between 8s and 15s
        const animationDelay = `${Math.random() * 5}s`; // delay up to 5s
        const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, 0.6)`;

        randomBubbles.push({
          size,
          left,
          top,
          animationDuration,
          animationDelay,
          color,
        });
      }
      setBubbles(randomBubbles);
    };

    generateRandomBubbles();
  }, []);

  return (
    <>
    <div>
      <Head>
        <title>Muhammad Tayyab - Frontend Developer & UI/UX Designer</title>
        <meta name="description" content={heroDescription} />
        {/* Import Google Fonts */}
        <Link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Muhammad Tayyab - Frontend Developer & UI/UX Designer"
        />
        <meta property="og:description" content={heroDescription} />
      </Head>

      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-black text-gray-200 body-font py-5">
        {/* Background with Bubble Animations */}
        <div className="absolute inset-0">
          {/* Semi-transparent dark overlay for better contrast */}
          <div className="w-full h-full bg-black opacity-70" />
          <div className="absolute inset-0 pointer-events-none">
            {bubbles.map((bubble, index) => (
              <div
                key={index}
                className="bubble"
                style={{
                  backgroundColor: bubble.color,
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

        <div className="container mx-auto flex flex-col px-6 py-24 md:py-32 items-center relative z-10 md:flex-row">
          {/* Text & CTA Section */}
          <motion.div
            className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 font-poppins">
              Hi, 👋🏻
            </h1>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 font-poppins transition-colors duration-300 hover:text-teal-400">
              It&apos;s me, Muhammad <span className="text-teal-400">Tayyab</span>
            </h2>

            <div className="max-w-md text-white">
              <TextGenerateEffect words={heroDescription} />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-8">
              <Social
                containerStyles="flex gap-4"
                iconStyles="w-10 h-10 border border-teal-400 rounded-full hover:bg-teal-400 flex justify-center items-center text-teal-600 transition-all duration-500"
              />
              <Link
                href="https://www.linkedin.com/in/ch-muhammad-tayyab/"
                aria-label="Hire me on LinkedIn"
                className="px-6 py-3 border border-teal-500 text-teal-400 rounded-lg text-lg font-semibold transition-transform duration-300 hover:scale-105 shadow-md"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            className="flex justify-center items-center md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ rotateY: 15, rotateX: -15, scale: 1.05 }}
          >
            <Image
              className="neon-circle rounded-full shadow-2xl shadow-teal-400"
              src="/myProfile.png"
              alt="Profile image of Muhammad Tayyab"
              width={500}
              height={500}
              priority
            />
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-teal-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      <style jsx>{`
        .neon-circle {
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.7),
            0 0 40px rgba(0, 255, 255, 0.5);
          transition: transform 0.5s ease;
        }

        .bubble {
          position: absolute;
          border-radius: 50%;
          animation: floatBubbles 10s ease-in-out infinite;
          mix-blend-mode: screen;
        }

        @keyframes floatBubbles {
          0% {
            transform: translateY(0);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-40px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
    <About />
    <Services />
    <Skills />
    <Project />
   <Slider/>
    <ContactForm />
    </>
  );
}
