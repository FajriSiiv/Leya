"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const TestimonialText = [
  {
    namePeople: "Andy Ramos Partner",
    nameBrand: "Pérez-Llorca",
    textTestimonial:
      "Leya has proven to be the right tool for our objectives and needs,both in terms of efficiency and security.",
    id: 1,
  },
  {
    namePeople: "Andy Ramos Partner 1 ",
    nameBrand: "Pérez-Llorca",
    textTestimonial:
      "Leya has proven to be the right tool for our objectives and needs,both in terms of efficiency and security.",
    id: 2,
  },
  {
    namePeople: "Andy Ramos Partner 2",
    nameBrand: "Pérez-Llorca",
    textTestimonial:
      "Leya has proven to be the right tool for our objectives and needs,both in terms of efficiency and security.",
    id: 3,
  },
];

export function CarouselTestimonial() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      className="w-full"
      plugins={[plugin.current]}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {TestimonialText.map((_, index) => (
          <CarouselItem key={index}>
            <>
              <div className="flex flex-col gap-y-10 ">
                <h3 className="text-3xl">{_.textTestimonial}</h3>
              </div>
              <div className="flex flex-col pt-5">
                <span className="text-lg font-semibold ">{_.namePeople}</span>
                <span className="text-primary/70">{_.nameBrand}</span>
              </div>
            </>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
