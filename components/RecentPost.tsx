import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

const RecentPost = () => {
  return (
    <section className="grid grid-cols-3 gap-4 rounded-md border-b-2 py-4">
      <div className="h-full w-full rounded-md">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLamBZ3O9wE4QhMbgZvyj7ztu42bxSlffdaA&s"
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="col-span-2">
        <div className="flex flex-row items-center text-gray-400 justify-between">
          <p className="text-sm">Nov 12, 2021</p>
          <GoDotFill />

          <p className="text-sm">25 Comments</p>
        </div>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </section>
  );
};

export default RecentPost;
