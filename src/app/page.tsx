import AboutUs from "@/components/ui/home/AboutUs";
import Achivement from "@/components/ui/home/Achivement";
import Banner from "@/components/ui/home/Banner";
import Blog from "@/components/ui/home/Blog";
import CaseStudies from "@/components/ui/home/CaseStudies";
import ContactUs from "@/components/ui/home/ContactUs";
import Projects from "@/components/ui/home/Projects";
import Services from "@/components/ui/home/Services";
import WorkProcess from "@/components/ui/home/WorkProcess";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AboutUs/>
      <Services/>
      <Achivement/>
      <CaseStudies/>
      <Projects/>
      <WorkProcess/>
      <Blog/>
      <ContactUs/>
    </div>
  );
}
