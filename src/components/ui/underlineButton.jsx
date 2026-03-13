import React from "react";
import { Link } from "react-router-dom";

export default function UnderlineButton({ children, onClick, to }) {
  return (
    <Link to={to} onClick={onClick}>
      <span className=" text-sm cursor-pointer relative group border-b hover:border-transparent border-orange-500"S>
        {children}
        <div className=" absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-orange-500 duration-500"></div>
      </span>
    </Link>
  );
}
