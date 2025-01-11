import Company_overview_about from "@/components/ui/company_overview/Company_overview_about";
import Company_overview_banner from "@/components/ui/company_overview/Company_overview_banner";
import Company_overview_services from "@/components/ui/company_overview/Company_overview_services";
import React from "react";

const CompanyOverview = () => {
  return (
    <div>
      <Company_overview_banner />
      <Company_overview_about />
      <Company_overview_services/>
    </div>
  );
};

export default CompanyOverview;
