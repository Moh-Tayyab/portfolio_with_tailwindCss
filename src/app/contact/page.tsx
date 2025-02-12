import React from 'react';

function ContactForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-teal-700 p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 relative overflow-hidden border border-white/10 transform transition-all duration-500 hover:shadow-3xl">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-teal-400/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-teal-600/30 rounded-full blur-xl"></div>
        
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST"
          className="space-y-8 relative z-10"
        >
          <input 
            type="hidden" 
            name="access_key" 
            value="bbd9ab85-940d-478a-b813-b58d2d9d8cbc" 
            required 
          />

          {/* Name Input */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative flex items-center space-x-4 bg-gray-900/50 rounded-lg p-4 focus-within:ring-2 ring-teal-500">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=" "
                required
                className="w-full bg-transparent border-0 text-gray-100 placeholder-transparent focus:ring-0 text-lg peer"
              />
              <label 
                htmlFor="name" 
                className="absolute left-14 -top-6 text-sm text-teal-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-teal-400"
              >
                Full Name
              </label>
            </div>
          </div>

          {/* Email Input */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative flex items-center space-x-4 bg-gray-900/50 rounded-lg p-4 focus-within:ring-2 ring-teal-500">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                required
                className="w-full bg-transparent border-0 text-gray-100 placeholder-transparent focus:ring-0 text-lg peer"
              />
              <label 
                htmlFor="email" 
                className="absolute left-14 -top-6 text-sm text-teal-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-teal-400"
              >
                Email Address
              </label>
            </div>
          </div>

          {/* Message Input */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-gray-900/50 rounded-lg p-4 focus-within:ring-2 ring-teal-500">
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-teal-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                </svg>
                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  required
                  className="w-full bg-transparent border-0 text-gray-100 placeholder-transparent focus:ring-0 text-lg h-32 resize-none peer"
                ></textarea>
              </div>
              <label 
                htmlFor="message" 
                className="absolute left-14 -top-6 text-sm text-teal-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-teal-400"
              >
                Your Message
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg font-bold text-white uppercase tracking-wider hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
          >
            Send Message
            <span className="ml-2">🚀</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;