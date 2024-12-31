import React from "react";
import ContentWidth from "../ContentWidth";
import Image from "next/image";
import Link from "next/link";
import TopNavigation from "./TopNavigation";
import { BrandCallIcon, ButtonCallIcon } from "@/Icons";
import NavbarCallIconAnimation from "./NavbarCallIconAnimation";

const Navbar = () => {
  return (
    <div className="bg-white w-full  border-b-2 border-brand-color">
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
          <div className="flex items-center justify-center gap-6">
            <Link href={"/"}>
              <button className="global-button flex items-center justify-between gap-2">
                <span>Contact Us</span>

                <span>
                  <ButtonCallIcon />
                </span>
              </button>
            </Link>
            <Link href={"/"}>
              <div className="relative flex justify-center items-center">
                <div className="absolute w-12 h-12 rounded-full bg-brand-color">
                  <NavbarCallIconAnimation />
                </div>

                <div className="p-2 bg-brand-color rounded-full text-white z-10">
                  <BrandCallIcon />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </ContentWidth>
    </div>
  );
};

export default Navbar;
