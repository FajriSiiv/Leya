import Section from "@/components/Section";
import { Facebook, Github, Linkedin, ShieldCheck } from "lucide-react";
import img1 from "@/assets/projek-2.jpg";
import Image from "next/image";
export default function Page() {
  return (
    <Section>
      <div className="flex max-w-[1024px] w-full mx-auto py-32 gap-10 max-lg:flex-col">
        <div className=" flex flex-col justify-between flex-1 max-lg:h-fit gap-8">
          <div className="flex flex-col gap-y-5">
            <div className="px-2.5 font-medium py-2 bg-primary/5 w-fit rounded-full text-sm">
              Security
            </div>
            <h1 className="text-5xl font-medium w-[80%] max-md:text-3xl">
              Your data is in safe hands.
            </h1>
          </div>
          <p className="text-primary/60">
            Zeya is built with end-to-end multi-layered security and certified
            to all relevant practice standards and frameworks.
          </p>
        </div>
        <div className="overflow-hidden w-full py-32 flex items-center justify-center bg-purple-500/70 rounded-2xl flex-1 ">
          <ShieldCheck size={300} strokeWidth={1.75} color="#fff" />
        </div>
      </div>
      <div className="bg-[#0d0d0d] text-white h-[500px] w-full mb-32 rounded-2xl bg-square max-lg:h-full max-lg:p-10">
        <div className="w-full h-full flex flex-col pt-14 items-center gap-y-5 ">
          <span className="text-4xl font-medium">Certificates & Standards</span>
          <p className="text-white/65 text-sm">
            Zeya is certified and compliant with
          </p>
          <div className="grid grid-cols-3 max-w-[800px] w-full mx-auto pt-8 gap-3 max-md:grid-rows-3 max-md:grid-cols-1 ">
            <div className=" h-[200px] bg-[#ffffff0d] rounded-lg flex-col flex gap-y-4 justify-center items-center backdrop-blur-[30px] saturate-150 border border-[#ffffff29] hover:-translate-y-4 transition-all">
              <Facebook size={50} strokeWidth={1.3} />
              <span className="text-xl font-semibold">Facebook</span>
            </div>
            <div className=" h-[200px] bg-[#ffffff0d] rounded-lg flex-col flex gap-y-4 justify-center items-center backdrop-blur-[30px] saturate-150 border border-[#ffffff29] hover:-translate-y-4 transition-all">
              <Github size={50} strokeWidth={1.3} />
              <span className="text-xl font-semibold">Github</span>
            </div>
            <div className=" h-[200px] bg-[#ffffff0d] rounded-lg flex-col flex gap-y-4 justify-center items-center backdrop-blur-[30px] saturate-150 border border-[#ffffff29] hover:-translate-y-4 transition-all">
              <Linkedin size={50} strokeWidth={1.3} />
              <span className="text-xl font-semibold">Linkedin</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-[1024px] w-full mx-auto py-32 gap-10 max-lg:flex-col">
        <div className="overflow-hidden w-full py-32 flex items-center justify-center  rounded-2xl flex-1 relative min-h-[500px]">
          <Image src={img1} alt="img1" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col justify-between flex-1 max-lg:h-fit gap-8">
          <div className="flex flex-col gap-y-5">
            <div className="px-2.5 font-medium py-2 bg-primary/5 w-fit rounded-full text-sm">
              Trust
            </div>
            <h1 className="text-5xl font-medium w-[80%] max-md:text-3xl">
              Don't take our word for it.
            </h1>
          </div>
          <p className="text-primary/60">
            We continuously monitor our systems and security measures, ensuring
            we meet rigorous standards to protect your privacy at all times.
          </p>
        </div>
      </div>
    </Section>
  );
}
