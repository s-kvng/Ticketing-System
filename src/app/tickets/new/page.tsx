"use client";

import { useRef } from "react";
import { Button } from "@nextui-org/react";

const CreateTicket = () => {
  const ticketTitleRef = useRef(null);
  const ticketDescriptionRef = useRef(null);
  return (
    <div className="max-w-[400px] md:max-w-[50%] mx-auto bg-[#06080c] p-7 my-10 shadow-md">
      <h2 className=" font-bold my-3 text-lg">Create a new ticket</h2>
      <form
        className=""
        onSubmit={(event) => {
          event.preventDefault();
          alert("TODO: Add a new ticket");
        }}
      >
        <input
          ref={ticketTitleRef}
          className="w-full bg-black/60 p-3 rounded-sm border border-gray-500 mb-5"
          placeholder="Add a title"
          type="text"
          id="title"
          name="title"
        />
        <textarea
          className="w-full bg-black/60 p-3 rounded-sm border border-gray-500"
          placeholder="Add a comment..."
          rows={3}
          ref={ticketDescriptionRef}
        />
        <Button type="submit" color="primary" className="w-full mt-1">
          Create Ticket Now
        </Button>
      </form>
    </div>
  );
};

export default CreateTicket;
