import AboutUs from "@/components/ui/home/AboutUs";
import Achivement from "@/components/ui/home/Achivement";
import Banner from "@/components/ui/home/Banner";
import CaseStudies from "@/components/ui/home/CaseStudies";
import Services from "@/components/ui/home/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AboutUs/>
      <Services/>
      <Achivement/>
      <CaseStudies/>
    </div>
  );
}
