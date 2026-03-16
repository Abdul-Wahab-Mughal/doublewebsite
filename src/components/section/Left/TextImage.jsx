import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import EyeView from "../../ui/EyeView";
import Button from "../../ui/Button";

gsap.registerPlugin(ScrollTrigger);

export default function TextImage({
  subtitle,
  title,
  message,
  btn,
  imageleft,
  image1,
  image2,
}) {
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
        className={`${
          imageleft ? "flex-row-reverse" : "flex-row"
        } flex max-lg:flex-wrap p-5 lg:p-16 gap-5 overflow-hidden max_width`}
      >
        <div
          className={`w-full lg:w-[40%] text-black text-start flex flex-col gap-3 ${
            imageleft ? "" : "lg:pr-20 lg:pt-7"
          }`}
        >
          <div className="text-4xl font-script">{subtitle}</div>
          <div className=" text-4xl">{title}</div>
          <p className="lg:text-sm pt-5">{message}</p>

          <Button to="/y/collection">{btn}</Button>
        </div>
        <div
          className={`w-full lg:w-[60%] flex gap-5 ${
            imageleft ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div
            className={`cardbox lg:flex-4 flex items-end w-full ${
              imageleft ? "lg:pr-20 lg:pt-7" : ""
            }`}
          >
            <div className=" relative group rounded-bl-[50px] rounded-tr-[50px] overflow-hidden w-full">
              <img
                src={image1}
                alt=""
                className="w-full aspect-square group-hover:scale-105 duration-500"
              />
              <EyeView />
            </div>
          </div>
          <div className="cardbox lg:flex-5 w-full relative group overflow-hidden">
            <img
              src={image2}
              alt=""
              className="w-full aspect-square group-hover:scale-105 duration-500"
            />
            <EyeView />
          </div>
        </div>
      </section>
    </>
  );
}
