import BlogSection from '@/components/shared/common/BlogSection';
import React from 'react';

const BlogSection_blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      description:
        "Discover how AI is shaping the future of software development and the opportunities it brings.",
      image: "https://via.placeholder.com/400x200", // Replace with actual blog image
      date: "January 12, 2025",
      author: "Safi Mianchi",
      link: "/blog/future-of-ai",
    },
    {
      id: 2,
      title: "10 Tips for Effective Project Management",
      description:
        "Learn practical tips to streamline project management and achieve success.",
      image: "https://via.placeholder.com/400x200",
      date: "January 5, 2025",
      author: "Team Easy Soft",
      link: "/blog/project-management-tips",
    },
    {
      id: 3,
      title: "Top Web Development Trends in 2025",
      description:
        "Stay ahead in the industry by exploring the latest web development trends for 2025.",
      image: "https://via.placeholder.com/400x200",
      date: "December 30, 2024",
      author: "Safi Mianchi",
      link: "/blog/web-development-trends",
    },
  ];
  return (
    <div>
       <BlogSection
        sectionTitle="Latest Blog Posts"
        sectionDescription="Stay updated with our expert articles, insights, and tips on software development, project management, and more."
        blogs={blogs}
      />
    </div>
  );
};

export default BlogSection_blog;