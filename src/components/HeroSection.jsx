"use client";
import React from "react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import ServiceStats from "./serviceStats";

const HeroSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative flex flex-col lg:grid lg:grid-cols-2 px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Left Text Section */}
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
        <motion.div
          className="absolute inset-0 blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at left center, #9fbcea 0%, transparent 70%)",
            opacity: 0.4,
            left: "-50%", // Extend the gradient further left
            width: "150%", // Widen the gradient area
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
        />

        {/* Right Image */}
        <img
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 
          lg:left-auto lg:translate-x-6/6 opacity-15 lg:opacity-80 
          lg:-translate-y-2/5 max-w-[1050px] h-auto animate-spin-slow"
          src="/asset/images/flat-ring.png"
          alt="Rotating"
        />
      </div>

      <div className="mt-20 ">
        <ServiceStats />
      </div>

      <BackgroundBeams />
    </section>
  );
};

export default HeroSection;
