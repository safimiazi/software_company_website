"use client";

import ContentWidth from "@/components/shared/ContentWidth";
import Image from "next/image";
import React from "react";
import about from "../../../../public/about.png";
import {  PlusIcon } from "@/Icons";
import { motion } from "framer-motion";

const About_web_development = () => {
  const aboutSectionData = {
    heading: "Web Development Service",
    image: about,
    title: "Accelerating Your Path to Business Excellence",
    description:
      "At IT-Soft, we specialize in crafting innovative solutions that streamline business growth. Our approach combines collaboration with smart strategies to deliver impactful results through diverse channels and technologies.",

    companyInfo: {
      founderName: "Mohebulla Miazi",
      designation: "CEO and Founder",
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20">
      <ContentWidth>
        <motion.div
          className="flex flex-col lg:flex-row gap-10 items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariants}
        >
          {/* Image */}
          <motion.div
            className="flex-shrink-0 w-full md:w-[600px]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={aboutSectionData.image}
              alt="About Us"
              width={1000}
              height={1000}
              className="w-full"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-center md:text-left space-y-4 md:space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInVariants}
          >
            <p className="text-brand-color text-xl font-bold tracking-wide uppercase">
              {aboutSectionData.heading}
            </p>
            <h2 className="text-title leading-snug">
              The Fastest Way To Achieve Your Business{" "}
              <span className="text-brand-color">Success</span>
            </h2>
            <p className="text-lg text-gray-600">
              {aboutSectionData.description}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-start gap-10">
              <motion.button
                className="flex items-center justify-between bg-brand-color rounded-full p-3 gap-2 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Now
                <span className="p-1 bg-white rounded-full text-brand-color">
                  <PlusIcon />
                </span>
              </motion.button>
              <div className="flex items-center justify-start gap-4">
                <Image
                  src={aboutSectionData.image}
                  alt="Founder"
                  width={56}
                  height={56}
                  className="w-14 h-14 border-2 border-brand-color rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <motion.div
                    className="text-xl font-semibold text-gray-800"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.5 }}
                  >
                    {aboutSectionData.companyInfo.founderName}
                  </motion.div>
                  <motion.div
                    className="text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.6 }}
                  >
                    {aboutSectionData.companyInfo.designation}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </ContentWidth>
    </section>
  );
};

export default About_web_development;
