import { Eye } from "lucide-react";
import React from "react";

export default function EyeView() {
  return (
    <div className=" absolute top-0 right-0 z-10 w-full h-full bg-black/30 group-hover:flex! justify-center items-center hidden cursor-pointer">
      <Eye size={30} />
    </div>
  );
}
