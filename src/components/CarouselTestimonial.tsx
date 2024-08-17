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
      className="w-full max-md:py-10"
      plugins={[plugin.current]}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {TestimonialText.map((_, index) => (
          <CarouselItem key={_.id}>
            <>
              <div className="flex flex-col gap-y-10 ">
                <h3 className="text-3xl max-md:text-xl">{_.textTestimonial}</h3>
              </div>
              <div className="flex flex-col pt-5">
                <span className="text-lg font-semibold max-md:text-base">
                  {_.namePeople}
                </span>
                <span className="text-primary/70 max-md:text-sm">
                  {_.nameBrand}
                </span>
              </div>
            </>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
