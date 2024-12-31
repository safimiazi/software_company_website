"use client"
import React from "react";
import { motion } from "framer-motion";

const NavbarCallIconAnimation = () => {
  return (
    <div>
       <motion.div
      className="absolute w-12 h-12 rounded-full bg-brand-color opacity-30"
      initial={{ scale: 1 }}
      animate={{ scale: 1.5, opacity: 0 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut", // Smooth animation ease-in and ease-out
      }}
    />
    </div>
  );
};

export default NavbarCallIconAnimation;
