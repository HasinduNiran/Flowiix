"use client";
import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Spline from "@splinetool/react-spline";
import { BackgroundBeams } from "./ui/background-beams";
import ServiceStats from "./serviceStats";
import FireWorks from "../../public/asset/images/home/Animation - 1744446701757.json";

const HeroSection = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hueValue, setHueValue] = useState(0);
  const colors = [
    "hue-rotate(0deg) saturate(2)",
    "hue-rotate(90deg) saturate(1.5)",
    "hue-rotate(180deg) saturate(1.8)",
    "hue-rotate(270deg) saturate(2)",
    "hue-rotate(360deg) saturate(1.5)",
  ];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      setHueValue(Math.floor(Math.random() * 360));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <section className="overflow-hidden">
      <div className="relative flex flex-col lg:grid lg:grid-cols-2 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="z-10 lg:text-left text-center lg:ml-24 mt-32 lg:mt-40 w-full max-w-2xl mx-auto lg:mx-0 px-4 ">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-white font-semibold text-6xl lg:text-7xl leading-tight lg:mt-10 mt-16 "
          >
            Turning Vision into Reality
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-white px-10 lg:px-0 lg:mt-8 mt-10 text-sm sm:text-base leading-relaxed"
          >
            We are a forward-thinking startup, passionate about transforming
            ideas into powerful digital experiences. From intuitive web
            applications to scalable mobile solutions, we craft technology that
            drives impact and innovation.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left bg-secoundary px-8 py-3 rounded-3xl mt-10  lg:mt-10 text-md "
          >
            Explore
          </motion.button>
        </div>
        {/* <motion.div
          className="absolute inset-0 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at left center, #9fbcea 0%, transparent 70%)",
            opacity: 0.4,
            left: "-50%",
            width: "150%",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        /> */}

        {/* <img
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 
          lg:left-auto lg:translate-x-4/6 opacity-15 lg:opacity-80 
          lg:-translate-y-2/5 w-full h-auto animate-spin-slow"
          src="/asset/images/flat-ring.png"
          alt="Rotating"
        /> */}
      </div>
      <motion.div
        className="w-full h-screen absolute bottom-0 left-0 pointer-events-none"
        animate={{
          x: (mouse.x - window.innerWidth / 2) * 0.02,
          y: (mouse.y - window.innerHeight / 2) * 0.02,
        }}
        transition={{
          type: "keyframes",
          stiffness: 50,
          damping: 20,
        }}
      >
        {/* Background Image (Tower) */}

        <div className="w-full h-screen overflow-hidden absolute top-0 left-0">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-50 bg-gradient-to-t from-primary to-transparent pointer-events-none" />

          {/* Mask Image */}

          <div className="absolute right-[18px] top-[218px] z-50">
            <img
              src="/asset/images/nelumkuluna_mask.png"
              className="transition-filter duration-1000 ease-in-out"
              alt="Nelum Kuluna"
              style={{
                transform: "scale(1.9)",
                filter: colors[currentColorIndex],
              }}
            />
          </div>

          {/* Background Image */}
          <img
            src="/asset/images/nelum_kuluna-2.png"
            className="w-[140%] h-full object-cover object-right "
            alt="Nelum Kuluna"
          />
        </div>

        {/* Fireworks aligned to tower at right-32 */}
        <div className="absolute bottom-[43%] rotate-z-12 right-56 z-50 transform translate-x-1/2">
          <Lottie
            animationData={FireWorks}
            className="w-60 opacity-60 sm:w-64 lg:w-64"
          />
        </div>
        <div className="absolute bottom-[43%] -rotate-z-12 right-96 z-50 transform translate-x-1/2">
          <Lottie
            animationData={FireWorks}
            className="w-60 opacity-60 sm:w-64 lg:w-64"
          />
        </div>
      </motion.div>

      <div className="mt-20 ">
        <ServiceStats />
      </div>
    </section>
  );
};

export default HeroSection;
