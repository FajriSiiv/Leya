import React from "react";
import Section from "../Section";
import ButtonDemon from "../ButtonDemon";
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <Section>
      <div className="max-w-[1024px] mx-auto">
        <div className="h-[400px] bg-[#151515] text-white/80 flex flex-col items-center  justify-evenly rounded-xl">
          <div className="bg-white/10 px-2 py-1 rounded-full text-sm">
            Get started
          </div>
          <div className="flex flex-col gap-8 text-center">
            <p className="text-4xl font-semibold">
              Let's make your legal work flow
            </p>
            <p className="text-xs text-white/45">Book a demo to get started</p>
          </div>

          <ButtonDemon color={false} />
        </div>
      </div>
      <footer className="flex justify-between mt-28 pb-20 max-md:flex-col gap-10">
        <div className="text-2xl font-medium">Leya</div>
        <ul className="flex gap-6 text-sm font-medium items-center max-md:flex-col max-md:items-start ">
          <li>Legal</li>
          <li>Blog</li>
          <li>Comunity</li>
          <li>Career</li>
          <li>Security</li>
        </ul>
        <div className="text-2xl font-medium flex gap-x-4">
          <Linkedin />
          <Instagram />
          <Github />
        </div>
      </footer>

      <div className="text-center mb-10">
        <span className="text-sm text-primary/70">
          2023 Create &copy; by Muhammad Fajri. All rights reserved.
        </span>
      </div>
    </Section>
  );
};

export default Footer;
