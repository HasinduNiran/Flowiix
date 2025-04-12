"use client";
import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Code,
  Database,
  Server,
  Shield,
  Cpu,
  Cloud,
  Smartphone,
  Settings,
  BarChart,
  Globe,
  Wifi,
  Share2,
  Layers,
  Terminal,
  File,
  Monitor,
  Laptop,
  HardDrive,
  Router,
  Lock,
  Codepen,
  Codesandbox,
  Command,
  Hash,
  GitBranch,
  GitCommit,
  Bluetooth,
  PenTool,
  Figma,
  Slack,
  Chrome,
  Firefox,
  Save,
} from "lucide-react";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  // Predefined tech icons
  const techIcons = [
    Code,
    Database,
    Server,
    Shield,
    Cpu,
    Cloud,
    Smartphone,
    Settings,
    BarChart,
    Globe,
    Wifi,
    Share2,
    Layers,
    Terminal,
    File,
    Monitor,
    Laptop,
    HardDrive,
    Router,
    Lock,
    Codepen,
    Codesandbox,
    Command,
    Hash,
    GitBranch,
    GitCommit,
    Bluetooth,
    PenTool,
    Figma,
    Slack,
    Chrome,
    Firefox,
    Save,
  ];

  // Predefined positions and styles to avoid hydration mismatch
  const floatingIcons = [
    // Top edge
    {
      Icon: Code,
      size: 30,
      top: "5%",
      left: "10%",
      color: "hsl(200, 75%, 50%)",
    },
    {
      Icon: Database,
      size: 28,
      top: "8%",
      left: "25%",
      color: "hsl(150, 75%, 50%)",
    },
    {
      Icon: Server,
      size: 32,
      top: "3%",
      left: "40%",
      color: "hsl(100, 75%, 50%)",
    },
    {
      Icon: Shield,
      size: 26,
      top: "7%",
      left: "55%",
      color: "hsl(50, 75%, 50%)",
    },
    { Icon: Cpu, size: 34, top: "4%", left: "70%", color: "hsl(0, 75%, 50%)" },
    {
      Icon: Cloud,
      size: 30,
      top: "6%",
      left: "85%",
      color: "hsl(300, 75%, 50%)",
    },

    // Bottom edge
    {
      Icon: Smartphone,
      size: 28,
      top: "90%",
      left: "15%",
      color: "hsl(250, 75%, 50%)",
    },
    {
      Icon: Settings,
      size: 32,
      top: "93%",
      left: "30%",
      color: "hsl(220, 75%, 50%)",
    },
    {
      Icon: BarChart,
      size: 26,
      top: "88%",
      left: "45%",
      color: "hsl(190, 75%, 50%)",
    },
    {
      Icon: Globe,
      size: 34,
      top: "92%",
      left: "60%",
      color: "hsl(160, 75%, 50%)",
    },
    {
      Icon: Wifi,
      size: 30,
      top: "89%",
      left: "75%",
      color: "hsl(130, 75%, 50%)",
    },
    {
      Icon: Share2,
      size: 28,
      top: "94%",
      left: "90%",
      color: "hsl(100, 75%, 50%)",
    },

    // Left edge
    {
      Icon: Layers,
      size: 24,
      top: "30%",
      left: "5%",
      color: "hsl(270, 75%, 50%)",
    },
    {
      Icon: Terminal,
      size: 30,
      top: "50%",
      left: "8%",
      color: "hsl(240, 75%, 50%)",
    },
    {
      Icon: File,
      size: 26,
      top: "70%",
      left: "3%",
      color: "hsl(210, 75%, 50%)",
    },

    // Right edge
    {
      Icon: Monitor,
      size: 32,
      top: "25%",
      left: "92%",
      color: "hsl(180, 75%, 50%)",
    },
    {
      Icon: Laptop,
      size: 28,
      top: "45%",
      left: "95%",
      color: "hsl(150, 75%, 50%)",
    },
    {
      Icon: HardDrive,
      size: 30,
      top: "65%",
      left: "93%",
      color: "hsl(120, 75%, 50%)",
    },

    // Center area
    {
      Icon: Router,
      size: 26,
      top: "35%",
      left: "40%",
      color: "hsl(90, 75%, 50%)",
    },
    {
      Icon: Lock,
      size: 32,
      top: "45%",
      left: "60%",
      color: "hsl(60, 75%, 50%)",
    },
    {
      Icon: Codepen,
      size: 28,
      top: "55%",
      left: "50%",
      color: "hsl(30, 75%, 50%)",
    },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="relative bg-black text-white overflow-hidden min-h-[800px]">
      {/* Floating tech icons - only render on client */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
          {floatingIcons.map((item, index) => (
            <div
              key={`icon-${index}`}
              className="absolute animate-float"
              style={{
                top: item.top,
                left: item.left,
                animationDuration: `${15 + (index % 5)}s`,
                animationDelay: `${index % 3}s`,
              }}
            >
              <item.Icon
                size={item.size}
                color={item.color}
                className="transition-opacity hover:opacity-80"
              />
            </div>
          ))}
        </div>
      )}

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-96">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Flowiix</h3>
            <p className="text-gray-300 mb-4">
              Innovative software solutions for businesses of all sizes. We
              transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 transition duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 transition duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 transition duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 transition duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-300 transition duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Services</h3>
            <ul className="space-y-2">
              {[
                "Custom Software Development",
                "Web Applications",
                "Mobile App Development",
                "UI/UX Design",
                "Cloud Solutions",
                "DevOps Services",
              ].map((service, index) => (
                <li key={`service-${index}`}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Our Team", "Careers", "Blog", "Case Studies"].map(
                (item, index) => (
                  <li key={`company-${index}`}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-300">Contact Us</h3>
            <address className="not-italic">
              <p className="text-gray-300 mb-2">123 Tech Avenue, Suite 100</p>
              <p className="text-gray-300 mb-2">San Francisco, CA 94107</p>
              <p className="text-gray-300 mb-2">
                Email:{" "}
                <a href="mailto:info@flowiix.com" className="hover:text-white">
                  info@flowiix.com
                </a>
              </p>
              <p className="text-gray-300 mb-4">
                Phone:{" "}
                <a href="tel:+11234567890" className="hover:text-white">
                  (123) 456-7890
                </a>
              </p>
            </address>
            <a
              href="#contact"
              className="inline-block bg-blue-800 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Flowiix. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map(
              (item, index) => (
                <a
                  key={`link-${index}`}
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition duration-300"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(5deg);
          }
          50% {
            transform: translateY(0) rotate(0deg);
          }
          75% {
            transform: translateY(15px) rotate(-5deg);
          }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
