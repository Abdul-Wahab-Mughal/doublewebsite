import React, { useState } from "react";
import reactLogo from "../assets/react.svg";

export default function Header({ left, setLeft }) {
  const handlerHeaderLeft = () => {
    setLeft(true);
  };
  const handlerHeaderRight = () => {
    setLeft(false);
  };

  return (
    <>
      <header className="w-full absolute top-0 left-0 z-50">
        <div className="relative w-full flex items-center justify-between overflow-hidden p-2.5">
          {/* Right */}
          <button
            className="h-full w-36 md:w-64 lg:w-96 p-5 flex flex-wrap justify-center gap-2.5 items-center cursor-pointer rounded-2xl bg-gray-700 hover:bg-gray-800"
            title="Left click"
            onClick={() => handlerHeaderLeft()}
          >
            <img src={reactLogo} alt="" />
            <div className=" uppercase font-bold">Left Home</div>
          </button>

          {/* Left */}
          <button
            className="h-full w-36 md:w-64 lg::w-96 p-5 flex flex-wrap justify-center gap-2.5 items-center cursor-pointer rounded-2xl bg-gray-700 hover:bg-gray-800"
            title="Right click"
            onClick={() => handlerHeaderRight()}
          >
            <img src={reactLogo} alt="" />
            <div className=" uppercase font-bold">Right Home</div>
          </button>
        </div>
      </header>
    </>
  );
}
