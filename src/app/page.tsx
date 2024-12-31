import AboutUs from "@/components/ui/home/AboutUs";
import Banner from "@/components/ui/home/Banner";
import Services from "@/components/ui/home/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AboutUs/>
      <Services/>
    </div>
  );
}
