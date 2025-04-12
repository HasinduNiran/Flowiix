import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex-1 z-20">
      <h2 className="text-3xl font-bold mb-6 md:hidden text-white">Find Us!</h2>
      <p className="mb-6 md:hidden text-white">
        Have a question or need assistance? Reach out to us via email, phone, or the contact form below.
      </p>

      <div className="bg-primary bg-opacity-80 p-6 rounded-lg shadow-lg border border-gray-700 w-full max-w-md mx-auto md:mx-0 relative z-20">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm mb-1 text-white">Full Name:</label>
            <input
              type="text"
              id="name"
              className="w-full bg-transparent border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-white text-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1 text-white">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full bg-transparent border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-white text-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm mb-1 text-white">Message:</label>
            <textarea
              id="message"
              rows="5"
              className="w-full bg-transparent border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-white text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-secoundary hover:bg-blue-700 text-white py-2 px-8 rounded-md w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
