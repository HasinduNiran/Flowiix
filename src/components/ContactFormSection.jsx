import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import rectangle from '../../public/asset/images/Rectangle.png';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactFormSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
    
    // Mark that we're on client-side
    setIsClient(true);
    
    // Generate particles only on client-side to avoid hydration mismatch
    const generateParticles = () => {
      const particleCount = 20;
      return Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        width: Math.round(Math.random() * 10 + 2),
        height: Math.round(Math.random() * 10 + 2),
        left: `${Math.round(Math.random() * 100)}%`,
        top: `${Math.round(Math.random() * 100)}%`,
      }));
    };
    
    setParticles(generateParticles());
  }, []);

  return (
    <div className="flex-1 w-full relative min-h-[80vh]">
      {/* Rectangle background with updated positioning */}
      {/* <div className="absolute bottom-0 left-0 right-0 w-full" style={{ zIndex: 0, height: '250px', position: 'absolute' }}>
        <Image 
          src={rectangle} 
          alt="Bottom decoration" 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'bottom',
            position: 'absolute',
            bottom: 0
          }}
          width={1920}
          height={250}
          priority
        />
      </div> */}
      
      {/* Animated particles in background - only render on client side */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {isClient && particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white opacity-20"
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, Math.round(Math.random() * -100 - 50)],
              x: [0, Math.round((Math.random() - 0.5) * 50)],
              opacity: [0.2, 0],
              scale: [1, Math.round(Math.random() * 2 + 0.5) / 10 + 1],
            }}
            transition={{
              duration: Math.round(Math.random() * 5 + 10),
              repeat: Infinity,
              ease: "linear",
              delay: Math.round(Math.random() * 10),
            }}
          />
        ))}
      </div>
      
      {/* Main content with higher z-index */}
      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto p-4 pb-[260px]">
        <motion.div 
          className="md:w-1/2 flex flex-col items-start mb-12 md:mb-0 md:pr-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          data-aos="fade-right"
        >
          <div className="relative mb-4">
            <h2 className="text-4xl font-bold text-white">
              <span className="relative">
                Find Us!
                <motion.div 
                  className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "4rem" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                ></motion.div>
              </span>
            </h2>
          </div>
          <motion.p 
            className="mb-8 text-gray-200 text-lg leading-relaxed max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Have a question or need assistance? Reach out to us via email, phone, or the contact form. 
            We're eager to hear from you and provide the solutions you need.
          </motion.p>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Social Icons with enhanced animations */}
            <motion.a 
              href="#" 
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative p-3 bg-primary backdrop-blur-lg rounded-full border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300">
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="white" 
                  className="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </motion.svg>
              </div>
            </motion.a>
            
            {/* Additional social icons with similar animations */}
            <motion.a 
              href="#" 
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative p-3 bg-primary backdrop-blur-lg rounded-full border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300">
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="white" 
                  className="bi bi-facebook" 
                  viewBox="0 0 16 16"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </motion.svg>
              </div>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative p-3 bg-primary backdrop-blur-lg rounded-full border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300">
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="white" 
                  className="bi bi-instagram" 
                  viewBox="0 0 16 16"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </motion.svg>
              </div>
            </motion.a>
            
            <motion.a 
              href="#" 
              className="group relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative p-3 bg-primary backdrop-blur-lg rounded-full border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300">
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="white" 
                  className="bi bi-linkedin" 
                  viewBox="0 0 16 16"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </motion.svg>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 w-full max-w-md relative z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="group relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75"
              animate={{ 
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="relative bg-primary backdrop-blur-lg rounded-lg p-8 border border-white border-opacity-10 transition-all duration-300 shadow-lg"
              whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.3)" }}
            >
              <form>
                <motion.div 
                  className="mb-6 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Full Name</label>
                  <motion.input
                    type="text"
                    id="name"
                    className="w-full bg-primary/50 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/70 text-white placeholder-gray-400"
                    placeholder="Enter your name"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  />
                </motion.div>

                <motion.div 
                  className="mb-6 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email Address</label>
                  <motion.input
                    type="email"
                    id="email"
                    className="w-full bg-primary/50 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/70 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  />
                </motion.div>

                <motion.div 
                  className="mb-6 relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message</label>
                  <motion.textarea
                    id="message"
                    rows="5"
                    className="w-full bg-primary/50 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/70 text-white placeholder-gray-400"
                    placeholder="How can we help you?"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg transform focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ 
                    scale: 1.03, 
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" 
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactFormSection;