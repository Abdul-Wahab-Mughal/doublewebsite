import { Eye } from "lucide-react";
import React, { useState } from "react";
import ProductBox from "./productBox";

export default function EyeView({ className, bgblack }) {
  const [eyeBox, setEyeBox] = useState(false);
  return (
    <>
      <div
        className={`${
          !bgblack && "bg-black/30"
        } absolute top-0 right-0 z-10 h-full w-full group-hover:block! hidden cursor-pointer`}
      >
        <div
          className={`${className} absolute bottom-2.5 right-2.5 bg-white p-2.5 rounded-full hover:bg-amber-100`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setEyeBox(true);
          }}
        >
          <Eye size={20} color="black" />
        </div>
      </div>
      {eyeBox && <ProductBox onClick={() => setEyeBox(false)} />}
    </>
  );
}
