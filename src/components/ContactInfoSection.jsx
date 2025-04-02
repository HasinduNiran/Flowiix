import React, { useEffect } from 'react';
import Image from 'next/image';
import blueFabric1 from '../../public/asset/images/img.png';
import blueFabric3 from '../../public/asset/images/img2.png';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactInfoSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative flex-1 z-10">
      {/* Left bottom fabric image with fixed positioning */}
      <div className="absolute left-0 bottom-0 opacity-60 z-5 hidden md:block">
        <motion.div 
          className="relative" 
          style={{ left: "-300px", bottom: "-50px" }}
          animate={{ 
            rotateZ: [0, 3, 0, 3, 0],
            y: [0, -10, 0, -10, 0]
          }}
          transition={{ 
            duration: 20,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
          }}
        >
          <Image 
            src={blueFabric1} 
            alt="Decorative fabric" 
            width={600} 
            height={300}
            className="transition-all duration-1000"
          />
        </motion.div>
      </div>
      
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          <span className="relative inline-block">
            <span className="underline decoration-2 underline-offset-8">Let's</span> Connect
            <motion.div 
              className="absolute -bottom-2 right-0 w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ delay: 0.7, duration: 0.8 }}
            ></motion.div>
          </span>
        </h2>
      </div>
      
      {/* Right bottom fabric image with fixed positioning */}
      <div className="absolute right-0 bottom-0 opacity-60 z-5 hidden md:block">
        <motion.div 
          className="relative" 
          style={{ right: "-250px", bottom: "-80px" }}
          animate={{ 
            rotateZ: [0, -3, 0, -3, 0],
            y: [0, 10, 0, 10, 0]
          }}
          transition={{ 
            duration: 15,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
            repeat: Infinity,
            delay: 2
          }}
        >
          <Image 
            src={blueFabric3} 
            alt="Decorative fabric" 
            width={520} 
            height={320}
            className="transition-all duration-1000"
          />
        </motion.div>
      </div>

      <motion.p 
        className="mb-12 max-w-lg text-gray-200 text-center text-xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        data-aos="fade-up" 
        data-aos-delay="200"
      >
        We're here to help and answer any question you might have. We look forward
        to hearing from you. Feel free to use the form, or use the contact information below.
      </motion.p>
      
      <div className="absolute left-1/2 opacity-15 z-5 hidden md:block" style={{ top: '300px', transform: 'translateX(-50%)' }}>
        <motion.div 
          className="w-162 h-98"
          style={{ 
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%)',
            filter: 'blur(30px)',
            transform: 'rotate(2deg)'
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>
      
      {/* Contact Information */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Phone Card */}
        <motion.div className="group relative h-full" variants={item} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-md opacity-75"
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <motion.div 
            className="relative h-full bg-primary backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-10 transition-all duration-300 shadow-lg overflow-hidden"
            whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <motion.div 
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Call Us</h3>
            </div>
            <p className="text-gray-300 ml-12">+94 75 374 9465</p>
            
            <motion.div 
              className="absolute bottom-0 left-0 right-0"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: "left" }}
            >
              <div className="h-[3px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>
              <div className="absolute -top-1 inset-x-0 h-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-30 blur-sm"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Email Card */}
        <motion.div className="group relative h-full" variants={item} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-md opacity-75"
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <motion.div 
            className="relative h-full bg-primary backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-10 transition-all duration-300 shadow-lg overflow-hidden"
            whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <motion.div 
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Email Us</h3>
            </div>
            <p className="text-gray-300 ml-12">flowiix.dev@gmail.com</p>
            
            <motion.div 
              className="absolute bottom-0 left-0 right-0"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: "left" }}
            >
              <div className="h-[3px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>
              <div className="absolute -top-1 inset-x-0 h-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-30 blur-sm"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Location Card */}
        <motion.div className="group relative h-full" variants={item} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-md opacity-75"
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <motion.div 
            className="relative h-full bg-primary backdrop-blur-lg rounded-lg p-6 border border-white border-opacity-10 transition-all duration-300 shadow-lg overflow-hidden"
            whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <motion.div 
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-semibold text-white">Location</h3>
            </div>
            <p className="text-gray-300 ml-12">No.136/1, Kathawala, Kaduwela</p>
            
            <motion.div 
              className="absolute bottom-0 left-0 right-0"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: "left" }}
            >
              <div className="h-[3px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500"></div>
              <div className="absolute -top-1 inset-x-0 h-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-30 blur-sm"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactInfoSection;