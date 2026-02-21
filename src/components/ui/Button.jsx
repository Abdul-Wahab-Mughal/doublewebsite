import { ChevronRightIcon } from "lucide-react";
import React from "react";

export default function Button({ children, className }) {
  return (
    <a
      className={`${className} text-xs font-semibold w-fit h-fit border px-5 py-2.5 flex items-center gap-5 uppercase rounded cursor-pointer hover:text-white hover:bg-[#333847] hover:border-[#333847] duration-250`}
    >
      {children} <ChevronRightIcon size={15} className="font-semibold"/>
    </a>
  );
}
