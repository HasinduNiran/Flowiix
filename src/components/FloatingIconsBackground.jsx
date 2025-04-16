import React from "react";
import {
  Code, Database, Server, Shield, Cpu, Cloud,
  Smartphone, Settings, BarChart, Globe, Wifi,
  Share2, Layers, Terminal, File, Monitor, Laptop,
  HardDrive, Router, Lock, Codepen, Codesandbox,
  Command, Hash, GitBranch, GitCommit, Bluetooth,
  PenTool, Figma, Slack, Chrome, Save
} from "lucide-react";

export default function FloatingIconsBackground({ opacity = "20" }) {
  // Create a filtered array of tech icons that ensures all icons are defined
  const techIcons = [
    Code, Database, Server, Shield, Cpu,
    Cloud, Smartphone, Settings, BarChart, 
    Globe, Wifi, Share2, Layers, Terminal, File,
    Monitor, Laptop, HardDrive, Router, Lock,
    Codepen, Codesandbox, Command, Hash, GitBranch,
    GitCommit, Bluetooth, PenTool, Figma, Slack,
    Chrome, Save
  ].filter(icon => icon !== undefined);
  
  // Generate icons for different regions of the background
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
    <>
      <div className={`absolute inset-0 overflow-hidden opacity-${opacity} pointer-events-none`}>
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
    </>
  );
}
