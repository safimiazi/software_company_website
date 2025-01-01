import React from "react";
import ContentWidth from "./ContentWidth";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/Icons";

const Footer = () => {
  const latestBlogs = [
    {
      title: "How AI is Transforming the Software Development Landscape",
      picture:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "2025-01-01",
    },
    {
      title: "Top 5 Features to Include in a Modern Business Website",
      picture:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      date: "2024-12-28",
    },
  ];

  const truncateBlogTitle = (text: string) => {
    const words = text.split(" ");
    if (words.length > 7) {
      return words.slice(0, 7).join(" ") + " ...";
    }
    return text;
  };

  return (
    <div className="w-full bg-neutral-900   text-white pt-20">
      <ContentWidth>
        {/* middle footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="mb-5 space-y-8">
            <h4 className="text-subtitle">About Us</h4>
            <p>
              Busines Consulting is optimize standing manufactured products and
              installation synergy. Professionally predominat why professional
              business
            </p>
            <div className="flex items-center justify-start gap-3">
              <div className="p-2 bg-brand-color rounded-full hover:bg-white hover:text-brand-color transition-colors duration-300">
                <FacebookIcon />
              </div>
              <div className="p-2 bg-brand-color rounded-full hover:bg-white hover:text-brand-color transition-colors duration-300">
                <InstagramIcon />
              </div>
              <div className="p-2 bg-brand-color rounded-full hover:bg-white hover:text-brand-color transition-colors duration-300">
                <LinkedinIcon />
              </div>
            </div>
          </div>
          <div className="mb-5 space-y-8">
            <h4 className="text-subtitle">Company</h4>
            <ul>
              <li className="pb-4 hover:text-brand-color transition-colors duration-300">
                Home
              </li>
              <li className="pb-4 hover:text-brand-color transition-colors duration-300">
                About Us
              </li>
              <li className="pb-4 hover:text-brand-color transition-colors duration-300">
                Contact Us
              </li>
              <li className="pb-4 hover:text-brand-color transition-colors duration-300">
                Services
              </li>
              <li className="pb-4 hover:text-brand-color transition-colors duration-300">
                Our Team
              </li>
            </ul>
          </div>
          <div className="mb-5 space-y-8">
            <h4 className="text-subtitle">Services</h4>
            <ul>
              <li className="pb-4 hover:text-brand-color transition-colors duration-300">
                Web Development
              </li>
              <li className="pb-4 hover:text-brand-color transition-colors duration-300">
                Mobile App Development
              </li>
              <li className="pb-4 hover:text-brand-color transition-colors duration-300">
                Software Development
              </li>
              <li className="pb-4 hover:text-brand-color transition-colors duration-300">
                Digital Marketing
              </li>
            </ul>
          </div>
          <div className=" mb-5 space-y-8">
            <h4 className="text-subtitle">Latest Blogs</h4>
            {latestBlogs.map((blog, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-md  transition duration-300"
              >
                {/* Blog Image */}
                <div className="flex-shrink-0 w-[100px] h-[70px]">
                  <Image
                    src={blog.picture}
                    alt={blog.title}
                    width={200}
                    height={140}
                    priority
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Blog Details */}
                <div className="flex-grow">
                  <h3 className="text-md font-medium  line-clamp-2 hover:text-brand-color transition-colors duration-300">
                    {truncateBlogTitle(blog.title)}
                  </h3>
                  <p className="text-sm text-gray-500">{blog.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentWidth>
      <div className="bg-gray-900">
        <ContentWidth>
          {/* buttom footer */}
          <div className=" flex flex-col h-20 md:flex-row md:items-center items-start gap-4 justify-between">
            <Image
              src="https://wp.ditsolution.net/itsoft/wp-content/uploads/2020/09/main-logo.png"
              alt="Logo"
              width={150}
              height={150}
              priority
              className="object-contain"
            />
            <p className="text-white">
              Copyright © 2022 IT-Soft all rights reserved. Design By Dream IT
            </p>
          </div>
        </ContentWidth>
      </div>
    </div>
  );
};

export default Footer;
