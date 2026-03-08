import React from "react";

export default function FooterBannar() {
  return (
    <section className="p-5 md:p-10 max_width">
      <div className=" rounded-bl-[100px] md:rounded-bl-[150px] rounded-tr-[100px] md:rounded-tr-[150px] overflow-hidden relative">
        <div className=" absolute inset-0 ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className=" object-cover w-full h-full"
          >
            <source
              src="https://gain-demo-furniture.myshopify.com/cdn/shop/videos/c/vp/9848813b23eb462c8381e5cd0a5f852a/9848813b23eb462c8381e5cd0a5f852a.HD-1080p-3.3Mbps-49208504.mp4?v=0"
              type="video/mp4"
            />
          </video>
        </div>
        <div className=" absolute inset-0 bg-black/30"></div>
        <div className=" relative z-10 space-y-5 flex flex-col p-10 md:p-16">
          <div className="font-script text-3xl md:text-5xl">
            Featured Collection
          </div>
          <div className="text-3xl md:text-4xl"> Where Style Meets Comfort</div>
          <p>
            Discover handcrafted pieces that transform your living space into
            sanctuary.
          </p>

          <button className=" m-auto p-2.5 border rounded-full cursor-pointer group">
            <div className=" w-40 h-40 border rounded-full flex justify-center items-center overflow-hidden relative">
              <span className="group-hover:text-black duration-2500">Explore</span>
              <span className=" absolute translate-y-full group-hover:translate-y-0 duration-2500 -z-10">
                <svg
                  className="icon text-[#d3e3bb]"
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
        </div>
      </div>
    </section>
  );
}
