"use client";

import React, { useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs,
  SiGit, SiDocker, SiAmazon, SiMongodb, SiPython,
  SiDjango, SiRedux, SiFirebase, SiPostgresql, SiGraphql,
  SiBootstrap,
  SiSanity
} from "react-icons/si";
import SectionHeading from "@/components/Helper/SectionHeading";

const skillsData = {
  frontend: {
    title: "Frontend Development",
    description: "Building exceptional user interfaces",
    icon: "🎨",
    skills: [
      { name: "React", level: 95, icon: <SiReact />, color: "#61DAFB", years: 3, category: "Framework" },
      { name: "Next.js", level: 90, icon: <SiNextdotjs />, color: "#000000", years: 2, category: "Framework" },
      { name: "TypeScript", level: 85, icon: <SiTypescript />, color: "#007ACC", years: 2, category: "Language" },
      { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss />, color: "#38B2AC", years: 2, category: "Styling" },
    
    ]
  },
  backend: {
    title: "Backend Development",
    description: "Creating robust server solutions",
    icon: "⚡",
    skills: [
      { name: "Node.js", level: 85, icon: <SiNodedotjs />, color: "#339933", years: 2, category: "Runtime" },
      { name: "Python", level: 80, icon: <SiPython />, color: "#3776AB", years: 1, category: "Language" },
      { name: "MongoDB", level: 80, icon: <SiMongodb />, color: "#47A248", years: 1, category: "Database" },
      { name: "Firebase", level: 85, icon: <SiFirebase />, color: "#FFCA28", years: 2, category: "Platform" },
    ]
  },
  tools: {
    title: "Development Tools",
    description: "Mastering professional tools",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 90, icon: <SiGit />, color: "#F05032", years: 3, category: "Version Control" },
      { name: "Docker", level: 75, icon: <SiDocker />, color: "#2496ED", years: 1, category: "Containerization" },
      { name: "AWS", level: 70, icon: <SiAmazon />, color: "#FF9900", years: 1, category: "Cloud" },
      { name: "Sanity CMS", level: 85, icon: <SiSanity />, color: "#F03E2F", years: 2, category: "CMS" },
    ]
  }
}; 

export default function Skills() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const animateSkills = async () => {
      await animate(".skill-category", 
        { opacity: 1, y: 0 }, 
        { duration: 0.5, delay: stagger(0.2) }
      );
      await animate(".skill-card", 
        { opacity: 1, scale: 1 }, 
        { duration: 0.3, delay: stagger(0.1, { startDelay: 0.4 }) }
      );
      await animate(".progress-bar", 
        { width: "100%" }, 
        { duration: 1.5, delay: stagger(0.1) }
      );
    };

    animateSkills();
  }, [animate]);

  return (
    <section 
      id="skills"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-[#0B0F1A] to-gray-900 py-24 px-4 overflow-hidden"
      ref={scope}
    >
      {/* Floating Particles Background */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-pink-900/20 to-purple-800/20 rounded-full"
            initial={{
              scale: 0,
              opacity: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              scale: [0, 0.5, 0],
              opacity: [0, 0.3, 0],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: `${Math.random() * 20 + 10}px`,
              height: `${Math.random() * 20 + 10}px`
            }}
          />
        ))}
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <SectionHeading 
            title="Technical Mastery"
            subtitle="Precision-crafted solutions through cutting-edge technologies"
            theme="decorated"
          />
        </motion.div>

        <div className="space-y-24">
          {Object.entries(skillsData).map(([key, category], categoryIndex) => (
            <motion.div
              key={key}
              className="skill-category opacity-0 translate-y-10"
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-900 via-blue-400 to-purple-800 bg-clip-text text-transparent mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-300/80 font-light max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-card opacity-0 scale-95"
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative p-6 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-xl hover:border-pink-800/30 transition-all duration-300 group hover:shadow-2xl hover:shadow-pink-500/10">
                      {/* Glowing Border Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-900/20 via-blue-400/20 to-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div 
                          className="text-4xl p-3 rounded-lg bg-gray-700/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r from-pink-900/20 via-blue-400/20 to-purple-800"
                          style={{ color: skill.color }}
                        >
                          {skill.icon}
                        </div>
                        <span className="text-xs font-medium text-pink-400 bg-pink-500/10 px-2 py-1 rounded-full">
                          {skill.years}+ Years
                        </span>
                      </div>
                      
                      {/* Skill Details */}
                      <div className="space-y-5">
                        <h4 className="text-xl font-semibold text-white group-hover:text-pink-300 transition-colors duration-300">
                          {skill.name}
                        </h4>
                        
                        {/* Progress Bar */}
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm font-medium">
                            <span className="text-gray-400">Mastery</span>
                            <span className="text-pink-400">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-gray-700/30 rounded-full overflow-hidden">
                            <motion.div
                              className="progress-bar h-full rounded-full bg-gradient-to-r from-pink-900 via-blue-400 to-purple-800"
                              style={{ width: 0 }}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute -top-40 left-1/4 w-[800px] h-[800px] bg-radial-gradient(from 60% 50% at 50% 50%, #0ff1 0%, transparent 60%) pointer-events-none" />
      <div className="absolute -bottom-40 right-1/4 w-[800px] h-[800px] bg-radial-gradient(from 60% 50% at 50% 50%, #00f8ff1a 0%, transparent 60%) pointer-events-none" />
    </section>
  );
}