import FAQs from "@/components/shared/common/FAQS";
import Title from "@/components/shared/common/Title";
import ContentWidth from "@/components/shared/ContentWidth";
import React from "react";

const FAQS_web_development = () => {
  const faqData = [
    {
      question: "What types of websites do you develop?",
      answer:
        "We develop all types of websites, including static websites, dynamic websites, e-commerce platforms, content management systems (CMS), and custom web applications tailored to your business needs.",
    },
    {
      question: "Do you provide responsive design?",
      answer:
        "Yes, all our websites are designed to be fully responsive, ensuring they look and perform well on all devices, including desktops, tablets, and smartphones.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the complexity of the project. Typically, a standard website takes 2–4 weeks, while more complex web applications may require 6–12 weeks or longer.",
    },
    {
      question: "Will my website be optimized for SEO?",
      answer:
        "Absolutely. We follow SEO best practices during development to ensure your website is search engine friendly, helping improve its visibility and ranking.",
    },
    {
      question: "Can I update the website content myself?",
      answer:
        "Yes, we can integrate a user-friendly content management system (CMS) like WordPress, so you can easily update your website content without technical expertise.",
    },
    {
      question: "Do you offer website maintenance services?",
      answer:
        "Yes, we provide ongoing website maintenance and support services to ensure your site remains up-to-date, secure, and fully functional.",
    },
    {
      question: "Can you integrate third-party tools or APIs into my website?",
      answer:
        "Yes, we can integrate third-party tools, APIs, and services into your website to enhance its functionality and meet your specific business requirements.",
    },
    {
      question: "What technologies do you use for web development?",
      answer:
        "We use modern technologies like HTML, CSS, JavaScript, React.js, Next.js, Node.js, TypeScript, and more. For backend and database, we leverage tools like PostgreSQL, MongoDB, and others as per the project needs.",
    },
    {
      question: "Will my website be secure?",
      answer:
        "Security is a top priority for us. We implement SSL certificates, data encryption, and follow industry best practices to protect your website from vulnerabilities.",
    },
    {
      question: "How much does a website cost?",
      answer:
        "The cost depends on the scope and complexity of the project. Contact us for a custom quote based on your specific requirements.",
    },
  ];

  return (
    <div className="py-20">
      <ContentWidth>
        <div>
          <Title
            title="Frequently Asked Questions"
            description="Have questions about our web development services? We’ve compiled answers to the most common queries to help you understand how we work and what we offer."
          />
          <FAQs data={faqData}/>
        </div>
      </ContentWidth>
    </div>
  );
};

export default FAQS_web_development;
