'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaDownload, FaCode, FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa';
import SectionHeading from '@/components/Helper/SectionHeading';

const About = () => {
  const skills = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Framework' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'GraphQL', category: 'API' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-32 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          {...fadeInUp}
        >
          <SectionHeading title="About Me" />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Image Section */}
          <motion.div
            className="relative w-full max-w-lg lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative rounded-3xl overflow-hidden border border-gray-800/50 backdrop-blur-sm">
                <Image
                  src="/myProfile.png"
                  alt="Muhammad Tayyab - Frontend Developer"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.div {...fadeInUp}>
                <span className="px-4 py-2 bg-cyan-500/10 rounded-full text-cyan-400 text-sm font-medium border border-cyan-500/20">
                  Frontend Engineer
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold"
                {...fadeInUp}
              >
                <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                  Muhammad Tayyab
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-400 leading-relaxed"
                {...fadeInUp}
              >
                Crafting digital experiences with code and creativity
              </motion.p>
            </div>

            <motion.div 
              className="space-y-6"
              {...fadeInUp}
            >
              <p className="text-lg text-gray-400 leading-relaxed">
                With {new Date().getFullYear() - 2023}+ years of experience in web development,
                I specialize in building responsive, performant applications that provide 
                exceptional user experiences. My expertise spans modern frontend technologies,
                with a focus on React and Next.js ecosystems.
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-gradient-to-r from-pink-900 via-blue-400 to-purple-800 bg-clip-text text-transparent mb-2">{skill.category}</div>
                    <div className="text-gray-200 font-medium">{skill.name}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/Profile.pdf"
                download
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-900 via-blue-400 to-purple-800 text-white rounded-xl
                         font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25
                         border-2 border-transparent hover:border-teal-500/30 backdrop-blur-sm
                         before:absolute before:inset-0 before:bg-gradient-to-r before:from-pink-900/20 before:via-blue-400/20 before:to-purple-800/20
                         before:rounded-xl before:transition-opacity before:opacity-0 hover:before:opacity-100"
              >
                <span className="flex items-center gap-3 relative z-10">
                  <FaDownload className="text-xl animate-bounce" />
                  <span className="bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-400 transition-colors">
                    Download Resume
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-purple-400/20 opacity-0 
                              group-hover:opacity-100 transition-all duration-500 rounded-xl blur-xl" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Code Element */}
      <motion.div 
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3 text-cyan-400/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <FaCode className="animate-pulse" />
        <span className="font-mono text-sm">const passion = &apos;code&apos; + innovation;</span>
      </motion.div>
    </section>
  );
};

export default About;