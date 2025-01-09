import Client_Testimonials from "@/components/shared/common/Client_Testimonials";
import Why_choose_us from "@/components/shared/common/Why_choose_us";
import About_web_development from "@/components/ui/website_development/About_web_development";
import Benefits_web_development from "@/components/ui/website_development/Benefits_web_development";
import Portfolio_web_development from "@/components/ui/website_development/Portfolio_web_development";
import Service_web_development from "@/components/ui/website_development/Service_web_development";
import Web_development_banner from "@/components/ui/website_development/Web_development_banner";
import React from "react";

const WebDevelopment = () => {
  return (
    <div className="">
      {/* Banner Content */}
      <Web_development_banner />
      <About_web_development />
      <Service_web_development />
      <Benefits_web_development />
      <Portfolio_web_development />
      <Client_Testimonials />
      <Why_choose_us />
    </div>
  );
};

export default WebDevelopment;
