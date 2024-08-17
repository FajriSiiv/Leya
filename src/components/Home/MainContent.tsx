import React from "react";
import ButtonDemon from "../ButtonDemon";
import TypingHome from "@/hook/useTyping";
import { Navigation } from "lucide-react";
import perezLogo from "@/assets/perez-llorca-logo.svg";
import Image from "next/image";

function MainContent() {
  return (
    <>
      <div className="w-full relative max-h-[768px]">
        <div className="w-fit bg-black/5 py-1 px-2 rounded-full mb-5 mx-auto text-sm cursor-pointer">
          Blog Annoucing $25m in Series A
        </div>
        <h1 className="text-6xl w-[670px] text-center font-semibold mx-auto max-md:text-3xl max-md:w-[80%]">
          Every draft, argument and review matters.
        </h1>
        <div className="mt-5 text-primary/80 text-center text-sm">
          <span>And you need unparalleled tools to perfect every detail.</span>
        </div>
        <ButtonDemon color={true} />
        <div className="w-full bg-gradient-to-tr from-orange-300 to-yellow-50 to-95% h-[280px] rounded-lg mt-10 relative max-md:h-[150px]">
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 py-2 px-4 rounded-lg bg-[#fcfcfd99]  flex items-center justify-center">
            <TypingHome />
            <Navigation size={23} />
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-6 gap-4 my-[2rem] max-md:grid-cols-3 max-md:grid-rows-2">
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
    </>
  );
}

export default MainContent;
