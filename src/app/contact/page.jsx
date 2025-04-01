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
      
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-16 flex flex-col flex-grow justify-center">
        <ContactHeroSection />
        <ContactInfoSection />
        <ContactFormSection />
      </div>
    </div>
  );
};

export default ContactPage;