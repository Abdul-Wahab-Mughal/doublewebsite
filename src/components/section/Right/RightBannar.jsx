import React, { useEffect, useRef } from "react";
import bannar from "../../../assets/right/right bannar.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search } from "lucide-react";

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
        <div className=" p-4 md:p-16 flex flex-col justify-center gap-5 relative">
          <div className="text-3xl md:text-5xl font-semibold pt-10 uppercase">
            {text_title.split("").map((word, i) => (
              <span key={i} className="text-item px-1">
                {word}
              </span>
            ))}
          </div>
          <p className="max-w-xl mx-auto">
            Design timeless spaces with sophisticated, beautifully made
            furniture that enhances every corner of your home.
          </p>
          <div className=" absolute -bottom-8 left-0 w-full ">
            <div className="max-w-250 m-auto flex px-5">
              <div className="p-5 bg-gray-200">category</div>
              <div className="w-full h-full flex items-center bg-white border border-gray-200 p-2.5">
                <input
                  type="text"
                  placeholder="Search 150+ global furniture brands"
                  name="serach"
                  className="w-full bg-white px-3 py-2.5 border-0"
                />
                <div className="py-2.5 border-0 px-5 bg-(--btn)">
                  <Search color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="image_ban"
          className="h-96"
          style={{
            backgroundImage:
              "url('https://mart-harmonia.myshopify.com/cdn/shop/files/hero_image.jpg?v=1753944100&width=3600')",
            backgroundSize: "cover",
            backgroundPosition: "50% 100%",
          }}
        ></div>
      </section>
    </>
  );
}
