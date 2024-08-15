"use client";
import useScrollNavbar from "@/hook/useScrollNavbar";
import React, { useMemo } from "react";

const Navbar = () => {
  const scrollDirection = useScrollNavbar();

  const showNavbar = useMemo(() => {
    return scrollDirection === "up" ? "translate-y-0" : "-translate-y-full";
  }, [scrollDirection]);

  return (
    <div
      className={`w-full pt-4 px-14 fixed z-10  transition-transform duration-300 ${showNavbar}`}
    >
      <div className="border rounded-2xl w-full h-[58px] flex justify-between items-center py-1 px-5 backdrop-blur-[1px] saturate-100 bg-white/55 ">
        <span className="text-2xl font-bold">Leya.</span>
        <div className="flex gap-10 text-sm text-[#1a1b1f] font-semibold">
          <span>Security</span>
          <span>Careers</span>
          <span>Customers</span>
          <span>Blog</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
