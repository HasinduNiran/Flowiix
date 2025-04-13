"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaCloud,
  FaShoppingCart,
  FaLock,
} from "react-icons/fa";
import Image from "next/image";
import WebDevImg from "../../../public/asset/images/p8.jpg";
import UIDesignImg from "../../../public/asset/images/p8.jpg";
import MobileDevImg from "../../../public/asset/images/p8.jpg";
import CloudImg from "../../../public/asset/images/p8.jpg";
import EcommerceImg from "../../../public/asset/images/p8.jpg";
import SecurityImg from "../../../public/asset/images/p8.jpg";
import Navigationbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const services = [
  {
    title: "Web Development",
    description:
      "We build high-performance, scalable, and SEO-friendly websites that drive business success.",
    details:
      "Our expert developers specialize in creating responsive and fast-loading websites using the latest technologies like Next.js, React, and Tailwind CSS. Whether it's a corporate website or an e-commerce platform, we ensure a seamless user experience.",
    icon: <FaCode size={40} className="text-secondary" />,
    image: WebDevImg,
  },
  {
    title: "UI/UX Design",
    description:
      "Transform your ideas into visually stunning and user-friendly interfaces.",
    details:
      "We focus on user-centric design principles, ensuring your customers have a smooth and enjoyable experience. Our team utilizes Figma and Adobe XD to craft modern and engaging UI/UX solutions.",
    icon: <FaPaintBrush size={40} className="text-secondary" />,
    image: UIDesignImg,
  },
  {
    title: "Mobile App Development",
    description:
      "Custom mobile apps tailored to your business needs on iOS & Android.",
    details:
      "We develop cross-platform mobile applications using Flutter and React Native. Our solutions include high-performance, user-friendly, and scalable mobile apps that align with your business goals.",
    icon: <FaMobileAlt size={40} className="text-secondary" />,
    image: MobileDevImg,
  },
  {
    title: "Cloud Solutions",
    description:
      "Powerful, secure, and scalable cloud infrastructure to enhance your business growth.",
    details:
      "Our cloud experts provide AWS, Google Cloud, and Azure solutions for hosting, data management, and automation. We ensure seamless cloud integration and security for your business operations.",
    icon: <FaCloud size={40} className="text-secondary" />,
    image: CloudImg,
  },
  {
    title: "E-Commerce Development",
    description:
      "Build a robust online store with advanced e-commerce solutions.",
    details:
      "We specialize in Shopify, WooCommerce, and custom-built e-commerce platforms, ensuring a smooth shopping experience with payment gateway integration and modern UI/UX.",
    icon: <FaShoppingCart size={40} className="text-secondary" />,
    image: EcommerceImg,
  },
  {
    title: "Cybersecurity",
    description:
      "Ensure the security of your digital assets with advanced protection.",
    details:
      "We offer security audits, penetration testing, and advanced encryption techniques to protect your business data. Our team ensures your website and applications are secure against cyber threats.",
    icon: <FaLock size={40} className="text-secondary" />,
    image: SecurityImg,
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-primary">
      <Navigationbar />
      <div className="min-h-screen text-white pt-20 px-6 md:px-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16 pt-28"
        >
          <h2 className="text-7xl font-bold text-white">Our Services</h2>
          <p className="text-lg text-gray-300 mt-3 max-w-2xl mx-auto">
            We offer a comprehensive range of services to help businesses grow
            digitally. From stunning UI/UX design to robust web and mobile
            applications, we ensure high-quality solutions tailored to your
            needs.
          </p>
          <Spline
            scene="/spline/scene-18.splinecode"
            className="w-screen h-full"
          />
        </motion.div>

        {/* Services List */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } items-center bg-gray-900 p-6 rounded-lg shadow-lg transition hover:shadow-2xl hover:scale-[1.02]`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image Section */}
              <div className="md:w-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-lg"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 text-center md:text-left p-6">
                <div className="flex justify-center md:justify-start">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-semibold mt-4">{service.title}</h3>
                <p className="text-gray-400 mt-2">{service.description}</p>
                <p className="text-gray-300 mt-4">{service.details}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-semibold text-white">
            Ready to Elevate Your Business?
          </h3>
          <p className="text-gray-300 mt-2">
            Contact us today and let's create something extraordinary together.
          </p>
          <button className="mt-6 px-6 py-3 bg-secondary text-white font-semibold rounded-full shadow-md hover:shadow-xl transition">
            Get in Touch
          </button>
        </motion.div>
      </div>
      <Spline scene="/spline/scene-14.splinecode" className="w-screen h-full" />
      <Footer />
    </div>
  );
};

export default ServicesPage;
