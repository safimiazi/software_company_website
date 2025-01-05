"use client";
import { motion } from "framer-motion";
import web_development_banner_image from "../../../../public/about.png";
import Image from "next/image";
import ContentWidth from "@/components/shared/ContentWidth";

const Web_development_banner = () => {
  return (
    <div className="relative">
         {/* Gradient Background (Left Side to Half Width) */}
      <div
        className="absolute top-0 left-0 h-full w-1/2 -z-10"
        style={{
          background: `linear-gradient(90deg, #FFECD1 0%, #FFF6E8 50%, rgba(0, 0, 0, 0) 100%)`,
        }}
      ></div>
      <ContentWidth>
        <div className="flex flex-col-reverse lg:flex-row items-center   min-h-screen">
          {/* Left Section: Text */}
          <div className="text-center lg:text-left lg:w-1/2 space-y-6">
            {/* Animated Heading */}
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-title md:text-5xl font-extrabold "
            >
              Build Your Dream <span className="text-brand-color">Website</span>
            </motion.h1>
            {/* Animated Description */}
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-600 text-lg md:text-xl"
            >
              At Easy Soft Bangladesh, we craft modern, responsive, and tailored
              website designs to bring your ideas to life. Fast, reliable, and
              optimized solutions are just a click away.
            </motion.p>
            {/* Animated Button */}
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center justify-between bg-brand-color rounded-full p-3 gap-2 text-white transition duration-300 ease-in-out hover:bg-brand-color-dark"
            >
              Get Started
            </motion.button>
          </div>

          {/* Right Section: Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:w-1/2 w-full flex justify-center"
          >
            <Image
              src={web_development_banner_image} // Replace with your image path
              alt="Web Development"
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </ContentWidth>
    </div>
  );
};

export default Web_development_banner;
