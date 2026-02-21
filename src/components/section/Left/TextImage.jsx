import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import EyeView from "../../ui/EyeView";

gsap.registerPlugin(ScrollTrigger);

export default function TextImage() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cardbox", {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,

        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top center",
          once: true,
          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={ref}
        className=" flex max-lg:flex-wrap p-5 lg:p-16 gap-5 overflow-hidden"
      >
        <div className="w-full lg:w-[40%] text-black text-start flex flex-col gap-3 lg:pr-20 lg:pt-7">
          <div className="text-4xl font-script">Made by Deco</div>
          <div className="font-bold text-3xl">In-House</div>
          <p className="lg:text-xs pt-5">
            Crafted in our own workshops using reclaimed teak and durable metal.
            Honest materials, timeless style — built to last.
          </p>

          <button className=" border p-2 w-fit rounded-full mt-10 group hover:border-transparent duration-2500 relative overflow-hidden cursor-pointer">
            <div className=" border py-2 px-5 rounded-full text-sm group-hover:border-transparent duration-2500">
              <span className=" group-hover:text-black duration-2500 z-10 relative">
                View More
              </span>
              <span className=" absolute left-0 translate-y-20 group-hover:-translate-y-20 duration-2500">
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
        <div className="w-full lg:w-[60%] flex gap-5">
          <div className="cardbox lg:flex-4 flex items-end w-full">
            <div className=" relative group rounded-bl-[50px] rounded-tr-[50px] overflow-hidden">
              <img
                src="https://gain-demo-furniture.myshopify.com/cdn/shop/files/MA_940346_Einstein_dining_table-ML_749533_Bloom_bench-ML_749515_Bloom_side_chair-ML_461107_Baba_sf1_DTP_2ded81e4-9341-430e-a41f-4cdb4416da03_456x.webp?v=1749535587"
                alt=""
                className="w-full aspect-square"
              />
              <EyeView />
            </div>
          </div>
          <div className="cardbox lg:flex-5 w-full relative group">
            <img
              src="https://gain-demo-furniture.myshopify.com/cdn/shop/files/image_4_ti-428126-cabinet-beam-large-sfeer-1_c5be6687-6830-4858-88a0-ed6c91676b0b_620x.jpg?v=1749448842"
              alt=""
              className="w-full aspect-square"
            />
            <EyeView />
          </div>
        </div>
      </section>
    </>
  );
}
