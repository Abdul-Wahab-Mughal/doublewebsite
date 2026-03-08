import React from "react";

export default function Button({ children, className, animatColor }) {
  return (
    <button
      className={` border p-2 w-fit rounded-full mt-10 group hover:border-transparent duration-2500 relative overflow-hidden cursor-pointer ${className}`}
    >
      <div className=" border py-2 px-5 rounded-full text-sm group-hover:border-transparent duration-2500">
        <span
          className={` group-hover:text-black duration-1500 z-10 relative ${
            animatColor && "group-hover:text-white!"
          }`}
        >
          {children}
        </span>
        {/* animate */}
        <span className=" absolute left-0 translate-y-20 group-hover:-translate-y-20 duration-750">
          <svg
            className={`icon text-[#d3e3bb] ${animatColor}`}
            aria-hidden="true"
            focusable="false"
            width="500"
            height="400"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            overflow="auto"
            shapeRendering="auto"
            fill="transparent"
          >
            <defs>
              <path
                id="wavepath-"
                d="M 0 2000 0 500 Q 117.5 439 235 500 t 235 0 235 0 235 0 235 0 235 0 235 0  v1000 z"
              ></path>
              <path id="motionpath-" d="M -470 0 0 0"></path>
            </defs>

            <g>
              <use href="#wavepath-" y="-465" fill="currentColor">
                <animateMotion dur="1s" repeatCount="indefinite">
                  <mpath href="#motionpath-"></mpath>
                </animateMotion>
              </use>
            </g>
          </svg>
        </span>
      </div>
    </button>
  );
}
