"use client";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import React, { useState, useEffect } from "react";
const HeroSection = dynamic(() => import("../components/HeroSection"), {
  ssr: false,
});

const TimelineDemo = dynamic(() => import("../components/StepsSection"), {
  ssr: false,
});
const HeroParallaxDemo = dynamic(
  () => import("../components/OurWorksSection"),
  {
    ssr: false,
  }
);
const ServicesSection = dynamic(() => import("../components/ServicesSection"), {
  ssr: false,
});
const AboutUsSection = dynamic(() => import("../components/AboutUsSection"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="overflow-hidden bg-black">
      <div className="bg-primary w-screen  items-center justify-center ">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <TimelineDemo />
      </div>
      <div className="relative z-10 bg-primary w-screen h-[2600px] items-center justify-center rounded-b-[100px] ">
        <div className="pb-20">
          <HeroParallaxDemo />
        </div>
        <div className="flex justify-center  z-10 mt-20 ">
          <AboutUsSection />
        </div>
      </div>

      <div className="z-0 ">
        <Footer />
      </div>
    </div>
  );
}
