import React from 'react';
import Image from 'next/image';
import blueFabric1 from '../../public/asset/images/img.png';
import blueFabric3 from '../../public/asset/images/img2.png';

const ContactInfoSection = () => {
  return (
    <div className="relative flex-1 z-10">
      {/* Left bottom fabric image with fixed positioning */}
      <div className="absolute left-0 bottom-0 opacity-60 z-5 hidden md:block">
        <div className="relative" style={{ left: "-300px", bottom: "-50px" }}>
          <Image 
            src={blueFabric1} 
            alt="Decorative fabric" 
            width={600} 
            height={300}
            className="transition-all duration-1000 hover:-rotate-3 animate-slow-float"
          />
        </div>
      </div>
      
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          <span className="relative inline-block">
            <span className="underline decoration-2 underline-offset-8">Let's</span> Connect
            <div className="absolute -bottom-2 right-0 w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
          </span>
        </h2>
      </div>
      
      {/* Right bottom fabric image with fixed positioning */}
      <div className="absolute right-0 bottom-0 opacity-60 z-5 hidden md:block">
        <div className="relative" style={{ right: "-250px", bottom: "-80px" }}>
          <Image 
            src={blueFabric3} 
            alt="Decorative fabric" 
            width={520} 
            height={320}
            className="transition-all duration-1000 hover:rotate-3 animate-slow-float-reverse"
          />
        </div>
      </div>

      <p className="mb-12 max-w-lg text-gray-200 text-center text-xl mx-auto leading-relaxed">
        We're here to help and answer any question you might have. We look forward
        to hearing from you. Feel free to use the form, or use the contact information below.
      </p>
      
      <div className="absolute left-1/2 opacity-15 z-5 hidden md:block" style={{ top: '300px', transform: 'translateX(-50%)' }}>
        <div 
          className="w-162 h-98"
          style={{ 
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)',
            filter: 'blur(30px)',
            transform: 'rotate(2deg)'
          }}
        ></div>
      </div>
      
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
        {/* Phone Card */}
        <div className="group relative h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative h-full bg-primary backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300 hover:-translate-y-1 shadow-lg overflow-hidden">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Call Us</h3>
            </div>
            <p className="text-gray-300 ml-12">+94 75 374 9465</p>
            
            {/* Card bottom gradient line positioned at bottom edge */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="h-[3px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>
              <div className="absolute -top-1 inset-x-0 h-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-30 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Email Card */}
        <div className="group relative h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative h-full bg-primary backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300 hover:-translate-y-1 shadow-lg overflow-hidden">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Email Us</h3>
            </div>
            <p className="text-gray-300 ml-12">flowiix.dev@gmail.com</p>
            
            {/* Card bottom gradient line positioned at bottom edge */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="h-[3px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>
              <div className="absolute -top-1 inset-x-0 h-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-30 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="group relative h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative h-full bg-primary backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300 hover:-translate-y-1 shadow-lg overflow-hidden">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Location</h3>
            </div>
            <p className="text-gray-300 ml-12">No.136/1, Kathawala, Kaduwela</p>
            
            {/* Card bottom gradient line positioned at bottom edge */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="h-[3px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>
              <div className="absolute -top-1 inset-x-0 h-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-30 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;