import React, { ChangeEvent } from "react";
import Filled from "./common/button/Filled";

interface NewCommentProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onAddComment: () => void;
}

const NewComment: React.FC<NewCommentProps> = ({
  value,
  onChange,
  onAddComment,
}) => {
  return (
    <section className="flex flex-col w-full space-y-4">
      <h2 className="text-xl font-bold">Write a comment</h2>
      <textarea
        value={value}
        onChange={onChange}
        className="p-2 rounded-md border border-blue-600 w-full"
        placeholder="Share your thoughts on this post?"
      ></textarea>
      <div role="button" onClick={onAddComment} className="w-fit">
        <Filled>Post a comment</Filled>
      </div>
    </section>
  );
};

export default NewComment;
