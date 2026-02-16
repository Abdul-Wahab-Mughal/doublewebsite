import { ChevronRightIcon } from "lucide-react";
import React from "react";

export default function Button({ text, className }) {
  return (
    <a
      className={`${className} w-fit border px-5 py-2.5 flex items-center gap-5 uppercase rounded`}
    >
      {text} <ChevronRightIcon />
    </a>
  );
}
