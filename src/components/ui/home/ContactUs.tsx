import ContentWidth from "@/components/shared/ContentWidth";
import { EmailIcon, LocationIcon, PhoneIcon } from "@/Icons";
import React from "react";

const ContactUs = () => {
  const ContactData = [
    {
      logo: <LocationIcon />,
      title: "Location",
      desc: "Jatrabari, Dhaka 1204, Bangladesh",
    },
    {
      logo: <EmailIcon />,
      title: "Email Address",
      desc: "mohibullamiazi@gmail.com",
    },
    {
      logo: <PhoneIcon />,
      title: "Phone Number",
      desc: "+8801956867166",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <ContentWidth>
        {/* Section Header */}
        <div className="flex flex-col justify-center items-center mb-12">
          <h5 className="flex items-center text-subtitle text-brand-color mb-4">
            <span className="block w-16 h-px bg-brand-color mx-4"></span>
            Get in Touch with Us
            <span className="block w-16 h-px bg-brand-color mx-4"></span>
          </h5>
          <h3 className="text-title max-w-[530px] text-center">
            Contact With Us To Start A{" "}
            <span className="text-brand-color">New Project</span> Together!
          </h3>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info Cards */}
          <div className="flex flex-col gap-6 w-full md:w-1/3">
            {ContactData.map((item, index) => (
              <div
                key={index}
                className="border group rounded-lg p-6 flex items-start gap-4 transition-all duration-300"
              >
                <div className="text-subtitle p-2 border rounded-full bg-brand-color group-hover:bg-white">
                  <span className="text-white group-hover:text-brand-color">
                    {item.logo}
                  </span>
                </div>
                <div>
                  <h4 className="text-subtitle font-semibold mb-1 group-hover:text-brand-color">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form className="w-full md:w-2/3  space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-color focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-color focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="text-gray-700 font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter the subject"
                className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-color focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-gray-700 font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here"
                rows={6}
                className="px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-color focus:outline-none"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-brand-color text-white font-semibold rounded-md shadow-md hover:bg-brand-color-dark transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </ContentWidth>
    </section>
  );
};

export default ContactUs;
