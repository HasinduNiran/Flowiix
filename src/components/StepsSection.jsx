"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import React from "react";
import { Timeline } from "../components/ui/timeline";
import { WobbleCard } from "./ui/wobble-card";
import delivary from "../../public/asset/steps/delivery-animation.json";
import planing from "../../public/asset/steps/planing-animation.json";
import prototype from "../../public/asset/steps/prototype-animation.json";
import mentanance from "../../public/asset/steps/maintenance-animation.json";

export default function TimelineDemo() {
  const data = [
    {
      title: "Planning",
      content: (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <WobbleCard containerClassName="col-span-1 min-h-[300px]">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Gippity AI powers the entire universe
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  With over 100,000 mothly active bot users, Gippity AI is the
                  most popular AI platform for developers.With over 100,000
                  mothly active bot users, Gippity AI is the most popular AI
                  platform for developers.
                </p>
              </div>
              <Lottie
                animationData={planing}
                style={{
                  width: "300px",
                }}
              />
            </div>
          </WobbleCard>
        </motion.div>
      ),
    },
    {
      title: "Prototype",
      content: (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-red-400">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Gippity AI powers the entire universe
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  With over 100,000 mothly active bot users, Gippity AI is the
                  most popular AI platform for developers.With over 100,000
                  mothly active bot users, Gippity AI is the most popular AI
                  platform for developers.
                </p>
              </div>
              <Lottie
                animationData={prototype}
                style={{
                  width: "300px",
                }}
              />
            </div>
          </WobbleCard>
        </motion.div>
      ),
    },
    {
      title: "Delivary",
      content: (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-600">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Gippity AI powers the entire universe
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  With over 100,000 mothly active bot users, Gippity AI is the
                  most popular AI platform for developers. With over 100,000
                  mothly active bot users, Gippity AI is the most popular AI
                  platform for developers.
                </p>
              </div>
              <Lottie
                animationData={delivary}
                style={{
                  width: "300px",
                }}
              />
            </div>
          </WobbleCard>
        </motion.div>
      ),
    },
    {
      title: "Maintenance",
      content: (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-purple-600">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Signup for blazing-fast cutting-edge state of the art Gippity
                  AI wrapper today!
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  With over 100,000 mothly active bot users, Gippity AI is the
                  most popular AI platform for developers.With over 100,000
                  mothly active bot users, Gippity AI is the most popular AI
                  platform for developers.
                </p>
              </div>
              <Lottie
                animationData={mentanance}
                style={{
                  width: "300px",
                }}
              />
            </div>
          </WobbleCard>
        </motion.div>
      ),
    },
  ];
  return (
    <div className="w-full pt-24 overflow-x-hidden">
      <Timeline data={data} />
    </div>
  );
}
