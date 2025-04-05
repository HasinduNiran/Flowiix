import React from "react";
import {
  Github, Linkedin, Twitter, Facebook, Instagram,
  Code, Database, Server, Shield, Cpu, Cloud,
  Smartphone, Settings, BarChart, Globe, Wifi,
  Share2, Layers, Terminal, File, Monitor, Laptop,
  HardDrive, Router, Lock, Codepen, Codesandbox,
  Command, Hash, GitBranch, GitCommit, Bluetooth,
  PenTool, Figma, Slack, Chrome, Firefox, Save
} from "lucide-react";

export default function Footer() {
  // Create a filtered array of tech icons that ensures all icons are defined
  const techIcons = [
    Code, Database, Server, Shield, Cpu,
    Cloud, Smartphone, Settings, BarChart, 
    Globe, Wifi, Share2, Layers, Terminal, File,
    Monitor, Laptop, HardDrive, Router, Lock,
    Codepen, Codesandbox, Command, Hash, GitBranch,
    GitCommit, Bluetooth, PenTool, Figma, Slack,
    Chrome, Firefox, Save
  ].filter(icon => icon !== undefined);
  
  // Generate icons for different regions of the footer
  const generatePositionedIcons = () => {
    const icons = [];
    let id = 0;
    
    // Top edge icons
    for (let i = 0; i < 10; i++) {
      const IconComponent = techIcons[Math.floor(Math.random() * techIcons.length)];
      icons.push({
        id: id++,
        Icon: IconComponent,
        size: Math.floor(Math.random() * 40) + 20,
        top: `${Math.floor(Math.random() * 15)}%`,
        left: `${Math.floor(Math.random() * 100)}%`,
        color: `hsl(${Math.floor(Math.random() * 360)}, 75%, 50%)`,
        duration: `${Math.floor(Math.random() * 20) + 10}s`,
        delay: `${Math.floor(Math.random() * 5)}s`,
      });
    }
    
    // Bottom edge icons
    for (let i = 0; i < 10; i++) {
      const IconComponent = techIcons[Math.floor(Math.random() * techIcons.length)];
      icons.push({
        id: id++,
        Icon: IconComponent,
        size: Math.floor(Math.random() * 40) + 20,
        top: `${Math.floor(Math.random() * 15) + 85}%`,
        left: `${Math.floor(Math.random() * 100)}%`,
        color: `hsl(${Math.floor(Math.random() * 360)}, 75%, 50%)`,
        duration: `${Math.floor(Math.random() * 20) + 10}s`,
        delay: `${Math.floor(Math.random() * 5)}s`,
      });
    }
    
    // Left edge icons
    for (let i = 0; i < 10; i++) {
      const IconComponent = techIcons[Math.floor(Math.random() * techIcons.length)];
      icons.push({
        id: id++,
        Icon: IconComponent,
        size: Math.floor(Math.random() * 40) + 20,
        top: `${Math.floor(Math.random() * 70) + 15}%`,
        left: `${Math.floor(Math.random() * 15)}%`,
        color: `hsl(${Math.floor(Math.random() * 360)}, 75%, 50%)`,
        duration: `${Math.floor(Math.random() * 20) + 10}s`,
        delay: `${Math.floor(Math.random() * 5)}s`,
      });
    }
    
    // Right edge icons
    for (let i = 0; i < 10; i++) {
      const IconComponent = techIcons[Math.floor(Math.random() * techIcons.length)];
      icons.push({
        id: id++,
        Icon: IconComponent,
        size: Math.floor(Math.random() * 40) + 20,
        top: `${Math.floor(Math.random() * 70) + 15}%`,
        left: `${Math.floor(Math.random() * 15) + 85}%`,
        color: `hsl(${Math.floor(Math.random() * 360)}, 75%, 50%)`,
        duration: `${Math.floor(Math.random() * 20) + 10}s`,
        delay: `${Math.floor(Math.random() * 5)}s`,
      });
    }
    
    // Center area icons
    for (let i = 0; i < 15; i++) {
      const IconComponent = techIcons[Math.floor(Math.random() * techIcons.length)];
      icons.push({
        id: id++,
        Icon: IconComponent,
        size: Math.floor(Math.random() * 40) + 20,
        top: `${Math.floor(Math.random() * 50) + 25}%`,
        left: `${Math.floor(Math.random() * 50) + 25}%`,
        color: `hsl(${Math.floor(Math.random() * 360)}, 75%, 50%)`,
        duration: `${Math.floor(Math.random() * 20) + 10}s`,
        delay: `${Math.floor(Math.random() * 5)}s`,
      });
    }
    
    return icons;
  };
  
  const floatingIcons = generatePositionedIcons();

  return (
    <footer className="relative bg-black text-white overflow-hidden h-[800px]">
      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {floatingIcons.map((item) => (
          <div
            key={item.id}
            className="absolute animate-float"
            style={{
              top: item.top,
              left: item.left,
              animationDuration: item.duration,
              animationDelay: item.delay,
            }}
          >
            {item.Icon && <item.Icon size={item.size} color={item.color} />}
          </div>
        ))}
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-96">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgba(100,123,161,1)]">Flowiix</h3>
            <p className="text-gray-300 mb-4">
              Innovative software solutions for businesses of all sizes. We transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-[rgba(100,123,161,1)] transition duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-[rgba(100,123,161,1)] transition duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-[rgba(100,123,161,1)] transition duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[rgba(100,123,161,1)] transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[rgba(100,123,161,1)] transition duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgba(100,123,161,1)]">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Custom Software Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Web Applications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Mobile App Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">UI/UX Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">DevOps Services</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgba(100,123,161,1)]">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Case Studies</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgba(100,123,161,1)]">Contact Us</h3>
            <p className="text-gray-300 mb-2">123 Tech Avenue, Suite 100</p>
            <p className="text-gray-300 mb-2">San Francisco, CA 94107</p>
            <p className="text-gray-300 mb-2">Email: info@flowiix.com</p>
            <p className="text-gray-300 mb-4">Phone: (123) 456-7890</p>
            <a href="#" className="inline-block bg-[rgba(17,37,69,1)] hover:bg-[rgba(100,123,161,1)] text-white py-2 px-4 rounded transition duration-300">
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
            <a href="#" className="text-gray-400 text-sm hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 text-sm hover:text-white transition duration-300">Sitemap</a>
          </div>
        </div>
      </div>
      
      {/* Add animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(5deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(15px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}