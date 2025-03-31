"use client";
import React from "react";
import { HeroParallax } from "../../src/components/ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/asset/images/p1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/asset/images/p3.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/asset/images/p4.webp",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/asset/images/p5.jpeg",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/asset/images/p6.jpg.webp",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/asset/images/p7.jpg.webp",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/asset/images/p8.jpg",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/asset/images/p2.png.avif",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/asset/images/p8.jpg",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/asset/images/p4.webp",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/asset/images/p4.webp",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/asset/images/p4.webp",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/asset/images/p4.webp",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/asset/images/p4.webp",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/asset/images/p4.webp",
  },
];
