import React from 'react';
import Image from 'next/image';
import blueFabric2 from '../../public/asset/images/img4.png';
import blueFabric4 from '../../public/asset/images/img3.png';

const ContactHeroSection = () => {
  return (
    <div className="text-center mx-auto max-w-3xl mb-20 z-10 relative">
              
      {/* Right top fabric image with fixed positioning */}
      <div className="absolute right-0 top-0 opacity-60 z-5 hidden md:block">
        <div className="relative" style={{ right: "-700px", top: "-450px" }}>
          <Image 
            src={blueFabric2} 
            alt="Decorative fabric" 
            width={850} 
            height={850}
            className="transition-all duration-1000 hover:rotate-3 animate-slow-float"
          />
        </div>
      </div>
      
      {/* Left top fabric image with fixed positioning */}
      <div className="absolute left-0 top-0 opacity-60 z-5 hidden md:block">
        <div className="relative" style={{ left: "-550px", top: "-250px" }}>
          <Image 
            src={blueFabric4} 
            alt="Decorative fabric" 
            width={480} 
            height={480}
            className="transition-all duration-1000 hover:rotate-2 animate-slow-float-reverse"
          />
        </div>
      </div>
      
      <div className="absolute right-1/2 opacity-20 z-5 hidden md:block" style={{ top: '300px' }}>
        <div 
          className="w-162 h-98"
          style={{ 
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)',
            filter: 'blur(30px)',
            transform: 'translate(-350px, 0) rotate(2deg)'
          }}
        ></div>
      </div>

      <div className="relative">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white mt-16 tracking-tight">
          <span className="relative inline-block">
            Get in <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Touch</span> with Us
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </span>
        </h1>
      </div>
      
      <p className="text-lg text-gray-200 mx-auto max-w-xl mt-8 leading-relaxed">
        Have questions? We'd love to hear from you. Our team is always ready to help and
        provide the support you need.
      </p>
      
      <div className="relative h-24 mt-8">
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 w-72 h-48 opacity-20"
          style={{ 
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)',
            filter: 'blur(30px)'
          }}
        ></div>
      </div>
    </div>
  );
};

export default ContactHeroSection;
