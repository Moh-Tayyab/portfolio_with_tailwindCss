'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import Social from './SocialLink';
import { TextGenerateEffect } from './ui/text-generate-effect';
import Image from 'next/image';

const heroDescription =
  'A passionate frontend developer specializing in crafting immersive digital experiences through modern web technologies and intuitive design.';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      <Head>
        <title>Muhammad Tayyab | Frontend Developer</title>
        <meta name="description" content={heroDescription} />
      </Head>

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-block px-4 py-2 bg-cyan-500/10 rounded-full mb-6 backdrop-blur-sm border border-cyan-500/20">
                <p className="text-cyan-400 font-mono text-sm">Available for work</p>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="block text-4xl md:text-6xl mt-4 bg-gradient-to-r from-pink-900 via-blue-400 to-purple-800 bg-clip-text text-transparent">
                Frontend Developer
              </span>
            </motion.h1>
            
            <motion.div 
              className="max-w-xl mx-auto md:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <TextGenerateEffect 
                words={heroDescription} 
                className="text-lg md:text-xl text-gray-400 leading-relaxed"
              />
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              

              <Social
                containerStyles="flex gap-4"
                iconStyles="w-10 h-10 bg-gray-800/80 backdrop-blur-sm hover:bg-gradient-to-r from-cyan-500 to-blue-500 
                           rounded-xl flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 
                           hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
              />
            </motion.div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div 
            className="md:w-1/2 flex justify-center"
            style={{ y }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* Gradient Glow Effect */}
              <div className="absolute inset-0  blur-3xl rounded-full animate-pulse" />
              
              {/* Image Container */}
              <motion.div
                className="relative rounded-full overflow-hidden shadow-2xl
                         border-4 border-gray-800/50
                         bg-gradient-to-b from-gray-900 to-black
                         before:absolute before:inset-0 
                         before:bg-gradient-to-b 
                         before:from-pink-900/10 
                         before:via-blue-400/10 
                         before:to-purple-800/10
                         before:z-10"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/myProfile.png"
                  alt="Muhammad Tayyab"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover relative z-20
                           transition-transform duration-300 hover:scale-105
                           "
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p className="text-sm text-cyan-400 mb-2">Explore more</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 mx-auto text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}