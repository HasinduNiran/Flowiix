"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import blueFabric1 from '../../../public/asset/images/img.png';
import blueFabric2 from '../../../public/asset/images/img4.png';
import blueFabric3 from '../../../public/asset/images/img2.png';
import blueFabric4 from '../../../public/asset/images/img3.png';

import { throttle } from "lodash";
import ContactHeroSection from "../../components/ContactHeroSection";
import ContactInfoSection from "../../components/ContactInfoSection";
import ContactFormSection from "../../components/ContactFormSection";

const ContactPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 0);
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-primary min-h-screen w-full relative overflow-hidden">
      <Navbar isScrolled={isScrolled} />
      
      {/* Floating decorative elements - further adjusted positions */}
      <div className="absolute top-1/16 left-1/5 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-3/5 right-1/5 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-16 flex flex-col flex-grow justify-center relative z-10">
        <ContactHeroSection />
        <ContactInfoSection />
        <ContactFormSection />
      </div>
    </div>
  );
};

export default ContactPage;