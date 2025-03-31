"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "CONTACT US", path: "/contact" },
];

const linkVariants = {
  initial: { y: 0 },
  hovered: { y: "-100%" },
};

const linkHoverVariants = {
  initial: { y: "100%" },
  hovered: { y: 0 },
};

const Navigationbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full z-50 fixed top-0 transition-all duration-500 ${
        isScrolled ? "shadow-lg scale-100 opacity-95" : "opacity-100"
      }`}
    >
      <motion.div
        animate={{
          scale: isScrolled ? 1 : 1.05,
          opacity: isScrolled ? 1 : 0.9,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={` ${
          isScrolled ? "bg-secoundary" : "bg-secoundary  mx-30 rounded-4xl mt-8"
        }`}
      >
        <div className="flex justify-between items-center p-4 px-6 md:px-10">
          <motion.h3
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xl font-semibold"
          >
            <img
              src="asset/images/flowix_icon.png"
              alt="Logo"
              className="w-28 h-auto"
            />
          </motion.h3>

          <ul className="hidden md:flex gap-12">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                className="relative h-6 overflow-hidden flex flex-col items-center"
                initial="initial"
                whileHover="hovered"
                animate="initial"
                whileTap="hovered"
              >
                <motion.a
                  href={link.path}
                  className="relative block text-white"
                >
                  <motion.div variants={linkVariants}>{link.name}</motion.div>
                  <motion.div
                    variants={linkHoverVariants}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0 text-yellow-600"
                  >
                    {link.name}
                  </motion.div>
                </motion.a>
              </motion.li>
            ))}
          </ul>

          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full bg-primary shadow-md"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ul className="flex flex-col items-center gap-6 py-6 text-lg">
                {navLinks.map((link, index) => (
                  <motion.li key={index} whileTap={{ scale: 0.95 }}>
                    <a
                      href={link.path}
                      className="text-white hover:text-yellow-600 transition duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Navigationbar;
