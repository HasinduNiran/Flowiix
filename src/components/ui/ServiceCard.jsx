"use client";
import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, otherDescription }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="w-[350px] h-[500px] bg-transparent cursor-pointer group rounded-3xl perspective-[1000px] p-1"
    >
      {/* Card Container */}

      <div className="relative w-full h-full transform-style-preserve-3d duration-500 group-hover:rotate-y-180 rounded-3xl shadow-2xl">
        {/* Front Side */}

        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 backface-hidden rounded-3xl overflow-hidden flex flex-col p-10 shadow-2xl">
          <div className="mt-auto">
            <h3 className="text-2xl px-5 font-semibold text-white">{title}</h3>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 rotate-y-180 bg-gradient-to-br from-purple-700 via-indigo-500 to-blue-600 bg-opacity-95 rounded-3xl overflow-hidden p-10 text-neutral-300 space-y-5 backface-hidden">
          <div className="flex flex-col space-y-2">
            <span className="text-3xl font-bold">CONTROLLER</span>
          </div>
          <div className="flex flex-col space-y-5">
            <span>{otherDescription}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
