import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCommentDots } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";

const RecentBlogs = () => {
  return (
    <div
      className="rounded-md border border-gray-300 p-4 space-y-4 transition duration-200 ease-in-out
 hover:shadow-lg"
    >
      <div className="rounded-md">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLamBZ3O9wE4QhMbgZvyj7ztu42bxSlffdaA&s"
          alt=""
          width={1000}
          height={1000}
          className="h-60 w-full rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-between space-y-4">
        <div className="flex flex-row items-center justify-start space-x-4">
          <p className="flex flex-row items-center justify-center space-x-2 text-xs">
            <IoCalendarClearOutline className="text-sm text-blue-600" />
            <span>Nov 12, 2021</span>
          </p>
          <p className="flex flex-row items-center justify-center space-x-2 text-xs">
            <FaCommentDots className="text-sm text-blue-600" />
            <span>25 Comments</span>
          </p>
        </div>
        <h2 className="text-lg font-semibold leading-snug">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eius
          voluptate sed quisquam pariatur. Dolorum quasi eius repudiandae
          deserunt nemo.
        </p>
        <Link
          href="/"
          className="flex items-center justify-start text-blue-600"
        >
          <span>Read more</span>{" "}
          <span className="icon-[uil--arrow-right] xs:text-4xl"></span>
        </Link>
      </div>
    </div>
  );
};

export default RecentBlogs;
