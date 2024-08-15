import Section from "@/components/Section";
import TypingHome from "@/hook/useTyping";
import { Navigation } from "lucide-react";
import perezLogo from "@/assets/perez-llorca-logo.svg";

import React from "react";
import Image from "next/image";
import SectionMission from "./SectionMission";
import OurPlatform from "./OurPlatform";

export default function Homepage() {
  return (
    <Section>
      <div className="h-fit mx-auto w-[1024px] pt-[8rem] px-10">
        <div className="w-full  relative max-h-[768px]">
          <div className="w-fit bg-black/5 py-1 px-2 rounded-full mb-5 mx-auto text-sm cursor-pointer">
            Blog Annoucing $25m in Series A
          </div>
          <h1 className="text-6xl w-[670px] text-center font-semibold mx-auto">
            Every draft, argument and review matters.
          </h1>
          <div className="mt-5 text-primary/80 text-center text-sm">
            <span>
              And you need unparalleled tools to perfect every detail.
            </span>
          </div>
          <div className="mt-5 w-fit mx-auto">
            <button className="text-white bg-primary rounded-sm py-2 px-4 hover:bg-primary/70 transition-all duration-500 flex gap-x-2 items-center text-sm">
              <span>Book a demo</span>
              <div className="flex gap-x-1 items-center justify-center">
                <p className="text-[11px] border-[1px] border-white/50 text-white/40 flex items-center justify-center p-[1px] rounded-sm w-[20px] h-[20px]">
                  ⌘
                </p>
                <span className="text-[11px] border-[1px] border-white/50 text-white/40 flex items-center justify-center p-[1px] rounded-sm w-[20px] h-[20px]">
                  K
                </span>
              </div>
            </button>
          </div>
          <div className="w-full bg-gradient-to-tr from-orange-300 to-yellow-50 to-95% h-[280px] rounded-lg mt-10 relative">
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 py-2 px-4 rounded-lg bg-[#fcfcfd99]  flex items-center justify-center">
              {/* <p className="py-1 w-[500px]">Hello World</p> */}
              <TypingHome />
              <Navigation size={23} />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-6 gap-4 my-[2rem] ">
          <div>
            <Image
              src={perezLogo}
              alt=""
              className="w-[100px] h-[40px] mx-auto"
            />
          </div>
          <div>
            <Image
              src={perezLogo}
              alt=""
              className="w-[100px] h-[40px] mx-auto"
            />
          </div>
          <div>
            <Image
              src={perezLogo}
              alt=""
              className="w-[100px] h-[40px] mx-auto"
            />
          </div>
          <div>
            <Image
              src={perezLogo}
              alt=""
              className="w-[100px] h-[40px] mx-auto"
            />
          </div>
          <div>
            <Image
              src={perezLogo}
              alt=""
              className="w-[100px] h-[40px] mx-auto"
            />
          </div>
          <div>
            <Image
              src={perezLogo}
              alt=""
              className="w-[100px] h-[40px] mx-auto"
            />
          </div>
        </div>
        <SectionMission />
        <OurPlatform />
      </div>
    </Section>
  );
}
