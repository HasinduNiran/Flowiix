"use client";
import dynamic from "next/dynamic";
import React from "react";

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
