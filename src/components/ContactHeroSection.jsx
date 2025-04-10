import React, { useEffect } from 'react';
import Image from 'next/image';
import blueFabric2 from '../../public/asset/images/img4.png';
import blueFabric4 from '../../public/asset/images/img3.png';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './hero.css'

const ContactHeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="text-left mx-auto max-w-3xl mb-20 z-10 relative h-screen px-4">
              
      {/* Right top fabric image with fixed positioning */}
      <div className="absolute right-0 top-0 opacity-100 z-5 hidden md:block">
        <motion.div 
          className="relative" 
          style={{ right: "-700px", top: "-450px" }}
          animate={{ 
            rotateZ: [0, 5, 0, 5, 0],
            y: [0, -15, 0, -15, 0]
          }}
          transition={{ 
            duration: 15,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
          }}
        >
          <Image 
            src={blueFabric2} 
            alt="Decorative fabric" 
            width={700} 
            height={850}
            className="transition-all duration-1000"
          />
        </motion.div>
      </div>
      
      {/* Left top fabric image with fixed positioning */}
      <div className="absolute left-0 top-0 opacity-100 z-5 hidden md:block">
        <motion.div 
          className="relative" 
          style={{ left: "-600px", top: "-450px" }}
          animate={{ 
            rotateZ: [0, -3, 0, -3, 0],
            y: [0, 15, 0, 15, 0]
          }}
          transition={{ 
            duration: 18,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            delay: 1
          }}
        >
          <Image 
            src={blueFabric4} 
            alt="Decorative fabric" 
            width={980} 
            height={480}
            className="transition-all duration-1000"
          />
        </motion.div>
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

      <div className="relative text-center w-full pl-0 flex justify-center items-center">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white mt-40 tracking-tight whitespace-nowrap text-center mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: "center" }}
        >
          <span className="relative inline-block">
            <span className="relative inline-block">
              Get in
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
              ></motion.div>
            </span>
            {" "}<span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Touch</span>&nbsp;with Us
          </span>
        </motion.h1>
      </div>
      
      <motion.p 
  className="text-xl text-gray-200 mx-auto mt-1 leading-relaxed flex flex-col items-center w-full"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  data-aos="fade-up"
  data-aos-delay="200"
>
  <span className="block mb-5 text-center">Have questions? We'd love to hear from you. Our team is always ready to help and provide the support you need. </span>
  <span className="block text-center"></span>
</motion.p>
      
      <div className="relative h-24 mt-8">
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 w-72 h-48 opacity-20"
          style={{ 
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)',
            filter: 'blur(30px)'
          }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default ContactHeroSection;
