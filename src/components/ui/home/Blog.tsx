import ContentWidth from "@/components/shared/ContentWidth";
import { MarketingIcon, PlusIcon, PostIcon, WebIcon } from "@/Icons";
import Image from "next/image";
import React from "react";
import BlogImage from "../../../../public/case1.png";
import Link from "next/link";
import { Truncate } from "@/utility/CommonFunction";

const Blog = () => {
  const blogSectionData = {
    heading: "Our Insights",
    title: "Explore the Latest Trends and Tips from Our Blog",
    blogs: [
      {
        title: "The Future of Website Development in 2025",
        description:
          "Stay ahead of the curve by exploring emerging technologies and trends shaping the future of web development.",
        image: BlogImage,
        link: "/blog/future-of-web-development",
      },
      {
        title: "How Digital Marketing Drives Business Growth",
        description:
          "Discover actionable strategies to boost your business's online presence and achieve measurable results.",
        image: BlogImage,
        link: "/blog/digital-marketing-growth",
      },
      {
        title: "Custom Software Solutions for Modern Businesses",
        description:
          "Learn how tailored software solutions can enhance efficiency and scale your business operations.",
        image: BlogImage,
        link: "/blog/custom-software-solutions",
      },
      {
        title: "Mobile App Design Best Practices in 2025",
        description:
          "Explore design principles and trends for creating user-friendly, engaging mobile applications.",
        image: BlogImage,
        link: "/blog/mobile-app-design",
      },
    ],
  };

  return (
    <section className="py-20 bg-black">
      <ContentWidth>
        {/* Section Header */}
        <p className="text-brand-color text-xl font-bold tracking-wide uppercase">
          {blogSectionData.heading}
        </p>
        <div className="flex items-start md:flex-row flex-col gap-3 justify-between mb-12">
          <h2 className="text-title text-white max-w-[500px] text-3xl leading-snug">
            {blogSectionData.title}
          </h2>
          <button className="flex items-center justify-between bg-brand-color rounded-full p-3 gap-2 text-white transition duration-300 ease-in-out hover:bg-brand-color-dark">
            View All Blogs
            <span className="p-1 bg-white rounded-full text-brand-color">
              <PlusIcon />
            </span>
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
          {blogSectionData.blogs.map((blog, index) => (
            <div
              key={index}
              className=" bg-white border blog-cord-container rounded-lg  overflow-hidden "
            >
              <div className="relative">
                <div className=" color-effect-container"></div>

                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <PostIcon />
                  <span className="text-brand-color text-sm font-semibold">
                    Blog Post
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {Truncate(blog.description, 12)}
                </p>
                <Link
                  href={blog.link}
                  className="text-brand-color text-sm font-medium mt-4 inline-flex items-center gap-2 hover:underline"
                >
                  Read More <span className="text-lg">+</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </ContentWidth>
    </section>
  );
};

export default Blog;
