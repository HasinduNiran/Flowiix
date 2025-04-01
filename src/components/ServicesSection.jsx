"use client";
import React from "react";
import ServiceCard from "../../src/components/ui/ServiceCard";

const ServicesSection = () => {
  return (
    <section className="relative text-center overflow-hidden mt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-6xl text-center font-semibold mb-20 text-black dark:text-white">
          What We Do
        </h2>
      </div>

      <div className="flex">
        <div className="grid md:grid-cols-3 gap-28 mt-14 max-w-6xl mx-auto my-20">
          {[
            {
              title: "Full-Stack Web Development",

              otherDescription: [
                "Custom web applications with React, Next.js, and Vue.js",
                "Backend development using Node.js, Express, and databases (MongoDB, PostgreSQL, MySQL)",
                "API development and integration (REST & GraphQL)",
                "Performance optimization and security enhancements",
                "Responsive and SEO-friendly design",
              ],
            },
            {
              title: "Cross-Platform Mobile Applications",

              otherDescription: [
                "Hybrid app development using Flutter & React Native",
                "Native performance with cross-platform efficiency",
                "Offline capabilities and push notifications",
                "Custom UI/UX design for a seamless experience",
                "Integration with third-party APIs and cloud services",
              ],
            },
            {
              title: "Artificial Intelligence & Machine Learning",

              otherDescription: [
                "AI-powered chatbots and virtual assistants",
                "Predictive analytics for data-driven decisions",
                "Image and speech recognition solutions",
                "Automated data processing and NLP applications",
                "Custom AI models trained on real-world datasets",
              ],
            },
            {
              title: "Cloud Infrastructure & DevOps",

              otherDescription: [
                "Cloud hosting on AWS, Azure, and Google Cloud",
                "CI/CD pipelines for faster deployments",
                "Containerization with Docker & Kubernetes",
                "Infrastructure as Code (Terraform, Ansible)",
                "Serverless computing solutions",
              ],
            },
            {
              title: "User Experience & Interface Design",

              otherDescription: [
                "Wireframing and prototyping (Figma, Adobe XD)",
                "UI design focused on user engagement",
                "Accessibility and usability improvements",
                "Brand identity and design consistency",
                "Microinteractions and animations for better UX",
              ],
            },
            {
              title: "E-Commerce Solutions & Digital Stores",

              otherDescription: [
                "Custom-built e-commerce platforms",
                "Secure payment gateway integration",
                "User-friendly shopping experience",
                "Product management and inventory tracking",
                "Performance optimization for faster checkouts",
              ],
            },
          ].map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              otherDescription={service.otherDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
