"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import ServiceStats from "./serviceStats";
import FireWorks from "../../public/asset/images/home/Animation - 1744446701757.json";

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
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
    setIsClient(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const colorInterval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % colors.length);
      setHueValue(Math.floor(Math.random() * 360));
    }, 2000);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(colorInterval);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
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
      </div>
      {isClient && (
        <motion.div
          className="w-full h-screen absolute bottom-0 left-0 pointer-events-none"
          animate={{
            x: (mouse.x - windowSize.width / 2) * 0.02,
            y: (mouse.y - windowSize.height / 2) * 0.02,
          }}
          transition={{
            type: "keyframes",
            stiffness: 50,
            damping: 20,
          }}
        >
          {/* Background Image (Tower) */}
          <div className="w-full h-screen overflow-hidden absolute top-0 left-0">
            <div className="absolute inset-0 z-50 bg-gradient-to-t from-primary to-transparent pointer-events-none" />

            <Image
              src="/asset/images/night_victoria.jpg"
              alt="Nelum Kuluna"
              width={1920}
              height={1080}
              className="w-[140%] h-full object-cover object-right"
            />

            <div className="absolute bottom-[150px] 2xl:bottom-[280px] right-[20%] z-30  translate-x-1/2">
              <img
                src="/asset/images/nelum_mask2.png"
                className="absolute w-[110px] 2xl:w-[200px] "
                alt="Nelum Kuluna Mask"
                style={{
                  filter: colors[currentColorIndex],
                }}
              />
              <img
                src="/asset/images/lotus_tower3.png"
                className="w-[110px] 2xl:w-[200px] z-30"
                alt="Nelum Kuluna Mask"
              />

              <motion.img
                src="/asset/images/light_beam.png"
                className="absolute h-[600px] -bottom-4 opacity-30"
                style={{
                  transformOrigin: "center bottom",
                  right: "40px",
                }}
                initial={{ rotate: 30 }}
                animate={{ rotate: [30, 60, 30] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                alt="Light Beam"
              />
              <motion.img
                src="/asset/images/light_beam.png"
                className="absolute h-[660px] -bottom-4 -z-10 opacity-30"
                style={{
                  transformOrigin: "center bottom",
                  right: "40px",
                }}
                initial={{ rotate: 60 }}
                animate={{ rotate: [60, 30, 60] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                alt="Light Beam"
              />
              <motion.img
                src="/asset/images/light_beam.png"
                className="absolute h-[600px] -bottom-4 opacity-30"
                style={{
                  transformOrigin: "center bottom",
                  right: "-40px",
                }}
                initial={{ rotate: 350 }}
                animate={{ rotate: [330, 300, 330] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                alt="Light Beam"
              />
              <motion.img
                src="/asset/images/light_beam.png"
                className="absolute h-[660px] -bottom-4 -z-10 opacity-30"
                style={{
                  transformOrigin: "center bottom",
                  right: "-40px",
                }}
                initial={{ rotate: 300 }}
                animate={{ rotate: [300, 330, 300] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                alt="Light Beam"
              />
            </div>
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
      )}

      <div className="mt-20 ">
        <ServiceStats />
      </div>
    </section>
  );
};

export default HeroSection;
//div
