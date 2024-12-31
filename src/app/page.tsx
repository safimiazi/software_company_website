import AboutUs from "@/components/ui/home/AboutUs";
import Banner from "@/components/ui/home/Banner";
import Image from "next/image";
import Services from "./services/page";

export default function Home() {
  return (
    <div>
      <Banner/>
      <AboutUs/>
      <Services/>
    </div>
  );
}
