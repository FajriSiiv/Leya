import { Check, LockOpen, Unlink } from "lucide-react";
import React from "react";

const Benefit = () => {
  const contentBenefit = [
    {
      title: "Unlocked Knowledge",
      description:
        "Surface previous work, policies, and templates from the depths of your organization.",
      icon: <LockOpen size={15} />,
    },
    {
      title: "Increased Productivity",
      description:
        "Dig deeper into your research. Proof-read in a moment. Consider more factors.",
      icon: <Unlink size={15} />,
    },
    {
      title: "Improved Outcomes",
      description:
        "Breeze through tedious tasks and spend your time on creating value for your clients.",
      icon: <Check size={15} />,
    },
  ];

  const CardBenefit = ({ title, description, icon }: any) => {
    return (
      <div className="flex flex-col gap-y-2 p-3 backdrop-blur-[25px] backdrop-saturate-200 bg-white/60 text-sm rounded-lg">
        <div className="bg-white w-fit p-2 rounded-md">{icon}</div>
        <p className="font-medium">{title}</p>
        <p className="text-primary/75">{description}</p>
      </div>
    );
  };

  return (
    <div className="py-20 px-10 mb-10 bg-gradient-to-tr to-primary/5 from-orange-200/80 from-30% rounded-lg max-md:px-5">
      <p className="text-sm mb-5">Benefits</p>
      <h2 className="text-4xl font-semibold max-md:text-xl">
        Enhancing legal operations.
      </h2>
      <div className="grid grid-cols-3 mt-5 gap-5 max-md:grid-rows-3 max-md:grid-cols-1">
        {contentBenefit.map((_, index) => (
          <CardBenefit
            title={_.title}
            description={_.description}
            icon={_.icon}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefit;
