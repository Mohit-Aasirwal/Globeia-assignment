"use client";
import BlogContent from "@/components/BlogContent";
import Comments from "@/components/Comments";
import BreadCrumb from "@/components/common/header/BreadCrumb";
import NewComment from "@/components/NewComment";
import RecentBlogs from "@/components/RecentBlogs";
import Sidebar from "@/components/Sidebar";
import { generateUniqueId } from "@/constants/generateUniqueId";
import React, { useEffect, useState } from "react";

const fetchPostData = async ({ id }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const fetchPostComments = async ({ id }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const data = await res.json();
  return data;
};

const SingleBlog = () => {
  const [postData, setPostData] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const existingIds = new Set();

  // Set a fixed current user ID for simplicity
  const currentUserId = 1;

  useEffect(() => {
    fetchPostData({ id: 1 }).then((data) => setPostData(data));
    fetchPostComments({ id: 1 }).then((data) => setComments(data));
  }, []);

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    const newCommentData = {
      title: "New Comment",
      body: newComment,
      userId: currentUserId, // Set currentUserId as the userId
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(newCommentData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const savedComment = await response.json();
      setComments([savedComment, ...comments]);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter((comment) => comment.userId !== id));
  };

  return (
    <section className="flex flex-col space-y-5 pb-4">
      <BreadCrumb>mohit</BreadCrumb>
      <div className="mx-auto flex w-[90%] flex-col space-y-5 lg:w-[80%]">
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
          <div className="flex w-full flex-col items-start justify-start space-y-10 lg:col-span-2">
            <BlogContent
              title={postData?.title}
              body={postData?.body}
              author={"Mohit Aasirwal"}
              comments={comments}
            />
            <NewComment
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onAddComment={handleAddComment}
            />
            <Comments
              comments={comments}
              onDeleteComment={handleDeleteComment}
              currentUserId={currentUserId}
            />
          </div>
          <div className="flex w-full flex-col space-y-4">
            <div className="hidden lg:flex">{/* <Search /> */}</div>
            <Sidebar />
          </div>
        </div>
        <hr />
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-xl font-bold">Related Blog</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((value, id) => (
              <RecentBlogs key={id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
