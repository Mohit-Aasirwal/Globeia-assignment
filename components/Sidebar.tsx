import React from "react";
import RecentPost from "./RecentPost";
import Image from "next/image";
import Loader from "./common/loader/Loader";

interface AlbumItem {
  thumbnailUrl: string;
}

interface SidebarProps {
  albumData?: AlbumItem[]; // albumData can be undefined
}

const Sidebar: React.FC<SidebarProps> = ({ albumData }) => {
  return (
    <section className="flex flex-col space-y-5">
      <div className="rounded-md border border-gray-200 p-5">
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-semibold">Recent Post</h2>
          {[1, 2, 3, 4, 5].map((value, id) => (
            <RecentPost key={id} />
          ))}
        </div>
      </div>
      <div className="rounded-md border border-gray-200 p-5">
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-semibold">Gallery</h2>
          <div className="grid grid-cols-3 gap-4">
            {albumData ? (
              albumData
                .slice(0, 6)
                .map((value, id) => (
                  <Image
                    key={id}
                    src={value.thumbnailUrl}
                    alt="Gallery image"
                    width={1000}
                    height={1000}
                    className="h-24 w-24 rounded-md object-cover"
                  />
                ))
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
      <div className="rounded-md border border-gray-200 p-5">
        <div className="flex flex-col space-y-2">
          <h2 className="text-xl font-semibold">Popular Tag</h2>
          <div className="flex flex-row flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((value, id) => (
              <span
                key={id}
                className="rounded-md bg-gray-200 px-2 py-1 text-sm"
              >
                Programming
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
