"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-2 px-10 h-screen">
      <div className="ml-24 mt-40">
        <h2 className="text-white text-5xl">Find the project you love</h2>
        <p className="text-white mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integerdiam.Lorem ipsum
          dolor sit ame,consectetur{" "}
        </p>
        <button className="text-left bg-secoundary px-5 py-2 rounded-3xl mt-5">
          Explore
        </button>
      </div>
      <div>
        <motion.img
          className="absolute top-1/2 translate-x-96 opacity-80 lg:-translate-y-3/5 "
          style={{
            width: "60vw",
            maxWidth: "1100px",
            height: "auto",
          }}
          src="/asset/images/flat-ring.png"
          alt="Rotating"
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
