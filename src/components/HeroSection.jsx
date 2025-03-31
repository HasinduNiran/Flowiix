"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const mouseXPercentage = (mousePosition.x / window.innerWidth) * 150;
  const mouseYPercentage = (mousePosition.y / window.innerHeight) * 150;

  const rotateX = (mouseYPercentage - 50) / 5;
  const rotateY = (mouseXPercentage - 50) / 5;
  return (
    <section className="relative flex flex-col lg:grid lg:grid-cols-2 px-4 sm:px-6 md:px-8 lg:px-10 h-screen overflow-hidden">
      <div className="z-10 lg:ml-24 mt-32 lg:mt-48 w-full max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
        <h2 className="text-white font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight">
          Find the project you love
        </h2>
        <p className="text-white mt-6 lg:mt-10 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer diam. Lorem ipsum
          dolor sit ame, consectetur Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Faucibus in libero risus semper habitant arcu eget.
          Et integer diam. Lorem ipsum dolor sit ame, consectetur
        </p>
        <button className="text-left bg-secoundary px-6 sm:px-8 py-2 sm:py-3 rounded-3xl mt-6 lg:mt-10 text-sm sm:text-base">
          Explore
        </button>
      </div>

      <motion.img
        className="absolute lg:relative top-1/2 left-1/2 lg:left-auto lg:top-auto -translate-x-1/2 -translate-y-1/2 lg:translate-x-1/3 opacity-80 lg:-translate-y-1/6 w-[90vw] sm:w-[80vw] lg:w-[70vw] max-w-[1100px] h-auto"
        src="/asset/images/flat-ring.png"
        alt="Rotating"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default HeroSection;
