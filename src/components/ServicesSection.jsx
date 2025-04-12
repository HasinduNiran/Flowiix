"use client";
import React from "react";
import ServiceCard from "../../src/components/ui/ServiceCard";

import Fullstack from "../../public/asset/services/fulstack-dev.json";
import Mobile from "../../public/asset/services/mobile-dev.json";
import AiMl from "../../public/asset/services/ai-ml.json";
import Cloud from "../../public/asset/services/cloud-devops.json";
import UiUx from "../../public/asset/services/ui-ux.json";
import Ba from "../../public/asset/services/ba-sol.json";

const ServicesSection = () => {
  return (
    <section className="relative text-center overflow-hidden mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-6xl text-center font-semibold mb-20 text-black dark:text-white">
          What We Do
        </h2>
      </div>

      <div className="flex">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-28 mt-14 max-w-6xl mx-auto my-20 ">
          {[
            {
              title: "Full-Stack Web Development",
              lottie: Fullstack,
              otherDescription: [
                "Custom web applications ",
                "Backend development ",
                "API development and integration (REST & GraphQL)",
                "Performance optimization and security enhancements",
                "Responsive and SEO-friendly design",
              ],
            },
            {
              title: "Cross-Platform Mobile Applications",
              lottie: Mobile,
              otherDescription: [
                "Hybrid app development using Flutter & React Native",
                "Native performance with cross-platform efficiency",
                "Custom UI/UX design for a seamless experience",
                "Integration with third-party APIs and cloud services",
              ],
            },
            {
              title: "Artificial Intelligence & Machine Learning",
              lottie: AiMl,
              otherDescription: [
                "AI-powered chatbots and virtual assistants",
                "Predictive analytics for data-driven decisions",
                "Automated data processing and NLP applications",
                "Custom AI models trained on real-world datasets",
              ],
            },
            {
              title: "Cloud Infrastructure & DevOps",
              lottie: Cloud,
              otherDescription: [
                "Cloud hosting on AWS, Azure, and Google Cloud",
                "CI/CD pipelines for faster deployments",
                "Containerization with Docker & Kubernetes",
                "Serverless computing solutions",
              ],
            },
            {
              title: "User Experience & Interface Design",
              lottie: UiUx,
              otherDescription: [
                "Wireframing and prototyping (Figma, Adobe XD)",
                "UI design focused on user engagement",
                "Accessibility and usability improvements",
                "Microinteractions and animations for better UX",
              ],
            },
            {
              title: "E-Commerce Solutions & Digital Stores",
              lottie: Ba,
              otherDescription: [
                "Custom-built e-commerce platforms",
                "Secure payment gateway integration",
                "User-friendly shopping experience",
                "Product management and inventory tracking",
              ],
            },
          ].map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              lottie={service.lottie}
              otherDescription={service.otherDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
