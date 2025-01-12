import Client_Testimonials from "@/components/shared/common/Client_Testimonials";
import Portfolio from "@/components/shared/common/Portfolio";
import Why_choose_us from "@/components/shared/common/Why_choose_us";
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
      <Why_choose_us/>
      <Portfolio/>
      <Client_Testimonials/>
    </div>
  );
};

export default CompanyOverview;
