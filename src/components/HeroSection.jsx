"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import { MaskContainer } from "./ui/svg-mask-effect";
import ServiceStats from "./serviceStats";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const pathLengths = [0.2, 0.4, 0.6, 0.8, 1.0];

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("resize", () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", () => {});
      };
    }
  }, []);

  const mouseXPercentage = (mousePosition.x / windowSize.width) * 150 || 0;
  const mouseYPercentage = (mousePosition.y / windowSize.height) * 150 || 0;

  const rotateX = (mouseYPercentage - 50) / 5;
  const rotateY = (mouseXPercentage - 50) / 5;

  // Animation variants
  const textContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  
  const textChild = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="overflow-hidden">
      <div className="relative flex flex-col lg:grid lg:grid-cols-2 px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Left Text Section */}
        <motion.div 
          className="z-10 lg:ml-24 mt-32 lg:mt-40 w-full max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0"
          initial="hidden"
          animate="visible"
          variants={textContainer}
        >
          <motion.h2 
            className="text-white font-semibold text-4xl sm:text-5xl lg:text-7xl leading-tight mt-10"
            variants={textContainer}
          >
            {"Find the project you love".split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                variants={textChild}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p 
            className="text-white mt-6 lg:mt-8 text-sm sm:text-base"
            variants={textChild}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer diam. Lorem ipsum
            dolor sit ame, consectetur Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </motion.p>
          <motion.button 
            className="text-left bg-secoundary px-6 sm:px-8 py-2 sm:py-3 rounded-3xl mt-6 lg:mt-8 text-sm sm:text-base relative overflow-hidden"
            variants={textChild}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0"
              whileHover={{ opacity: 0.2 }}
              transition={{ duration: 0.3 }}
            />
            Explore
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="absolute top-1/3 
          lg:translate-x-6/6 opacity-80 lg:-translate-y-2/5
          w-[90vw] sm:w-[80vw] max-w-[1050px] h-auto"
          animate={{ 
            rotate: 360,
            filter: [
              'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))',
              'drop-shadow(0 0 20px rgba(124, 58, 237, 0.3))',
              'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))'
            ]
          }}
          transition={{ 
            rotate: { duration: 100, repeat: Infinity, ease: "linear" },
            filter: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <motion.img
            src="/asset/images/flat-ring.png"
            alt="Rotating"
            className="w-full h-auto"
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px"
            }}
            animate={{
              rotateX: [0, rotateX, 0],
              rotateY: [0, rotateY, 0],
            }}
            transition={{
              duration: 1,
              ease: "easeOut"
            }}
          />
        </motion.div>

        {/* Add some floating particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4
            }}
            animate={{
              y: [0, -Math.random() * 50 - 20],
              x: [0, (Math.random() - 0.5) * 30],
              opacity: [Math.random() * 0.4, 0],
              scale: [1, Math.random() + 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <motion.div 
        className="-mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <ServiceStats />
      </motion.div>

      <BackgroundBeams />
    </section>
  );
};

export default HeroSection;
