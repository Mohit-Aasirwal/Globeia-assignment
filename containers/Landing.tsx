"use client";
import BlogCard from "@/components/BlogCard";
import Loader from "@/components/common/loader/Loader";
import Search from "@/components/Search";
import Sidebar from "@/components/Sidebar";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";

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

const POSTS_PER_PAGE = 10; // Number of posts per page

const Landing = () => {
  const [posts, setPosts] = React.useState([]);
  const [albumData, setAlbumData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    fetchAlbumData().then((data) => setAlbumData(data));
    fetchPosts().then((data) => setPosts(data));
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  // Get the current posts based on the current page
  const currentPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Handle page change
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return; // Prevent invalid pages
    setCurrentPage(page);
  };

  return (
    <section className="h-full w-full flex flex-col space-y-4 ">
      <div className="mx-auto grid w-[90%] gap-5 lg:grid-cols-3 xl:w-[80%]">
        <div className="order-1 lg:flex flex-col space-y-4 hidden">
          <Search blogs={posts} />
          <Sidebar albumData={albumData} />
        </div>
        <div className="lg:hidden">{/* <Search /> */}</div>
        <div className="flex flex-col space-y-8 md:order-2 lg:col-span-2">
          {currentPosts.length > 0 ? (
            currentPosts.map((value) => (
              <BlogCard
                key={value.id}
                id={value.id}
                title={value.title}
                description={value.body}
              />
            ))
          ) : (
            <Loader />
          )}
          <div className="lg:hidden order-2">
            <Sidebar albumData={albumData} />
          </div>
        </div>
      </div>
      <nav
        className="flex py-10 xl:w-full flex-wrap gap-4 justify-center "
        aria-label="Pagination"
      >
        <button
          className="rounded-full bg-gray-300 p-3 disabled:opacity-50"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous Page"
        >
          <BiArrowBack />
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`rounded-full px-4 py-2 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300"
            }`}
            onClick={() => goToPage(index + 1)}
            aria-label={`Page ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="rounded-full bg-gray-300 p-3 disabled:opacity-50"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next Page"
        >
          <IoArrowForward />
        </button>
      </nav>
    </section>
  );
};

export default Landing;
