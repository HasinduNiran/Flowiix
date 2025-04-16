"use client";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ServiceStats from "../components/serviceStats";
import { throttle } from "lodash";
import React, { useState, useEffect } from "react";
import TimelineDemo from "../components/StepsSection";
import HeroParallaxDemo from "../components/OurWorksSection";
import ServicesSection from "../components/ServicesSection";
import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";
import FloatingIconsBackground from "../components/FloatingIconsBackground";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 0);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <div className="bg-primary w-full max-w-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <Navbar isScrolled={isScrolled} />
        <HeroSection />
        <ServicesSection />
        <TimelineDemo />
        <HeroParallaxDemo />
        <div className="h-12 sm:h-16 md:h-20"></div>
      </div>
     
      <div className="relative w-full">
        <div className="absolute top-0 left-0 right-0 h-1/3 sm:h-2/5 md:h-1/2 bg-primary rounded-b-[30px] sm:rounded-b-[50px] md:rounded-b-[80px] lg:rounded-b-[100px]"></div>
        <div className="absolute top-1/3 sm:top-2/5 md:top-1/2 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
          <FloatingIconsBackground opacity="20" className="z-0" />
        </div>
        <div className="flex justify-center relative z-10 px-4 sm:px-6 lg:px-8">
          <AboutUsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
