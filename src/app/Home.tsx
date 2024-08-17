import Section from "@/components/Section";

import React from "react";
import SectionMission from "../components/Home/SectionMission";
import OurPlatform from "../components/Home/OurPlatform";
import Testimonial from "../components/Home/Testimonial";
import Benefit from "../components/Home/Benefit";
import OpenPosition from "../components/Home/OpenPosition";
import MainContent from "@/components/Home/MainContent";

export default function Homepage() {
  return (
    <div className="">
      <Section>
        <div className="h-fit mx-auto max-w-[1024px] w-full pt-[8rem] max-lg:w-full  overflow-hidden">
          <MainContent />
          <SectionMission />
          <OurPlatform />
          <Testimonial />
          <Benefit />
        </div>
      </Section>
      <OpenPosition />
    </div>
  );
}
