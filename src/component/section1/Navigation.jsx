import React from "react";

const Navigation = () => {
  return (
    <div className="w-full flex items-center justify-between gap-3 px-5 py-5 sm:px-8 sm:py-6 lg:px-15 lg:py-8">
      <h4 className="text-white bg-black text-[0.65em] sm:text-[0.75em] uppercase font-bold px-2 py-1.5 rounded-full tracking-[0.15em] sm:tracking-[0.25em] whitespace-nowrap">
        Target Audience
      </h4>
      <button className="text-black text-[0.7em] sm:text-sm uppercase px-2 py-1.5 tracking-widest sm:tracking-[0.25em] text-right whitespace-nowrap">Digital banking platform</button>
    </div>
  );
};

export default Navigation;
