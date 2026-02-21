import { Eye } from "lucide-react";
import React from "react";

export default function EyeView({ className }) {
  return (
    <div className=" absolute top-0 right-0 z-10 h-full w-full bg-black/30 group-hover:block! hidden cursor-pointer">
      <div className={`${className} absolute bottom-2.5 right-2.5 bg-white p-1 rounded-full`}>
        <Eye size={15} color="black" />
      </div>
    </div>
  );
}
