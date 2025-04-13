"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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

  const pageBackgroundStyle = {
    backgroundImage: "url('/asset/images/Fbg.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100%",
  };

  const textFillImageStyle = {
    backgroundImage: "url('/asset/images/Ftext.png')",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    setLogoOpacity(1);
    setLogoScale(1);
    setLogoRotation(0);

    const animationTimeout = setTimeout(() => {
      setImagePosition(0);
      setImageOpacity(1);
      setInnovationWidth(45);
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
          setFlowiixWidth(100);
        }, 50);
      }, 1000);
    }, 3000);

    // Add navigation timeout
    const navigationTimeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => {
      clearTimeout(animationTimeout);
      clearTimeout(secondAnimationTimeout);
      clearTimeout(navigationTimeout);
    };
  }, [router]);

  const imageAnimationStyle = {
    transform: `translateY(${imagePosition}%)`,
    opacity: imageOpacity,
    transition: "transform 1.2s ease-out, opacity 1.2s ease-out",
  };

  const innovationAnimationStyle = {
    width: `${innovationWidth}%`,
    opacity: innovationOpacity,
    transition: "width 1.2s ease-out, opacity 1.2s ease-out",
    overflow: "hidden",
  };

  const flowiixAnimationStyle = {
    width: `${flowiixWidth}%`,
    opacity: flowiixOpacity,
    transition: "width 1.2s ease-out, opacity 1.2s ease-out",
    overflow: "hidden",
  };

  const logoAnimationStyle = {
    transform: `scale(${logoScale}) rotate(${logoRotation}deg)`,
    opacity: logoOpacity,
    transition:
      "transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 1s ease-out",
    animation: logoPulse ? "pulse 3s infinite alternate" : "none",
  };

  return (
    <div
      className="relative w-full h-screen bg-gray-900 overflow-hidden"
      style={pageBackgroundStyle}
    >
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(${logoScale}) rotate(${logoRotation}deg);
          }
          50% {
            transform: scale(${logoScale * 1.1}) rotate(${logoRotation + 5}deg);
          }
          100% {
            transform: scale(${logoScale}) rotate(${logoRotation}deg);
          }
        }
      `}</style>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img
          src="/asset/images/Flogo.png"
          alt="Logo"
          className="max-w-md w-1/2"
          style={logoAnimationStyle}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <img
          src="/asset/images/Fdown.png"
          alt="Fluid design element"
          className="w-full"
          style={imageAnimationStyle}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4">
          {!showSecondText ? (
            <h1 className="text-white text-5xl md:text-5xl font-bold flex items-center justify-center font-poppins">
              Welcome to
              <div
                className="relative inline-flex items-center justify-center mx-3"
                style={innovationAnimationStyle}
              >
                <div className="absolute w-full h-full bg-white rounded z-0"></div>
                <span
                  className="px-4 z-10 relative font-poppins"
                  style={textFillImageStyle}
                >
                  Innovation
                </span>
              </div>
            </h1>
          ) : (
            <h1 className="text-white text-5xl md:text-5xl font-bold flex items-center justify-center font-poppins">
              <div
                className="relative inline-flex items-center justify-center mx-3"
                style={flowiixAnimationStyle}
              >
                <div className="absolute w-full h-full bg-white rounded z-0"></div>
                <span
                  className="px-4 z-10 relative font-poppins"
                  style={textFillImageStyle}
                >
                  Flowiix.com
                </span>
              </div>
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}
