"use client";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ServiceStats from "../components/serviceStats";
import { throttle } from "lodash";
import React, { useState, useEffect } from "react";
import { TimelineDemo } from "../components/StepsSection";
import { HeroParallaxDemo } from "../components/OurWorksSection";
import ServicesSection from "../components/ServicesSection";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 0);
    }, 100); // Adjust delay as needed

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-primary w-screen items-center justify-center">
      <Navbar isScrolled={isScrolled} />
      <HeroSection />
      <ServicesSection />
      <TimelineDemo />
      <div className="pb-20">
        <HeroParallaxDemo />
      </div>
    </div>
  );
}
