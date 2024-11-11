"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si";

// Define an interface for the bubble object
interface Bubble {
  animationDuration: string;
  animationDelay: string;
  left: string;
  top: string;
  size: string;
}

const skills = [
  { name: "HTML", level: 90, icon: <SiHtml5 color="#E34F26" /> },
  { name: "CSS", level: 85, icon: <SiCss3 color="#1572B6" /> },
  { name: "JavaScript", level: 80, icon: <SiJavascript color="#F7DF1E" /> },
  { name: "TypeScript", level: 75, icon: <SiTypescript color="#007ACC" /> },
  { name: "React", level: 85, icon: <SiReact color="#61DAFB" /> },
  { name: "Next.js", level: 70, icon: <SiNextdotjs color="#000000" /> },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss color="#38B2AC" /> },
  { name: "Node.js", level: 70, icon: <SiNodedotjs color="#339933" /> },
];

export default function Skills() {
  const [randomValues, setRandomValues] = useState<Bubble[]>([]);

  useEffect(() => {
    const randomBubbles = [...Array(15)].map(() => ({
      animationDuration: `${Math.random() * 10 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 30 + 10}px`,
    }));
    setRandomValues(randomBubbles);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {randomValues.map((bubble, index) => {
          const colors = ["#FF69B4", "#87CEEB", "#9370DB"];
          const color = colors[index % colors.length];

          return (
            <div
              key={index}
              className="bubble"
              style={{
                backgroundColor: color,
                animationDuration: bubble.animationDuration,
                animationDelay: bubble.animationDelay,
                left: bubble.left,
                top: bubble.top,
                width: bubble.size,
                height: bubble.size,
              }}
            />
          );
        })}
      </div>

      <div className="flex flex-col items-center py-12 z-10 relative">
        <h2 className="text-6xl font-bold text-teal-400 mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl px-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative p-8 min-w-[250px] min-h-[200px] rounded-lg neon-border flex flex-col items-center text-center shadow-lg bg-gray-800"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">{skill.name}</h3>
              <div className="w-full bg-gray-800 h-4 rounded-full mb-3">
                <motion.div
                  className="h-4 rounded-full neon-glow"
                  style={{ backgroundColor: skill.icon.props.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                ></motion.div>
              </div>
              <div className="text-white text-lg px-8 py-3 bg-gray-900 rounded-lg">
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .neon-border {
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4);
          transition: box-shadow 0.3s ease;
        }
        .neon-border:hover {
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6);
        }
        .neon-glow {
          box-shadow: 0 0 10px rgba(255, 20, 147, 0.8), 0 0 20px rgba(255, 20, 147, 0.5);
        }

        /* Background Bubble Animation */
        .bubble {
          position: absolute;
          border-radius: 50%;
          animation: float 10s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          25% {
            transform: translate(-50px, -50px);
            opacity: 0.8;
          }
          50% {
            transform: translate(50px, -50px);
            opacity: 0.6;
          }
          75% {
            transform: translate(50px, 50px);
            opacity: 0.4;
          }
          100% {
            transform: translate(-50px, 50px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
