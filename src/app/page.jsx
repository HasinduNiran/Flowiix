"use client";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ServiceStats from "../components/serviceStats";
import { throttle } from "lodash";
import React, { useState, useEffect } from "react";
import { TimelineDemo } from "../components/StepsSection";
import { HeroParallaxDemo } from "../components/OurWorksSection";
import ServicesSection from "../components/ServicesSection";
import AboutUsSection from "../components/AboutUsSection";
import Footer from "../components/Footer";

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
    <div className="overflow-hidden bg-black">
      <div className="bg-primary w-screen  items-center justify-center ">
        <Navbar isScrolled={isScrolled} />
        <HeroSection />
        <ServicesSection />
        <TimelineDemo />
      </div>
      <div className="relative z-10 bg-primary w-screen h-[2600px] items-center justify-center rounded-b-[100px] ">
        <div className="pb-20">
          <HeroParallaxDemo />
        </div>
        <div className="flex justify-center relative z-10 mt-20 ">
          <AboutUsSection />
        </div>
      </div>

      <div className="  z-0 -top-48">
        <Footer />
      </div>
    </div>
  );
}
