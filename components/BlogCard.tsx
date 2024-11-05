"use client";
import Image from "next/image";
import React from "react";
import { BsPerson } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
const BlogCard = ({
  title,
  description,
  id,
}: // key,
{
  title: string;
  description: string;
  id: number;
  // key: number;
}) => {
  const router = useRouter();
  return (
    <div
      className="border-gray- 300 grid lg:grid-cols-2 gap-5 rounded-md border p-4 transition duration-200 ease-in-out
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
      <div className="flex flex-col items-start justify-between">
        <div className="flex flex-row items-center justify-start space-x-4">
          <p className="flex flex-row items-center justify-center space-x-2 text-xs">
            <CiCalendar className="text-sm text-blue-600" />
            <span>
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </p>
          <p className="flex flex-row items-center justify-center space-x-2 text-xs">
            <BsPerson className="text-sm text-blue-600" />
            <span>Mohit Aasirwal</span>
          </p>
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">{description.slice(0, 100) + "..."}</p>
        <button
          onClick={() => {
            router.replace(`/${id}`);
          }}
          className="flex items-center justify-start space-x-2 text-blue-600"
        >
          <span>Read more</span> <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
