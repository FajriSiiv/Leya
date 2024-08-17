"use client";
import { useScroll, motion } from "framer-motion";
import React, { useState, useEffect, useRef, useMemo } from "react";

const SectionMission = () => {
  const [lettersToChange, setLettersToChange] = useState(0);
  const refElement = useRef(null);

  const textZeyaMission =
    "Zeya is an AI-powered workspace designed for law firms and legal professionals. Automate your repetitive tasks and access public sources and your own data in one single platform.";

  const textSplit = useMemo(
    () => textZeyaMission.split(" "),
    [textZeyaMission]
  );

  const { scrollYProgress } = useScroll({
    target: refElement,
    offset: ["start center", "center center"],
  });

  useEffect(() => {
    const handleScrollChange = (latestScrollYProgress: any) => {
      const newLettersToChange = Math.floor(
        latestScrollYProgress * textSplit.length
      );
      setLettersToChange(newLettersToChange);
    };

    const unsubscribe = scrollYProgress.onChange(handleScrollChange);

    return () => {
      unsubscribe();
    };
  }, [scrollYProgress, textSplit.length]);

  return (
    <div className="py-20 w-full" ref={refElement}>
      <div className="mb-2 text-sm">Zeya</div>
      <div className="flex flex-wrap">
        {textSplit.map((text, index) => (
          <motion.span
            key={index}
            className={`transition-colors duration-300 mr-2 font-semibold text-2xl`}
            style={{
              color: index < lettersToChange ? "#000000" : "#a2aabc",
            }}
          >
            {text}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default SectionMission;
