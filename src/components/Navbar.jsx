"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "CONTACT US", path: "/contact", isButton: true },
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
          rotateX: isScrolled ? 0 : 6,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ perspective: "1000px" }}
        className={` ${
          isScrolled
            ? "bg-gray-900 shadow-2xl"
            : "bg-gray-900 lg:mx-48 mx-20 py-2 rounded-4xl mt-8 shadow-2xl"
        }`}
      >
        <div className="flex justify-between items-center p-3 px-6 md:px-10">
          {/* Logo */}
          <motion.h3
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
            className="text-xl font-semibold"
          >
            <img
              src="asset/images/flowix_icon.png"
              alt="Logo"
              className="lg:w-28 w-20 h-auto"
            />
          </motion.h3>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-12 items-center">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                className="relative overflow-hidden flex flex-col items-center"
                initial="initial"
                whileHover="hovered"
                animate="initial"
                whileTap="hovered"
                style={{ perspective: "1000px" }}
              >
                {link.isButton ? (
                  <motion.a
                    href={link.path}
                    className="relative block bg-secoundary text-gray-900 px-6 py-2 rounded-lg transition "
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {link.name}
                  </motion.a>
                ) : (
                  <motion.a
                    href={link.path}
                    className="relative block text-white text-lg"
                    whileHover={{ rotateX: 10, rotateY: 5 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <motion.div variants={linkVariants}>{link.name}</motion.div>
                    <motion.div
                      variants={linkHoverVariants}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0 text-secoundary"
                    >
                      {link.name}
                    </motion.div>
                  </motion.a>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileHover={{ rotateZ: 10, scale: 1.1 }}
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full bg-primary shadow-md"
              initial={{ y: -20, opacity: 0, rotateX: 90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: -20, opacity: 0, rotateX: 90 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ perspective: "1000px" }}
            >
              <ul className="flex flex-col items-center gap-6 py-6 text-lg">
                {navLinks.map((link, index) => (
                  <motion.li key={index}>
                    {link.isButton ? (
                      <a
                        href={link.path}
                        className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold transition hover:bg-yellow-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <a
                        href={link.path}
                        className="text-white hover:text-yellow-600 transition duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    )}
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
