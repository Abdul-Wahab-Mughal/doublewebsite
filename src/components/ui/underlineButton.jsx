import React from "react";

export default function UnderlineButton({ children, onClick }) {
  return (
    <span
      className=" text-sm cursor-pointer relative group border-b hover:border-transparent border-orange-500"
      onClick={onClick}
    >
      {children}
      <div className=" absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-orange-500 duration-500"></div>
    </span>
  );
}
