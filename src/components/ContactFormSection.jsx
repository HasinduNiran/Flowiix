import React from 'react';
import Image from 'next/image';
import rectangle from '../../public/asset/images/Rectangle.png';

const ContactFormSection = () => {
  return (
    <div className="flex-1 z-20 w-full">
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 flex flex-col items-start mb-6 md:mb-0 mt-60 ">
          <h2 className="text-3xl font-bold mb-6 text-white ml-32">Find Us!</h2>
          <p className="mb-6 text-white">
            Have a question or need assistance?<br /> Reach out to us via email,<br/> phone, or the contact form below.
          </p>
        </div>
        
        <div className="md:w-1/4 flex flex-col items-center mr-60">
          <div className="bg-primary bg-opacity-100 p-6 rounded-lg shadow-xl border border-gray-600 w-full max-w-md relative z-20 mr-8 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm mb-1 text-white">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-white text-white hover:border-white transition-colors duration-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm mb-1 text-white">Email:</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-white text-white hover:border-white transition-colors duration-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm mb-1 text-white">Message:</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-transparent border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:border-white text-white hover:border-white transition-colors duration-300"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-secoundary hover:bg-blue-700 text-white py-2 px-8 rounded-md w-full transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full" style={{ zIndex: 1 }}>
        <Image 
          src={rectangle} 
          alt="Bottom decoration" 
          width={1920}
          height={150}
          style={{
            width: '100%',
            height: '250px',
            display: 'block'
          }}
          priority
        />
      </div>
    </div>
  );
};

export default ContactFormSection;