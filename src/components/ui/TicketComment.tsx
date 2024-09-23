"use client";

import { useRef } from "react";
import { Button } from "@nextui-org/react";

const comments = [
  {
    id: "1",
    author: "John Doe",
    date: "2027-01-01",
    content: "This is a great ticket!",
  },
  {
    id: "2",
    author: "Jane Smith",
    date: "2027-02-01",
    content: "I agree with John. This ticket should be closed.",
  },
  {
    id: "3",
    author: "Mike Larry",
    date: "2027-03-01",
    content: "Thank you for your feedback. I appreciate your contribution.",
  },
];
const TicketComment = () => {
  const commentInputRef = useRef(null);
  return (
    <div className="flex flex-col w-full">
      <div>
        <h2 className="font-semibold py-2 ">Comments</h2>
      </div>
      <form
        className="w-full"
        onSubmit={(event) => {
          event.preventDefault();
          alert("TODO: Add comment");
        }}
      >
        <textarea
          className="w-full bg-black/60 p-3"
          placeholder="Add a comment..."
          rows={3}
          ref={commentInputRef}
        />
        <Button color="primary" className="w-full mt-1">
          Button
        </Button>
      </form>
      <section className="my-2">
        <p>We have {comments.length} comments.</p>
        {comments.map((comment) => (
          <article
            key={comment.id}
            className="flex flex-col bg-[#161718] rounded-sm shadow-md mb-2 p-2"
          >
            <div>
              <span className="text-sm text-white mr-3">{comment.author}</span>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p>{comment.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default TicketComment;
