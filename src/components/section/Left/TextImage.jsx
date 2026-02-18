import React, { useEffect, useRef } from "react";
import card from "../../../assets/four_card_1.webp";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

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
        className="bg-white flex max-lg:flex-wrap p-5 lg:p-16 gap-5 overflow-hidden"
      >
        <div className="w-full lg:w-[40%] text-black text-start flex flex-col gap-3 lg:pr-20 lg:pt-7">
          <div className="text-4xl font-script">
            Made by Deco
          </div>
          <div className="font-bold text-3xl">In-House</div>
          <p className="lg:text-xs pt-5">
            Crafted in our own workshops using reclaimed teak and durable metal.
            Honest materials, timeless style — built to last.
          </p>

          <button className=" border p-2 w-fit rounded-full mt-10 group hover:bg-green-200 hover:border-transparent">
            <div className=" border py-2 px-5 rounded-full text-sm group-hover:border-transparent">
              View More
            </div>
          </button>
        </div>
        <div className="w-full lg:w-[60%] flex gap-5">
          <div className="cardbox lg:flex-4 flex items-end w-full">
            <img
              src={card}
              alt=""
              className="w-full rounded-bl-[50px] rounded-tr-[50px] aspect-square"
            />
          </div>
          <div className="cardbox lg:flex-5 w-full">
            <img src={card} alt="" className="w-full aspect-square" />
          </div>
        </div>
      </section>
    </>
  );
}
