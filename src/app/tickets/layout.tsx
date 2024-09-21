import React from "react";

const TicketsLayout = ({ children }) => {
  return (
    <>
      <section>{/* navigation component goes here  */}</section>
      <section>{children}</section>
    </>
  );
};

export default TicketsLayout;
