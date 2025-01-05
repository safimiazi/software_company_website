"use client"
import { motion } from "framer-motion";
import React from "react";

const About_web_development = () => {
  return (
    <section className="container mx-auto px-4 py-16 lg:flex lg:items-center lg:gap-16">
      {/* Left Side: Text Content */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
          About Web Development
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Web development is the backbone of any successful digital presence.
          Our team specializes in creating stunning, responsive, and
          high-performing websites tailored to your business needs. From
          cutting-edge technologies to seamless user experience, we deliver
          solutions that stand out in the competitive digital landscape.
        </p>
        <p className="mt-4 text-lg text-gray-600">
          Let us turn your ideas into reality and help you make a lasting
          impact online.
        </p>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        className="lg:w-1/2 mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-full h-64 lg:h-96">
          <img
            src="/about-web-development.jpg" // Replace with your actual image path
            alt="Web Development Process"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About_web_development;

