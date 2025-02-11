"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import web_development from "../../../../public/web_development.jpg";
import app_development from "../../../../public/app_development.webp";
import seo_optimization from "../../../../public/seo_optimization.jpg";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import Link from "next/link";
import { PlusIcon } from "@/Icons";

export default function App() {
  const slides = [
    {
      title: "Innovative Web Solutions",
      description:
        "We deliver cutting-edge web development services tailored to your business needs. Build a robust online presence with our expert team.",
      image: web_development,
      button: {
        text: "Learn More",
        link: "/services/web-development",
      },
    },
    {
      title: "Mobile App Development",
      description:
        "Create user-friendly and scalable mobile applications for Android and iOS platforms with our skilled developers.",
      image: app_development,
      button: {
        text: "Explore Apps",
        link: "/services/mobile-app-development",
      },
    },

    {
      title: "Boost Your Online Presence",
      description:
        "Our digital marketing strategies ensure your business reaches the right audience effectively and efficiently.",
      image:
        "https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      button: {
        text: "Start Marketing",
        link: "/services/digital-marketing",
      },
    },
    {
      title: "SEO Optimization",
      description:
        "Improve your website's visibility on search engines with our proven SEO techniques. Get found by your customers easily.",
      image: seo_optimization,
      button: {
        text: "Optimize Now",
        link: "/services/seo-optimization",
      },
    },
  ];

  const animationVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
  };

  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      pagination={{
        clickable: true,
      }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 9000 }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[625px]">
            <Image
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
              width={1000}
              height={1000}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
              <motion.div
                variants={animationVariants}
                className="text-4xl font-bold mb-4"
              >
                {slide.title}
              </motion.div>
              <motion.div
                variants={animationVariants}
                className="text-lg max-w-[600px] mb-6"
              >
                {slide.description}
              </motion.div>
              <Link href={slide.button.link}>
                <button className="flex items-center justify-between bg-brand-color rounded-full p-3 gap-2 text-white transition duration-300 ease-in-out hover:bg-brand-color-dark">
                  {slide.button.text}
                  <span className="p-1 bg-white rounded-full text-brand-color">
                    <PlusIcon />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
