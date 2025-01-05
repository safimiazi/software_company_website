import About_web_development from "@/components/ui/website_development/About_web_development";
import Web_development_banner from "@/components/ui/website_development/Web_development_banner";
import React from "react";

const WebDevelopment = () => {
  return (
    <div className="">
     

      {/* Banner Content */}
      <Web_development_banner />
      <About_web_development/>
    </div>
  );
};

export default WebDevelopment;
