/* eslint-disable @next/next/no-img-element */
// components/BlogSection.tsx
import React from "react";
import ContentWidth from "../ContentWidth";
import Title from "./Title";
import { Truncate } from "@/utility/CommonFunction";

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  link: string; // URL for the full blog post
}

interface BlogSectionProps {
  blogs: BlogPost[];
  sectionTitle: string;
  sectionDescription: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({
  blogs,
  sectionTitle,
  sectionDescription,
}) => {
  return (
    <section className="py-20">
      <ContentWidth>
        <div className="space-y-10">
          <Title title={sectionTitle} description={sectionDescription}/>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white border p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  By {blog.author} | {blog.date}
                </p>
                <p className="text-gray-600 mb-4">{Truncate(blog.description, 8)}</p>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-color text-white px-4 py-2 rounded-md  transition duration-300"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default BlogSection;
