import React from "react";

const Buttons = ({ onClick, title, className, type, icon }) => {
  let buttonClassName = "";

  if (type === "primary") {
    buttonClassName = `text-white bg-primary ${className}`;
  } else if (type === "secondary") {
    buttonClassName = ` border border-black ${className}`;
  } 

  const Icon = icon;
  return (
    <button
      onClick={onClick}
      className={` py-2 px-5 shadow-sm ${
       `flex justify-center items-center space-x-2`
      } ${buttonClassName}`}
    >
      <label>{title}</label>
    </button>
  );
};

export { Buttons };