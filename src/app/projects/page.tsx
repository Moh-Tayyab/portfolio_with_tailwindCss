import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/projects';

export default function Projects() {
  return (
    <section id="project" className="bg-black py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r bg-teal-400  bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring the intersection of innovation and execution through our development projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 shadow-2xl hover:shadow-teal-500/20"
            >
              <div className="relative h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />
              </div>

              <div className="p-6">
                
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Link
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-teal-400 hover:text-white border border-teal-400 rounded-lg hover:bg-teal-400/10 transition-colors duration-300"
                  >
                    Case Study
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <div className="flex space-x-2">
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-teal-400 rounded-full hover:bg-teal-500 transition-colors duration-300"
          >
            View All Projects
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}