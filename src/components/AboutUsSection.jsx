"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import FractalDotGrid from "./ui/fractal-dot-grid";

const testimonialsData = [
  {
    id: 1,
    title: "Vision",
    message:
      "We strive to create a world where technology seamlessly integrates with businesses, enabling them to innovate, grow, and lead in the digital era.",
    imageSrc: "/asset/images/target.png",
  },
  {
    id: 2,
    title: "Mission",
    message:
      "Our mission is to turn ideas into powerful digital solutions, combining AI, scalability, and user-centric design to drive business success and transformation.",
    imageSrc: "/asset/images/rocket.png",
  },
  {
    id: 3,
    title: "Innovation Philosophy",
    message:
      "At Flowiix, innovation means pushing boundaries, adapting to change, and embracing emerging technologies to build future-ready, high-impact solutions.",
    imageSrc: "/asset/images/idea.png",
  },
];

const AboutUsSection = () => {
  return (
    <div className="min-h-[60vh] w-full max-w-[1300px] mx-auto relative rounded-[40px] md:rounded-[100px] overflow-hidden flex items-center justify-center px-4 sm:px-6">
      <FractalDotGrid
        dotSize={4.5}
        dotSpacing={36}
        dotOpacity={0.4}
        waveIntensity={99}
        waveRadius={200}
        dotColor="rgba(100, 100, 255, 1)"
        glowColor="rgba(100, 100, 255, 1)"
        enableNoise={false}
        noiseOpacity={0.03}
        enableMouseGlow={false}
        initialPerformance="medium"
      />
      <div className="min-h-[60vh] w-full bg-white flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-16 py-12 md:py-16 rounded-[40px] md:rounded-[100px]">

        <div className="w-full md:w-1/2 mb-12 md:mb-0 mr-0 md:mr-12 z-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-secoundary mb-4 md:mb-6">
          WHO WE ARE
          </h1>
          <p className="text-primary text-base sm:text-lg md:text-xl mb-6 md:mb-8">
          At Flowiix, we craft innovative digital solutions that drive businesses forward. Specializing in web applications, cross-platform mobile apps, AI-powered systems, ERP, and CMS solutions, we blend cutting-edge technology with seamless functionality.
          </p>


          <div className="flex flex-col sm:flex-row w-full max-w-lg">
           
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full relative flex items-center justify-center">
          <div className="w-full max-w-[320px] sm:max-w-md h-[350px] sm:h-96 md:h-[30rem]">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards, Autoplay, A11y]}
              className="w-full h-full"
              autoplay={{
                delay: 7000, 
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
                   
                    <div className="relative h-full overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-b from-slate-800/95 to-slate-900/95 p-4 transition-all duration-500 ease-out"></div>

                    <div className="absolute inset-3 flex flex-col items-center justify-center p-4 sm:p-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 overflow-hidden mb-4 sm:mb-6">
                        <div className="w-full h-full relative">
                          <Image
                            src={testimonial.imageSrc}
                            alt={testimonial.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4 sm:mb-6">
                        <h3 className="text-white text-2xl sm:text-3xl font-bold text-center">{testimonial.title}</h3>
                      </div>

                      <div className="flex-grow px-2 sm:px-6">
                        <p className="text-gray-300 text-base sm:text-xl font-medium leading-relaxed text-center italic font-serif">
                          {testimonial.message}
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

