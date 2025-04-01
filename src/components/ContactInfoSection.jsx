import React from 'react';
import Image from 'next/image';
import blueFabric1 from '../../public/asset/images/img.png';
import blueFabric3 from '../../public/asset/images/img2.png';

const ContactInfoSection = () => {
  return (
    <div className="relative flex-1 z-10">
      <div className="absolute left-0 bottom-0 opacity-70 z-5 hidden md:block">
        <Image 
          src={blueFabric1} 
          alt="Decorative fabric" 
          width={600} 
          height={300}
          style={{ transform: 'translate(-45%, 50%) rotate(-10deg)' }}
        />
      </div>
      
      <h2 className="text-7xl font mb-6 text-white ml-5 mt-54">
        <span className="underline decoration-2 underline-offset-8">Let's</span> Connect
      </h2>
      
      <div className="absolute right-0 bottom-0 opacity-70 z-5 hidden md:block">
        <Image 
          src={blueFabric3} 
          alt="Decorative fabric" 
          width={620} 
          height={320}
          style={{ transform: 'translate(50%, 50%) rotate(-12deg)' }}
        />
      </div>

      <p className="mb-8 max-w-md text-white text-center text-xl mx-auto">
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
      <div className="space-y-6 mb-12 mt-20 flex flex-col items-center mx-auto">
        <div className="flex items-start space-x-3 w-full max-w-xs">
          <div className="mt-1 text-white flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="text-white">
            <h3 className="font-medium">Call Us</h3>
            <p>+94 75 374 9465</p>
          </div>
        </div>

        <div className="flex items-start space-x-3 w-full max-w-xs">
          <div className="mt-1 text-white flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="text-white">
            <h3 className="font-medium">Email Us</h3>
            <p>flowiix.dev@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start space-x-3 w-full max-w-xs">
          <div className="mt-1 text-white flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div className="text-white">
            <h3 className="font-medium">Location</h3>
            <p>No.136/1, Kathawala,Kaduwela</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;