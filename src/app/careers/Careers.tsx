import Section from "@/components/Section";
import React from "react";
import img3 from "@/assets/projek-3.jpg";
import Image from "next/image";

export default function CareersComponent() {
  return (
    <Section>
      <div className="flex flex-col max-w-[1024px] w-full mx-auto py-32">
        <h1 className="text-sm font-medium">Work at Zeya</h1>
        <h2 className="text-3xl font-medium py-7">
          Zeya is redefining the legal industry with technology.
          <br />
          Join us on the journey.
        </h2>
        <button className="bg-primary py-2 px-3 w-fit text-white rounded-md hover:bg-primary/80 transition-all">
          Open positions
        </button>

        <div className="w-full h-[500px] rounded-lg overflow-hidden my-20">
          <Image
            alt="image careers"
            src={img3}
            width={1024}
            height={500}
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        <div className="flex flex-col gap-y-20">
          <div className="flex max-lg:flex-col gap-7">
            <div className="flex-1">
              <h3 className="text-3xl font-medium w-[70%]">
                Building the future of legal work
              </h3>
            </div>
            <div className="flex-1 flex flex-col gap-y-7 text-primary/70">
              <p>
                We are on a mission to transform how lawyers work. We are
                challenging the status quo and having a great time doing it. We
                believe that life is too short to not accomplish something
                special.
              </p>
              <p>
                We launched in 2023. Today, we collaborate with the world's
                leading legal firms and are supported by $35 million in
                financing from Benchmark, Redpoint, and Y Combinator, among
                others. And we are just getting started. We are looking for
                passionate and curious minds to join our mission. If this sounds
                like you, we would want to hear from you.
              </p>
            </div>
          </div>
          <div className="flex max-lg:flex-col gap-7">
            <div className="flex-1">
              <h3 className="text-3xl font-medium w-[70%]">Life at Zeya</h3>
            </div>
            <div className="flex-1 flex flex-col gap-y-7 text-primary/70">
              <p>
                We are a growing team of hackers, designers, and lawyers that
                are passionate about employing cutting-edge technology and
                artificial intelligence to change the way people work and
                exchange information. We are all top performers who love
                perfecting our craft. We are close to our customers and each
                other, committed to continue innovating and winning together.
              </p>
            </div>
          </div>
          <div className="flex max-lg:flex-col gap-7">
            <div className="flex-1">
              <h3 className="text-3xl font-medium w-[70%]">Open positions</h3>
            </div>
            <div className="flex-1 flex flex-col gap-y-7 ">
              <div className="flex flex-col gap-y-3">
                <span className="text-xl text-primary/40">Engineering</span>
                <li>Senior Full-stack Engineer</li>
                <li>Visual Product Designer</li>
                <li>Head of Security</li>
              </div>
              <div className="flex flex-col gap-y-3">
                <span className="text-xl text-primary/40">Other</span>
                <li>Open Application</li>
              </div>
              <div className="flex flex-col gap-y-3">
                <span className="text-xl text-primary/40">Operations</span>
                <li>Head of Legal</li>
                <li>Operation Associate</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
