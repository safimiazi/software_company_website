import PageBanner from "@/components/shared/common/PageBanner";
import React from "react";
import WhyWorkWithUs_career from "./WhyWorkWithUs_career";

const Career_banner = () => {
  return (
    <div>
      <PageBanner
        backgroundImage="/Company_overview_banner.jpg"
        title="Build Your Future with Us"
        description="Join Easy Soft Bangladesh to innovate, grow, and make an impact in the digital world. Your journey to excellence starts here."
        cta="Explore Open Positions"
        cta_link="#"
      />
      <WhyWorkWithUs_career />
    </div>
  );
};

export default Career_banner;
