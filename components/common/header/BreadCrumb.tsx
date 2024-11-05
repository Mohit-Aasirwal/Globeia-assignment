import Link from "next/link";
import React from "react";

const BreadCrumb = ({ children }: React.PropsWithChildren) => {
  return (
    <section className="flex h-fit w-full bg-[#f1f2f4]">
      <div className="mx-auto flex space-x-4 w-[90%] items-center justify-between py-2 xl:w-[80%]">
        <h1 className="md:text-base text-xs text-nowrap font-bold first-letter:uppercase">
          {children}
        </h1>
        <div className="breadcrumbs flex flex-row text-xs md:text-sm">
          <ul className="flex flex-row space-x-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            /
            <li>
              <Link href="/">Documents</Link>
            </li>
            / <li>Add Document</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
