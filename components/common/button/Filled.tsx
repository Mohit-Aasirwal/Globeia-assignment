import React from "react";

const Filled = ({ children }: React.PropsWithChildren) => {
  return (
    <button className="rounded-sm h-full w-full bg-[#0a65cc] px-4 py-2 font-semibold text-white transition-all duration-200 ease-in-out hover:bg-blue-600 text-nowrap">
      {children}
    </button>
  );
};

export default Filled;
