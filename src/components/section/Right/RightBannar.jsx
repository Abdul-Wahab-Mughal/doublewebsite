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

      gsap.to("#image_ban", {
        backgroundPosition: "50% 0%",
        ease: "none",
        scrollTrigger: {
          trigger: TextRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 4, // 👈 smooth + slow
          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const text_title = "Desgin Dream Spaces";

  return (
    <>
      <section ref={TextRef} className="bg-white text-black flex flex-col">
        <div className=" p-4 md:p-16 flex flex-col justify-center gap-5">
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
        <div
          id="image_ban"
          className="h-96"
          style={{
            backgroundImage:
              "url('https://mart-harmonia.myshopify.com/cdn/shop/files/hero_image.jpg?v=1753944100&width=3600')",
            backgroundSize: "100% 150%",
            backgroundPosition: "50% 100%",
          }}
        >
        </div>
      </section>
    </>
  );
}
