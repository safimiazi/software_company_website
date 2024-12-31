import React from "react";
import ContentWidth from "../ContentWidth";
import Image from "next/image";
import Link from "next/link";
import TopNavigation from "./TopNavigation";
import { BrandCallIcon, ButtonCallIcon, SideMenuIcon } from "@/Icons";
import NavbarCallIconAnimation from "./NavbarCallIconAnimation";

const Navbar = () => {
  return (
    <div className="bg-white w-full  border-b-4 sticky top-0 z-50 border-brand-color shadow-md">
      <ContentWidth>
        <div className="flex items-center justify-between">
          <div className="flex items-center h-20">
            <Link href={"/"}>
              <Image
                src="https://wp.ditsolution.net/itsoft/wp-content/uploads/2020/09/main-logo.png"
                alt="Logo"
                width={150}
                height={150}
                priority
                className="object-contain"
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <TopNavigation />
          </div>
          <div className="flex items-center justify-center gap-8">
            <Link href={"/about-us/contact"} className="hidden sm:block">
              <button className="global-button flex items-center justify-between gap-2 cursor-pointer">
                <span>Contact Us</span>

                <span>
                  <ButtonCallIcon />
                </span>
              </button>
            </Link>
            <Link href={"/"} className="cursor-pointer">
              <div className="relative flex justify-center items-center">
                <div className="absolute w-12 h-12 rounded-full bg-brand-color">
                  <NavbarCallIconAnimation />
                </div>

                <div className="p-2 bg-brand-color rounded-full text-white z-10">
                  <BrandCallIcon />
                </div>
              </div>
            </Link>
            <div className="max-sm:block hidden cursor-pointer text-brand-color">
              <SideMenuIcon />
            </div>
          </div>
        </div>
      </ContentWidth>
    </div>
  );
};

export default Navbar;
