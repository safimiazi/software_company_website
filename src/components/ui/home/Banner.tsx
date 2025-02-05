"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"; // Import Framer Motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import Link from "next/link";
import { PlusIcon } from "@/Icons";
import axios from "axios";
import {
  get_home_page_banner_data_api_url,
  home_banner_image_api,
} from "@/Proxy";

interface BannerData {
  _id: string;
  title: string;
  description: string;
  ctaLink: string;
  ctaText: string;
}

export default function App() {
  const [bannerData, bannerDataSet] = useState<BannerData[]>([]);

  const getBannerData = async () => {
    try {
      const response = await axios.get(`${get_home_page_banner_data_api_url}`); // Replace with your actual API endpoint
      bannerDataSet(response.data.data.result);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };

  useEffect(() => {
    getBannerData();
  }, []);

  // const slides = [
  //   {
  //     title: "Innovative Web Solutions",
  //     description:
  //       "We deliver cutting-edge web development services tailored to your business needs. Build a robust online presence with our expert team.",
  //     image:
  //       "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     button: {
  //       text: "Learn More",
  //       link: "/services/web-development",
  //     },
  //   },
  //   {
  //     title: "Mobile App Development",
  //     description:
  //       "Create user-friendly and scalable mobile applications for Android and iOS platforms with our skilled developers.",
  //     image:
  //       "https://images.pexels.com/photos/6078120/pexels-photo-6078120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     button: {
  //       text: "Explore Apps",
  //       link: "/services/mobile-app-development",
  //     },
  //   },
  //   {
  //     title: "Creative UI/UX Design",
  //     description:
  //       "Enhance user experiences with intuitive and visually appealing designs. Let us craft the perfect interface for your software.",
  //     image:
  //       "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     button: {
  //       text: "See Our Work",
  //       link: "/services/ui-ux-design",
  //     },
  //   },
  //   {
  //     title: "Boost Your Online Presence",
  //     description:
  //       "Our digital marketing strategies ensure your business reaches the right audience effectively and efficiently.",
  //     image:
  //       "https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     button: {
  //       text: "Start Marketing",
  //       link: "/services/digital-marketing",
  //     },
  //   },
  //   {
  //     title: "SEO Optimization",
  //     description:
  //       "Improve your website's visibility on search engines with our proven SEO techniques. Get found by your customers easily.",
  //     image:
  //       "https://images.pexels.com/photos/571753/pexels-photo-571753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     button: {
  //       text: "Optimize Now",
  //       link: "/services/seo-optimization",
  //     },
  //   },
  // ];

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
      {bannerData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[625px]">
            <Image
              src={`${home_banner_image_api}/${slide._id}`}
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
              <Link href={slide.ctaLink}>
                <button className="flex items-center justify-between bg-brand-color rounded-full p-3 gap-2 text-white transition duration-300 ease-in-out hover:bg-brand-color-dark">
                  {slide.ctaText}
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
