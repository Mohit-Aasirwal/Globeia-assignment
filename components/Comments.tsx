import React from "react";

interface Comment {
  userId: string;
  body: string;
  name: string;
  email: string;
  id: string;
}

interface CommentsProps {
  comments: Comment[];
  onDeleteComment: (userId: string) => void;
  currentUserId: string;
}

const Comments: React.FC<CommentsProps> = ({
  comments,
  onDeleteComment,
  currentUserId,
}) => {
  console.log(comments);
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Comments</h2>
      {comments.map((comment, index) => {
        return (
          <div
            key={`${comment.userId}-${index}`}
            className="p-2 border rounded-md"
          >
            <div className="flex flex-row space-x-2 justify-between items-center">
              <h1 className="text-base font-light">{comment.name}</h1>
              <p className="italic text-xs">{comment.email}</p>
            </div>
            <div className="flex justify-between items-center">
              <p>{comment.body}</p>
              {comment.id === 101 && (
                <button
                  onClick={() => onDeleteComment(comment.id.toString())}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Comments;
