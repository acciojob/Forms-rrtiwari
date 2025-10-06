import React from "react";

const Card = ({ children }) => (
  <div
    style={{
      border: "1px solid #ddd",
      padding: 20,
      borderRadius: 8,
      width: 320,
      margin: "30px auto",
    }}
  >
    {children}
  </div>
);

export default Card;
