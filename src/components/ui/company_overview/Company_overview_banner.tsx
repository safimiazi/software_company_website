import PageBanner from "@/components/shared/common/PageBanner";
import React from "react";

const CompanyOverviewBanner: React.FC = () => {
  return (
    <div>
      <PageBanner
        backgroundImage="/Company_overview_banner.jpg"
        title="Welcome to Our Company"
        description="At Easy Soft Bangladesh, we empower businesses with innovative software solutions tailored to their needs."
      />
    </div>
  );
};

export default CompanyOverviewBanner;
