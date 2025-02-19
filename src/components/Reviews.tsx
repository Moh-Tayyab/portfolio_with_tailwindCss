"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

interface ReviewProps {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
    company?: string;
    date?: string;
  };
}

const ReviewCard = ({ review }: ReviewProps) => {
  const { name, rating, profession, image, review: clientReview, company, date } = review;

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 * index }}
      >
        <FaStar
          className={`text-lg ${
            index < rating ? "text-yellow-400" : "text-gray-600"
          } transition-colors duration-300`}
        />
      </motion.span>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 
                 shadow-2xl transition-all duration-500 hover:shadow-[0_8px_30px_rgb(20,184,166,0.15)]"
    >
      {/* Decorative Elements */}
      <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-teal-500/10 blur-2xl" />
      <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl" />
      
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-4xl text-teal-500/20">
        <FaQuoteLeft />
      </div>

      {/* Review Content */}
      <div className="relative z-10 space-y-6">
        {/* Rating Stars */}
        <div className="flex items-center space-x-1">
          {renderStars()}
          <span className="ml-2 text-sm font-medium text-gray-400">
            ({rating}.0)
          </span>
        </div>

        {/* Review Text */}
        <div className="min-h-[100px]">
          <p className="text-lg leading-relaxed text-gray-300 italic">
            &ldquo;{clientReview}&rdquo;
          </p>
        </div>

        {/* Reviewer Info */}
        <div className="flex items-center border-t border-gray-700/50 pt-6">
          <div className="relative h-14 w-14 flex-shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              className="rounded-full object-cover ring-2 ring-teal-500/20"
            />
          </div>
          <div className="ml-4 flex flex-col">
            <h3 className="text-xl font-semibold text-white group-hover:text-teal-400 transition-colors duration-300">
              {name}
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm">
              <span className="text-teal-400">{profession}</span>
              {company && (
                <>
                  <span className="hidden sm:inline text-gray-500 mx-2">•</span>
                  <span className="text-gray-400">{company}</span>
                </>
              )}
            </div>
            {date && (
              <span className="text-xs text-gray-500 mt-1">
                {date}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;