"use client"
import React, { useEffect, useState } from "react";
import { ITopNavigationItems, TopNavigationItems } from "./TopNavigationItems";
import Link from "next/link";
import { NavbarArrowIcon } from "@/Icons";
import { useRouter } from "next/navigation";

const TopNavigation = () => {
    const [pathname, setPathname] = useState(window.location.pathname);

    useEffect(() => {
        setPathname(window.location.pathname);
   
  
    }, []);
  return (
    <div>
      <ul className="flex items-center justify-center gap-4">
        {TopNavigationItems.map((item: ITopNavigationItems, i: number) => (
          <li key={i} className="relative group  hover:text-brand-color">
            <Link href={item.path}>
              <div
                className={`${
                  pathname === item?.path && "text-brand-color"
                } flex gap-1 items-center`}
              >
                {item.name}
                {item.children && <NavbarArrowIcon />}
              </div>
            </Link>
            {item?.children && (
              <div className="absolute  bg-white w-[240px] shadow-md py-4 px-2 rounded-sm border-t-[3.4px] group-hover:border-brand-color hidden group-hover:block">
                <ul className="flex flex-col">
                  {item?.children?.map(
                    (item: ITopNavigationItems, i: number) => (
                      <Link key={i} href={item.path}>
                        <li
                          className={`px-2 py-2 leading-4 hover:bg-brand-color hover:text-white rounded-sm ${
                            pathname === item.path && "text-brand-color"
                          }`}
                        >
                          {item?.name}
                        </li>
                      </Link>
                    )
                  )}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopNavigation;
