"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { WavyBackground } from "./ui/wavy-background";

export default function ServiceStats() {
  const stats = [
    {
      title: "Projects Completed",
      value: 250,
      type: "plus",
    },
    {
      title: "Happy Clients",
      value: 98,
      type: "percentage",
    },
    {
      title: "Team Members",
      value: 50,
      type: "plus",
    },
    {
      title: "Years Experience",
      value: 10,
      type: "plus",
    },
  ];

  return (
    <div className="min-h-[60vh] px-10  w-full flex items-center justify-center lg:px-4 sm:px-6 overflow-hidden z-10">
      <div className="w-full max-w-6xl">
        {/* Stats Cards */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white w-full max-w-4xl xl:w-[1048px] h-auto  rounded-4xl shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-20 relative">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 hover:bg-gray-50 transition-all duration-300 rounded-lg"
              >
                <motion.h3
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl md:text-3xl font-bold text-primary mb-2"
                >
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.75}
                    suffix={stat.type === "percentage" ? " %" : " +"}
                  />
                </motion.h3>
                <motion.h4
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-lg font-semibold text-gray-800 mb-1"
                >
                  {stat.title}
                </motion.h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Image - FIXED */}
        <div className="relative w-full max-w-full overflow-hidden flex justify-center items-center -mt-16 z-0 h-96 rounded-4xl">
          <WavyBackground className="w-full h-full max-w-5xl mx-auto flex flex-col justify-center items-center">
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl p-5 md:text-6xl lg:text-7xl text-white font-bold inter-var text-center mt-10"
            >
              Innovation that Matters
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-base md:text-lg px-5 mt-4 text-white font-normal inter-var text-center"
            >
              Crafting seamless digital experiences with innovation and
              precision. Elevate your ideas into reality with our expertise.
            </motion.p>
          </WavyBackground>
        </div>
      </div>
    </div>
  );
}
