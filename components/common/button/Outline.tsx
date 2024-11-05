import React from "react";

const Outline = ({ children }: React.PropsWithChildren) => {
  return (
    <button className="flex w-full items-center justify-center space-x-2 text-nowrap rounded-sm border border-blue-500 bg-transparent px-4 py-2 font-semibold text-[#0a65cc] transition-all duration-200 ease-in-out hover:border-blue-600">
      {children}
    </button>
  );
};

export default Outline;
