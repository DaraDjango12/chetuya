"use client";
import Button from "./Button";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";

const NavList = [
  { name: "Home", link: "/" },
  { name: "Post Odds", link: "/pages/privacypolicy" },
  { name: "Check Odds", link: "/pages/privacypolicy" },
  { name: "Terms and Conditions ", link: "/pages/termsofservice" },
];

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="px-4">
      <nav className="mt-4">
        {/* mobile nav */}
        <div className="block md:hidden">
          <div className="flex item-center justify-between  ">
            <div className="text-2xl">CHETAYA</div>
            <div>
              <TfiAlignJustify size={"2rem"} onClick={toggleMenu} />
            </div>
          </div>
          <div className="absolute flex flex-col mt-4 justify-between  item-center gap-1  ">
            {NavList.map((item, i) => (
              <Link
                className={`w-[30vw]  ${
                  mobileOpen ? "block" : "hidden"
                } text-center`}
                key={i}
                href={item.link}
              >
                <p className=" bg-slate-400 p-2 rounded">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* web Nav */}
        <div className="hidden md:block">
          <div className="flex item-center justify-between ">
          <div className="text-2xl">CHETAYA</div>
            <div className="flex justify-between item-center gap-4  ">
              {NavList.map((item, i) => (
                <Link key={i} href={item.link}>
                  <p className=" bg-slate-400 p-2 rounded">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-col bg-black">

      </div>




    </div>
  );
};

export default Navbar;
