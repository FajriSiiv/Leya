import React from "react";

const ButtonDemon = ({ color = true }: { color: boolean }) => {
  return (
    <div className="mt-5 w-fit mx-auto">
      <button
        className={`${
          color === true
            ? "text-white bg-black/90 hover:bg-primary/70"
            : "text-primary bg-white hover:bg-white/70"
        } rounded-sm py-2 px-4  transition-all duration-500 flex gap-x-2 items-center text-sm`}
      >
        <span className="font-medium">Book a demo</span>
        <div className="flex gap-x-1 items-center justify-center">
          <p
            className={`text-[11px] border-[1px]  flex items-center justify-center p-[1px] rounded-sm w-[20px] h-[20px] ${
              color === true
                ? "border-white/50 text-white/40"
                : "border-primary/50 text-primary/40"
            }`}
          >
            ⌘
          </p>
          <span
            className={`text-[11px] border-[1px]  flex items-center justify-center p-[1px] rounded-sm w-[20px] h-[20px] ${
              color === true
                ? "border-white/50 text-white/40"
                : "border-primary/50 text-primary/40"
            }`}
          >
            K
          </span>
        </div>
      </button>
    </div>
  );
};

export default ButtonDemon;
