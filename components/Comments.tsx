import React from "react";

const Comments = ({ comments, onDeleteComment, currentUserId }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Comments</h2>
      {comments.map((comment) => (
        <div key={comment.userId} className="p-2 border rounded-md">
          <div className="flex justify-between items-center">
            <p>{comment.body}</p>
            {comment.userId === currentUserId && (
              <button
                onClick={() => onDeleteComment(comment.userId)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Comments;