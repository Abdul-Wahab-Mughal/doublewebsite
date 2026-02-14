import React, { useState } from "react";
import reactLogo from "../assets/react.svg";

export default function Header() {
  const [left, setLeft] = useState(true);
  const [Right, setRight] = useState(false);

  const handlerHeaderLeft = () => {};

  return (
    <>
      {/* <div className="pt-26" /> */}
      <header class="w-full fixed top-0 right-0">
        <div class="relative w-full flex items-center justify-between rounded-t-2xl overflow-hidden">
          {/* Right */}
          <button
            class="h-full w-[35%] py-6 pr-16 relative flex flex-col items-center gap-2 cursor-pointer rounded-b-2xl"
            title="Right click to enter Studio One"
            onClick={handlerHeaderLeft()}
          >
            <img src={reactLogo} alt="" />
            Left Home
          </button>

          {/* Left */}
          <button
            class="h-full w-[25%] py-6 pl-16 relative flex flex-col justify-end items-center gap-2 cursor-pointer rounded-t-2xl"
            title="Right click to enter Studio One"
            href="/h"
          >
            <img src={reactLogo} alt="" />
            Right Home
          </button>
        </div>
      </header>
    </>
  );
}
