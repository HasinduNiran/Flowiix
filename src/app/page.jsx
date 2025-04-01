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
  return (
    <div className="bg-primary w-screen items-center justify-center">
      <HeroSection />
      <ServicesSection />
      <TimelineDemo />
      <div className="pb-20">
        <HeroParallaxDemo />
      </div>
    </div>
  );
}
