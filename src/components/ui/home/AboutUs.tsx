"use client";

import ContentWidth from "@/components/shared/ContentWidth";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PlusIcon } from "@/Icons";
import axios from "axios";
import {
  get_home_page_about_data_api_url,
  home_about_image_api,
} from "@/Proxy";
import Link from "next/link";

interface IAboutData {
  _id: string;
  title: string;
  description: string;
  heading: string;
  ctaLink: string;
  ctaText: string;
}

const AboutUs = () => {
  const [aboutSectionData, aboutSectionDataSet] = useState<IAboutData[]>([]);

  const getBannerData = async () => {
    try {
      const response = await axios.get(`${get_home_page_about_data_api_url}`); // Replace with your actual API endpoint
      aboutSectionDataSet(response.data.data.result);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };

  useEffect(() => {
    getBannerData();
  }, []);

  const companyInfo = {
    founderName: "Mohebulla Miazi",
    designation: "CEO and Founder",
  };

  // const aboutSectionData = {
  //   heading: "About IT-Soft",
  //   image: about,
  //   title: "Accelerating Your Path to Business Excellence",
  //   description:
  //     "At IT-Soft, we specialize in crafting innovative solutions that streamline business growth. Our approach combines collaboration with smart strategies to deliver impactful results through diverse channels and technologies.",

  //   companyInfo: {
  //     founderName: "Mohebulla Miazi",
  //     designation: "CEO and Founder",
  //   },
  // };

  return (
    <section className="py-20">
      <ContentWidth>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          {/* Image */}
          <div className="flex-shrink-0 w-full md:h-[500px] md:w-[600px]">
            <img
              src={`${home_about_image_api}/${aboutSectionData[0]?._id}`}
              alt="About Us"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left space-y-4 md:space-y-6">
            <p className="text-brand-color text-xl font-bold tracking-wide uppercase">
              {aboutSectionData[0]?.heading}
            </p>
            <h2 className="text-title leading-snug">
              {aboutSectionData[0]?.title}
            </h2>
            <p className="text-lg text-gray-600">
              {aboutSectionData[0]?.description}
            </p>

            <div className="flex flex-col md:flex-row items-center justify-start gap-10">
              <Link
                href={
                  aboutSectionData[0]?.ctaLink
                    ? aboutSectionData[0]?.ctaLink
                    : ""
                }
              >
                <button className="flex items-center justify-between bg-brand-color rounded-full p-3 gap-2 text-white transition duration-300 ease-in-out hover:bg-brand-color-dark">
                  {aboutSectionData[0]?.ctaText}
                  <span className="p-1 bg-white rounded-full text-brand-color">
                    <PlusIcon />
                  </span>
                </button>
              </Link>
              <div className="flex items-center justify-start gap-4">
                <Image
                  src={`${home_about_image_api}/${aboutSectionData[0]?._id}`}
                  alt="Founder"
                  width={56}
                  height={56}
                  className="w-14 h-14 border-2 border-brand-color rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <div className="text-xl font-semibold text-gray-800">
                    {companyInfo.founderName}
                  </div>
                  <div className="text-sm text-gray-600">
                    {companyInfo.designation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default AboutUs;
