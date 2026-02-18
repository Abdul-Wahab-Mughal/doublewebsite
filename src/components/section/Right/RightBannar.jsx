import React, { useEffect, useRef } from "react";
import bannar from "../../../assets/right/right bannar.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function RightBannar() {
  const TextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = TextRef.current.querySelectorAll(".text-item");

      gsap.from(items, {
        y: 50, // start slightly below
        opacity: 0, // hidden
        duration: 0.5, // per item
        stagger: 0.1, // delay between items
        ease: "power2.out",
        scrollTrigger: {
          trigger: TextRef.current,
          start: "top 80%", // when section enters viewport
          once: true, // run only once
          // markers: true, // remove in production
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const text_title = "Desgin Dream Spaces";

  return (
    <>
      <section
        ref={TextRef}
        className="bg-white text-black h-screen flex flex-col"
      >
        <div className=" h-1/2 p-4 md:p-16 flex flex-col justify-center gap-5">
          <div className="text-5xl font-semibold pt-10 uppercase">
            {text_title.split("").map((word, i) => (
              <span key={i} className="text-item px-1">
                {word}
              </span>
            ))}
          </div>
          <p className="w-xl mx-auto">
            Design timeless spaces with sophisticated, beautifully made
            furniture that enhances every corner of your home.
          </p>
        </div>
        <div className=" h-1/2">
          <img src={bannar} alt="" className="h-full w-full object-cover" />
        </div>
      </section>
    </>
  );
}
