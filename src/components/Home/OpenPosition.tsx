"use client";
import {
  animate,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import img1 from "@/assets/projek-1.jpg";
import img2 from "@/assets/projek-2.jpg";
import img3 from "@/assets/projek-3.jpg";
import img4 from "@/assets/projek-4.jpg";
import img5 from "@/assets/projek-5.jpg";
import img6 from "@/assets/projek-6.jpg";

import Image from "next/image";

const OpenPosition = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start -500px", "-500px end"],
  });

  const translateX = useTransform(
    scrollYProgress,
    [-2, 1],
    ["translateX(10%)", "translateX(-40%)"]
  );

  const imgUrlScroll = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  return (
    <div
      className="w-full relative min-h-[500px] my-32 overflow-hidden"
      ref={ref}
    >
      <motion.div
        className="absolute flex gap-x-2 "
        style={{ transform: translateX }}
      >
        {imgUrlScroll.map((_, index) => (
          <div className="max-h-[500px] w-[400px] rounded-md " key={index}>
            <Image
              src={_}
              alt={`${index}`}
              className="w-full h-full object-cover"
              width={500}
              height={400}
              loading="lazy"
              quality={75}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default OpenPosition;
