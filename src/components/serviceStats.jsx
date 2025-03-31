"use client";
import Image from "next/image";
import { HeroHighlight } from "./ui/hero-highlight";
import { WavyBackground } from "./ui/wavy-background";

export default function ServiceStats() {
  const stats = [
    {
      title: "Projects Completed",
      value: "250+",
      description: "Successful deliveries across industries",
    },
    {
      title: "Happy Clients",
      value: "98%",
      description: "Client satisfaction rate",
    },
    {
      title: "Team Members",
      value: "50+",
      description: "Skilled professionals",
    },
    {
      title: "Years Experience",
      value: "10+",
      description: "In the business",
    },
  ];

  return (
    <div className="min-h-[60vh] md:min-h-screen w-full flex items-center justify-center px-4 sm:px-6 overflow-hidden z-10">
      <div className="w-full max-w-6xl">
        {/* Stats Cards */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white w-full max-w-4xl xl:w-[1048px] h-auto md:h-[225px] rounded-4xl shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-20 relative">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 hover:bg-gray-50 transition-all duration-300 rounded-lg"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  {stat.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Background Image - FIXED */}
        <div className="relative w-full max-w-full overflow-hidden flex justify-center items-center -mt-16 sm:-mt-24 md:-mt-32 z-0 h-96 rounded-4xl">
          <WavyBackground className="w-full h-full max-w-5xl mx-auto flex flex-col justify-center items-center">
            <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center mt-10">
              Hero waves are cool
            </p>
            <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
              Leverage the power of canvas to create a beautiful hero section
            </p>
          </WavyBackground>
        </div>
      </div>
    </div>
  );
}
