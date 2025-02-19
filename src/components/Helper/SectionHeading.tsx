"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'default' | 'minimal' | 'decorated';
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'center',
  theme = 'default' 
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left ml-0',
    center: 'text-center mx-auto',
    right: 'text-right mr-0'
  };

  const renderHeading = () => {
    switch (theme) {
      case 'minimal':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`space-y-4 ${alignmentClasses[align]}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-400 max-w-2xl">{subtitle}</p>
            )}
          </motion.div>
        );

      case 'decorated':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`relative ${alignmentClasses[align]}`}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-8xl font-bold text-gray-800/10">
              {title.split(' ')[0]}
            </div>
            <h2 className="relative text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            {subtitle && (
              <p className="mt-4 text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
            )}
          </motion.div>
        );

      default:
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={alignmentClasses[align]}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r blur-xl from-pink-900 via-blue-400 to-purple-800 opacity-20" />
              <h2 className="relative bg-gradient-to-r from-pink-900 via-blue-400 to-purple-800 px-6 py-3 text-white 
                           text-2xl sm:text-3xl md:text-4xl font-bold uppercase -rotate-2 shadow-xl
                           hover:rotate-0 transition-transform duration-300">
                {title}
              </h2>
            </div>
            {subtitle && (
              <p className="mt-6 text-gray-400 max-w-2xl">{subtitle}</p>
            )}
          </motion.div>
        );
    }
  };

  return renderHeading();
};

export default SectionHeading;