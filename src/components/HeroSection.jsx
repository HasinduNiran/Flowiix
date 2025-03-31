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

  return (
    <section className="overflow-hidden">
      <div className="relative flex flex-col lg:grid lg:grid-cols-2 px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Left Text Section */}
        <div className="z-10 lg:ml-24 mt-32 lg:mt-40 w-full max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
          <h2 className="text-white font-semibold text-4xl sm:text-5xl lg:text-7xl leading-tight mt-10">
            Find the project you love
          </h2>
          <p className="text-white mt-6 lg:mt-8 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu eget. Et integer diam. Lorem ipsum
            dolor sit ame, consectetur Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <button className="text-left bg-secoundary px-6 sm:px-8 py-2 sm:py-3 rounded-3xl mt-6 lg:mt-8 text-sm sm:text-base">
            Explore
          </button>
        </div>

        {/* Right Image */}
        <motion.img
          className="absolute top-1/3 
         lg:translate-x-6/6 opacity-80 lg:-translate-y-2/5
        w-[90vw] sm:w-[80vw] max-w-[1050px] h-auto"
          src="/asset/images/flat-ring.png"
          alt="Rotating"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="-mt-16 ">
        <ServiceStats />
      </div>

      <BackgroundBeams />
    </section>
  );
};

export default HeroSection;
