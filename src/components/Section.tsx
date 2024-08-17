import React from "react";

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full px-20 max-lg:px-8 mx-auto max-sm:px-3">
      {children}
    </div>
  );
};

export default Section;
