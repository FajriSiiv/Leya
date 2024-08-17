import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const urlLink = [
  "https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export function CarouselPhoto() {
  return (
    <Carousel className="w-full h-full" opts={{ loop: true }}>
      <CarouselContent>
        {urlLink.map((_, index) => (
          <CarouselItem key={index} className="p-0">
            <img
              src={_}
              alt={`${index}`}
              className="w-full h-full object-cover aspect-[2/3] object-center"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
