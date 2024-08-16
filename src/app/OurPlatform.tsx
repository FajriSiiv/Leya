"use client";
import React, { useRef, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Backpack, Hand, NotebookTabs } from "lucide-react";
import { motion } from "framer-motion";

const AccordionPlatform = ({ setPlatComp }: any) => {
  const [activeItem, setActiveItem] = useState<any>("item-1");

  const handleChange = (value: any) => {
    setActiveItem(value);
    setPlatComp(value);
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      value={activeItem}
      onValueChange={handleChange}
    >
      <AccordionItem
        value="item-1"
        className={`transition-opacity duration-300 relative border-none  ${
          activeItem === "item-1" ? "" : "opacity-50"
        }`}
      >
        <div className="absolute bottom-0 w-full h-[0.8px] bg-black/20"></div>
        <div
          className={`absolute bottom-0  h-[0.8px] bg-black z-10 ${
            activeItem === "item-1" ? "animate-border-full" : ""
          }`}
        ></div>
        <AccordionTrigger className="flex gap-2 justify-start items-center">
          <div className="p-1.5 bg-primary/5 rounded-lg">
            <Backpack size={17} />
          </div>
          <p>Aggregate information</p>
        </AccordionTrigger>
        <AccordionContent>
          Extract structured data from hundreds of documents at the same time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-2"
        className={`transition-opacity duration-300 border-none relative ${
          activeItem === "item-2" ? "" : "opacity-50"
        }`}
      >
        <div className="absolute bottom-0 w-full h-[0.8px] bg-black/20"></div>
        <div
          className={`absolute bottom-0  h-[0.8px] bg-black z-10 ${
            activeItem === "item-2" ? "animate-border-full" : ""
          }`}
        ></div>
        <AccordionTrigger className="flex gap-2 justify-start items-center">
          <div className="p-1.5 bg-primary/5 rounded-lg">
            <Hand size={17} />
          </div>
          <p>Source within reach</p>
        </AccordionTrigger>
        <AccordionContent>
          Get instant answers to your queries, always with highlighted
          citations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-3"
        className={`transition-opacity duration-300 relative border-none ${
          activeItem === "item-3" ? "" : "opacity-50"
        }`}
      >
        <div className="absolute bottom-0 w-full h-[0.8px] bg-black/20"></div>
        <div
          className={`absolute bottom-0  h-[0.8px] bg-black z-10 ${
            activeItem === "item-3" ? "animate-border-full" : ""
          }`}
        ></div>
        <AccordionTrigger className="flex gap-2 justify-start items-center">
          <div className="p-1.5 bg-primary/5 rounded-lg">
            <NotebookTabs size={17} />
          </div>
          <p>Endless accessibility</p>
        </AccordionTrigger>
        <AccordionContent>
          Access public sources and documents from your DMS in one interface.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const OurPlatform = () => {
  const [platComp, setPlatComp] = useState("item-1");

  return (
    <div className="grid grid-cols-2 pb-10 gap-10">
      <div className="flex flex-col">
        <p className="text-sm pb-2">Our latform</p>
        <p className="text-5xl font-semibold leading-[0.85] mt-2">
          Your new legal workspace.
        </p>
        <div className=" mt-6">
          <AccordionPlatform setPlatComp={setPlatComp} />
        </div>
      </div>
      <div className="bg-slate-950/5 rounded-lg p-5">
        <div className="flex flex-col gap-y-5">
          {platComp === "item-1" ? (
            <>
              <motion.h2
                className="text-xl font-semibold"
                initial={{ opacity: "0%" }}
                animate={{ opacity: "100%" }}
                transition={{
                  type: "spring",
                  duration: 0.9,
                  stiffness: 400,
                  damping: 40,
                }}
              >
                Aggregate Information
              </motion.h2>
              <motion.p
                className="text-sm"
                initial={{ opacity: "0%" }}
                animate={{ opacity: "100%" }}
                transition={{
                  type: "spring",
                  duration: 0.9,
                  stiffness: 400,
                  damping: 40,
                }}
              >
                Effortlessly extract and consolidate structured data from a vast
                array of documents simultaneously. Our advanced system is
                designed to handle hundreds of documents at once, allowing you
                to streamline data collection and organization. This capability
                ensures that you can quickly gather and make sense of critical
                information from multiple sources without the need for manual
                intervention.
              </motion.p>
            </>
          ) : null}
          {platComp === "item-2" ? (
            <>
              <h2 className="text-xl font-semibold">Source Within Reach</h2>
              <p className="text-sm">
                Access immediate and precise answers to your queries with ease,
                all while benefiting from highlighted citations that pinpoint
                the source of the information. Our platform ensures that you can
                swiftly retrieve relevant data and insights, eliminating the
                need for exhaustive searches. By providing real-time answers
                with clearly marked references, we enhance your ability to
                verify and trust the information you receive.
              </p>
            </>
          ) : null}
          {platComp === "item-3" ? (
            <>
              <h2 className="text-xl font-semibold">Endless Accessibility</h2>
              <p className="text-sm">
                Seamlessly access a comprehensive range of public sources and
                documents directly from your Document Management System (DMS)
                through a unified, intuitive interface. Our platform offers
                limitless accessibility by integrating multiple data sources
                into a single point of access, eliminating the need for
                switching between different systems or interfaces.
              </p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OurPlatform;
