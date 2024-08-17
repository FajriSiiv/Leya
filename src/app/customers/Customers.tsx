import React from "react";
import img1 from "@/assets/people-1.jpg";
import img2 from "@/assets/people-2.jpg";
import img3 from "@/assets/people-3.jpg";
import Image from "next/image";

export default function Customers() {
  return (
    <div className="max-w-[1024px] w-full mx-auto py-32">
      <div className="flex flex-col">
        <h1 className="text-4xl font-medium">Customers</h1>

        <div className="grid grid-cols-3 mt-10 gap-5 max-md:grid-cols-2 max-md:grid-rows-2 max-sm:grid-cols-1 max-sm:grid-rows-3">
          <div className="flex flex-col gap-y-5">
            <div className="h-[400px] w-full overflow-hidden rounded-xl relative">
              <Image
                alt="people 1"
                src={img1}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="h-[200px] w-full bg-primary/5 p-5 rounded-md flex flex-col gap-y-2 justify-between">
              <p className="font-semibold text-sm">
                Zeya has proven to be the right tool for our objectives and
                needs, both in terms of efficiency and security.
              </p>
              <p>Cathy Ramos</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="h-[400px] w-full overflow-hidden rounded-xl relative">
              <Image
                alt="people 2"
                src={img2}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="h-[200px] w-full bg-primary/5 p-5 rounded-md flex flex-col gap-y-2 justify-between">
              <p className="font-semibold text-sm">
                The AI tool develops at breathtaking pace and the roadmap for
                the future is full of new features.
              </p>
              <p>Samuli Simojoki</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="h-[400px] w-full overflow-hidden rounded-xl relative">
              <Image
                alt="people 3"
                src={img3}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="h-[200px] w-full bg-primary/5 p-5 rounded-md flex flex-col gap-y-2 justify-between">
              <p className="font-semibold text-sm">
                The generative AI platform that Zeya is developing is both
                thrilling and innovative, and the best we have seen so far.
              </p>
              <p>Jan Dernestam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
