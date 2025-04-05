"use client";
import React, { useEffect, useState } from "react";
import { useScroll, useTransform } from "motion/react";
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

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

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

        {/* Right Image */}
        <motion.img
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
//div