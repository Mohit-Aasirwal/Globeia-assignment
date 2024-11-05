"use client";
import BlogCard from "@/components/BlogCard";
import Loader from "@/components/common/loader/Loader";
import Search from "@/components/Search";
import Sidebar from "@/components/Sidebar";
import React from "react";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};
const fetchAlbumData = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );
  const data = await res.json();
  return data;
};
const Landing = () => {
  const [posts, setPosts] = React.useState([]);
  const [albumData, setAlbumData] = React.useState([]);
  React.useEffect(() => {
    fetchAlbumData().then((data) => setAlbumData(data));
    fetchPosts().then((data) => setPosts(data));
  }, []);
  return (
    <section className="h-full w-full">
      <div className="mx-auto grid w-[90%] gap-5 lg:grid-cols-3 xl:w-[80%]">
        <div className="order-1 lg:flex flex-col space-y-4 hidden">
          <Search blogs={posts} />
          <Sidebar albumData={albumData} />
        </div>
        <div className="lg:hidden">{/* <Search /> */}</div>
        <div className="flex flex-col space-y-8 md:order-2 lg:col-span-2">
          {posts ? (
            posts.slice(0, 10).map((value: any) => {
              return (
                <BlogCard
                  key={value.id}
                  id={value.id}
                  title={value.title}
                  description={value.body}
                />
              );
            })
          ) : (
            <Loader />
          )}
          {/* </div> */}
          <div className="lg:hidden order-2">
            <Sidebar albumData={albumData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
