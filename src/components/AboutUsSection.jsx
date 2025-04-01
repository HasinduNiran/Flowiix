"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectCards } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import FractalDotGrid from "./ui/fractal-dot-grid";

const testimonialsData = [
  {
    id: 1,
    quote:
      "I feel like I've learned as much from X as I did completing my masters. It's the first thing I read every morning.",
    author: "Jenn F. - Marketing Director @ Square",
    imageSrc: "/asset/images/p1.png",
  },
  {
    id: 2,
    quote:
      "My boss thinks I know what I'm doing. Honestly, I just read this newsletter.",
    author: "Adrian Y. - Product Marketing @ Meta",
    imageSrc: "/asset/images/p1.png",
  },
  {
    id: 3,
    quote: "Would be free. If X would be plan to after X.",
    author: "Lead @ Square",
    imageSrc: "/asset/images/p1.png",
  },
];

const AboutUsSection = () => {
  return (
    <div className="min-h-[60vh] w-[1300px] relative rounded-[100px] overflow-hidden flex items-center justify-center">
      <FractalDotGrid
        dotSize={3.5}
        dotSpacing={18}
        dotOpacity={0.9}
        waveIntensity={99}
        waveRadius={200}
        dotColor="#647ba1"
        glowColor="rgba(100, 123, 161, 1)"
        enableNoise={false}
        noiseOpacity={0.03}
        enableMouseGlow={false}
        initialPerformance="medium"
      />
      <div className="min-h-[60vh] w-[1300px] bg-secoundary flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-16 rounded-[100px]">
        {/* Left side - Heading and description */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 mr-0 md:mr-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            You don't know marketing
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8">
            ...but we're going to help. We send out weekly break downs of
            exactly what's working and what's not for the largest companies in
            the world. It's free.
          </p>

          {/* Email subscription form */}
          <div className="flex flex-col sm:flex-row w-full max-w-lg">
            <input
              type="email"
              className="bg-gray-800 text-white px-4 py-3 rounded-md mb-4 sm:mb-0 sm:mr-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition-colors duration-300 whitespace-nowrap">
              Join newsletter
            </button>
          </div>
        </div>

        {/* Right side - Card carousel with Swiper */}
        <div className="w-full md:w-1/2 h-full relative flex items-center justify-center">
          <div className="w-full max-w-md h-96 md:h-[30rem]">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay]}
              className="w-full h-full"
              autoplay={{
                delay: 4000, // 5 seconds for smoother transitions
                disableOnInteraction: false,
              }}
              cardsEffect={{
                slideShadows: false,
                perSlideRotate: 5,
                perSlideOffset: 8,
              }}
            >
              {testimonialsData.map((testimonial) => (
                <SwiperSlide
                  key={testimonial.id}
                  className="rounded-xl overflow-hidden"
                >
                  <div className="relative w-full h-full">
                    {/* Animated border */}
                    <div className="absolute inset-3 rounded-xl border border-primary z-10 shadow-lg shadow-primary "></div>

                    {/* Card with blur effect */}
                    <div className="absolute inset-3 bg-gray-900/90 backdrop-opacity-10 backdrop-filter backdrop-blur-2xl rounded-xl"></div>

                    {/* Card content container */}
                    <div className="absolute inset-3 flex flex-col justify-end p-8">
                      {/* Quote */}
                      <div className="flex-grow flex items-center">
                        <p className="text-white text-2xl font-medium leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      {/* Author with image */}
                      <div className="mt-8 flex items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-primary">
                          <div className="w-full h-full relative">
                            <Image
                              src={testimonial.imageSrc}
                              alt={testimonial.author}
                              fill
                              style={{ objectFit: "cover" }}
                              className="rounded-full"
                            />
                          </div>
                        </div>
                        <p className="text-indigo-300 text-lg font-medium">
                          {testimonial.author}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
