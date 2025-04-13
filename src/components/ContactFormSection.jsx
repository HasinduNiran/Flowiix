import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import rectangle from '../../public/asset/images/Rectangle.png';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';
import { getCountries, getCountryCallingCode } from 'libphonenumber-js';

const ContactFormSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState([]);
  
  // Form state variables 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: 'LK',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  // Load EmailJS credentials
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (!serviceID || !templateID || !publicKey) {
      console.warn('EmailJS environment variables not found. Using fallback values.');
    }
  }, [serviceID, templateID, publicKey]);

  // Get country codes 
  const countries = getCountries();
  
  // Format country code for display in dropdown
  const formatCountryForDisplay = (countryCode) => {
    try {
      const dialCode = `+${getCountryCallingCode(countryCode)}`;
      let countryName = new Intl.DisplayNames(['en'], { type: 'region' }).of(countryCode);
      return { 
        code: countryCode, 
        dialCode, 
        name: countryName 
      };
    } catch (error) {

      return { 
        code: countryCode, 
        dialCode: '', 
        name: countryCode 
      };
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle phone number input - only allow numbers and enforce 9 digit limit
  const handlePhoneChange = (e) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length <= 9) {
      setFormData(prev => ({
        ...prev,
        phone: numericValue
      }));
    }
  };

  // Handle country code change
  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setFormData(prev => ({
      ...prev,
      countryCode
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        loading: false,
        success: false,
        error: "Please fill in all required fields"
      });
      return;
    }

    if (formData.phone && formData.phone.length !== 9) {
      setFormStatus({
        loading: false,
        success: false,
        error: "Phone number must be exactly 9 digits"
      });
      return;
    }

    setFormStatus({
      loading: true,
      success: false,
      error: null
    });

    const dialCode = formData.phone ? `+${getCountryCallingCode(formData.countryCode)}` : '';
    const fullPhoneNumber = formData.phone ? `${dialCode} ${formData.phone}` : 'Not provided';

    const formattedMessage = `
Contact Number: ${fullPhoneNumber}
Message:
${formData.message}
    `.trim();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: fullPhoneNumber,
      message: formattedMessage,
      to_name: 'Flowiix Customer Manger',
      to_email: 'hello@flowiix.com'
    };

    try {
      // Check if we have the necessary configuration
      if (!serviceID || !templateID || !publicKey) {
        throw new Error('EmailJS configuration missing');
      }
      
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      setFormStatus({
        loading: false,
        success: true,
        error: null
      });

      setFormData({
        name: '',
        email: '',
        countryCode: 'LK',
        phone: '',
        message: ''
      });

      setTimeout(() => {
        setFormStatus(prev => ({
          ...prev,
          success: false
        }));
      }, 5000);

    } catch (error) {
      console.error('Email sending failed:', error);
      
      setFormStatus({
        loading: false,
        success: false,
        error: "Failed to send message. Please try again or contact us directly."
      });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });

    setIsClient(true);

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


    try {
      if (publicKey) {
        emailjs.init(publicKey);
        // console.log('EmailJS initialized successfully');
      } else {
        console.error('EmailJS initialization failed: Missing public key');
      }
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
    }
  }, [publicKey]);

  return (
    <div className="flex-1 w-full relative min-h-[80vh]">
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
              <form onSubmit={handleSubmit}>
                {formStatus.success && (
                  <motion.div 
                    className="mb-6 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
                {formStatus.error && (
                  <motion.div 
                    className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {formStatus.error}
                  </motion.div>
                )}
                
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
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                  transition={{ delay: 0.65 }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-white">Phone Number</label>
                  <div className="flex space-x-2">
                    <motion.select
                      id="countryCode"
                      value={formData.countryCode}
                      onChange={handleCountryChange}
                      className="w-1/3 bg-primary/50 backdrop-blur-sm border border-white/10 rounded-lg px-2 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/70 text-white"
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {countries.map(country => {
                        const { dialCode, name } = formatCountryForDisplay(country);
                        return (
                          <option key={country} value={country}>
                            {dialCode} ({name})
                          </option>
                        );
                      })}
                    </motion.select>
                    <motion.input
                      type="text"
                      id="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-2/3 bg-primary/50 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/70 text-white placeholder-gray-400"
                      placeholder="9 digit number"
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    />
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Please enter exactly 9 digits without country code
                  </div>
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
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-primary/50 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500/70 text-white placeholder-gray-400"
                    placeholder="How can we help you?"
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={formStatus.loading}
                  className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg transform focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${formStatus.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{
                    scale: formStatus.loading ? 1 : 1.03, 
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: formStatus.loading ? 1 : 0.97 }}
                >
                  {formStatus.loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
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