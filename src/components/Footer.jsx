import React from "react";
import {
  Github, Linkedin, Twitter, Facebook, Instagram,
} from "lucide-react";
import FloatingIconsBackground from "./FloatingIconsBackground";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden ">
      {/* Floating tech icons */}
      <FloatingIconsBackground opacity="20" />
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[rgba(100,123,161,1)]">Flowiix</h3>
            <p className="text-gray-300 mb-4">
              Innovative software solutions for businesses of all sizes. We transform ideas into powerful digital experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
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
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center text-center md:text-left">
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
    </footer>
  );
}