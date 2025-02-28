import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <SectionHeading title="Let's Connect" 
          />
         
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300">
                  <div className="bg-teal-500/10 p-3 rounded-full">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-200 font-semibold">Email</h3>
                    <p className="bg-gradient-to-r from-pink-900 via-blue-400 to-purple-800 bg-clip-text text-transparent">your.email@example.com</p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300">
                  <div className="bg-teal-500/10 p-3 rounded-full">
                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-gray-200 font-semibold">Location</h3>
                    <p className="bg-gradient-to-r from-pink-900 via-blue-400 to-purple-800 bg-clip-text text-transparent">Your Location</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="access_key" value="bbd9ab85-940d-478a-b813-b58d2d9d8cbc" />
              
              <div className="group">
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-gray-800/50 border-0 border-b-2 border-gray-700 px-4 py-3 text-gray-100 focus:ring-0 focus:border-teal-500 transition-colors duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div className="group">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-gray-800/50 border-0 border-b-2 border-gray-700 px-4 py-3 text-gray-100 focus:ring-0 focus:border-teal-500 transition-colors duration-300"
                  placeholder="Your Email"
                />
              </div>

              <div className="group">
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-gray-800/50 border-0 border-b-2 border-gray-700 px-4 py-3 text-gray-100 focus:ring-0 focus:border-teal-500 transition-colors duration-300 resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-900 via-blue-400 to-purple-800 text-white font-semibold py-3 px-6 rounded-lg 
                         hover:from-pink-800 hover:via-blue-300 hover:to-purple-700 transition-all duration-300 transform hover:scale-[1.02] 
                         active:scale-95 shadow-lg hover:shadow-teal-500/25"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8 border-t border-gray-800">
            {/* Add your social media links here */}
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}