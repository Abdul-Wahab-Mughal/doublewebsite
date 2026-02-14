import React, { useState } from "react";
import reactLogo from "../assets/react.svg";
import Silder from "../components/section/Silder";
import FourCard from "../components/section/FourCard";
import TextImage from "../components/section/TextImage";
import RightBannar from "../components/section/RightBannar";

export default function Home() {
  const [left, setLeft] = useState(true);
  const [right, setRight] = useState(false);

  const handlerHeaderLeft = () => {
    setRight(false);
    setLeft(true);
  };
  const handlerHeaderRight = () => {
    setRight(true);
    setLeft(false);
  };
  return (
    <>
      {/* Header */}
      <header className="w-full absolute top-0 left-0 z-50">
        <div className="relative w-full flex items-center justify-between overflow-hidden">
          {/* Right */}
          <button
            className="h-full w-[25%] p-3 relative flex flex-col items-center cursor-pointer rounded-br-4xl bg-black/50"
            title="Right click to enter Studio One"
            onClick={() => handlerHeaderLeft()}
          >
            <img src={reactLogo} alt="" />
            Left Home
          </button>

          {/* Left */}
          <button
            className="h-full w-[25%] p-3 relative flex flex-col items-center cursor-pointer rounded-bl-4xl bg-black/50"
            title="Right click to enter Studio One"
            onClick={() => handlerHeaderRight()}
          >
            <img src={reactLogo} alt="" />
            Right Home
          </button>
        </div>
      </header>
      {/* Left */}
      {left && (
        <div id="lefthome" className=" h-screen w-full">
          <Silder />
          <FourCard />
          <TextImage />
        </div>
      )}
      {/* Right */}
      {right && (
        <div id="righthome" className="bg-gray-500 w-screen h-screen">
          <RightBannar />
        </div>
      )}
    </>
  );
}
