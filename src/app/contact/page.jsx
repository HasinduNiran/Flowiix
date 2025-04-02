"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { throttle } from "lodash";
import ContactHeroSection from "../../components/ContactHeroSection";
import ContactInfoSection from "../../components/ContactInfoSection";
import ContactFormSection from "../../components/ContactFormSection";

const ContactPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 0);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-primary min-h-screen w-full relative overflow-hidden">
      <Navbar isScrolled={isScrolled} />
      
      {/* Enhanced floating decorative elements with motion */}
      <motion.div 
        className="absolute top-1/16 left-1/5 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 15, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute top-3/5 right-1/5 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ 
          scale: [1, 1.15, 1],
          x: [0, 25, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      ></motion.div>
      
      {/* Dynamic particles in the background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              opacity: [Math.random() * 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 md:px-8 py-16 flex flex-col flex-grow justify-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <ContactHeroSection />
        <ContactInfoSection />
        <ContactFormSection />
      </motion.div>
    </div>
  );
};

export default ContactPage;