"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../styles/first.css';

export default function FirstView() {
  const router = useRouter();
  const [imagePosition, setImagePosition] = useState(100);
  const [imageOpacity, setImageOpacity] = useState(0);
  const [innovationWidth, setInnovationWidth] = useState(0);
  const [innovationOpacity, setInnovationOpacity] = useState(0);
  const [showSecondText, setShowSecondText] = useState(false);
  const [flowiixWidth, setFlowiixWidth] = useState(0);
  const [flowiixOpacity, setFlowiixOpacity] = useState(0);
  const [logoScale, setLogoScale] = useState(0);
  const [logoOpacity, setLogoOpacity] = useState(0);
  const [logoRotation, setLogoRotation] = useState(-180);
  const [logoPulse, setLogoPulse] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    setLogoOpacity(1);
    setLogoScale(1);
    setLogoRotation(0);

    const animationTimeout = setTimeout(() => {
      setImagePosition(0);
      setImageOpacity(1);
      setInnovationWidth(isMobile ? 100 : 45);  
      setInnovationOpacity(1);

      setTimeout(() => {
        setLogoPulse(true);
      }, 1000);
    }, 1200);

    const secondAnimationTimeout = setTimeout(() => {
      setInnovationWidth(0);
      setInnovationOpacity(0);
      
      setTimeout(() => {
        setShowSecondText(true);
        setFlowiixWidth(0);  
        setFlowiixOpacity(1);
        
        setTimeout(() => {
          setFlowiixWidth(isMobile ? 95 : 100);
        }, 50);  
      }, 1000);
    }, 3000);

    // Add navigation timeout
    const navigationTimeout = setTimeout(() => {
      router.push('/home');
    }, 5000);

    return () => {
      clearTimeout(animationTimeout);
      clearTimeout(secondAnimationTimeout);
      clearTimeout(navigationTimeout);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [router, isMobile]);
  
  const imageAnimationStyle = {
    transform: `translateY(${imagePosition}%)`,
    opacity: imageOpacity,
  };

  const innovationAnimationStyle = {
    width: `${innovationWidth}%`,
    opacity: innovationOpacity,
  };

  const flowiixAnimationStyle = {
    width: `${flowiixWidth}%`,
    opacity: flowiixOpacity,
  };

  const logoAnimationStyle = {
    transform: `scale(${logoScale}) rotate(${logoRotation}deg)`,
    opacity: logoOpacity,
  };

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden first-view-container">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img 
          src="/asset/images/Flogo.png" 
          alt="Logo" 
          className={`w-3/4 sm:w-2/3 md:w-1/2 lg:max-w-md logo-animation ${logoPulse ? 'logo-pulse' : ''}`}
          style={logoAnimationStyle}
        />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <img 
          src="/asset/images/Fdown.png" 
          alt="Fluid design element" 
          className="w-full mobile-bottom-image image-animation"
          style={{
            ...imageAnimationStyle,
            height: isMobile ? '30vh' : 'auto',
            objectFit: isMobile ? 'cover' : 'contain',
            objectPosition: 'center bottom'
          }}
        />
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4">
          {!showSecondText ? (
            <h1 className="text-white text-5xl sm:text-4xl md:text-5xl font-bold flex flex-col md:flex-row items-center justify-center font-poppins ">
              <span className="mb-2 md:mb-0">Welcome to</span>
              <div 
                className="relative inline-flex items-center justify-center mx-0 md:mx-3 innovation-animation w-full md:w-auto"
                style={innovationAnimationStyle}
              >
                <div className="absolute w-full h-full bg-white rounded z-0 left-0 right-0"></div>
                <span className="px-6 py-2 z-10 relative font-poppins text-3xl sm:text-4xl md:text-5xl text-fill-image">Innovation</span>
              </div>
            </h1>
          ) : (
            <h1 className="text-white text-5xl sm:text-4xl md:text-5xl font-bold flex items-center justify-center font-poppins">
              <div 
                className="relative inline-flex items-center justify-center mx-0 md:mx-3 flowiix-animation"
                style={flowiixAnimationStyle}
              >
                <div className="absolute w-full h-full bg-white rounded z-0 left-0 right-0"></div>
                <span className="px-4 z-10 relative font-poppins text-3xl sm:text-4xl md:text-5xl text-fill-image">Flowiix.com</span>
              </div>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}