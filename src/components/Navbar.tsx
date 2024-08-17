"use client";
import useScrollNavbar from "@/hook/useScrollNavbar";
import { Menu, XIcon } from "lucide-react";
import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const scrollDirection = useScrollNavbar();
  const [menuBar, setMenuBar] = useState(false);

  const showNavbar = useMemo(() => {
    return scrollDirection === "up" ? "translate-y-0" : "-translate-y-full";
  }, [scrollDirection]);

  const menuClick = () => {
    if (menuBar) {
      setMenuBar(false);
    } else {
      setMenuBar(true);
    }
  };

  return (
    <div
      className={`w-full pt-4 px-14 fixed z-10  transition-transform duration-300 ${showNavbar}
      max-lg:px-8 max-sm:px-3
      `}
    >
      <div className="border rounded-2xl w-full h-[58px] flex justify-between items-center py-1 px-5 backdrop-blur-[1px] saturate-100 bg-white/90 z-10">
        <span className="text-2xl font-bold">Leya.</span>
        <div className="flex gap-10 text-sm text-[#1a1b1f] font-semibold max-lg:hidden">
          <span>Security</span>
          <span>Careers</span>
          <span>Customers</span>
          <span>Blog</span>
        </div>
        <div className="lg:hidden">
          <button className="bg-primary p-1.5 rounded-md" onClick={menuClick}>
            <AnimatePresence initial={false} mode="wait">
              {!menuBar ? (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu color="#fff" />
                </motion.div>
              ) : (
                <motion.div
                  key="xicon"
                  initial={{ opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <XIcon color="#fff" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
      <div
        className={`border rounded-2xl w-full flex justify-between items-center py-1 px-5 backdrop-blur-[1px] saturate-100 bg-white/90 mt-5 transition-all ease-linear  ${
          menuBar ? "translate-y-0" : "-translate-y-[300%]"
        }`}
      >
        <ul className="flex flex-col gap-y-5 w-full py-5">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
