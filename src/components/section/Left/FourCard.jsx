import React, { useEffect, useRef } from "react";
import card from "../../../assets/four_card_1.webp";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import EyeView from "../../ui/EyeView";

gsap.registerPlugin(ScrollTrigger);

export default function FourCard() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fourcard", {
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
        className=" flex max-lg:flex-wrap gap-y-5 p-5 lg:p-16 overflow-hidden"
      >
        <div className="fourcard w-1/2 h-full md:h-fit md:mt-auto lg:flex-1 flex items-end pr-2.5 md:p-2.5">
          <div className="text-start flex flex-col gap-3 w-full h-full">
            <div className="lg:pb-[150%] relative rounded-[100px] md:rounded-full overflow-hidden group">
              <img
                src={card}
                alt=""
                className="max-lg:aspect-square lg:absolute h-full w-full"
              />
              <EyeView className=" bottom-5 right-5" />
            </div>
            <div className="text-black font-bold text-xl md:text-2xl lg:text-base leading-none">
              Bistro Side Table
            </div>
            <p className="text-black text-xs">
              Solid teak top with dark inlay. Food-safe finish. Metal base.
            </p>
          </div>
        </div>
        <div className="fourcard w-1/2 lg:flex-3 pl-2.5 md:p-2.5">
          <div className="text-start flex flex-col gap-3">
            <div className=" relative rounded-bl-[50px] md:rounded-bl-[125px] rounded-tr-[50px] md:rounded-tr-[125px] overflow-hidden group">
              <img
                src="https://gain-demo-furniture.myshopify.com/cdn/shop/files/image_5_mp-204323-dresser-metropole-large-detail-2_60ebfdd6-299f-458a-8ce9-9ddd5c35786c.jpg?v=1749205903&width=695"
                alt=""
                className="w-full aspect-square"
              />
              <EyeView />
            </div>
            <div className="text-black font-bold text-xl md:text-2xl lg:text-base leading-none">
              Metropole Coffee Table
            </div>
            <p className="text-black text-xs">
              Reclaimed teak and black metal. Boomerang-style legs.
            </p>
          </div>
        </div>
        <div className="fourcard w-1/2 lg:flex-2 flex items-center pr-2.5 md:p-2.5">
          <div className="text-start flex flex-col gap-3">
            <div className=" relative rounded-bl-[50px] md:rounded-bl-[125px] rounded-tr-[50px] md:rounded-tr-[125px] overflow-hidden lg:rounded-none group">
              <img
                src="https://gain-demo-furniture.myshopify.com/cdn/shop/files/bookcase-cosmo-3d-3or-fix-4_1a0c3c68-420f-40e4-b769-817c65fbbf78.jpg?v=1748866654&width=405"
                alt=""
                className=" lg:aspect-square w-full aspect-square"
              />
              <EyeView />
            </div>
            <div className="text-black font-bold text-xl md:text-2xl lg:text-base leading-none">
              Atlas Round Table
            </div>
            <p className="text-black text-xs">
              Round teak top. Natural wood grain. Modern metal base.
            </p>
          </div>
        </div>
        <div className="fourcard w-1/2 lg:flex-1 pl-2.5 md:p-2.5">
          <div className="text-start flex flex-col gap-3">
            <div className="lg:pb-[150%] relative rounded-[100px] md:rounded-full group overflow-hidden">
              <img
                src="https://gain-demo-furniture.myshopify.com/cdn/shop/files/image_5_bt-438125-cabinet-beam-small-detail.jpg?v=1747307880&width=260"
                alt=""
                className="lg:absolute h-full w-full  max-lg:aspect-square"
              />
              <EyeView className=" bottom-5 right-5" />
            </div>
            <div className="text-black font-bold text-xl md:text-2xl lg:text-base leading-none">
              Cosmo Table Set
            </div>
            <p className="text-black text-xs">
              Set of two. Reclaimed teak tops. Slim black frames.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
