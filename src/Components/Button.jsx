import React from "react";

const Button = ({
  text = "Get Quote",
  className = "px-4 py-2 rounded-md",
  spanClass = "",
}) => {
  return (
    <button className={className}>
      <span className={spanClass}>{text}</span>
    </button>
  );
};

export default Button;
