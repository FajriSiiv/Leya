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

  return (
    <div
      className="w-full relative min-h-[500px] my-24 overflow-hidden "
      ref={ref}
    >
      <motion.div
        className="absolute flex gap-x-2"
        style={{ transform: translateX }}
      >
        <div className="min-h-[500px] bg-primary/5 w-[400px] rounded-md">1</div>
        <div className="min-h-[500px] bg-primary/10 w-[400px] rounded-md">
          1
        </div>
        <div className="min-h-[500px] bg-primary/15 w-[400px] rounded-md">
          1
        </div>
        <div className="min-h-[500px] bg-primary/25 w-[400px] rounded-md">
          1
        </div>
        <div className="min-h-[500px] bg-primary/35 w-[400px] rounded-md">
          1
        </div>
        <div className="min-h-[500px] bg-primary/45 w-[400px] rounded-md">
          1
        </div>
        <div className="min-h-[500px] bg-primary/55 w-[400px] rounded-md">
          1
        </div>
        <div className="min-h-[500px] bg-primary/65 w-[400px] rounded-md">
          1
        </div>
      </motion.div>
    </div>
  );
};

export default OpenPosition;
