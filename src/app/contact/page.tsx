import React from 'react';

function ContactForm() {
  return (
    <div className="flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-md bg-gradient-to-br from-teal-700 to-teal-200 rounded-lg p-10 shadow-lg transform transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl text-white">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Now</h1>
        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
          <input type="hidden" name="access_key" value="bbd9ab85-940d-478a-b813-b58d2d9d8cbc" required />
          <div className="input-field">
            <label htmlFor="name" className="block font-semibold mb-2 text-gray-200">First Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your first name"
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-teal-500 transition duration-300"
            />
          </div>
          <div className="input-field">
            <label htmlFor="email" className="block font-semibold mb-2 text-gray-200">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-teal-500 transition duration-300"
            />
          </div>
          <div className="input-field">
            <label htmlFor="message" className="block font-semibold mb-2 text-gray-200">Your Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:border-teal-500 transition duration-300 resize-none h-40"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-teal-600 to-teal-400 text-white font-semibold py-3 rounded-lg hover:from-teal-500 hover:to-teal-400 transition-transform duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
