import React from 'react';
import Image from 'next/image';
import blueFabric2 from '../../public/asset/images/img4.png';
import blueFabric4 from '../../public/asset/images/img3.png';

const ContactHeroSection = () => {
  return (
    <div className="text-center mx-auto max-w-3xl mb-12 z-10 relative">
              
      <div className="absolute right-0 top-0 opacity-70 z-5 hidden md:block">
        <Image 
          src={blueFabric2} 
          alt="Decorative fabric" 
          width={850} 
          height={850}
          style={{ transform: 'translate(110%, -55%) rotate(8deg)' }}
        />
      </div>
      <div className="absolute left-0 top-0 opacity-70 z-5 hidden md:block">
        <Image 
          src={blueFabric4} 
          alt="Decorative fabric" 
          width={680} 
          height={480}
          style={{ transform: 'translate(-670px, -299px) rotate(2deg)' }}
        />
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

      <h1 className="text-7xl font mb-6 text-white mt-16">Get in Touch with Us</h1>
      <p className="text-lg text-white mx-auto">
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
      {/* <div className="relative h-24 mt-16">
        <div 
          className="absolute left-1/9 transform -translate-x-1/2 w-72 h-48 opacity-20"
          style={{ 
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)',
            filter: 'blur(10px)',
            top: '100%'
          }}
        ></div>
      </div> */}
    </div>
  );
};

export default ContactHeroSection;
