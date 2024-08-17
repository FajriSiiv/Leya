"use client";

import { CarouselPhoto } from "@/components/CarouselPhoto";
import { CarouselTestimonial } from "@/components/CarouselTestimonial";
import { CarouselApi } from "@/components/ui/carousel";
import React, { useCallback, useState } from "react";

const CardTesti = () => {
  return (
    <div className="bg-primary/5 h-[200px] rounded-lg p-6 max-lg:h-fit">
      <div className="flex flex-col justify-between h-full">
        <p className="text-[15px] text-sm">
          The AI tool develops at breathtaking pace and the roadmap for the
          future is full of new features.
        </p>
        <div className="flex gap-3 pt-5">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden max-lg:w-[35px] max-lg:h-[35px]">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-sm font-semibold max-lg:text-xs">
              Samuli Simojoki
            </p>
            <p className="text-primary/60 text-xs max-lg:text-[10px]">
              Chair of the Board , Borenius
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const urlLink = [
  "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Testimonial = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slides = [1, 2, 3];

  return (
    <div className="py-24 w-full">
      <p className="text-sm pb-2">Our latform</p>
      <div className="flex gap-5 h-[400px] max-md:h-fit max-md:flex-col">
        <div className="flex-1 bg-primary/5 rounded-lg relative overflow-hidden min-w-[301px] max-lg:min-w-[250px] max-md:max-h-[600px]">
          <CarouselPhoto />
        </div>
        <div className="flex-[2] bg-primary/5 rounded-lg flex flex-col relative justify-center items-start h-full px-8 overflow-hidden">
          <CarouselTestimonial />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5 max-md:grid-cols-1 max-md:grid-rows-3">
        <CardTesti />
        <CardTesti />
        <CardTesti />
      </div>
    </div>
  );
};

export default Testimonial;
